import React, { useState } from 'react';
import { Text, Box, Flex, BoxProps, Input } from '@chakra-ui/react';
import { FilterDropdown, PlatformCardList } from '@Components';
import {
  PlatformData,
  PlatformFilter,
  PlatformTags,
} from '@Screens/HomeScreen';

export type PlatformSectionProps = {
  platforms: PlatformData[];
  filters: PlatformFilter[];
} & BoxProps;

const PlatformSection: React.FC<PlatformSectionProps> = ({
  platforms,
  filters,
  ...props
}) => {
  const [search, setSearch] = useState<string>('');
  const [tags, setTags] = useState<PlatformTags[]>([]);

  const handleFilter = (card: PlatformData): boolean => {
    for (let i = 0; i < tags.length; i += 1) {
      if (!card.tags.includes(tags[i])) return false;
    }
    console.log(search);
    if (search.length === 0) return true;
    const searchExp = new RegExp(`${[...search].join('*')}*`, 'i');
    return `${card.title.match(searchExp)}`.length >= search.length;
  };

  const modifyFilter = (tag: PlatformTags) => {
    if (tags.includes(tag)) {
      setTags(
        tags.map((thisTag) => {
          if (thisTag !== tag) {
            return thisTag;
          }
        })
      );
    } else {
      tags.push(tag);
    }
  };

  return (
    <Box {...props}>
      <Text fontSize="40px">Sponsored Platforms</Text>
      <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
      <Text fontSize="40px" mt="250px">
        Sponsored Platforms
      </Text>
      <PlatformCardList cards={platforms.slice(0, 3)} w="100%" mt="40px" />
      <Flex justifyContent="space-between" mt="85px">
        <Text fontSize="40px">Sponsored Platforms</Text>
        <Flex justifyContent="flex-end">
          {filters.map((filter) => (
            <FilterDropdown
              items={filter.options}
              name={filter.name}
              onSelect={() => console.log('items')}
              selected=""
              mr="10px"
            />
          ))}
          <Input
            key="platformsearch"
            as="input"
            borderRadius="2xl"
            h="44px"
            boxShadow="md"
            name="search"
            placeholder="search..."
            onChange={(event) => setSearch(event.target.value)}
            _focus={{
              boxShadow: 'md',
            }}
          />
        </Flex>
      </Flex>
      <PlatformCardList
        cards={platforms.filter((card) => handleFilter(card))}
        w="100%"
        mt="40px"
      />
    </Box>
  );
};

export default PlatformSection;
