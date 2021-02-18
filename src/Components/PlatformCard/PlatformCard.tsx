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
  CardData: PlatformData;
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

const PlatformCard: React.FC<PlatformCardProps> = ({ CardData, ...props }) => {
  const onUpvote = (action: 'up' | 'down') => {
    console.log(action);
  };

  return (
    <VStack
      w="400px"
      h="520px"
      p="40px"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      alignItems="flex-start"
      justifyItems="flex-start"
      {...props}
    >
      <Image src={CardData.logo} alt="logo" boxSize="300px" />
      <Box w="320px" h="10px" borderTop="2px solid black" />
      <HStack
        justifyContent="flex-start"
        alignContent="center"
        spacing="20px"
        h="100px"
      >
        <VoteIcons status="down" onClick={onUpvote} upvotes={CardData.votes} />
        <VStack alignItems="flex-start" spacing="15px">
          <Text color="black" fontSize="28px" lineHeight="75%">
            {CardData.title}
          </Text>
          <Text color="orange.400" fontSize="20px" lineHeight="75%">
            {CardData.categories.join(' | ')}
          </Text>
        </VStack>
      </HStack>
      <HStack flexWrap="wrap">
        {CardData.tags.map((item, index) => (
          <Button
            bg="orange.400"
            key={CardData.title + index}
            fontSize="16px"
            h="32px"
            borderRadius="md"
          >
            {item}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default PlatformCard;
