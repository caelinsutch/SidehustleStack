import React from 'react';
import { PlatformData } from '@Screens/HomeScreen';
import { BoxProps, Flex, VStack, Box } from '@chakra-ui/react';
import { PlatformCard } from '@Components/index';
import { PlatformMvc } from '@GraphQL/types';

export type PlatformCardListProps = {
  cards: Pick<
    PlatformMvc,
    'name' | 'companyLogo' | 'platformId' | 'category' | 'tags'
  >[];
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
