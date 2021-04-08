import React, { useState } from 'react';
import {
  BoxProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

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
    <MenuButton as={Button} rightIcon={<BiChevronDown size={20} />}>
      {selected === 'All' ? name : selected}
    </MenuButton>
    <MenuList>
      {items.map((item, index) => (
        <MenuItem
          key={`${name}-${item}-${index}`}
          onClick={() => onSelect(item)}
        >
          {selected === item ? <b>{item}</b> : item}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default FilterDropdown;
