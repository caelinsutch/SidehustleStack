import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { DefaultContainer } from '@Components';
import { ReviewCard } from '@Screens/PlatformScreen/Components';

export type Review = {
  body: string;
  numStars: number;
  author: string;
};

export type ReviewSectionProps = {
  reviews: Review[];
};

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const reviewAverage =
    reviews.reduce((sum, curr) => sum + curr.numStars, 0) / reviews.length;

  return (
    <Box
      as="section"
      backgroundImage="url('../platform-review-section-background.png')"
      mt={4}
      py={40}
    >
      <DefaultContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Community Reviews
          </Text>
          <Box textAlign="center">
            <Text color="orange.400" fontWeight="bold" fontSize="4xl" mx="auto">
              {reviewAverage.toFixed(1)}{' '}
              <Text color="gray.700" fontSize="lg" display="inline-block">
                /5
              </Text>
            </Text>
            <Text color="gray.500" fontWeight="semibold" fontSize="sm">
              of {reviews.length} review(s)
            </Text>
          </Box>
        </Flex>
        <Box mt={15}>
          {reviews.map((review) => (
            <ReviewCard key={review.body} {...review} />
          ))}
        </Box>
      </DefaultContainer>
    </Box>
  );
};

export default ReviewSection;
