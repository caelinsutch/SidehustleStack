import React from 'react';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PageWrapper } from '@Components';

const HomeBanner: React.FC = () => (
  <Box textAlign="center" mt={12}>
    <Text fontSize="3xl" fontWeight="bold" as="h1">
      Side Hustle Stack is a free resource to find platform-based work, ranging
      from gig work and side hustles to platforms that help you start a small
      business that can grow
    </Text>
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" as="h4">
        Invite us into your inbox
      </Text>
      <Box maxW="500px" mx="auto" mt={4}>
        <iframe
          title="Substack form embed"
          src="https://sidehustlestack.substack.com/embed"
          width="480"
          height="120"
          frameBorder="0"
          scrolling="no"
        />
      </Box>
    </Box>
  </Box>
);

export default HomeBanner;
