import React, { useState } from 'react';
import {
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Button,
  BoxProps,
  useToast,
} from '@chakra-ui/react';
import {
  GetAllPlatformsHomeQuery,
  useUpvotePlatformMutation,
} from '@GraphQL/types';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { VoteIcons } from '@Components';
import { useLocalStorage } from '@Hooks';
import { VoteStatus } from '@Components/VoteIcons';

export type PlatformCardProps = {
  platform: GetAllPlatformsHomeQuery['allPlatforms'][0];
} & BoxProps;

export const query = gql`
  mutation UpvotePlatform($id: ID!, $down: Boolean) {
    vote(id: $id, down: $down) {
      score
    }
  }
`;

const platformScoreQuery = gql`
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      score
    }
  }
`;

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, ...props }) => {
  const router = useRouter();
  const toast = useToast();
  const [upvotePlatform] = useUpvotePlatformMutation({
    update: (
      store,
      {
        data: {
          vote: { score },
        },
      }
    ) => {
      store.writeQuery({
        query: platformScoreQuery,
        data: { score },
        variables: { score },
      });
    },
  });
  const [scoreToDisplay, setScoreToDisplay] = useState(platform.score);
  const [vote, setVote] = useLocalStorage<VoteStatus>(platform.id, null);

  const onUpvote = (action: VoteStatus) => {
    if (vote === action) {
      return;
    }
    setVote(action);
    upvotePlatform({
      variables: {
        id: platform.id,
        down: action === 'down',
      },
    })
      .then(
        ({
          data: {
            vote: { score },
          },
        }) => {
          toast({
            status: 'success',
            title: 'Platform upvoted!',
          });
          setScoreToDisplay(score);
        }
      )
      .catch((e) => {
        toast({
          status: 'error',
          title: 'Error upvoting platform',
        });
        console.error(e);
      });
  };

  const handleCardClick = () => {
    router.push(`/platform/${platform.id}`);
  };

  return (
    <VStack
      p={8}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      alignItems="flex-start"
      justifyItems="flex-start"
      {...props}
    >
      <Image
        src={platform.companyLogo}
        alt="logo"
        width="100%"
        height="250px"
        alignSelf="center"
        cursor="pointer"
        onClick={handleCardClick}
      />
      <Box w="100%" h="10px" borderTop="2px solid black" alignSelf="center" />
      <HStack
        justifyContent="flex-start"
        alignContent="center"
        spacing="20px"
        h="100px"
      >
        <div className="vote">
          <VoteIcons
            status={vote}
            onClick={onUpvote}
            upvotes={scoreToDisplay}
          />
        </div>
        <VStack alignItems="flex-start" spacing="15px">
          <Text
            color="black"
            fontSize="28px"
            lineHeight="75%"
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{
              color: 'orange.400',
            }}
            onClick={handleCardClick}
          >
            {platform.name}
          </Text>
          <Text color="orange.400" fontSize="20px" lineHeight="75%">
            {platform.category}
          </Text>
        </VStack>
      </HStack>
      <HStack w="100%" flexWrap="wrap" justifyContent="flex-start">
        {platform.tags &&
          platform.tags.map((item, index) => (
            <Button
              bg="orange.400"
              key={platform.name + index}
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
