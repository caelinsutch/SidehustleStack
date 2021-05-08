import {
  AmountPerInput,
  ApplicationRequired,
  CategoryOfWork,
  EquipmentQualSkills,
  ExistingDigitalAudienceRequired,
  Funding,
  GeographicalFocus,
  ProfitModel,
  TypeOfWork,
} from '../src/GraphQL/types';

export const parseFunding = (input: string): Funding => {
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

export const parseTypeOfWork = (cInput: string): TypeOfWork | undefined => {
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

export const parseTypeOfWorkArray = (input: string): TypeOfWork[] => {
  const rValue: TypeOfWork[] = [];
  input.split(',').forEach((i) => {
    const c = parseTypeOfWork(i);
    if (c) rValue.push(c);
  });
  return rValue;
};

export const parseCategory = (input: string): CategoryOfWork => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('gig')) return CategoryOfWork.Gig;
  if (lCInput.includes('creator')) return CategoryOfWork.Creator;
  if (lCInput.includes('rentals')) return CategoryOfWork.Rentals;
  if (lCInput.includes('smb')) return CategoryOfWork.Smb;
  if (lCInput.includes('freelance') || input.includes('project'))
    return CategoryOfWork.ProjectBased;
  return CategoryOfWork.Other;
};

export const parseRequiresDigitalAudience = (
  input: string
): ExistingDigitalAudienceRequired => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('yes')) return ExistingDigitalAudienceRequired.Yes;
  if (lCInput.includes('however'))
    return ExistingDigitalAudienceRequired.Recommended;
  return ExistingDigitalAudienceRequired.No;
};

export const parseApplicationRequired = (
  input: string
): ApplicationRequired => {
  const lCInput = input.toLowerCase();
  if (lCInput.includes('yes')) return ApplicationRequired.Yes;
  return ApplicationRequired.No;
};

export const yesNoBool = (input: string): boolean =>
  input.toLowerCase().includes('yes');

export const parseEquipmentQualSkill = (input: string): EquipmentQualSkills => {
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

export const parseEquipmentQualSkills = (
  input: string
): EquipmentQualSkills[] => {
  let result: EquipmentQualSkills[] = [];
  let equipmentStrings = input.split(',');
  equipmentStrings.forEach((eQS) => result.push(parseEquipmentQualSkill(eQS)));
  return result;
};

export const parseAverageEarnings = (input: string): AmountPerInput => ({
  amount: parseInt(input, 10) || 0,
  per: 'month',
});

export const parseGeographicalFocus = (
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

export const parseCompanyLogo = (input: string): string | undefined => {
  if (input.match(/\(([^)]+)\)/)) {
    return input.match(/\(([^)]+)\)/)[1];
  }
  return undefined;
};

export const parseGeographicalFocusArray = (
  input: string
): GeographicalFocus[] => {
  const inputArray = input.split(',');
  let returnVal: GeographicalFocus[] = [];
  inputArray.forEach((item) => {
    const parsed = parseGeographicalFocus(item);
    if (parsed) returnVal.push(parsed);
  });
  return returnVal;
};

export const parseProfitModel = (input: string): ProfitModel => {
  if (!input) return undefined;
  const lCInput = input.toLowerCase();
  if (lCInput.includes('free')) return ProfitModel.Free;
  if (lCInput.includes('percentage')) return ProfitModel.PercentageTakeRate;
  if (lCInput.includes('subscription')) return ProfitModel.SubscriptionFee;
  return ProfitModel.Other;
};
