import { gql } from '@apollo/client';

export const createPlatform = gql`
  mutation CreatePlatform(
    $name: String!
    $companyLogo: String!
    $website: String!
    $founded: String!
    $headquarteredIn: String!
    $funding: Funding!
    $description: String!
    $typeOfWork: [TypeOfWork!]!
    $category: CategoryOfWork!
    $requiresDigitalAudience: ExistingDigitalAudienceRequired!
    $applicationRequired: ApplicationRequired!
    $remoteWork: Boolean!
    $minimumAge: Int!
    $equipmentQualSkills: [EquipmentQualSkills!]!
    $averageEarnings: AmountPerInput!
    $timeToFirstDollar: AmountPerInput!
    $geographicalFocus: GeographicalFocus!
    $affiliateLink: String!
    $founderMessage: String!
    $founderTwitter: String!
    $email: String!
    $platformType: PlatformType!
    $numPeopleMakingMoney: Int!
    $requirements: [String!]!
    $platformPricing: String!
    $tags: [String]!
    $founderName: String!
    $profitModel: ProfitModel!
    $profitModelDescription: String!
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
        founderName: $founderName
        profitModel: $profitModel
        profitModelDescription: $profitModelDescription
      }
    ) {
      id
    }
  }
`;

export const createSuggestion = gql`
  mutation createSuggestion(
    $name: String!
    $website: String!
    $platformType: PlatformType!
  ) {
    createSuggestion(
      suggestion: {
        name: $name
        website: $website
        platformType: $platformType
      }
    ) {
      id
    }
  }
`;
