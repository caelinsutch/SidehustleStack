import React, { useState } from 'react';
import { Box, useToast, Button, Textarea } from '@chakra-ui/react';
import { StarInput } from '@Components';
import { gql } from '@apollo/client';
import { useAddReviewMutation } from '@GraphQL/types';

export type ReviewInputProps = {
  platformId: string;
  platformName: string;
};

export const query = gql`
  mutation AddReview(
    $platformId: ID!
    $rating: Int!
    $description: String!
    $author: String!
  ) {
    addReview(
      platformId: $platformId
      review: { rating: $rating, description: $description, author: $author }
    ) {
      platformId
      reviews {
        description
        author
        rating
      }
    }
  }
`;

const ReviewInput: React.FC<ReviewInputProps> = ({
  platformId,
  platformName,
}) => {
  const [stars, setStars] = useState<number>();
  const [text, setText] = useState<string>();
  const toast = useToast();
  const [addReview] = useAddReviewMutation();

  const handleSubmit = () => {
    addReview({
      variables: {
        description: text,
        rating: stars,
        author: 'Anonymous',
        platformId,
      },
    })
      .then(() => {
        toast({
          status: 'success',
          title: 'Review Submitted!',
          description: 'Our team will review and publish in 2-3 days',
        });
        setText('');
        setStars(0);
      })
      .catch((e) => {
        console.error(e);
        toast({
          status: 'error',
          title: 'Error submitting review',
          description: 'If this keeps happening contact us',
        });
      });
  };

  return (
    <Box
      boxShadow="base"
      borderRadius="md"
      p={4}
      backgroundColor="white"
      my={4}
    >
      <StarInput
        numStarsFilled={stars}
        onStarClick={(i) => setStars((i || 0) + 1)}
        isClickable
      />
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        mt={4}
        placeholder={`Have you sold something recently on ${platformName}? How’d it go? Did you ever encounter any problems with their website? How did customer service treat you?`}
      />
      <Button mt={4} onClick={handleSubmit} isDisabled={!(stars && text)}>
        Submit
      </Button>
    </Box>
  );
};

export default ReviewInput;
