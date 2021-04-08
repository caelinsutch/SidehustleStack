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
    fontSize="60px"
    color={view === self ? 'orange.400' : 'gray.200'}
    _hover={{
      color: view === self ? 'orange.300' : 'gray.100',
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
