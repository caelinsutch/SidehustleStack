import React, { useState } from 'react';
import {
  Text,
  Box,
  Flex,
  BoxProps,
  Input,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { FilterDropdown, PlatformCardList } from '@Components';
import { HomeView, PlatformFilter } from '@Screens/HomeScreen';
import { GetAllPlatformsHomeQuery } from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';
import { useUpdateFilterQueryParam } from '@Hooks';
import { activeFiltersAtom } from '@Recoil';

export type PlatformSectionProps = {
  platforms: GetAllPlatformsHomeQuery['allPlatforms'];
  filters: PlatformFilter[];
  type: HomeView;
} & BoxProps;

const PlatformSection: React.FC<PlatformSectionProps> = ({
  platforms,
  filters,
  type,
  ...props
}) => {
  const [search, setSearch] = useState<string>('');

  const activeFilters = useRecoilValue(activeFiltersAtom);
  const updateFilterQueryParam = useUpdateFilterQueryParam();

  const handleDropdownSelect = (key: string, selectedItem: string) => {
    updateFilterQueryParam(key, selectedItem);
  };

  const filteredPlatforms = platforms
    .filter((platform) => {
      if (Object.keys(activeFilters).length === 0) return true;
      return Object.keys(activeFilters).every((filterKey) => {
        if (platform[filterKey] && activeFilters[filterKey] !== 'All') {
          return (
            snakeToStartCase(platform[filterKey]) === activeFilters[filterKey]
          );
        }
        return true;
      });
    })
    .filter((platform) => {
      if (search.length === 0) return true;
      const searchExp = new RegExp(`${[...search].join('*')}*`, 'i');
      return `${platform.name.match(searchExp)}`.length >= search.length;
    });

  return (
    <Box {...props}>
      <Text fontSize="3xl" textAlign={{ base: 'center', sm: 'left' }} as="h2">
        Sponsored {type}
      </Text>
      <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
      <Text
        fontSize="3xl"
        mt={16}
        textAlign={{ base: 'center', sm: 'left' }}
        as="h2"
      >
        Trending {type}: February 2021
      </Text>
      <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
      <Box mt={16}>
        <Text fontSize="3xl" textAlign={{ base: 'center', sm: 'left' }} as="h2">
          All {type}
        </Text>
        <Flex
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Wrap>
            {filters.map((filter) => (
              <WrapItem key={filter.name}>
                <FilterDropdown
                  items={filter.options}
                  name={filter.name}
                  onSelect={(item) => handleDropdownSelect(filter.key, item)}
                  selected={activeFilters[filter.key]}
                  mr={2}
                />
              </WrapItem>
            ))}
          </Wrap>
          <Input
            key="platformsearch"
            as="input"
            maxW="300px"
            borderRadius="2xl"
            h="44px"
            boxShadow="md"
            name="search"
            placeholder="Search..."
            onChange={(event) => setSearch(event.target.value)}
            _focus={{
              boxShadow: 'md',
            }}
          />
        </Flex>
      </Box>
      <PlatformCardList cards={filteredPlatforms} w="100%" mt="40px" />
    </Box>
  );
};

export default PlatformSection;
