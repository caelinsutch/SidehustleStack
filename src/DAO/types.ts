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
  allTodos: Array<TodoMvc>;
  Todo?: Maybe<TodoMvc>;
  allPlatforms: Array<PlatformMvc>;
  Platform?: Maybe<PlatformMvc>;
};

export type QueryTodoArgs = {
  todoId: Scalars['ID'];
};

export type QueryPlatformArgs = {
  platformId: Scalars['ID'];
};

export type Mutation = {
  createTodo: TodoMvc;
  updateTodo?: Maybe<TodoMvc>;
  createPlatform: PlatformMvc;
  updatePlatform?: Maybe<PlatformMvc>;
};

export type MutationCreateTodoArgs = {
  description: Scalars['String'];
};

export type MutationUpdateTodoArgs = {
  todoId: Scalars['ID'];
  data: UpdateTodoInput;
};

export type MutationCreatePlatformArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type MutationUpdatePlatformArgs = {
  platformId: Scalars['ID'];
  data: UpdatePlatformInput;
};

export type UpdateTodoInput = {
  description?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type UpdatePlatformInput = {
  category?: Maybe<Category>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  equipmentNeeded?: Maybe<Array<Scalars['String']>>;
  peopleMakingMoney?: Maybe<Scalars['String']>;
  requiresAudience?: Maybe<Scalars['Boolean']>;
  funding?: Maybe<Scalars['String']>;
  platformPricing?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['String']>;
  averagePay?: Maybe<Scalars['String']>;
  links?: Maybe<Array<LinkInput>>;
};

export type LinkInput = {
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TodoMvc = {
  todoId: Scalars['ID'];
  completed: Scalars['Boolean'];
  description: Scalars['String'];
};

export type PlatformMvc = {
  platformId: Scalars['ID'];
  category?: Maybe<Category>;
  name: Scalars['String'];
  description: Scalars['String'];
  equipmentNeeded?: Maybe<Array<Scalars['String']>>;
  peopleMakingMoney?: Maybe<Scalars['String']>;
  requiresAudience?: Maybe<Scalars['Boolean']>;
  funding?: Maybe<Scalars['String']>;
  platformPricing?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['String']>;
  averagePay?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Link>>;
};

export enum Category {
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
export type TodoMvcDbObject = {
  _id: ObjectID;
  completed: boolean;
  description: string;
};

export type PlatformMvcDbObject = {
  _id: ObjectID;
  category?: Maybe<string>;
  name: string;
  description: string;
  equipmentNeeded?: Maybe<Array<string>>;
  peopleMakingMoney?: Maybe<string>;
  requiresAudience?: Maybe<boolean>;
  funding?: Maybe<string>;
  platformPricing?: Maybe<string>;
  founded?: Maybe<string>;
  averagePay?: Maybe<string>;
  links?: Maybe<Array<LinkDbObject>>;
};

export type LinkDbObject = {
  label: string;
  url: string;
};
