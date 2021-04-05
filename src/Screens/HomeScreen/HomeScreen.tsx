import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { PlatformType, useGetAllPlatformsHomeQuery } from '@GraphQL/types';
import { DefaultContainer, LoadingSection } from '@Components';
import { HomeBanner, PlatformSection, ViewSelector } from './Components';
import { filters } from './HomeScreen.constants';

export type HomeView = 'platforms' | 'tools';

export const query = gql`
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
    <Box as="section">
      <Box
        backgroundImage="url('home-top-background.png')"
        backgroundSize="cover"
        backgroundPosition="bottom"
        pb={200}
        pt={200}
      >
        <DefaultContainer>
          <HomeBanner onEmailSubmit={(email) => console.log(email)} />
          <Flex justifyContent="space-around" mt={100}>
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
        </DefaultContainer>
      </Box>
      <DefaultContainer>
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
    </Box>
  );
};

export default HomeScreen;
