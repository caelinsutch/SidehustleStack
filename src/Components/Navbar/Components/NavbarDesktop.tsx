import { Box, Button, Flex } from '@chakra-ui/react';
import { DefaultContainer, Logo, TextLink } from '@Components';
import NextLink from 'next/link';
import { navbarItems } from '@Components/Navbar/Navbar.constants';
import React from 'react';
import { withRouter } from 'next/router';

const NavbarDesktop = withRouter(({ router }) => (
  <Box
    position="absolute"
    w="100vw"
    display={{ base: 'none', md: 'inherit' }}
    as="nav"
  >
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
              <TextLink
                next
                href={href}
                color={router.pathname === href ? 'orange.500' : 'gray.700'}
              >
                {label}
              </TextLink>
            </Box>
          ))}
        </Flex>
        <Flex flex={1} justifyContent="flex-end">
          <NextLink href="/submit">
            <Button colorScheme="orange" borderRadius="md" ml="auto">
              Submit a Platform
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </DefaultContainer>
  </Box>
));

export default NavbarDesktop;
