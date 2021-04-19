import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { HomeView } from '@Screens/HomeScreen/HomeScreen';

export type ViewSelectorProps = {
  view: HomeView;
  self: HomeView;
  onClick: () => void;
} & TextProps;

const ViewSelector: React.FC<ViewSelectorProps> = ({
  view,
  self,
  onClick,
  ...props
}) => (
  <Text
    fontStyle="bold"
    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
    color={view === self ? 'orange.500' : 'gray.200'}
    _hover={{
      color: view === self ? 'orange.600' : 'gray.300',
    }}
    transition="all 0.2s ease"
    onClick={() => onClick()}
    userSelect="none"
    cursor="pointer"
    {...props}
  >
    {self}
  </Text>
);

export default ViewSelector;
