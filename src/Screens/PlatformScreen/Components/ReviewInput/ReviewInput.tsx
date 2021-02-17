import React, { useState } from 'react';
import { Box, useToast, Button, Textarea } from '@chakra-ui/react';
import { StarInput } from '@Components';

export type ReviewInputProps = {
  platformId: string;
  platformName: string;
};

const ReviewInput: React.FC<ReviewInputProps> = ({ platformName }) => {
  const [stars, setStars] = useState(0);
  const [text, setText] = useState('');
  const toast = useToast();

  const handleSubmit = () => {
    setTimeout(() => {
      toast({
        status: 'success',
        title: 'Review Submitted!',
        description: 'Our team will review and publish in 2-3 days',
      });
      setText('');
      setStars(0);
    }, 500);
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
        onStarClick={(i) => setStars(i + 1)}
        isClickable
      />
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        mt={4}
        placeholder={`Have you sold something recently on ${platformName}? How’d it go? Did you ever encounter any problems with their website? How did customer service treat you?`}
      />
      <Button mt={4} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default ReviewInput;
