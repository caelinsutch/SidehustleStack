import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

export type DefaultContainerProps = BoxProps;

const DefaultContainer: React.FC<DefaultContainerProps> = ({
  children,
  ...props
}) => (
  <Box maxWidth="1200px" px={{ base: 6, md: 12 }} mx="auto" {...props}>
    {children}
  </Box>
);

export default DefaultContainer;
