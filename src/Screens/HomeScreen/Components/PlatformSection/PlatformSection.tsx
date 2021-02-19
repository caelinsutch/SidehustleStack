import React, { useState } from 'react';
import { Text, Box, Flex, BoxProps, Input } from '@chakra-ui/react';
import { FilterDropdown, PlatformCardList } from '@Components';
import { PlatformData } from '@Screens/HomeScreen';

export type PlatformSectionProps = {
  platforms: PlatformData[];
} & BoxProps;

const PlatformSection: React.FC<PlatformSectionProps> = ({
  platforms,
  ...props
}) => {
  const [search, setSearch] = useState<string>('');
  const [tags, setTags] = useState<string[]>(['']);

  const handleFilter = (card: PlatformData): boolean => {
    for (let i = 0; i < tags.length; i += 1) {
      if (!card.tags.includes(tags[i])) return false;
    }
    if (search.length === 0) return true;
    const searchExp = new RegExp(`${[...search].join('*')}*`, 'i');
    return `${card.title.match(searchExp)}`.length >= search.length;
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
          <FilterDropdown />
          <FilterDropdown />
          <FilterDropdown />
          <Input
            key="platformsearch"
            as="input"
            borderRadius="2xl"
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
