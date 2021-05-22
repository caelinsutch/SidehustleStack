import React, { useEffect } from 'react';
import { PlatformScreen } from '@Screens';
import { PageWrapper } from '@Components';
import { gql } from '@apollo/client';
import { client } from '@Config';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GetAllNamesQuery, GetPlatformQuery } from '@GraphQL/types';
import { parsePlatformNameForUrl, parsePlatformNameFromUrl } from '@Utils';

export const getPlatformQuery = gql`
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
      averageEarnings {
        amount
      }
    }
  }
`;

const getAllNames = gql`
  query GetAllNames {
    allPlatforms {
      name
    }
  }
`;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const platforms: GetAllNamesQuery = (
//     await client.query({
//       query: getAllNames,
//     })
//   ).data;
//
//   const paths = platforms.allPlatforms.map((platform) => ({
//     params: {
//       id: parsePlatformNameForUrl(platform.name),
//     },
//   }));
//
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params;
//
//   const name = parsePlatformNameFromUrl(id as string);
//
//   const { data } = await client.query({
//     query: getPlatformQuery,
//     variables: {
//       name,
//     },
//   });
//
//   return {
//     props: {
//       data,
//       id: data.platform.id,
//     },
//   };
// };

const Platform: React.FC<{ data: GetPlatformQuery; id: string }> = ({
  data,
  id,
}) => (
  <PageWrapper
    backgroundImage="url('../platform-profile-background.png')"
    backgroundSize="contain"
    // title={`${data.platform.name} - Sidehustle Stack`}
  >
    {/* <PlatformScreen data={data} id={id} /> */}
  </PageWrapper>
);

export default Platform;
