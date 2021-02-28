import React from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';
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
  <Flex
    flexDir="row"
    justifyContent="space-between"
    justifyItems="space-between"
    wrap="wrap"
    {...props}
  >
    {cards.map((card, index) => (
      <PlatformCard
        platform={card}
        order={card.score}
        key={card.name + index}
        w="30%"
        minWidth="130px"
        h="auto"
        mt="20px"
      />
    ))}
  </Flex>
);

export default PlatformCardList;
