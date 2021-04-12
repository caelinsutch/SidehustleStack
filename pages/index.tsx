import React from 'react';
import { HomeScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { client } from '@Config';
import { gql } from '@apollo/client';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';

const getAllPlatformsHomeQuery = gql`
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
      status
      averageEarnings {
        amount
      }
    }
  }
`;

export async function getServerSideProps() {
  let data: GetAllPlatformsHomeQuery = null;
  try {
    data = (
      await client.query({
        query: getAllPlatformsHomeQuery,
      })
    ).data;
  } catch (e) {
    console.log(e.networkError.result.errors);
  }

  return {
    props: {
      data,
    },
  };
}

const Home: React.FC<{ data: GetAllPlatformsHomeQuery }> = ({ data }) => (
  <PageWrapper>
    <HomeScreen data={data} />
  </PageWrapper>
);

export default Home;
