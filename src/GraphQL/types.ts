/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PlatformInput: PlatformInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UpdatePlatformInput: UpdatePlatformInput;
  CategoryInput: CategoryInput;
  TagInput: TagInput;
  LinkInput: LinkInput;
  PlatformMVC: ResolverTypeWrapper<PlatformMvc>;
  EquipmentQualSkills: EquipmentQualSkills;
  Tag: ResolverTypeWrapper<Tag>;
  Category: ResolverTypeWrapper<Category>;
  CategoryTypes: CategoryTypes;
  Link: ResolverTypeWrapper<Link>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  PlatformInput: PlatformInput;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  UpdatePlatformInput: UpdatePlatformInput;
  CategoryInput: CategoryInput;
  TagInput: TagInput;
  LinkInput: LinkInput;
  PlatformMVC: PlatformMvc;
  Tag: Tag;
  Category: Category;
  Link: Link;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  allPlatforms?: Resolver<
    Array<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType
  >;
  Platform?: Resolver<
    Maybe<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlatformArgs, 'platformId'>
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createPlatform?: Resolver<
    ResolversTypes['PlatformMVC'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePlatformArgs, never>
  >;
  updatePlatform?: Resolver<
    Maybe<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlatformArgs, 'platformId' | 'data'>
  >;
};

export type PlatformMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PlatformMVC'] = ResolversParentTypes['PlatformMVC']
> = {
  platformId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyLogo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  founded?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headquarteredIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  funding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  requiresDigitalAudience?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  applicationRequired?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  creativeWork?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  remoteWork?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minimumAge?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  equipmentQualSkills?: Resolver<
    Array<ResolversTypes['EquipmentQualSkills']>,
    ParentType,
    ContextType
  >;
  otherRequirements?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  averageHourlyEarnings?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  averageMonthlyEarnings?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  daysToFirstDollar?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  monthlyActiveEarners?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  platformPricing?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  geographicalFocus?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  affiliateLink?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  founderMessage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
  name?: Resolver<
    Maybe<ResolversTypes['CategoryTypes']>,
    ParentType,
    ContextType
  >;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']
> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PlatformMVC?: PlatformMvcResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type PlatformQueryVariables = Exact<{
  platformId: Scalars['ID'];
}>;

export type PlatformQuery = {
  Platform?: Maybe<Pick<PlatformMvc, 'name' | 'description'>>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQuery = {
  allPlatforms: Array<Pick<PlatformMvc, 'platformId' | 'name'>>;
};

export const PlatformDocument = gql`
  query Platform($platformId: ID!) {
    Platform(platformId: $platformId) {
      name
      description
    }
  }
`;

/**
 * __usePlatformQuery__
 *
 * To run a query within a React component, call `usePlatformQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlatformQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlatformQuery({
 *   variables: {
 *      platformId: // value for 'platformId'
 *   },
 * });
 */
export function usePlatformQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    PlatformQuery,
    PlatformQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<PlatformQuery, PlatformQueryVariables>(
    PlatformDocument,
    baseOptions
  );
}
export function usePlatformLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PlatformQuery,
    PlatformQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<PlatformQuery, PlatformQueryVariables>(
    PlatformDocument,
    baseOptions
  );
}
export type PlatformQueryHookResult = ReturnType<typeof usePlatformQuery>;
export type PlatformLazyQueryHookResult = ReturnType<
  typeof usePlatformLazyQuery
>;
export type PlatformQueryResult = ApolloReactCommon.QueryResult<
  PlatformQuery,
  PlatformQueryVariables
>;
export const HomeDocument = gql`
  query Home {
    allPlatforms {
      platformId
      name
    }
  }
`;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<HomeQuery, HomeQueryVariables>
) {
  return ApolloReactHooks.useQuery<HomeQuery, HomeQueryVariables>(
    HomeDocument,
    baseOptions
  );
}
export function useHomeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HomeQuery,
    HomeQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<HomeQuery, HomeQueryVariables>(
    HomeDocument,
    baseOptions
  );
}
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = ApolloReactCommon.QueryResult<
  HomeQuery,
  HomeQueryVariables
>;
