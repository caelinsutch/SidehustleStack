import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { PlatformType, useGetAllPlatformsHomeQuery } from '@GraphQL/types';
import { DefaultContainer, LoadingSection } from '@Components';
import { HomeBanner, PlatformSection, ViewSelector } from './Components';
import { filters } from './HomeScreen.constants';

export type HomeView = 'Platforms' | 'Tools';

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

  const [view, setView] = useState<HomeView>('Platforms');

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
              self="Platforms"
              onClick={() => setView('Platforms')}
            />
            <ViewSelector
              view={view}
              self="Tools"
              onClick={() => setView('Tools')}
            />
          </Flex>
        </DefaultContainer>
      </Box>
      <DefaultContainer>
        {data?.allPlatforms ? (
          <>
            <PlatformSection
              type={view}
              platforms={platforms}
              filters={filters}
              display={view === 'Platforms' ? 'initial' : 'none'}
            />
            <PlatformSection
              type={view}
              platforms={tools}
              filters={filters}
              display={view === 'Tools' ? 'initial' : 'none'}
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
