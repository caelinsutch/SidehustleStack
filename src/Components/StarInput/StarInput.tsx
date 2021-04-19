import React, { useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export type StarInputProps = {
  numStarsFilled: number;
  isClickable?: boolean;
  onStarClick?: (stars) => void;
};

const StarInput: React.FC<StarInputProps> = ({
  isClickable = false,
  numStarsFilled,
  onStarClick,
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const getColor = (index: number) => {
    if (numStarsFilled && index < numStarsFilled) {
      return 'orange.500';
    }
    if (isClickable && index <= hoverIndex) {
      return 'gray.200';
    }
    return 'gray.700';
  };

  const getIcon = (index: number) => {
    if (index < numStarsFilled || (isClickable && index <= hoverIndex)) {
      return AiFillStar;
    }
    return AiOutlineStar;
  };

  const handleMouseOver = (index: number) => {
    if (hoverIndex < index) {
      setHoverIndex(index);
    }
  };

  const handleMouseOut = () => {
    setHoverIndex(-1);
  };

  return (
    <Flex onMouseOut={() => handleMouseOut()}>
      {Array.from(Array(5)).map((_x, i) => (
        <Icon
          onClick={() => (isClickable ? onStarClick(i) : undefined)}
          onMouseOver={() => handleMouseOver(i)}
          key={`star - ${Date.now()} - ${i}`}
          as={getIcon(i)}
          w={7}
          h={7}
          color={getColor(i)}
        />
      ))}
    </Flex>
  );
};

export default StarInput;
