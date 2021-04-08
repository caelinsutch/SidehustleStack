import React from 'react';
import { HomeScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { client } from '@Config';
import { gql } from '@apollo/client';
import { NextPage } from 'next';
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
    }
  }
`;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getAllPlatformsHomeQuery,
  });

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
