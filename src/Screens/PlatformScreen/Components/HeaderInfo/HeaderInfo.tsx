import React from 'react';
import { Box, Text, HStack, Tag, Flex, Button } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';
import { snakeToStartCase } from '@Utils';

export type HeaderInfoProps = {
  name: string;
  tags: string[];
  category: string;
  typeOfWork: string[];
  signUpLink: string;
};

const HeaderInfo: React.FC<HeaderInfoProps> = ({
  name,
  tags,
  signUpLink,
  category,
  typeOfWork,
}) => (
  <Box mt={4} as="section">
    <Text fontSize="4xl" fontWeight="bold">
      {name}
    </Text>
    <Flex mt={4} justifyContent="space-between" alignItems="center">
      <Text display="flex" isTruncated>
        <Text
          color="orange.400"
          transition="all 0.2s ease"
          _hover={{
            color: 'orange.300',
          }}
          cursor="pointer"
          fontSize={{ base: 'xs', md: 'md' }}
          isTruncated
          mr={2}
          as="h3"
        >
          {category}
        </Text>
        {typeOfWork.map((type) => (
          <>
            <Text color="orange.400" mr={2} fontSize={{ base: 'xs', md: 'md' }}>
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
              isTruncated
              as="h3"
            >
              {snakeToStartCase(type)}
            </Text>
          </>
        ))}
      </Text>
      <HStack>
        {tags.map((tag) => (
          <Tag key="tag" colorScheme="orange" variant="solid" size="lg">
            {tag}
          </Tag>
        ))}
      </HStack>
      <Button
        colorScheme="orange"
        borderRadius="md"
        size="lg"
        rightIcon={<HiChevronRight />}
        as="a"
        target="_blank"
        href={signUpLink}
      >
        Sign up on {name}
      </Button>
    </Flex>
  </Box>
);

export default HeaderInfo;
