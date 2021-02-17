import React from 'react';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export type HomeBannerProps = {
  onEmailSubmit: (email: string) => void;
};

const HomeBanner: React.FC<HomeBannerProps> = ({ onEmailSubmit }) => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const toast = useToast();

  const onSubmit = (data) => {
    onEmailSubmit(data.email);
  };

  const onError = (e) => {
    toast({
      status: 'error',
      title: e?.email?.message,
    });
  };

  return (
    <Box textAlign="center" mt={12}>
      <Text fontSize="3xl" fontWeight="bold">
        Side Hustle Stack is a completely free resource to find platform-based
        work, ranging from gig work and side hustles to platforms that help you
        start a small business that can grow
      </Text>
      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">
          Invite us into your inbox
        </Text>
        <Flex
          maxW="500px"
          mx="auto"
          mt={4}
          as="form"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Input
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            name="email"
            placeholder="Enter your email address"
            backgroundColor="white"
            borderRadius="2xl"
            boxShadow="md"
            _focus={{
              boxShadow: 'md',
            }}
          />
          <Button type="submit" ml={2}>
            Subscribe
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeBanner;
