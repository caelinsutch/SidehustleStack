import React, { useState } from 'react';
import { DefaultContainer, PlatformCard, PlatformCardList } from '@Components';
import { Text, Flex } from '@chakra-ui/react';
import { HomeBanner, PlatformSection } from './Components';

export type PlatformData = {
  title: string;
  description: string;
  categories: string[];
  logo: string;
  tags: string[];
  votes: number;
};

export type HomeView = 'platforms' | 'tools';

const HomeScreen: React.FC = () => {
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
      <Flex justifyContent="space-around">
        <Text
          fontStyle="bold"
          fontSize="60px"
          color={view === 'platforms' ? 'orange.400' : 'grey.200'}
          _hover={{
            color: view === 'platforms' ? 'orange.300' : 'grey.100',
            borderShadow: 'md',
          }}
          onClick={() => setView('platforms')}
        >
          Platforms
        </Text>
        <Text
          fontStyle="bold"
          fontSize="60px"
          color={view === 'tools' ? 'orange.400' : 'grey.200'}
          _hover={{
            color: view === 'tools' ? 'orange.300' : 'grey.100',
            borderShadow: 'md',
          }}
          onClick={() => setView('tools')}
        >
          Tools
        </Text>
      </Flex>
      <PlatformSection
        platforms={fdata}
        display={view === 'platforms' ? 'initial' : 'none'}
      />
      <PlatformSection
        platforms={tdata}
        display={view === 'tools' ? 'initial' : 'none'}
      />
    </DefaultContainer>
  );
};

export default HomeScreen;
