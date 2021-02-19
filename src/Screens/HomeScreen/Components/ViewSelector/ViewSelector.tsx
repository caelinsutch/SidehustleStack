import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { HomeView } from '@Screens/HomeScreen/HomeScreen';

export type ViewSelectorProps = {
  view: HomeView;
  self: HomeView;
  onClick: (view: HomeView) => void;
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
    color={view === self ? 'orange.400' : 'grey.200'}
    _hover={{
      color: view === self ? 'orange.300' : 'grey.100',
      borderShadow: 'md',
    }}
    onClick={() => onClick(self)}
    {...props}
  >
    {self.charAt(0).toUpperCase + self.slice(1)}
  </Text>
);

export default ViewSelector;
