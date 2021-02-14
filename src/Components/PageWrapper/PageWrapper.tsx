import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@Components';

const PageWrapper: React.FC = ({ children }) => (
  <Box
    as="main"
    backgroundPosition="top"
    backgroundSize="contain"
    backgroundImage="url('submit-top-background.png');"
    backgroundRepeat="no-repeat"
  >
    <Navbar title="Nav" />
    <Box maxWidth="1200px" px={4} mx="auto">
      {children}
    </Box>
  </Box>
);

export default PageWrapper;
