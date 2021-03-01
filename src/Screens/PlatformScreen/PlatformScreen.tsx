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
import { Alert, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { snakeToStartCase } from '@Utils';

export const query = gql`
  query GetPlatform($id: ID!) {
    platform(id: $id) {
      name
      website
      description
      founderMessage
      category
      tags
      typeOfWork
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
      <DefaultContainer as="section">
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
    },
  } = data;

  return (
    <Box as="section">
      <DefaultContainer>
        <>
          <BreadcrumbSection id={id as string} platformName={name} />
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
        </>
      </DefaultContainer>
      <ReviewSection id={id} platformName="StockX" reviews={reviews} />
    </Box>
  );
};

export default PlatformScreen;
