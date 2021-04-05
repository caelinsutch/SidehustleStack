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
  platform?: Maybe<PlatformMvc>;
};

export type QueryPlatformArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  createPlatform: PlatformMvc;
  updatePlatform?: Maybe<PlatformMvc>;
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

export type MutationAddReviewArgs = {
  id: Scalars['ID'];
  review?: Maybe<ReviewInput>;
};

export type MutationVoteArgs = {
  id: Scalars['ID'];
  down?: Maybe<Scalars['Boolean']>;
};

export type PlatformInput = {
  name: Scalars['String'];
  companyLogo?: Maybe<Scalars['String']>;
  website: Scalars['String'];
  platformType: PlatformType;
  tags?: Maybe<Array<Scalars['String']>>;
  founded?: Maybe<Scalars['String']>;
  headquarteredIn?: Maybe<Scalars['String']>;
  funding?: Maybe<Funding>;
  description?: Maybe<Scalars['String']>;
  typeOfWork?: Maybe<TypeOfWork>;
  category?: Maybe<CategoryOfWork>;
  requiresDigitalAudience?: Maybe<ExistingDigitalAudienceRequired>;
  applicationRequired?: Maybe<ApplicationRequired>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  averageEarnings?: Maybe<AmountPerInput>;
  timeToFirstDollar?: Maybe<AmountPerInput>;
  numPeopleMakingMoney?: Maybe<Scalars['Int']>;
  geographicalFocus?: Maybe<Scalars['String']>;
  affiliateLink?: Maybe<Scalars['String']>;
  founderMessage?: Maybe<Scalars['String']>;
  founderTwitter?: Maybe<Scalars['String']>;
  founderName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  platformPricing?: Maybe<Scalars['String']>;
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
  typeOfWork?: Maybe<TypeOfWork>;
  category?: Maybe<CategoryOfWork>;
  requiresDigitalAudience?: Maybe<ExistingDigitalAudienceRequired>;
  applicationRequired?: Maybe<ApplicationRequired>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  averageEarnings?: Maybe<AmountPerInput>;
  timeToFirstDollar?: Maybe<AmountPerInput>;
  numPeopleMakingMoney?: Maybe<Scalars['Int']>;
  geographicalFocus?: Maybe<Scalars['String']>;
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

export type ReviewInput = {
  rating: Scalars['Int'];
  description: Scalars['String'];
  author?: Maybe<Scalars['String']>;
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
  typeOfWork?: Maybe<TypeOfWork>;
  category?: Maybe<CategoryOfWork>;
  requiresDigitalAudience?: Maybe<ExistingDigitalAudienceRequired>;
  applicationRequired?: Maybe<ApplicationRequired>;
  remoteWork?: Maybe<Scalars['Boolean']>;
  minimumAge?: Maybe<Scalars['Int']>;
  equipmentQualSkills?: Maybe<Array<EquipmentQualSkills>>;
  averageEarnings?: Maybe<AmountPer>;
  timeToFirstDollar?: Maybe<AmountPer>;
  geographicalFocus?: Maybe<Scalars['String']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PlatformInput: PlatformInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PlatformRecommendationInput: PlatformRecommendationInput;
  UpdatePlatformInput: UpdatePlatformInput;
  LinkInput: LinkInput;
  AmountPerInput: AmountPerInput;
  ReviewInput: ReviewInput;
  PlatformMVC: ResolverTypeWrapper<PlatformMvc>;
  AmountPer: ResolverTypeWrapper<AmountPer>;
  Review: ResolverTypeWrapper<Review>;
  PlatformType: PlatformType;
  Funding: Funding;
  EquipmentQualSkills: EquipmentQualSkills;
  CategoryOfWork: CategoryOfWork;
  ExistingDigitalAudienceRequired: ExistingDigitalAudienceRequired;
  ApplicationRequired: ApplicationRequired;
  TypeOfWork: TypeOfWork;
  Status: Status;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  PlatformInput: PlatformInput;
  String: Scalars['String'];
  Int: Scalars['Int'];
  PlatformRecommendationInput: PlatformRecommendationInput;
  UpdatePlatformInput: UpdatePlatformInput;
  LinkInput: LinkInput;
  AmountPerInput: AmountPerInput;
  ReviewInput: ReviewInput;
  PlatformMVC: PlatformMvc;
  AmountPer: AmountPer;
  Review: Review;
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
  platform?: Resolver<
    Maybe<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlatformArgs, 'id'>
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
    RequireFields<MutationUpdatePlatformArgs, 'id' | 'data'>
  >;
  addReview?: Resolver<
    Maybe<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddReviewArgs, 'id'>
  >;
  vote?: Resolver<
    Maybe<ResolversTypes['PlatformMVC']>,
    ParentType,
    ContextType,
    RequireFields<MutationVoteArgs, 'id'>
  >;
};

export type PlatformMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PlatformMVC'] = ResolversParentTypes['PlatformMVC']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  platformType?: Resolver<
    ResolversTypes['PlatformType'],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyLogo?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  founded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headquarteredIn?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  funding?: Resolver<Maybe<ResolversTypes['Funding']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  typeOfWork?: Resolver<
    Maybe<ResolversTypes['TypeOfWork']>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes['CategoryOfWork']>,
    ParentType,
    ContextType
  >;
  requiresDigitalAudience?: Resolver<
    Maybe<ResolversTypes['ExistingDigitalAudienceRequired']>,
    ParentType,
    ContextType
  >;
  applicationRequired?: Resolver<
    Maybe<ResolversTypes['ApplicationRequired']>,
    ParentType,
    ContextType
  >;
  remoteWork?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  minimumAge?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  equipmentQualSkills?: Resolver<
    Maybe<Array<ResolversTypes['EquipmentQualSkills']>>,
    ParentType,
    ContextType
  >;
  averageEarnings?: Resolver<
    Maybe<ResolversTypes['AmountPer']>,
    ParentType,
    ContextType
  >;
  timeToFirstDollar?: Resolver<
    Maybe<ResolversTypes['AmountPer']>,
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
  founderTwitter?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  founderName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  numPeopleMakingMoney?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<Array<ResolversTypes['Review']>>,
    ParentType,
    ContextType
  >;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  platformPricing?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  requirements?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmountPerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AmountPer'] = ResolversParentTypes['AmountPer']
> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  per?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = {
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PlatformMVC?: PlatformMvcResolvers<ContextType>;
  AmountPer?: AmountPerResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type UpvotePlatformMutationVariables = Exact<{
  id: Scalars['ID'];
  down?: Maybe<Scalars['Boolean']>;
}>;

export type UpvotePlatformMutation = {
  vote?: Maybe<Pick<PlatformMvc, 'score'>>;
};

export type GetPlatformScoreQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPlatformScoreQuery = {
  platform?: Maybe<Pick<PlatformMvc, 'score'>>;
};

export type CreatePlatformMutationVariables = Exact<{
  name: Scalars['String'];
  companyLogo: Scalars['String'];
  website: Scalars['String'];
  founded: Scalars['String'];
  headquarteredIn: Scalars['String'];
  funding: Funding;
  description: Scalars['String'];
  typeOfWork: TypeOfWork;
  category: CategoryOfWork;
  requiresDigitalAudience: ExistingDigitalAudienceRequired;
  applicationRequired: ApplicationRequired;
  remoteWork: Scalars['Boolean'];
  minimumAge: Scalars['Int'];
  equipmentQualSkills: Array<EquipmentQualSkills> | EquipmentQualSkills;
  averageEarnings: AmountPerInput;
  timeToFirstDollar: AmountPerInput;
  geographicalFocus: Scalars['String'];
  affiliateLink: Scalars['String'];
  founderMessage: Scalars['String'];
  founderTwitter: Scalars['String'];
  email: Scalars['String'];
  platformType: PlatformType;
  numPeopleMakingMoney: Scalars['Int'];
  requirements: Array<Scalars['String']> | Scalars['String'];
  platformPricing: Scalars['String'];
}>;

export type CreatePlatformMutation = {
  createPlatform: Pick<PlatformMvc, 'id'>;
};

export type GetAllPlatformsHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPlatformsHomeQuery = {
  allPlatforms: Array<
    Pick<
      PlatformMvc,
      | 'id'
      | 'score'
      | 'name'
      | 'description'
      | 'companyLogo'
      | 'platformType'
      | 'category'
      | 'tags'
      | 'typeOfWork'
    >
  >;
};

export type AddReviewMutationVariables = Exact<{
  id: Scalars['ID'];
  rating: Scalars['Int'];
  description: Scalars['String'];
  author: Scalars['String'];
}>;

export type AddReviewMutation = {
  addReview?: Maybe<
    Pick<PlatformMvc, 'id'> & {
      reviews?: Maybe<Array<Pick<Review, 'description' | 'author' | 'rating'>>>;
    }
  >;
};

export type GetPlatformQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPlatformQuery = {
  platform?: Maybe<
    Pick<
      PlatformMvc,
      | 'name'
      | 'website'
      | 'description'
      | 'founderMessage'
      | 'platformPricing'
      | 'category'
      | 'tags'
      | 'numPeopleMakingMoney'
      | 'typeOfWork'
      | 'requiresDigitalAudience'
      | 'equipmentQualSkills'
      | 'funding'
      | 'founded'
      | 'founderName'
      | 'requirements'
    > & {
      reviews?: Maybe<Array<Pick<Review, 'rating' | 'description' | 'author'>>>;
    }
  >;
};

export const UpvotePlatformDocument = gql`
  mutation UpvotePlatform($id: ID!, $down: Boolean) {
    vote(id: $id, down: $down) {
      score
    }
  }
`;
export type UpvotePlatformMutationFn = ApolloReactCommon.MutationFunction<
  UpvotePlatformMutation,
  UpvotePlatformMutationVariables
>;

/**
 * __useUpvotePlatformMutation__
 *
 * To run a mutation, you first call `useUpvotePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpvotePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upvotePlatformMutation, { data, loading, error }] = useUpvotePlatformMutation({
 *   variables: {
 *      id: // value for 'id'
 *      down: // value for 'down'
 *   },
 * });
 */
export function useUpvotePlatformMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpvotePlatformMutation,
    UpvotePlatformMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpvotePlatformMutation,
    UpvotePlatformMutationVariables
  >(UpvotePlatformDocument, baseOptions);
}
export type UpvotePlatformMutationHookResult = ReturnType<
  typeof useUpvotePlatformMutation
>;
export type UpvotePlatformMutationResult = ApolloReactCommon.MutationResult<UpvotePlatformMutation>;
export type UpvotePlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpvotePlatformMutation,
  UpvotePlatformMutationVariables
>;
export const GetPlatformScoreDocument = gql`
  query GetPlatformScore($id: ID!) {
    platform(id: $id) {
      score
    }
  }
`;

/**
 * __useGetPlatformScoreQuery__
 *
 * To run a query within a React component, call `useGetPlatformScoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlatformScoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlatformScoreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlatformScoreQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetPlatformScoreQuery,
    GetPlatformScoreQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetPlatformScoreQuery,
    GetPlatformScoreQueryVariables
  >(GetPlatformScoreDocument, baseOptions);
}
export function useGetPlatformScoreLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPlatformScoreQuery,
    GetPlatformScoreQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetPlatformScoreQuery,
    GetPlatformScoreQueryVariables
  >(GetPlatformScoreDocument, baseOptions);
}
export type GetPlatformScoreQueryHookResult = ReturnType<
  typeof useGetPlatformScoreQuery
>;
export type GetPlatformScoreLazyQueryHookResult = ReturnType<
  typeof useGetPlatformScoreLazyQuery
>;
export type GetPlatformScoreQueryResult = ApolloReactCommon.QueryResult<
  GetPlatformScoreQuery,
  GetPlatformScoreQueryVariables
>;
export const CreatePlatformDocument = gql`
  mutation CreatePlatform(
    $name: String!
    $companyLogo: String!
    $website: String!
    $founded: String!
    $headquarteredIn: String!
    $funding: Funding!
    $description: String!
    $typeOfWork: TypeOfWork!
    $category: CategoryOfWork!
    $requiresDigitalAudience: ExistingDigitalAudienceRequired!
    $applicationRequired: ApplicationRequired!
    $remoteWork: Boolean!
    $minimumAge: Int!
    $equipmentQualSkills: [EquipmentQualSkills!]!
    $averageEarnings: AmountPerInput!
    $timeToFirstDollar: AmountPerInput!
    $geographicalFocus: String!
    $affiliateLink: String!
    $founderMessage: String!
    $founderTwitter: String!
    $email: String!
    $platformType: PlatformType!
    $numPeopleMakingMoney: Int!
    $requirements: [String!]!
    $platformPricing: String!
  ) {
    createPlatform(
      platform: {
        name: $name
        companyLogo: $companyLogo
        website: $website
        founded: $founded
        headquarteredIn: $headquarteredIn
        funding: $funding
        description: $description
        typeOfWork: $typeOfWork
        category: $category
        requiresDigitalAudience: $requiresDigitalAudience
        applicationRequired: $applicationRequired
        remoteWork: $remoteWork
        numPeopleMakingMoney: $numPeopleMakingMoney
        minimumAge: $minimumAge
        equipmentQualSkills: $equipmentQualSkills
        averageEarnings: $averageEarnings
        timeToFirstDollar: $timeToFirstDollar
        geographicalFocus: $geographicalFocus
        affiliateLink: $affiliateLink
        founderMessage: $founderMessage
        founderTwitter: $founderTwitter
        email: $email
        platformType: $platformType
        platformPricing: $platformPricing
        requirements: $requirements
      }
    ) {
      id
    }
  }
`;
export type CreatePlatformMutationFn = ApolloReactCommon.MutationFunction<
  CreatePlatformMutation,
  CreatePlatformMutationVariables
>;

/**
 * __useCreatePlatformMutation__
 *
 * To run a mutation, you first call `useCreatePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlatformMutation, { data, loading, error }] = useCreatePlatformMutation({
 *   variables: {
 *      name: // value for 'name'
 *      companyLogo: // value for 'companyLogo'
 *      website: // value for 'website'
 *      founded: // value for 'founded'
 *      headquarteredIn: // value for 'headquarteredIn'
 *      funding: // value for 'funding'
 *      description: // value for 'description'
 *      typeOfWork: // value for 'typeOfWork'
 *      category: // value for 'category'
 *      requiresDigitalAudience: // value for 'requiresDigitalAudience'
 *      applicationRequired: // value for 'applicationRequired'
 *      remoteWork: // value for 'remoteWork'
 *      minimumAge: // value for 'minimumAge'
 *      equipmentQualSkills: // value for 'equipmentQualSkills'
 *      averageEarnings: // value for 'averageEarnings'
 *      timeToFirstDollar: // value for 'timeToFirstDollar'
 *      geographicalFocus: // value for 'geographicalFocus'
 *      affiliateLink: // value for 'affiliateLink'
 *      founderMessage: // value for 'founderMessage'
 *      founderTwitter: // value for 'founderTwitter'
 *      email: // value for 'email'
 *      platformType: // value for 'platformType'
 *      numPeopleMakingMoney: // value for 'numPeopleMakingMoney'
 *      requirements: // value for 'requirements'
 *      platformPricing: // value for 'platformPricing'
 *   },
 * });
 */
export function useCreatePlatformMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePlatformMutation,
    CreatePlatformMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreatePlatformMutation,
    CreatePlatformMutationVariables
  >(CreatePlatformDocument, baseOptions);
}
export type CreatePlatformMutationHookResult = ReturnType<
  typeof useCreatePlatformMutation
>;
export type CreatePlatformMutationResult = ApolloReactCommon.MutationResult<CreatePlatformMutation>;
export type CreatePlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePlatformMutation,
  CreatePlatformMutationVariables
>;
export const GetAllPlatformsHomeDocument = gql`
  query GetAllPlatformsHome {
    allPlatforms {
      id
      score
      name
      description
      companyLogo
      platformType
      category
      tags
      typeOfWork
    }
  }
`;

/**
 * __useGetAllPlatformsHomeQuery__
 *
 * To run a query within a React component, call `useGetAllPlatformsHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlatformsHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlatformsHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlatformsHomeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAllPlatformsHomeQuery,
    GetAllPlatformsHomeQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetAllPlatformsHomeQuery,
    GetAllPlatformsHomeQueryVariables
  >(GetAllPlatformsHomeDocument, baseOptions);
}
export function useGetAllPlatformsHomeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAllPlatformsHomeQuery,
    GetAllPlatformsHomeQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetAllPlatformsHomeQuery,
    GetAllPlatformsHomeQueryVariables
  >(GetAllPlatformsHomeDocument, baseOptions);
}
export type GetAllPlatformsHomeQueryHookResult = ReturnType<
  typeof useGetAllPlatformsHomeQuery
>;
export type GetAllPlatformsHomeLazyQueryHookResult = ReturnType<
  typeof useGetAllPlatformsHomeLazyQuery
>;
export type GetAllPlatformsHomeQueryResult = ApolloReactCommon.QueryResult<
  GetAllPlatformsHomeQuery,
  GetAllPlatformsHomeQueryVariables
>;
export const AddReviewDocument = gql`
  mutation AddReview(
    $id: ID!
    $rating: Int!
    $description: String!
    $author: String!
  ) {
    addReview(
      id: $id
      review: { rating: $rating, description: $description, author: $author }
    ) {
      id
      reviews {
        description
        author
        rating
      }
    }
  }
`;
export type AddReviewMutationFn = ApolloReactCommon.MutationFunction<
  AddReviewMutation,
  AddReviewMutationVariables
>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      rating: // value for 'rating'
 *      description: // value for 'description'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useAddReviewMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddReviewMutation,
    AddReviewMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddReviewMutation,
    AddReviewMutationVariables
  >(AddReviewDocument, baseOptions);
}
export type AddReviewMutationHookResult = ReturnType<
  typeof useAddReviewMutation
>;
export type AddReviewMutationResult = ApolloReactCommon.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddReviewMutation,
  AddReviewMutationVariables
>;
export const GetPlatformDocument = gql`
  query GetPlatform($id: ID!) {
    platform(id: $id) {
      name
      website
      description
      founderMessage
      platformPricing
      category
      tags
      numPeopleMakingMoney
      typeOfWork
      requiresDigitalAudience
      equipmentQualSkills
      funding
      founded
      founderName
      requirements
      reviews {
        rating
        description
        author
      }
    }
  }
`;

/**
 * __useGetPlatformQuery__
 *
 * To run a query within a React component, call `useGetPlatformQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlatformQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlatformQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlatformQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetPlatformQuery,
    GetPlatformQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPlatformQuery, GetPlatformQueryVariables>(
    GetPlatformDocument,
    baseOptions
  );
}
export function useGetPlatformLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPlatformQuery,
    GetPlatformQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetPlatformQuery,
    GetPlatformQueryVariables
  >(GetPlatformDocument, baseOptions);
}
export type GetPlatformQueryHookResult = ReturnType<typeof useGetPlatformQuery>;
export type GetPlatformLazyQueryHookResult = ReturnType<
  typeof useGetPlatformLazyQuery
>;
export type GetPlatformQueryResult = ApolloReactCommon.QueryResult<
  GetPlatformQuery,
  GetPlatformQueryVariables
>;
