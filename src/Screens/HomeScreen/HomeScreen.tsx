import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { GetAllPlatformsHomeQuery, PlatformType, Status } from '@GraphQL/types';
import { DefaultContainer, LoadingSection } from '@Components';
import _ from 'lodash';
import { useSetRecoilState } from 'recoil';
import { useQueryParams } from 'use-query-params';
import { HomeBanner, PlatformSection, ViewSelector } from './Components';
import { filters, useQueryParamsSettings } from './HomeScreen.constants';
import { activeFiltersAtom } from '../../Recoil';

export type HomeView = 'Platforms' | 'Tools';

const HomeScreen: React.FC<{ data: GetAllPlatformsHomeQuery }> = ({ data }) => {
  const setActiveFilters = useSetRecoilState(activeFiltersAtom);

  const [query] = useQueryParams(useQueryParamsSettings);

  useEffect(() => {
    setActiveFilters((oldActiveFilters) => {
      const newActiveFilters = {};

      filters.forEach((filter) => {
        const d = oldActiveFilters[filter.key]
          ? oldActiveFilters[filter.key]
          : 'All';
        newActiveFilters[filter.key] = query[filter.key]
          ? _.startCase(query[filter.key])
          : d;
      });

      return newActiveFilters;
    });
  }, [query]);

  const [view, setView] = useState<HomeView>('Platforms');

  const published = data.allPlatforms.filter(
    (p) => p.status === Status.Published
  );

  const platforms = published.filter(
    (platform) => platform.platformType === PlatformType.Platform
  );
  const tools = published.filter(
    (platform) => platform.platformType === PlatformType.Tool
  );

  return (
    <Box as="section">
      <Box
        backgroundImage="url('home-top-background.png')"
        backgroundSize={{ base: 'contain', md: 'cover' }}
        backgroundPosition={{ base: 'top', md: 'bottom' }}
        backgroundRepeat="no-repeat"
        pb={75}
        pt={{ base: 150, md: 200 }}
      >
        <DefaultContainer>
          <HomeBanner onEmailSubmit={(email) => console.log(email)} />
          <Flex justifyContent="space-around" mt={100}>
            <ViewSelector
              view={view}
              as="h3"
              self="Platforms"
              onClick={() => setView('Platforms')}
            />
            <ViewSelector
              view={view}
              as="h3"
              self="Tools"
              onClick={() => setView('Tools')}
            />
          </Flex>
        </DefaultContainer>
      </Box>
      <DefaultContainer id="filteredPlatforms">
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
