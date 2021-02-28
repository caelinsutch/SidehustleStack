import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { StarInput } from '@Components';

export type ReviewCardProps = {
  author: string;
  description: string;
  rating: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  description,
  rating,
}) => (
  <Box boxShadow="base" borderRadius="md" p={4} backgroundColor="white">
    <StarInput numStarsFilled={rating} />
    <Text fontWeight="semibold" mt={4}>
      {description}
    </Text>
    <Text fontWeight="semibold" mt={4} fontStyle="italic">
      {author}
    </Text>
  </Box>
);

export default ReviewCard;
