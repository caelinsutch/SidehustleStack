import React, { useState } from 'react';
import {
  BoxProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { IoTriangle } from 'react-icons/io5';

export type FilterDropdownProps = {
  name: string;
  selected: string;
  items: string[];
  onSelect: (action: string) => void;
} & BoxProps;

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  name,
  selected,
  items,
  onSelect,
  ...props
}) => (
  <Menu {...props}>
    <MenuButton as={Button} rightIcon={IoTriangle} h="44px" mr="10px">
      <b>{name}</b>
      {selected === '' ? '' : ` - ${selected}`}
    </MenuButton>
    <MenuList>
      {items.map((item, index) => (
        <MenuItem key={`${name}-${item}-${index}`}>
          {selected === item ? <b>{item}</b> : item}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default FilterDropdown;
