import React from 'react';
import { Icon, Text, VStack } from '@chakra-ui/react';
import { IoTriangle } from 'react-icons/io5';

export type VoteIconsProps = {
  status?: 'up' | 'neutral' | 'down';
  upvotes: number;
  onClick: (action: 'up' | 'down') => void;
};

const VoteIcons: React.FC<VoteIconsProps> = ({
  status = 'neutral',
  upvotes,
  onClick,
}) => (
  <VStack
    alignContent="center"
    justifyContent="space-between"
    spacing="8px"
    w="17px"
    mr="5px"
  >
    <Icon
      as={IoTriangle}
      color={status === 'up' ? 'orange.300' : '#ababab'}
      onClick={() => onClick('up')}
      _hover={{
        color: status === 'up' ? 'orange.400' : '#919191',
      }}
    />
    <Text
      userSelect="none"
      color="black"
      fontSize="16px"
      lineHeight="80%"
    >{`${upvotes}`}</Text>
    <Icon
      as={IoTriangle}
      color={status === 'down' ? 'red.300' : '#ababab'}
      onClick={() => onClick('down')}
      transform="rotate(180deg)"
      _hover={{
        color: status === 'down' ? 'red.400' : '#919191',
      }}
    />
  </VStack>
);

export default VoteIcons;
