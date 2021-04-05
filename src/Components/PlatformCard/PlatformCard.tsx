import React from 'react';
import {
  Box,
  Image,
  HStack,
  Text,
  Button,
  BoxProps,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';
import { useRouter } from 'next/router';
import { VoteIcons } from '@Components';
import useOnUpvote from '@Components/PlatformCard/useOnUpvote';
import { snakeToStartCase } from '@Utils';

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
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="md"
      alignItems="flex-start"
      justifyItems="flex-start"
      overflow="none"
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
        borderRadius="md"
      />
      <Box p={8}>
        <HStack
          justifyContent="flex-start"
          alignContent="center"
          spacing="20px"
        >
          <VoteIcons status={vote} onClick={onVote} upvotes={score} />
          <Box>
            <Text
              color="black"
              fontSize="3xl"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{
                color: 'orange.400',
              }}
              onClick={handleCardClick}
            >
              {platform.name}
            </Text>
            <Text color="orange.400" fontSize="large" isTruncated>
              {snakeToStartCase(platform.category)} |{' '}
              {snakeToStartCase(platform.typeOfWork)}
            </Text>
          </Box>
        </HStack>
        <Wrap mt={4}>
          {platform.tags &&
            platform.tags.map((item, index) => (
              <WrapItem key={platform.name + index}>
                <Button
                  bg="orange.400"
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
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </Box>
  );
};

export default PlatformCard;
