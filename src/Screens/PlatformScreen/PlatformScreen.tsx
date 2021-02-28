import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useGetPlatformQuery } from '@GraphQL/types';
import _ from 'lodash';
import {
  FounderQuoteSection,
  HeaderInfo,
  BreadcrumbSection,
  InfoSection,
  ReviewSection,
} from '@Screens/PlatformScreen/Components';
import { DefaultContainer, LoadingSection } from '@Components';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { snakeToStartCase } from '@Utils';

export type PlatformScreenProps = {
  platformId: string;
};

export const query = gql`
  query GetPlatform($platformId: ID!) {
    platform(platformId: $platformId) {
      name
      website
      description
      founderMessage
      category
      tags
      typeOfWork
    }
  }
`;

const PlatformScreen: React.FC<PlatformScreenProps> = ({ platformId }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useGetPlatformQuery({
    variables: {
      platformId: id as string,
    },
  });

  if (loading) return <LoadingSection />;

  if (!data?.platform)
    return (
      <DefaultContainer as="section">
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Platform not found, check your link?</AlertTitle>
        </Alert>
      </DefaultContainer>
    );

  const {
    platform: { name, founderMessage, website, category, tags, typeOfWork },
  } = data;

  return (
    <DefaultContainer as="section">
      <>
        <BreadcrumbSection platformId={platformId} platformName={name} />
        <HeaderInfo
          name={name}
          tags={[
            ...tags,
            snakeToStartCase(typeOfWork),
            snakeToStartCase(category),
          ]}
          signUpLink={website}
        />
        <FounderQuoteSection
          quote={founderMessage}
          quoteAuthor="Scott Cutler"
          quoteAuthorPosition="CEO"
          quoteAuthorLink="https://google.com"
        />
        <InfoSection
          title="Requirements"
          body={[
            'Items to sell including unworn sneakers, trading cards, luxury goods, electronics, and more',
            'A smartphone or similar device to access StockX with',
            'The ability to ship items',
          ]}
        />
        <InfoSection
          title="People Making Money on Platform"
          body={['100,000 (January 2021)']}
        />
        <ReviewSection
          platformId={platformId}
          platformName="StockX"
          reviews={[
            {
              rating: 3,
              author: 'Anonymous',
              description: 'Test test test',
            },
          ]}
        />
      </>
    </DefaultContainer>
  );
};

export default PlatformScreen;
