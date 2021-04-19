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
import { snakeToStartCase } from '@Utils';
import { useUpdateFilterQueryParam } from '@Hooks';
import VoteIcons from '@Components/VoteIcons';

export type PlatformCardProps = {
  platform: GetAllPlatformsHomeQuery['allPlatforms'][0];
} & BoxProps;

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, ...props }) => {
  const router = useRouter();
  const updateFilterQueryParam = useUpdateFilterQueryParam();

  const handleCardClick = () => {
    router.push(`/platform/${platform.id}`);
  };

  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
      }}
      transition="all 0.4s ease"
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
        objectFit="cover"
        alt="logo"
        width="100%"
        height="250px"
        alignSelf="center"
        cursor="pointer"
        onClick={handleCardClick}
        borderRadius="md"
      />
      <Box p={{ base: 4, xl: 8 }}>
        <HStack
          justifyContent="flex-start"
          alignContent="center"
          spacing="20px"
        >
          <VoteIcons initialUpvotes={platform.score} platformId={platform.id} />
          <Box>
            <Text
              color="black"
              fontSize={{ base: '2xl', md: '3xl' }}
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{
                color: 'orange.400',
              }}
              onClick={handleCardClick}
              as="h4"
            >
              {platform.name}
            </Text>
            <Text display="flex" isTruncated>
              <Text
                color="orange.400"
                transition="all 0.2s ease"
                _hover={{
                  color: 'orange.300',
                }}
                cursor="pointer"
                onClick={() =>
                  updateFilterQueryParam('category', platform.category)
                }
                fontSize={{ base: 'xs', md: 'md' }}
                isTruncated
                mr={2}
                as="h5"
              >
                {snakeToStartCase(platform.category)}
              </Text>
              {platform.typeOfWork.map((type) => (
                <>
                  <Text
                    color="orange.400"
                    mr={2}
                    fontSize={{ base: 'xs', md: 'md' }}
                  >
                    |
                  </Text>
                  <Text
                    color="orange.400"
                    fontSize={{ base: 'xs', md: 'md' }}
                    transition="all 0.2s ease"
                    _hover={{
                      color: 'orange.300',
                    }}
                    cursor="pointer"
                    mr={2}
                    onClick={() => updateFilterQueryParam('typeOfWork', type)}
                    isTruncated
                    as="h5"
                  >
                    {snakeToStartCase(type)}
                  </Text>
                </>
              ))}
            </Text>
          </Box>
        </HStack>
        <Wrap mt={4}>
          {platform.tags &&
            platform.tags.map((item, index) => (
              <WrapItem key={platform.name + index}>
                <Button
                  bg="orange.400"
                  borderRadius="md"
                  fontSize={{ base: 'sm', md: 'md' }}
                  px={{ base: 2, md: 3 }}
                  py={{ base: 1, md: 2 }}
                  h={{ base: 26, md: '36px' }}
                  style={{
                    marginInlineStart: '0px',
                  }}
                  as="h5"
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
