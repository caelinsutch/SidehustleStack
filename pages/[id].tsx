import React from 'react';
import { PlatformScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { gql } from '@apollo/client';
import { client } from '@Config';
import { NextPageContext } from 'next';
import { GetPlatformQuery } from '@GraphQL/types';
import { parsePlatformNameFromUrl } from '@Utils';

const getPlatformQuery = gql`
  query GetPlatform($name: String!) {
    platform(name: $name) {
      id
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
      companyLogo
      founderName
      requirements
      profitModel
      profitModelDescription
      reviews {
        rating
        status
        description
        author
      }
    }
  }
`;

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const { res } = context;
  let data = null;
  const name = parsePlatformNameFromUrl(id as string);
  try {
    data = (
      await client.query({
        query: getPlatformQuery,
        variables: {
          name,
        },
      })
    ).data;
  } catch (e) {
    console.error(e);
    res.setHeader('location', '/404');
    res.statusCode = 302;
    res.end();
  }

  return {
    props: {
      data,
      id: data.platform.id,
    },
  };
};

const Platform: React.FC<{ data: GetPlatformQuery }> = ({ data }) => (
  <PageWrapper
    backgroundImage="url('../platform-profile-background.png')"
    backgroundSize="contain"
    title={`${data.platform.name} - Sidehustle Stack`}
  >
    <PlatformScreen data={data} id={data.platform.id} />
  </PageWrapper>
);

export default Platform;
