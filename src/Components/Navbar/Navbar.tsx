import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Logo, TextLink } from '@Components';
import { navbarItems } from '@Components/Navbar/Navbar.constants';

export type NavbarProps = {
  title: string;
};

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <Flex
    p={{ base: 2, md: 6 }}
    alignItems="center"
    justifyContent="space-between"
  >
    <Box>
      <Logo />
    </Box>
    <Flex>
      {navbarItems.map(({ label, href }) => (
        <Box key={label} px={2}>
          <TextLink href={href}>{label}</TextLink>
        </Box>
      ))}
    </Flex>
    <Box>
      <Button colorScheme="orange">Upload a Platform</Button>
    </Box>
  </Flex>
);

export default Navbar;
