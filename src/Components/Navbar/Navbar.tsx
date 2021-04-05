import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { DefaultContainer, Logo, TextLink } from '@Components';
import { navbarItems } from './Navbar.constants';

const Navbar: React.FC = () => (
  <Box position="absolute" w="100vw">
    <DefaultContainer py={6}>
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Box flex={1}>
          <NextLink href="/">
            <Box cursor="pointer">
              <Logo />
            </Box>
          </NextLink>
        </Box>
        <Flex flex={3} justifyContent="center">
          {navbarItems.map(({ label, href }) => (
            <Box key={label} px={2}>
              <TextLink href={href}>{label}</TextLink>
            </Box>
          ))}
        </Flex>
        <Flex flex={1} justifyContent="center">
          <NextLink href="/submit">
            <Button colorScheme="orange" borderRadius="md">
              Upload a Platform
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </DefaultContainer>
  </Box>
);

export default Navbar;
