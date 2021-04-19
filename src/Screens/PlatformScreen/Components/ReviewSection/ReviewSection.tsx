import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { DefaultContainer } from '@Components';
import { ReviewCard, ReviewInput } from '@Screens/PlatformScreen/Components';
import { Review, Status } from '@GraphQL/types';

export type ReviewSectionProps = {
  reviews: Review[];
  id;
  platformName;
};

const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews,
  platformName,
  id,
}) => {
  const reviewAverage =
    reviews.reduce((sum, curr) => sum + curr.rating, 0) / reviews.length;

  return (
    <Box
      as="section"
      backgroundImage="url('../platform-review-section-background.png')"
      py={12}
    >
      <DefaultContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Community Reviews
          </Text>
          {reviews.length > 0 && (
            <Box textAlign="center">
              <Text
                color="orange.500"
                fontWeight="bold"
                fontSize="4xl"
                mx="auto"
              >
                {reviewAverage.toFixed(1)}{' '}
                <Text color="gray.700" fontSize="lg" display="inline-block">
                  /5
                </Text>
              </Text>
              <Text color="gray.500" fontWeight="semibold" fontSize="sm">
                of {reviews.length} review(s)
              </Text>
            </Box>
          )}
        </Flex>
        <Box mt={15}>
          <ReviewInput id={id} platformName={platformName} />
          {reviews
            .filter((r) => r.status === Status.Published)
            .map((review, i) => (
              <ReviewCard
                key={review.description + review.author + review.rating + i}
                {...review}
              />
            ))}
        </Box>
      </DefaultContainer>
    </Box>
  );
};

export default ReviewSection;
