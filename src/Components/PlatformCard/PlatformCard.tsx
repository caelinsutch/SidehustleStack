import React from 'react';
import {
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Button,
  BoxProps,
} from '@chakra-ui/react';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';
import { useRouter } from 'next/router';
import { VoteIcons } from '@Components';
import useOnUpvote from '@Components/PlatformCard/useOnUpvote';

export type PlatformCardProps = {
  platform: GetAllPlatformsHomeQuery['allPlatforms'][0];
} & BoxProps;

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, ...props }) => {
  const router = useRouter();
  const [score, vote, onVote] = useOnUpvote(platform.id, platform.score);

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
          <VoteIcons status={vote} onClick={onVote} upvotes={score} />
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
