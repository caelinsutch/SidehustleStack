import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export type ReviewCardProps = {
  author: string;
  body: string;
  numStars: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ author, body, numStars }) => (
  <Box boxShadow="base" borderRadius="md" p={4} backgroundColor="white">
    <Flex>
      {Array.from(Array(5)).map((_x, i) => (
        <Icon
          key={`star - ${Date.now()} - ${i}`}
          as={i < numStars ? AiFillStar : AiOutlineStar}
          w={7}
          h={7}
          color={i < numStars ? 'orange.400' : 'gray.700'}
        />
      ))}
    </Flex>
    <Text fontWeight="semibold" mt={4}>
      {body}
    </Text>
    <Text fontWeight="semibold" mt={4} fontStyle="italic">
      {author}
    </Text>
  </Box>
);

export default ReviewCard;
