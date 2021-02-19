import React from 'react';
import { PlatformData } from '@Screens/HomeScreen';
import { BoxProps, Flex, VStack, Box } from '@chakra-ui/react';
import { PlatformCard } from '@Components/index';

export type PlatformCardListProps = {
  cards: PlatformData[];
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
        card={card}
        order={card.votes}
        key={card.title + index}
        w="30%"
        minWidth="130px"
        h="auto"
        mt="20px"
      />
    ))}
  </Flex>
);

export default PlatformCardList;
