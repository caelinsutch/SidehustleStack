import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { snakeToStartCase } from '@Utils';
import CategoryTypeSectionText from '@Components/CategoryTypeSectionText';

export type CategoryTypeSectionProps = {
  category: string;
  typeOfWork: string[];
} & TextProps;

const CategoryTypeSection: React.FC<CategoryTypeSectionProps> = ({
  category,
  typeOfWork,
  ...props
}) => (
  <Text display="flex" isTruncated as="div" {...props}>
    <CategoryTypeSectionText>
      {snakeToStartCase(category)}
    </CategoryTypeSectionText>
    {typeOfWork.map((type) => (
      <>
        <Text color="orange.400" mr={2} fontSize="md">
          |
        </Text>
        <CategoryTypeSectionText>
          {snakeToStartCase(type)}
        </CategoryTypeSectionText>
      </>
    ))}
  </Text>
);

export default CategoryTypeSection;
