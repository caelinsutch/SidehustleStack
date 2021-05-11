import React, { useEffect } from 'react';
import { HomeScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { client } from '@Config';
import { gql } from '@apollo/client';
import {
  GetAllPlatformsHomeQuery,
  useGetScoresHomeQuery,
} from '@GraphQL/types';
import { GetStaticProps } from 'next';

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

const getScoresQuery = gql`
  query getScoresHome {
    allPlatforms {
      id
      score
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  let data: GetAllPlatformsHomeQuery = null;
  try {
    data = (
      await client.query({
        query: getAllPlatformsHomeQuery,
      })
    ).data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data,
    },
  };
};

const Home: React.FC<{ data: GetAllPlatformsHomeQuery }> = ({
  data: platforms,
}) => {
  const { data } = useGetScoresHomeQuery();

  let updatedPlatforms: GetAllPlatformsHomeQuery['allPlatforms'];

  useEffect(() => {
    if (data?.allPlatforms) {
      let idToScores = {};
      data.allPlatforms.forEach((platform) => {
        idToScores[platform.id] = platform.score;
      });
      updatedPlatforms = platforms.allPlatforms.map((platform) => ({
        ...platform,
        score: idToScores[platform.id],
      }));
    }
  }, [data]);

  return (
    <PageWrapper>
      <HomeScreen allPlatforms={updatedPlatforms ?? platforms.allPlatforms} />
    </PageWrapper>
  );
};

export default Home;
