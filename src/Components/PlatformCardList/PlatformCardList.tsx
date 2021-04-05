import React from 'react';
import { BoxProps, SimpleGrid } from '@chakra-ui/react';
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
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} {...props}>
    {cards.map((card, index) => (
      <PlatformCard
        platform={card}
        order={card.score}
        key={card.name + index}
      />
    ))}
  </SimpleGrid>
);

export default PlatformCardList;
