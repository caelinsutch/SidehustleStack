import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { StarInput } from '@Components';

export type ReviewCardProps = {
  author: string;
  body: string;
  numStars: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ author, body, numStars }) => (
  <Box boxShadow="base" borderRadius="md" p={4} backgroundColor="white">
    <StarInput numStarsFilled={numStars} />
    <Text fontWeight="semibold" mt={4}>
      {body}
    </Text>
    <Text fontWeight="semibold" mt={4} fontStyle="italic">
      {author}
    </Text>
  </Box>
);

export default ReviewCard;
