import FS from 'fs';
import _ from 'lodash';
import CsvReadableStream from 'csv-reader';
import {
  ApplicationRequired,
  CategoryOfWork,
  EquipmentQualSkills,
  ExistingDigitalAudienceRequired,
  Funding,
  GeographicalFocus,
  PlatformInput,
  PlatformType,
  TypeOfWork,
  AmountPerInput,
  ProfitModel,
} from '../src/GraphQL/types';

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

const parseTypeOfWork = (input: string): TypeOfWork[] =>
  input
    .split(',')
    .map((item) => _.upperCase(_.snakeCase(item))) as TypeOfWork[];

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

const parseProfitModel = (input: string): ProfitModel => {
  if (!input) return undefined;
  const lCInput = input.toLowerCase();
  if (lCInput.includes('free')) return ProfitModel.Free;
  if (lCInput.includes('percentage')) return ProfitModel.PercentageTakeRate;
  if (lCInput.includes('subscription')) return ProfitModel.SubscriptionFee;
  return ProfitModel.Other;
};

const getData = async (): Promise<Partial<PlatformInput>[]> =>
  new Promise((res) => {
    const inputStream = FS.createReadStream('./platforms.csv', 'utf8');
    let cols: string[];
    let data: Partial<PlatformInput>[] = [];
    let i = 0;

    inputStream
      .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true }))
      .on('data', (newRow: string[]) => {
        // Get the cols
        if (i === 0) {
          cols = newRow as string[];
        } else if (i < 2) {
          let dataAsObject: Record<string, string> = {};
          for (let colNum = 0; colNum < newRow.length; colNum += 1) {
            dataAsObject[cols[colNum]] = newRow[colNum];
          }
          const platform: Partial<PlatformInput> = {
            name: dataAsObject.name,
            website: dataAsObject.website,
            description: dataAsObject.description,
            companyLogo: dataAsObject.companyLogo,
            funding: parseFunding(dataAsObject.funding),
            founded: dataAsObject.founded,
            headquarteredIn: dataAsObject.headquarteredIn,
            geographicalFocus: GeographicalFocus.Worldwide, // TODO
            typeOfWork: parseTypeOfWork(dataAsObject.typeOfWork),
            category: parseCategory(dataAsObject.category),
            requiresDigitalAudience: parseRequiresDigitalAudience(
              dataAsObject.requiresDigitalAudience
            ),
            applicationRequired: parseApplicationRequired(
              dataAsObject.applicationRequired
            ),
            remoteWork: yesNoBool(dataAsObject.remoteWork),
            minimumAge: parseInt(dataAsObject.minimumAge, 10),
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
            platformPricing: dataAsObject.platformPricing,
            affiliateLink: dataAsObject.affiliateLink,
            founderMessage: dataAsObject.founderMessager,
            founderName: dataAsObject.founderName,
            founderTwitter: dataAsObject.founderTwitter,
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

getData().then((data) => {
  console.log(data);
});
