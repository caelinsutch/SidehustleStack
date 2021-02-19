import React from 'react';
import { Text, Box, BoxProps } from '@chakra-ui/react';
import { PlatformCardList } from '@Components';
import { PlatformData } from '@Screens/HomeScreen';

export type PlatformSectionProps = {
  platforms: PlatformData[];
} & BoxProps;

const PlatformSection: React.FC<PlatformSectionProps> = ({
  platforms,
  ...props
}) => (
  <Box {...props}>
    <Text fontSize="40px">Sponsored Platforms</Text>
    <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
    <Text fontSize="40px">Sponsored Platforms</Text>
    <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
    <Text fontSize="40px">Sponsored Platforms</Text>
    <PlatformCardList cards={platforms} w="100%" mt="40px" />
  </Box>
);

export default PlatformSection;
