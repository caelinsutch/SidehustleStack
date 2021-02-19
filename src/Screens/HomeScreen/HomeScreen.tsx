import React from 'react';
import { DefaultContainer, PlatformCard, PlatformCardList } from '@Components';
import { Text, Flex } from '@chakra-ui/react';
import { HomeBanner } from './Components';

export type PlatformData = {
  title: string;
  description: string;
  categories: string[];
  logo: string;
  tags: string[];
  votes: number;
};

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

  console.log(fdata[1]);

  return (
    <DefaultContainer as="section">
      <HomeBanner onEmailSubmit={(email) => console.log(email)} />
      <Flex flexDir="column" alignContent="center">
        <Text fontSize="40px">Sponsored Platforms</Text>
        <PlatformCardList cards={fdata.slice(0, 3)} w="100%" />
        <Text fontSize="40px">Sponsored Platforms</Text>
        <PlatformCardList cards={fdata.slice(0, 3)} w="100%" />
        <Text fontSize="40px">Sponsored Platforms</Text>
        <PlatformCardList cards={fdata} w="1300px" />
      </Flex>
    </DefaultContainer>
  );
};

export default HomeScreen;
