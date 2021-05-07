import FS from 'fs';
import CsvReadableStream from 'csv-reader';
import { MongoClient } from 'mongodb';
import {
  AmountPerInput,
  ApplicationRequired,
  CategoryOfWork,
  EquipmentQualSkills,
  ExistingDigitalAudienceRequired,
  Funding,
  GeographicalFocus,
  PlatformInput,
  PlatformType,
  ProfitModel,
  Status,
  TypeOfWork,
} from '../src/GraphQL/types';
import { PlatformMvcDbObject } from '../src/DAO';

const parseFunding = (input: string): Funding => {
  if (input === 'Bootstrapped') return Funding.Bootstrapped;
  if (input === 'Currently Raising') return Funding.CurrentlyRaising;
  if (input === 'Undisclosed') return Funding.Undisclosed;
  if (input === 'Public Company') return Funding.PublicCompany;
  if (input.includes('Acquired')) return Funding.Undisclosed;

  let num = parseFloat(
    input.replace('$', '').replace('M', '').replace('m', '')
  );

  if (num <= 0) return Funding.Zero;
  if (num < 5) return Funding.LessFiveMil;
  if (num < 10) return Funding.FiveToTenMil;
  if (num > 20) return Funding.TenPlusMil;

  return Funding.Undisclosed;
};

const parseTypeOfWork = (cInput: string): TypeOfWork | undefined => {
  const input = cInput.toLowerCase();
  if (input.includes('adult')) return TypeOfWork.AdultContentCreator;
  if (input.includes('audio')) return TypeOfWork.AudioContentCreator;
  if (input.includes('chef')) return TypeOfWork.Chef;
  if (input.includes('coach')) return TypeOfWork.Coach;
  if (input.includes('community')) return TypeOfWork.CommunityLeader;
  if (input.includes('content')) return TypeOfWork.ContentCreator;
  if (input.includes('ecommerce')) return TypeOfWork.Ecommerce;
  if (input.includes('event')) return TypeOfWork.EventOrganizer;
  if (input.includes('driver')) return TypeOfWork.Driver;
  if (input.includes('fitness')) return TypeOfWork.FitnessInstructor;
  if (input.includes('gamer')) return TypeOfWork.Gamer;
  if (input.includes('health')) return TypeOfWork.Health;
  if (input.includes('livestream')) return TypeOfWork.Livestreamer;
  if (input.includes('personal')) return TypeOfWork.PersonalShopper;
  if (input.includes('pet')) return TypeOfWork.PetCaretaker;
  if (input.includes('podcast')) return TypeOfWork.Podcaster;
  if (input.includes('rentals')) return TypeOfWork.Rentals;
  if (input.includes('reseller')) return TypeOfWork.Reseller;
  if (input.includes('restaurant')) return TypeOfWork.RestaurantWorker;
  if (input.includes('sales')) return TypeOfWork.Salesperson;
  if (input.includes('tasks')) return TypeOfWork.TasksAndServices;
  if (input.includes('teacher')) return TypeOfWork.Teacher;
  if (input.includes('tech')) return TypeOfWork.Tech;
  if (input.includes('video')) return TypeOfWork.VideoCourseCreator;
  if (input.includes('writer')) return TypeOfWork.Writer;
  return undefined;
};

const parseTypeOfWorkArray = (input: string): TypeOfWork[] => {
  const rValue: TypeOfWork[] = [];
  input.split(',').forEach((i) => {
    const c = parseTypeOfWork(i);
    if (c) rValue.push(c);
  });
  return rValue;
};
const parseCategory = (input: string): CategoryOfWork => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('gig')) return CategoryOfWork.Gig;
  if (lCInput.includes('creator')) return CategoryOfWork.Creator;
  if (lCInput.includes('rentals')) return CategoryOfWork.Rentals;
  if (lCInput.includes('smb')) return CategoryOfWork.Smb;
  if (lCInput.includes('freelance') || input.includes('project'))
    return CategoryOfWork.ProjectBased;
  return CategoryOfWork.Other;
};

const parseRequiresDigitalAudience = (
  input: string
): ExistingDigitalAudienceRequired => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('yes')) return ExistingDigitalAudienceRequired.Yes;
  if (lCInput.includes('however'))
    return ExistingDigitalAudienceRequired.Recommended;
  return ExistingDigitalAudienceRequired.No;
};

const parseApplicationRequired = (input: string): ApplicationRequired => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('yes')) return ApplicationRequired.Yes;
  return ApplicationRequired.No;
};

const yesNoBool = (input: string): boolean =>
  input.toLowerCase().includes('yes');

const parseEquipmentQualSkill = (input: string): EquipmentQualSkills => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('bachelor')) return EquipmentQualSkills.BachelorsDegree;
  if (lCInput.includes('smartphone')) return EquipmentQualSkills.Smartphone;
  if (lCInput.includes('background'))
    return EquipmentQualSkills.BackgroundCheck;
  if (lCInput.includes('native')) return EquipmentQualSkills.NativeEnglish;
  if (lCInput.includes('car')) return EquipmentQualSkills.Car;
  if (lCInput.includes('microphone')) return EquipmentQualSkills.Microphone;
  if (lCInput.includes('bank')) return EquipmentQualSkills.BankAccount;
  if (lCInput.includes('child')) return EquipmentQualSkills.ChildCareExperience;
  if (lCInput.includes('animal'))
    return EquipmentQualSkills.AnimalCareExperience;
  if (lCInput.includes('other')) return EquipmentQualSkills.Other;
  return EquipmentQualSkills.Computer;
};

const parseEquipmentQualSkills = (input: string): EquipmentQualSkills[] => {
  let result: EquipmentQualSkills[] = [];
  let equipmentStrings = input.split(',');
  equipmentStrings.forEach((eQS) => result.push(parseEquipmentQualSkill(eQS)));
  return result;
};

const parseAverageEarnings = (input: string): AmountPerInput => ({
  amount: parseInt(input, 10) || 0,
  per: 'month',
});

const parseGeographicalFocus = (
  input: string
): GeographicalFocus | undefined => {
  const item = input.toLowerCase();
  if (item.includes('u.s.')) return GeographicalFocus.NorthAmerica;
  if (item.includes('north america')) return GeographicalFocus.NorthAmerica;
  if (item.includes('europe')) return GeographicalFocus.Europe;
  if (item.includes('worldwide')) return GeographicalFocus.Worldwide;
  if (item.includes('australia')) return GeographicalFocus.Australia;
  if (item.includes('asia')) return GeographicalFocus.Asia;
  if (item.includes('africa')) return GeographicalFocus.Africa;
  if (item.includes('middle')) return GeographicalFocus.MiddleEast;
  return undefined;
};

const parseCompanyLogo = (input: string): string | undefined => {
  if (input.match(/\(([^)]+)\)/)) {
    return input.match(/\(([^)]+)\)/)[1];
  }
  return undefined;
};

const parseGeographicalFocusArray = (input: string): GeographicalFocus[] => {
  const inputArray = input.split(',');
  let returnVal: GeographicalFocus[] = [];
  inputArray.forEach((item) => {
    const parsed = parseGeographicalFocus(item);
    if (parsed) returnVal.push(parsed);
  });
  return returnVal;
};

const parseProfitModel = (input: string): ProfitModel => {
  if (!input) return undefined;
  const lCInput = input.toLowerCase();
  if (lCInput.includes('free')) return ProfitModel.Free;
  if (lCInput.includes('percentage')) return ProfitModel.PercentageTakeRate;
  if (lCInput.includes('subscription')) return ProfitModel.SubscriptionFee;
  return ProfitModel.Other;
};

const getData = async (): Promise<PlatformInput[]> =>
  new Promise((res) => {
    const inputStream = FS.createReadStream('./platforms.csv', 'utf8');
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
            platformType: PlatformType.Platform,
          };
          data.push(platform);
        }
        i += 1;
      })
      .on('end', () => res(data));
  });

const uploadPlatform = async (platform: PlatformInput) => {
  let dbName = 'sidehustlestack-development';

  const client = await MongoClient.connect(
    `mongodb+srv://admin:adminpassword@sidehustlemain.qrbvi.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      maxIdleTimeMS: 1200000,
    }
  );

  const db = client.db(dbName);
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
