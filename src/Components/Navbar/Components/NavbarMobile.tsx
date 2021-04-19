import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { DefaultContainer, Logo, TextLink } from '@Components';
import NextLink from 'next/link';
import { navbarItems } from '@Components/Navbar/Navbar.constants';
import { withRouter } from 'next/router';

const NavbarMobile = withRouter(({ router }) => (
  <Box
    position="absolute"
    w="100vw"
    display={{ base: 'inherit', md: 'none' }}
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
        <Flex flex={1} justifyContent="flex-end">
          <NextLink href="/submit">
            <Button colorScheme="orange" borderRadius="md">
              Upload a Platform
            </Button>
          </NextLink>
        </Flex>
      </Flex>
      <Flex flex={1} justifyContent="space-between" mt="4" overflow="scroll">
        {navbarItems.map(({ label, href }) => (
          <Box key={label} px={2}>
            <TextLink
              whiteSpace="nowrap"
              next
              href={href}
              fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              color={router.pathname === href ? 'orange.500' : 'gray.700'}
            >
              {label}
            </TextLink>
          </Box>
        ))}
      </Flex>
    </DefaultContainer>
  </Box>
));

export default NavbarMobile;
