import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export type CategoryTypeSectionTextProps = TextProps;

const CategoryTypeSectionText: React.FC<CategoryTypeSectionTextProps> = (
  props
) => (
  <Text
    color="orange.500"
    transition="all 0.2s ease"
    _hover={{
      color: 'orange.500',
    }}
    cursor="pointer"
    fontSize="md"
    isTruncated
    mr={2}
    as="h3"
    {...props}
  />
);

export default CategoryTypeSectionText;
