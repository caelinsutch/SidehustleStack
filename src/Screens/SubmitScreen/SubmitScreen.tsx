import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { PageWrapper, TextLink } from '@Components';
import { TopSection } from '@Screens/SubmitScreen/Components';

const SubmitScreen: React.FC = () => (
  <PageWrapper>
    <Box textAlign="center">
      <Text fontSize="3xl" fontWeight="semibold">
        Submit Screen
      </Text>
    </Box>
    <TopSection />
  </PageWrapper>
);

export default SubmitScreen;
