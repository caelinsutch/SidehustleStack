import FS from 'fs';
import CsvReadableStream from 'csv-reader';
import { PlatformInput, PlatformType, Status } from '../src/GraphQL/types';
import { PlatformMvcDbObject } from '../src/DAO';
import {
  parseApplicationRequired,
  parseAverageEarnings,
  parseCategory,
  parseCompanyLogo,
  parseEquipmentQualSkills,
  parseFunding,
  parseGeographicalFocusArray,
  parseProfitModel,
  parseRequiresDigitalAudience,
  parseTypeOfWorkArray,
  yesNoBool,
} from './helpers';

import getDb from './getDb';

const getData = async (): Promise<PlatformInput[]> =>
  new Promise((res) => {
    const inputStream = FS.createReadStream('./tools.csv', 'utf8');
    let cols: string[];
    let data: PlatformInput[] = [];
    let i = 0;

    inputStream
      .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true }))
      .on('data', (newRow: string[]) => {
        // Get the cols
        if (i === 0) {
          cols = newRow as string[];
        } else {
          let dataAsObject: Record<string, string> = {};
          for (let colNum = 0; colNum < newRow.length; colNum += 1) {
            dataAsObject[cols[colNum]] = newRow[colNum];
          }
          const platform: PlatformInput = {
            name: dataAsObject.name,
            website: dataAsObject.website,
            description: dataAsObject.description,
            companyLogo: parseCompanyLogo(dataAsObject.companyLogo), // Gets text between parenthesis
            funding: parseFunding(dataAsObject.funding),
            founded: dataAsObject.founded,
            headquarteredIn: dataAsObject.headquarteredIn,
            geographicalFocus: parseGeographicalFocusArray(
              dataAsObject.geographicalFocus
            ),
            typeOfWork: parseTypeOfWorkArray(dataAsObject.typeOfWork),
            category: parseCategory(dataAsObject.category),
            requiresDigitalAudience: parseRequiresDigitalAudience(
              dataAsObject.requiresDigitalAudience
            ),
            applicationRequired: parseApplicationRequired(
              dataAsObject.applicationRequired
            ),
            remoteWork: yesNoBool(dataAsObject.remoteWork),
            minimumAge: parseInt(dataAsObject.minimumAge, 10) || undefined,
            equipmentQualSkills: parseEquipmentQualSkills(
              dataAsObject.equipmentQualSkills
            ),
            requirements: dataAsObject.requirements.split(','),
            averageEarnings: parseAverageEarnings(dataAsObject.averageEarnings),
            timeToFirstDollar: dataAsObject.timeToFirstDollar
              ? {
                  amount: parseInt(dataAsObject.timeToFirstDollar, 10),
                  per: 'day',
                }
              : undefined,
            numPeopleMakingMoney:
              parseInt(dataAsObject.numPeopleMakingMoney, 10) || undefined,
            profitModel: parseProfitModel(dataAsObject.profitModel),
            platformPricing: dataAsObject.platformPricing || undefined,
            affiliateLink: dataAsObject.affiliateLink || undefined,
            founderMessage: dataAsObject.founderMessager || undefined,
            founderName: dataAsObject.founderName || undefined,
            founderTwitter: dataAsObject.founderTwitter || undefined,
            email: dataAsObject.email,
            profitModelDescription: dataAsObject.profitModelDescription,
            platformType: PlatformType.Tool,
          };
          data.push(platform);
        }
        i += 1;
      })
      .on('end', () => res(data));
  });

const uploadPlatform = async (platform: PlatformInput) => {
  const db = await getDb();
  const platformCollection = db.collection<PlatformMvcDbObject>('Platform');

  const data: Omit<PlatformMvcDbObject, '_id'> = {
    ...platform,
    status: Status.Published,
    reviews: [],
    score: 0,
  };

  await platformCollection.insertOne(data);
};

getData().then((data) => {
  Promise.all(
    data.map(async (platform) => {
      await uploadPlatform(platform);
    })
  ).then(() => {
    console.log('Platforms uploaded!');
  });
});
