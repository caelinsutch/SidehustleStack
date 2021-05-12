import React from 'react';
import { Box, Image, HStack, Text, BoxProps } from '@chakra-ui/react';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';
import { useNavigateToPlatform, useUpdateFilterQueryParam } from '@Hooks';
import VoteIcons from '@Components/VoteIcons';
import CategoryTypeSectionText from '@Components/CategoryTypeSectionText';

export type PlatformCardProps = {
  platform: GetAllPlatformsHomeQuery['allPlatforms'][0];
} & BoxProps;

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, ...props }) => {
  const { navigateToPlatform } = useNavigateToPlatform();
  const updateFilterQueryParam = useUpdateFilterQueryParam();

  const handleCardClick = () => {
    navigateToPlatform(platform.name);
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
      width="100%"
      {...props}
    >
      <Image
        src={platform.companyLogo}
        objectFit="contain"
        alt="logo"
        px={8}
        height="300px"
        alignSelf="center"
        cursor="pointer"
        onClick={handleCardClick}
        borderRadius="md"
        mx="auto"
      />
      <Box p={{ base: 4, xl: 8 }}>
        <HStack
          justifyContent="flex-start"
          alignContent="center"
          spacing="20px"
        >
          <VoteIcons initialUpvotes={platform.score} platformId={platform.id} />
          <Box overflow="hidden">
            <Text
              color="black"
              fontSize={{ base: '2xl', md: '3xl' }}
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{
                color: 'orange.500',
              }}
              onClick={handleCardClick}
              as="h4"
              isTruncated
            >
              {platform.name}
            </Text>
            <Box display="flex">
              <CategoryTypeSectionText
                onClick={() =>
                  updateFilterQueryParam('category', platform.category)
                }
                fontSize={{ base: 'xs', md: 'md' }}
                mr={2}
                as="h5"
              >
                {snakeToStartCase(platform.category)}
              </CategoryTypeSectionText>
              {platform.typeOfWork.length !== 0 && (
                <Text
                  display="flex"
                  overflowX="auto"
                  color="orange.500"
                  fontSize={{ base: 'xs', md: 'md' }}
                  as="h5"
                >
                  {' '}
                  |
                  <Text
                    isTruncated
                    onClick={() =>
                      updateFilterQueryParam(
                        'typeOfWork',
                        platform.typeOfWork[0]
                      )
                    }
                    ml={2}
                  >
                    {snakeToStartCase(platform.typeOfWork[0])}
                    {platform.typeOfWork.length > 1 &&
                      ` + ${platform.typeOfWork.length}`}
                  </Text>
                </Text>
              )}
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default PlatformCard;
