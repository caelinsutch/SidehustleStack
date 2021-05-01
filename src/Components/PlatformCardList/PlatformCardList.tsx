import React from 'react';
import { BoxProps, GridItem, SimpleGrid } from '@chakra-ui/react';
import { PlatformCard } from '@Components/index';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';

export type PlatformCardListProps = {
  cards: GetAllPlatformsHomeQuery['allPlatforms'];
} & BoxProps;

const PlatformCardList: React.FC<PlatformCardListProps> = ({
  cards,
  children,
  ...props
}) => (
  <SimpleGrid
    maxW="100%"
    columns={{ base: 1, md: 2, '2xl': 3 }}
    spacing={6}
    {...props}
  >
    {cards.length > 0
      ? cards.map((card, index) => (
          <GridItem key={card.name + index} minH={0} minW={0}>
            <PlatformCard platform={card} order={card.score} />
          </GridItem>
        ))
      : 'No Platforms :('}
  </SimpleGrid>
);

export default PlatformCardList;
