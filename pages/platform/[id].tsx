import React from 'react';
import { PlatformScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { gql } from '@apollo/client';
import { client } from '@Config';
import { NextPageContext } from 'next';
import { GetPlatformQuery } from '@GraphQL/types';

const getPlatformQuery = gql`
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

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;
  let data = null;
  try {
    data = (
      await client.query({
        query: getPlatformQuery,
        variables: {
          id,
        },
      })
    ).data;
  } catch (e) {}

  return {
    props: {
      data,
      id,
    },
  };
};

const Platform: React.FC<{ data: GetPlatformQuery }> = ({ data, id }) => (
  <PageWrapper
    backgroundImage="url('../platform-profile-background.png')"
    backgroundSize="contain"
  >
    <PlatformScreen data={data} id={id} />
  </PageWrapper>
);

export default Platform;
