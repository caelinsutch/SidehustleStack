import React from 'react';
import { gql } from '@apollo/client';
import { usePlatformQuery } from '@GraphQL/types';
import {
  Box,
  Image,
  Divider,
  VStack,
  HStack,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import { VoteIcons } from '@Components/index';

export type PlatformCardProps = {
  platformId: string;
  upvotes: number;
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

const PlatformCard: React.FC<PlatformCardProps> = ({ platformId, upvotes }) => {
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

  const onUpvote = (i: number) => {};

  return (
    <VStack
      w="400px"
      h="520px"
      p="40px"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      order={upvotes}
      alignItems="flex-start"
      spacing="10px"
    >
      <Image src={fdata.logo} boxSize="320px" alt="logo" />
      <Divider orientation="horizontal" size="2px" color="black" />
      <HStack
        mt="40px"
        justifyContent="flex-start"
        alignContent="center"
        spacing="25px"
      >
        <VoteIcons status={1} onClick={onUpvote} upvotes={25} />
        <Flex
          ml="20px"
          flexDir="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing="10px"
        >
          <Text color="black" fontSize="28px">
            {fdata.title}
          </Text>
          <Text color="orange.400" fontSize="20px">
            {fdata.category.join(' | ')}
          </Text>
        </Flex>
      </HStack>
      <HStack flexWrap="wrap">
        {fdata.tags.map((item, index) => (
          <Button
            bg="orange.400"
            key={fdata.title + index}
            fontSize="16px"
            p="10px"
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
