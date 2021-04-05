import React from 'react';
import { Text, Box, Link } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box my={100}>
    <Text textAlign="center">
      Created by{' '}
      <Link href="https://caelinsutch.com" color="blue.400">
        Caelin Sutch
      </Link>{' '}
      and
      <Link href="https://github.com/skrider" color="blue.400">
        {' '}
        Stephen Krider
      </Link>
    </Text>
  </Box>
);

export default Footer;
