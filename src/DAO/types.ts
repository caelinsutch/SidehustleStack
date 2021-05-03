/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  publishedPlatforms: Array<Maybe<PlatformMvc>>;
  allPlatforms: Array<Maybe<PlatformMvc>>;
  platform?: Maybe<PlatformMvc>;
  allSuggestions: Array<Maybe<SuggestionMvc>>;
  suggestion?: Maybe<SuggestionMvc>;
};

export type QueryPlatformArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QuerySuggestionArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  createPlatform: PlatformMvc;
  updatePlatform: PlatformMvc;
  createSuggestion: SuggestionMvc;
  updateSuggestion: SuggestionMvc;
  addReview?: Maybe<PlatformMvc>;
  vote?: Maybe<PlatformMvc>;
};

export type MutationCreatePlatformArgs = {
  platform?: Maybe<PlatformInput>;
};

export type MutationUpdatePlatformArgs = {
  id: Scalars['ID'];
  data: UpdatePlatformInput;
};

export type MutationCreateSuggestionArgs = {
  suggestion?: Maybe<SuggestionInput>;
};

export type MutationUpdateSuggestionArgs = {
  id: Scalars['ID'];
  data: UpdateSuggestionInput;
};

export type MutationAddReviewArgs = {
  id: Scalars['ID'];
  review?: Maybe<ReviewInput>;
};

export type MutationVoteArgs = {
  id: Scalars['ID'];
  amount: Scalars['Int'];
};

export type SuggestionInput = {
  name: Scalars['String'];
  website: Scalars['String'];
  platformType: PlatformType;
};

export type UpdateSuggestionInput = {
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  platformType?: Maybe<PlatformType>;
};

export type PlatformInput = {
  name: Scalars['String'];
  companyLogo: Scalars['String'];
  website: Scalars['String'];
  platformType: PlatformType;
  tags?: Maybe<Array<Scalars['String']>>;
  founded: Scalars['String'];
  headquarteredIn: Scalars['String'];
  funding: Funding;
  description: Scalars['String'];
  typeOfWork: Array<TypeOfWork>;
  category: CategoryOfWork;
  requiresDigitalAudience: ExistingDigitalAudienceRequired;
  applicationRequired: ApplicationRequired;
  remoteWork: Scalars['Boolean'];
  minimumAge: Scalars['Int'];
  equipmentQualSkills: Array<EquipmentQualSkills>;
  averageEarnings: AmountPerInput;
  timeToFirstDollar: AmountPerInput;
  numPeopleMakingMoney: Scalars['Int'];
  geographicalFocus: Array<GeographicalFocus>;
  founderMessage?: Maybe<Scalars['String']>;
  founderTwitter?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderName: Scalars['String'];
  email: Scalars['String'];
  profitModel: ProfitModel;
  profitModelDescription: Scalars['String'];
  platformPricing: Scalars['String'];
  requirements?: Maybe<Array<Scalars['String']>>;
};

export type PlatformRecommendationInput = {
  name: Scalars['String'];
  companyLogo: Scalars['String'];
  website: Scalars['String'];
};

export type UpdatePlatformInput = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  platformType?: Maybe<PlatformType>;
  companyLogo?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['String']>;
  headquarteredIn?: Maybe<Scalars['String']>;
  funding?: Maybe<Funding>;
  description?: Maybe<Scalars['String']>;
  typeOfWork?: Maybe<Array<TypeOfWork>>;
  category?: Maybe<CategoryOfWork>;
  requiresDigitalAudience?: Maybe<ExistingDigitalAudienceRequired>;
  applicationRequired?: Maybe<ApplicationRequired>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  averageEarnings?: Maybe<AmountPerInputUpdate>;
  timeToFirstDollar?: Maybe<AmountPerInput>;
  numPeopleMakingMoney?: Maybe<Scalars['Int']>;
  geographicalFocus?: Maybe<Array<Maybe<GeographicalFocus>>>;
  profitModel?: Maybe<ProfitModel>;
  profitModelDescription?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  founderTwitter?: Maybe<Scalars['String']>;
  founderName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  reviews?: Maybe<Array<ReviewInput>>;
  platformPricing?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Scalars['String']>>;
};

export type LinkInput = {
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AmountPerInput = {
  amount: Scalars['Int'];
  per: Scalars['String'];
};

export type AmountPerInputUpdate = {
  amount?: Maybe<Scalars['Int']>;
  per?: Maybe<Scalars['String']>;
};

export type ReviewInput = {
  rating: Scalars['Int'];
  description: Scalars['String'];
  author?: Maybe<Scalars['String']>;
};

export type SuggestionMvc = {
  id: Scalars['ID'];
  status: Status;
  platformType: PlatformType;
  name: Scalars['String'];
  website: Scalars['String'];
};

export type PlatformMvc = {
  id: Scalars['ID'];
  status: Status;
  platformType: PlatformType;
  name: Scalars['String'];
  website: Scalars['String'];
  companyLogo?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['String']>;
  headquarteredIn?: Maybe<Scalars['String']>;
  funding?: Maybe<Funding>;
  description?: Maybe<Scalars['String']>;
  typeOfWork?: Maybe<Array<TypeOfWork>>;
  category?: Maybe<CategoryOfWork>;
  requiresDigitalAudience?: Maybe<ExistingDigitalAudienceRequired>;
  applicationRequired?: Maybe<ApplicationRequired>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  averageEarnings?: Maybe<AmountPer>;
  timeToFirstDollar?: Maybe<AmountPer>;
  profitModel?: Maybe<ProfitModel>;
  profitModelDescription?: Maybe<Scalars['String']>;
  geographicalFocus?: Maybe<Array<GeographicalFocus>>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  founderTwitter?: Maybe<Scalars['String']>;
  founderName?: Maybe<Scalars['String']>;
  numPeopleMakingMoney?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  reviews?: Maybe<Array<Review>>;
  score?: Maybe<Scalars['Int']>;
  platformPricing?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Scalars['String']>>;
};

export type AmountPer = {
  amount: Scalars['Int'];
  per: Scalars['String'];
};

export type Review = {
  rating: Scalars['Int'];
  description: Scalars['String'];
  author: Scalars['String'];
  status: Status;
};

export enum ProfitModel {
  PercentageTakeRate = 'PERCENTAGE_TAKE_RATE',
  SubscriptionFee = 'SUBSCRIPTION_FEE',
  Free = 'FREE',
  Other = 'OTHER',
}

export enum GeographicalFocus {
  Worldwide = 'WORLDWIDE',
  NorthAmerica = 'NORTH_AMERICA',
  SouthAmerica = 'SOUTH_AMERICA',
  Europe = 'EUROPE',
  Asia = 'ASIA',
  Africa = 'AFRICA',
  MiddleEast = 'MIDDLE_EAST',
  Australia = 'AUSTRALIA',
}

export enum PlatformType {
  Tool = 'TOOL',
  Platform = 'PLATFORM',
}

export enum Funding {
  Zero = 'ZERO',
  LessFiveMil = 'LESS_FIVE_MIL',
  FiveToTenMil = 'FIVE_TO_TEN_MIL',
  TenPlusMil = 'TEN_PLUS_MIL',
  PublicCompany = 'PUBLIC_COMPANY',
  Bootstrapped = 'BOOTSTRAPPED',
  CurrentlyRaising = 'CURRENTLY_RAISING',
  Undisclosed = 'UNDISCLOSED',
}

export enum EquipmentQualSkills {
  Computer = 'COMPUTER',
  Smartphone = 'SMARTPHONE',
  Car = 'CAR',
  Microphone = 'MICROPHONE',
  BankAccount = 'BANK_ACCOUNT',
  BachelorsDegree = 'BACHELORS_DEGREE',
  NativeEnglish = 'NATIVE_ENGLISH',
  ChildCareExperience = 'CHILD_CARE_EXPERIENCE',
  AnimalCareExperience = 'ANIMAL_CARE_EXPERIENCE',
  BackgroundCheck = 'BACKGROUND_CHECK',
  Other = 'OTHER',
}

export enum CategoryOfWork {
  Gig = 'GIG',
  Creator = 'CREATOR',
  ProjectBased = 'PROJECT_BASED',
  Smb = 'SMB',
  Rentals = 'RENTALS',
  Other = 'OTHER',
}

export enum ExistingDigitalAudienceRequired {
  Yes = 'YES',
  No = 'NO',
  Recommended = 'RECOMMENDED',
}

export enum ApplicationRequired {
  Yes = 'YES',
  YesSelective = 'YES_SELECTIVE',
  No = 'NO',
}

export enum TypeOfWork {
  AdultContentCreator = 'ADULT_CONTENT_CREATOR',
  AudioContentCreator = 'AUDIO_CONTENT_CREATOR',
  Chef = 'CHEF',
  Coach = 'COACH',
  CommunityLeader = 'COMMUNITY_LEADER',
  ContentCreator = 'CONTENT_CREATOR',
  Ecommerce = 'ECOMMERCE',
  EventOrganizer = 'EVENT_ORGANIZER',
  Driver = 'DRIVER',
  FitnessInstructor = 'FITNESS_INSTRUCTOR',
  Gamer = 'GAMER',
  Health = 'HEALTH',
  Livestreamer = 'LIVESTREAMER',
  PersonalShopper = 'PERSONAL_SHOPPER',
  PetCaretaker = 'PET_CARETAKER',
  Podcaster = 'PODCASTER',
  Rentals = 'RENTALS',
  Reseller = 'RESELLER',
  RestaurantWorker = 'RESTAURANT_WORKER',
  Salesperson = 'SALESPERSON',
  TasksAndServices = 'TASKS_AND_SERVICES',
  Teacher = 'TEACHER',
  Tech = 'TECH',
  VideoCourseCreator = 'VIDEO_COURSE_CREATOR',
  Writer = 'WRITER',
}

export enum Status {
  InReview = 'IN_REVIEW',
  Published = 'PUBLISHED',
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
export type SuggestionMvcDbObject = {
  _id: ObjectID;
  status: string;
  platformType: string;
  name: string;
  website: string;
};

export type PlatformMvcDbObject = {
  _id: ObjectID;
  status: string;
  platformType: string;
  name: string;
  website: string;
  companyLogo?: Maybe<string>;
  founded?: Maybe<string>;
  headquarteredIn?: Maybe<string>;
  funding?: Maybe<string>;
  description?: Maybe<string>;
  typeOfWork?: Maybe<Array<string>>;
  category?: Maybe<string>;
  requiresDigitalAudience?: Maybe<string>;
  applicationRequired?: Maybe<string>;
  remoteWork?: Maybe<boolean>;
  minimumAge?: Maybe<number>;
  equipmentQualSkills?: Maybe<Array<string>>;
  averageEarnings?: Maybe<AmountPer>;
  timeToFirstDollar?: Maybe<AmountPer>;
  profitModel?: Maybe<string>;
  profitModelDescription?: Maybe<string>;
  geographicalFocus?: Maybe<Array<string>>;
  affiliateLink?: Maybe<string>;
  founderMessage?: Maybe<string>;
  founderTwitter?: Maybe<string>;
  founderName?: Maybe<string>;
  numPeopleMakingMoney?: Maybe<number>;
  email?: Maybe<string>;
  tags?: Maybe<Array<string>>;
  reviews?: Maybe<Array<ReviewDbObject>>;
  score?: Maybe<number>;
  platformPricing?: Maybe<string>;
  requirements?: Maybe<Array<string>>;
};

export type AmountPerDbObject = {
  amount: number;
  per: string;
};

export type ReviewDbObject = {
  rating: number;
  description: string;
  author: string;
  status: string;
};
