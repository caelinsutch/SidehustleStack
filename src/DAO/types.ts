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
  allPlatforms: Array<PlatformMvc>;
  Platform?: Maybe<PlatformMvc>;
};

export type QueryPlatformArgs = {
  platformId: Scalars['ID'];
};

export type Mutation = {
  createPlatform: PlatformMvc;
  updatePlatform?: Maybe<PlatformMvc>;
};

export type MutationCreatePlatformArgs = {
  platform?: Maybe<PlatformInput>;
};

export type MutationUpdatePlatformArgs = {
  platformId: Scalars['ID'];
  data: UpdatePlatformInput;
};

export type PlatformInput = {
  name: Scalars['String'];
  companyLogo: Scalars['String'];
  website: Scalars['String'];
  founded: Scalars['String'];
  headquarteredIn: Scalars['String'];
  funding?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  category?: Maybe<CategoryInput>;
  requiresDigitalAudience: Scalars['String'];
  applicationRequired: Scalars['String'];
  creativeWork: Scalars['Boolean'];
  remoteWork: Scalars['Boolean'];
  minimumAge: Scalars['Int'];
  equipmentQualSkills: Array<EquipmentQualSkills>;
  otherRequirements: Scalars['String'];
  averageHourlyEarnings: Scalars['Int'];
  averageMonthlyEarnings: Scalars['Int'];
  daysToFirstDollar?: Maybe<Scalars['Int']>;
  monthlyActiveEarners?: Maybe<Scalars['Int']>;
  platformPricing?: Maybe<Scalars['String']>;
  geographicalFocus?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  tags?: Maybe<Array<TagInput>>;
};

export type UpdatePlatformInput = {
  name?: Maybe<Scalars['String']>;
  companyLogo?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['String']>;
  headquarteredIn?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryInput>;
  requiresDigitalAudience?: Maybe<Scalars['String']>;
  applicationRequired?: Maybe<Scalars['String']>;
  creativeWork?: Maybe<Scalars['Boolean']>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  otherRequirements?: Maybe<Scalars['String']>;
  averageHourlyEarnings?: Maybe<Scalars['Int']>;
  averageMonthlyEarnings?: Maybe<Scalars['Int']>;
  daysToFirstDollar?: Maybe<Scalars['Int']>;
  monthlyActiveEarners?: Maybe<Scalars['Int']>;
  platformPricing?: Maybe<Scalars['String']>;
  geographicalFocus?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<TagInput>>;
};

export type CategoryInput = {
  name?: Maybe<CategoryTypes>;
  color?: Maybe<Scalars['String']>;
};

export type TagInput = {
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type LinkInput = {
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PlatformMvc = {
  platformId: Scalars['ID'];
  name: Scalars['String'];
  companyLogo: Scalars['String'];
  website: Scalars['String'];
  founded: Scalars['String'];
  headquarteredIn: Scalars['String'];
  funding?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  category?: Maybe<Category>;
  requiresDigitalAudience: Scalars['String'];
  applicationRequired: Scalars['String'];
  creativeWork: Scalars['Boolean'];
  remoteWork: Scalars['Boolean'];
  minimumAge: Scalars['Int'];
  equipmentQualSkills: Array<EquipmentQualSkills>;
  otherRequirements: Scalars['String'];
  averageHourlyEarnings: Scalars['Int'];
  averageMonthlyEarnings: Scalars['Int'];
  daysToFirstDollar?: Maybe<Scalars['Int']>;
  monthlyActiveEarners?: Maybe<Scalars['Int']>;
  platformPricing?: Maybe<Scalars['String']>;
  geographicalFocus?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
};

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

export type Tag = {
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
};

export type Category = {
  name?: Maybe<CategoryTypes>;
  color?: Maybe<Scalars['String']>;
};

export enum CategoryTypes {
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

export type Link = {
  label: Scalars['String'];
  url: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
export type PlatformMvcDbObject = {
  _id: ObjectID;
  name: string;
  companyLogo: string;
  website: string;
  founded: string;
  headquarteredIn: string;
  funding?: Maybe<string>;
  description: string;
  category?: Maybe<CategoryDbObject>;
  requiresDigitalAudience: string;
  applicationRequired: string;
  creativeWork: boolean;
  remoteWork: boolean;
  minimumAge: number;
  equipmentQualSkills: Array<string>;
  otherRequirements: string;
  averageHourlyEarnings: number;
  averageMonthlyEarnings: number;
  daysToFirstDollar?: Maybe<number>;
  monthlyActiveEarners?: Maybe<number>;
  platformPricing?: Maybe<string>;
  geographicalFocus?: Maybe<string>;
  affiliateLink?: Maybe<string>;
  founderMessage?: Maybe<string>;
  email: string;
  tags?: Maybe<Array<TagDbObject>>;
};

export type TagDbObject = {
  name: string;
  color?: Maybe<string>;
};

export type CategoryDbObject = {
  name?: Maybe<string>;
  color?: Maybe<string>;
};

export type LinkDbObject = {
  label: string;
  url: string;
};
