import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const HomeBanner: React.FC = () => (
  <Box textAlign="center" mt={12}>
    <Text fontSize="3xl" fontWeight="bold" as="h1" color="orange.400">
      Side Hustle Stack is a free resource to find platform-based work, ranging
      from gig work and side hustles to platforms that help you start a small
      business that can grow
    </Text>
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" as="h4">
        Invite us into your inbox
      </Text>
      <Box mt={4}>
        <iframe
          title="Substack form embed"
          src="https://sidehustlestack.substack.com/embed"
          width="300"
          height="120"
          frameBorder="0"
          scrolling="no"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default HomeBanner;
