import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { Alert, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { useGetPlatformQuery } from '@GraphQL/types';
import {
  FounderQuoteSection,
  HeaderInfo,
  BreadcrumbSection,
  InfoSection,
  ReviewSection,
} from '@Screens/PlatformScreen/Components';
import { DefaultContainer, LoadingSection } from '@Components';
import { snakeToStartCase } from '@Utils';

export const query = gql`
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

const PlatformScreen: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useGetPlatformQuery({
    variables: {
      id: id as string,
    },
  });

  if (loading) return <LoadingSection />;

  if (!data?.platform)
    return (
      <DefaultContainer as="section" pt={200}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Platform not found, check your link?</AlertTitle>
        </Alert>
      </DefaultContainer>
    );

  const {
    platform: {
      name,
      founderMessage,
      website,
      category,
      tags,
      typeOfWork,
      reviews,
      numPeopleMakingMoney,
      platformPricing,
      requiresDigitalAudience,
      funding,
      founded,
      founderName,
      requirements,
      equipmentQualSkills,
    },
  } = data;

  return (
    <Box as="section" pt={150}>
      <DefaultContainer>
        <>
          <BreadcrumbSection id={id as string} platformName={name} />
          <HeaderInfo
            name={name}
            tags={[
              ...(tags || []),
              snakeToStartCase(typeOfWork),
              snakeToStartCase(category),
            ]}
            signUpLink={website}
          />
          <FounderQuoteSection
            quote={founderMessage}
            quoteAuthor={founderName}
            quoteAuthorPosition="Founder"
            quoteAuthorLink="https://google.com"
          />
          <InfoSection title="Requirements" body={requirements} />
          <InfoSection
            title="People Making Money on Platform"
            body={[numPeopleMakingMoney?.toLocaleString()]}
          />
          <InfoSection title="Platform Pricing" body={[platformPricing]} />
          <InfoSection
            title="Requires Audience"
            body={[snakeToStartCase(requiresDigitalAudience)]}
          />
          <InfoSection
            title="Equipment, Qualifications, & Skills"
            body={equipmentQualSkills.map(snakeToStartCase)}
          />
          <InfoSection title="Funding" body={[snakeToStartCase(funding)]} />
          <InfoSection title="Founded" body={[founded]} />
        </>
      </DefaultContainer>
      <ReviewSection id={id} platformName="StockX" reviews={reviews} />
    </Box>
  );
};

export default PlatformScreen;
