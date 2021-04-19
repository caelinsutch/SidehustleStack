import React from 'react';
import {
  Box,
  Text,
  HStack,
  Tag,
  Flex,
  Button,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';
import { snakeToStartCase } from '@Utils';
import { CategoryTypeSection } from '@Components';

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
    <Flex mt={4} alignItems="center" display={{ base: 'box', md: 'flex' }}>
      <CategoryTypeSection typeOfWork={typeOfWork} category={category} mt={2} />
      <Wrap mt={2} ml={{ base: 0, md: 4 }}>
        {tags.map((tag, i) => (
          <WrapItem key={tag + i}>
            <Tag colorScheme="orange" variant="solid" size="lg">
              {tag}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
      <Spacer />
      <Button
        mt={2}
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
