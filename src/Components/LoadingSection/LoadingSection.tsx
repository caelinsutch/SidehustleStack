import React from 'react';
import { Box, Center, Spinner, SpinnerProps } from '@chakra-ui/react';

export type LoadingSectionProps = SpinnerProps;

const LoadingSection: React.FC<LoadingSectionProps> = (props) => (
  <Center w="100%" h="100%" minH="100vh">
    <Box>
      <Spinner w={10} h={10} color="orange.400" {...props} thickness="4px" />
    </Box>
  </Center>
);

export default LoadingSection;
