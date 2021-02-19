import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { usePlatformQuery } from '@GraphQL/types';
import {
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Button,
  BoxProps,
} from '@chakra-ui/react';
import { VoteIcons } from '@Components/index';
import { PlatformData } from 'src/Screens/HomeScreen';

export type PlatformCardProps = {
  card: PlatformData;
} & BoxProps;

export const query = gql`
  query Platform($platformId: ID!) {
    Platform(platformId: $platformId) {
      name
      description
    }
  }
`;

// https://i.imgur.com/pIfdoIW.gif

const PlatformCard: React.FC<PlatformCardProps> = ({ card, ...props }) => {
  const onUpvote = (action: 'up' | 'down') => {
    console.log(action);
  };

  return (
    <VStack
      p="40px"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      alignItems="flex-start"
      justifyItems="flex-start"
      {...props}
    >
      <Image
        src={card.logo}
        alt="logo"
        width="80%"
        height="auto"
        alignSelf="center"
      />
      <Box w="100%" h="10px" borderTop="2px solid black" alignSelf="center" />
      <HStack
        justifyContent="flex-start"
        alignContent="center"
        spacing="20px"
        h="100px"
      >
        <VoteIcons status="down" onClick={onUpvote} upvotes={card.votes} />
        <VStack alignItems="flex-start" spacing="15px">
          <Text color="black" fontSize="28px" lineHeight="75%">
            {card.title}
          </Text>
          <Text color="orange.400" fontSize="20px" lineHeight="75%">
            {card.categories.join(' | ')}
          </Text>
        </VStack>
      </HStack>
      <HStack w="100%" flexWrap="wrap" justifyContent="flex-start">
        {card.tags.map((item, index) => (
          <Button
            bg="orange.400"
            key={card.title + index}
            fontSize="16px"
            h="30px"
            pr="9px"
            pl="9px"
            borderRadius="md"
            mb="6px"
            mr="6px"
            style={{
              marginInlineStart: '0px',
            }}
          >
            {item}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default PlatformCard;
