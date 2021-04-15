import React, { useState } from 'react';
import { Box, useToast, Button, Textarea, Input } from '@chakra-ui/react';
import { StarInput } from '@Components';
import { gql } from '@apollo/client';
import { useAddReviewMutation } from '@GraphQL/types';

export type ReviewInputProps = {
  id: string;
  platformName: string;
};

export const query = gql`
  mutation AddReview(
    $id: ID!
    $rating: Int!
    $description: String!
    $author: String!
  ) {
    addReview(
      id: $id
      review: { rating: $rating, description: $description, author: $author }
    ) {
      id
      reviews {
        description
        author
        rating
      }
    }
  }
`;

const ReviewInput: React.FC<ReviewInputProps> = ({ id, platformName }) => {
  const [rating, setRating] = useState<number>();
  const [description, setDescription] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const toast = useToast();
  const [addReview] = useAddReviewMutation();

  const handleSubmit = () => {
    addReview({
      variables: {
        description,
        rating,
        author,
        id,
      },
    })
      .then(() => {
        toast({
          status: 'success',
          title: 'Review Submitted!',
          description: 'Our team will review and publish in 2-3 days',
        });
        setDescription('');
        setRating(0);
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
        numStarsFilled={rating}
        onStarClick={(i) => setRating((i || 0) + 1)}
        isClickable
      />
      <Input
        mt={4}
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mt={4}
        placeholder={`Have you sold something recently on ${platformName}? How’d it go? Did you ever encounter any problems with their website? How did customer service treat you?`}
      />
      <Button
        mt={4}
        onClick={handleSubmit}
        isDisabled={!(rating && description)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ReviewInput;
