import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { DefaultContainer, SubmitForm } from '@Components';
import { TopSection } from '@Screens/SubmitScreen/Components';

const SubmitScreen: React.FC = () => (
  <DefaultContainer as="section">
    <Box textAlign="center">
      <Text fontSize="4xl" fontWeight="semibold">
        Side Hustle Stack Submission
      </Text>
    </Box>
    <TopSection />
    <SubmitForm />
  </DefaultContainer>
);

export default SubmitScreen;
