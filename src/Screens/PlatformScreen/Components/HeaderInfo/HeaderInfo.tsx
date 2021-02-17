import React from 'react';
import { Box, Text, HStack, Tag, Flex, Button } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

export type HeaderInfoProps = {
  name: string;
  tags: string[];
  signUpLink: string;
};

const HeaderInfo: React.FC<HeaderInfoProps> = ({ name, tags, signUpLink }) => (
  <Box mt={4} as="section">
    <Text fontSize="4xl" fontWeight="bold">
      {name}
    </Text>
    <Flex mt={4} justifyContent="space-between" alignItems="center">
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
