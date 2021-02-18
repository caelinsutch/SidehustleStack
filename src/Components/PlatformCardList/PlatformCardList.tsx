import React from 'react';
import { PlatformData } from '@Screens/HomeScreen';
import { BoxProps, Flex } from '@chakra-ui/react';
import { PlatformCard } from '@Components/index';

export type PlatformCardListProps = {
  cards: PlatformData[];
} & BoxProps;

const PlatformCardList: React.FC<PlatformCardListProps> = ({
  cards,
  ...props
}) => (
  <Flex flexDir="row" justifyContent="space-around" spacing="30px" {...props}>
    {cards.map((card, index) => (
      <PlatformCard
        CardData={card}
        order={card.votes}
        key={card.title + index}
      />
    ))}
  </Flex>
);

export default PlatformCardList;
