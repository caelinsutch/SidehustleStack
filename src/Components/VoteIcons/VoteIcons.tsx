import React from 'react';
import { IconButton, Text, VStack } from '@chakra-ui/react';
import { IoTriangle } from 'react-icons/io5';

export type VoteIconsProps = {
  status?: -1 | 0 | 1;
  upvotes: number;
  onClick: (action: number) => void;
};

const VoteIcons: React.FC<VoteIconsProps> = ({
  status = 0,
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
    <IconButton
      aria-label="upvote"
      icon={<IoTriangle />}
      color={status === 1 ? 'orange.400' : 'grey.400'}
      onClick={() => onClick(1)}
      variant="ghost"
      h="1px"
      w="1px"
      round
    />
    <Text color="black" fontSize="16px">{`${upvotes}`}</Text>
    <IconButton
      aria-label="downvote"
      icon={<IoTriangle />}
      h="1px"
      w="1px"
      round
      color={status === -1 ? 'orange.200' : 'grey.400'}
      onClick={() => onClick(-1)}
      transform="rotate(180deg)"
      variant="ghost"
    />
  </VStack>
);

export default VoteIcons;
