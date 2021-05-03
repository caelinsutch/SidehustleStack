import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { DefaultContainer } from '@Components';

const NotFoundScreen: React.FC = () => (
  <DefaultContainer pt={{ base: 160, md: 120 }}>
    <Center height="70vh">
      <Box textAlign="center">
        <Text as="h1" fontSize="5xl" fontWeight="bold" color="orange.500">
          404 Not Found
        </Text>
        <Text as="h2" mt={4} fontSize="2xl" color="gray.700">
          Unfortunately this page doesn't exist :*(
        </Text>
      </Box>
    </Center>
  </DefaultContainer>
);

export default NotFoundScreen;
