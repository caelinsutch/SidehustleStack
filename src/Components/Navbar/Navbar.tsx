import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Logo, TextLink } from '@Components';
import { navbarItems } from './Navbar.constants';

const Navbar: React.FC = () => (
  <Flex
    p={{ base: 2, md: 6 }}
    alignItems="center"
    justifyContent="space-between"
  >
    <Box>
      <NextLink href="/">
        <Logo />
      </NextLink>
    </Box>
    <Flex>
      {navbarItems.map(({ label, href }) => (
        <Box key={label} px={2}>
          <TextLink href={href}>{label}</TextLink>
        </Box>
      ))}
    </Flex>
    <Box>
      <Button colorScheme="orange" borderRadius="md">
        Upload a Platform
      </Button>
    </Box>
  </Flex>
);

export default Navbar;
