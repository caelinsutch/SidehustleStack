import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { usePlatformQuery } from '@GraphQL/types';
import { Box, Image, VStack, HStack, Text, Button } from '@chakra-ui/react';
import { VoteIcons } from '@Components/index';

export type PlatformCardProps = {
  platformId: string;
};

export const query = gql`
  query Platform($platformId: ID!) {
    Platform(platformId: $platformId) {
      name
      description
    }
  }
`;

// https://i.imgur.com/pIfdoIW.gif

const PlatformCard: React.FC<PlatformCardProps> = ({ platformId }) => {
  const { loading, data } = usePlatformQuery({
    variables: {
      platformId,
    },
  });

  const { description, name } = data?.Platform ?? {};

  const fdata = {
    title: 'Firefox',
    category: ['Browser', 'Mammal'],
    logo: 'https://i.imgur.com/pIfdoIW.gif',
    tags: ['Small Business', '18+', 'WFH', '$$$'],
    upvotes: 26,
  };

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
      order={fdata.upvotes}
      alignItems="flex-start"
      justifyItems="flex-start"
    >
      <Image src={fdata.logo} alt="logo" boxSize="300px" />
      <Box w="320px" h="10px" borderTop="2px solid black" />
      <HStack
        justifyContent="flex-start"
        alignContent="center"
        spacing="20px"
        h="100px"
      >
        <VoteIcons status="down" onClick={onUpvote} upvotes={fdata.upvotes} />
        <VStack alignItems="flex-start" spacing="15px">
          <Text color="black" fontSize="28px" lineHeight="75%">
            {fdata.title}
          </Text>
          <Text color="orange.400" fontSize="20px" lineHeight="75%">
            {fdata.category.join(' | ')}
          </Text>
        </VStack>
      </HStack>
      <HStack flexWrap="wrap">
        {fdata.tags.map((item, index) => (
          <Button
            bg="orange.400"
            key={fdata.title + index}
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
