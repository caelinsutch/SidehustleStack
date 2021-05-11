import React, { useState } from 'react';
import { useToast, Icon, Text, VStack } from '@chakra-ui/react';
import { IoTriangle } from 'react-icons/io5';
import { useUpvotePlatformMutation } from '@GraphQL/types';
import { promiseToastFeedback } from '@Utils';
import { useLocalStorage } from '@Hooks';

export type VoteStatus = 'up' | 'neutral' | 'down';

export type VoteIconsProps = {
  initialUpvotes: number;
  platformId: string;
};

const VoteIcons: React.FC<VoteIconsProps> = ({
  initialUpvotes,
  platformId,
}) => {
  const [upvotePlatform] = useUpvotePlatformMutation();
  const toast = useToast();
  const [status, setStatus] = useLocalStorage<VoteStatus>(
    platformId,
    'neutral'
  );
  const [localScore, setLocalScore] = useState<number>(initialUpvotes);

  const onClick = (action: VoteStatus) => {
    if (action === status) {
      return;
    }
    let amount = 0;
    if (action === 'up') {
      amount = 1;
    } else if (action === 'down') {
      amount = -1;
    } else if (action === 'neutral') {
      if (status === 'up') {
        amount = -1;
      } else if (status === 'down') {
        amount = 1;
      }
    }
    promiseToastFeedback({
      promise: upvotePlatform({
        variables: {
          id: platformId,
          amount,
        },
      }),
      toast,
      successCallback: (res) => {
        setStatus(action);
        setLocalScore(res.data.vote.score);
      },
    });
  };

  return (
    <VStack
      alignContent="center"
      justifyContent="space-between"
      spacing="8px"
      mr="5px"
      cursor="pointer"
    >
      <Icon
        transition="all 0.2s ease"
        as={IoTriangle}
        color={status === 'up' ? 'orange.500' : 'gray.200'}
        onClick={() => onClick('up')}
        _hover={{
          color: status === 'up' ? 'orange.500' : 'gray.300',
        }}
      />
      <Text
        userSelect="none"
        color="black"
        fontSize="16px"
        lineHeight="80%"
        onClick={() => onClick('neutral')}
      >
        {localScore}
      </Text>
      <Icon
        transition="all 0.2s ease"
        as={IoTriangle}
        color={status === 'down' ? 'red.300' : 'gray.200'}
        onClick={() => onClick('down')}
        transform="rotate(180deg)"
        _hover={{
          color: status === 'down' ? 'red.400' : 'gray.300',
        }}
      />
    </VStack>
  );
};

export default VoteIcons;
