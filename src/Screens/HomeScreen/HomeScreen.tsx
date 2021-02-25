import React, { useState } from 'react';
import { DefaultContainer } from '@Components';
import { Flex } from '@chakra-ui/react';
import { HomeBanner, PlatformSection, ViewSelector } from './Components';

export type PlatformTags = string;

export type PlatformData = {
  title: string;
  description: string;
  categories: string[];
  logo: string;
  tags: PlatformTags[];
  votes: number;
};

export type PlatformFilter = {
  name: string;
  options: PlatformTags[];
};

export type HomeView = 'platforms' | 'tools';

const HomeScreen: React.FC = () => {
  const workType: PlatformFilter = {
    name: 'Work Type',
    options: [
      'Small Business',
      'Large Business',
      'None of Your Business',
      'Monkey Business',
      'WFH',
    ],
  };

  const age: PlatformFilter = {
    name: 'Age',
    options: ['Like Milk', '18+', '21+'],
  };

  const potentialEarnings: PlatformFilter = {
    name: 'Potential Earnings',
    options: ['$', '$$', '$$$', '$$$$'],
  };

  const filters: PlatformFilter[] = [workType, age, potentialEarnings];

  const fdata: PlatformData[] = [...Array(5)].map(
    () =>
      ({
        title: 'Firefox',
        description: '',
        categories: ['Browser', 'Mammal'],
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
        tags: ['Small Business', '18+', '$$$', 'Animal'],
        votes: 26,
      } as PlatformData)
  );

  const tdata: PlatformData[] = [...Array(5)].map(
    () =>
      ({
        title: 'Tools',
        description: '',
        categories: ['Browser', 'Mammal'],
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
        tags: ['Small Business', '18+', '$$$', 'Animal'],
        votes: 26,
      } as PlatformData)
  );

  const [view, setView] = useState<HomeView>('platforms');

  console.log(fdata[1]);

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
      <PlatformSection
        platforms={fdata}
        filters={filters}
        display={view === 'platforms' ? 'initial' : 'none'}
      />
      <PlatformSection
        platforms={tdata}
        filters={filters}
        display={view === 'tools' ? 'initial' : 'none'}
      />
    </DefaultContainer>
  );
};

export default HomeScreen;
