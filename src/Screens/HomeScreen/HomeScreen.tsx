import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { PlatformType, useGetAllPlatformsHomeQuery } from '@GraphQL/types';
import { DefaultContainer, LoadingSection } from '@Components';
import { HomeBanner, PlatformSection, ViewSelector } from './Components';
import { filters } from './HomeScreen.constants';

export type HomeView = 'platforms' | 'tools';

export const query = gql`
  query GetAllPlatformsHome {
    allPlatforms {
      platformId
      score
      name
      description
      companyLogo
      platformType
      category
      tags
    }
  }
`;

const HomeScreen: React.FC = () => {
  const { data } = useGetAllPlatformsHomeQuery();

  const [view, setView] = useState<HomeView>('platforms');

  const platforms = data?.allPlatforms.filter(
    (platform) => platform.platformType === PlatformType.Platform
  );
  const tools = data?.allPlatforms.filter(
    (platform) => platform.platformType === PlatformType.Tool
  );

  return (
    <DefaultContainer as="section">
      <HomeBanner onEmailSubmit={(email) => console.log(email)} />
      <Flex justifyContent="space-around" mt="115px" mb="240px">
        <ViewSelector
          view={view}
          self="platforms"
          onClick={() => setView('platforms')}
        />
        <ViewSelector
          view={view}
          self="tools"
          onClick={() => setView('tools')}
        />
      </Flex>
      {data?.allPlatforms ? (
        <>
          <PlatformSection
            platforms={platforms}
            filters={filters}
            display={view === 'platforms' ? 'initial' : 'none'}
          />
          <PlatformSection
            platforms={tools}
            filters={filters}
            display={view === 'tools' ? 'initial' : 'none'}
          />
        </>
      ) : (
        <LoadingSection />
      )}
    </DefaultContainer>
  );
};

export default HomeScreen;
