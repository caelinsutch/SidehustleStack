import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Navbar } from '@Components';

export type PageWrapperProps = {
  backgroundImage?: BoxProps['backgroundImage'];
  backgroundPosition?: BoxProps['backgroundPosition'];
  backgroundSize?: BoxProps['backgroundSize'];
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, ...props }) => (
  <Box
    as="main"
    backgroundPosition="top"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
    {...props}
  >
    <Navbar />
    <Box mx="auto">{children}</Box>
  </Box>
);

export default PageWrapper;
