import { VoteStatus } from '@Components/VoteIcons';
import { useToast } from '@chakra-ui/react';
import { useUpvotePlatformMutation } from '@GraphQL/types';
import { useState } from 'react';
import { useLocalStorage } from '@Hooks';
import { platformScoreQuery } from './PlatformCard.queries';

type UseOnUpvote = [number, VoteStatus, (action: VoteStatus) => void];

const useOnUpvote = (id: string, initialScore: number): UseOnUpvote => {
  const toast = useToast();
  const [upvotePlatform] = useUpvotePlatformMutation({
    update: (
      store,
      {
        data: {
          vote: { score },
        },
      }
    ) => {
      store.writeQuery({
        query: platformScoreQuery,
        data: { score },
        variables: { score },
      });
    },
  });
  const [scoreToDisplay, setScoreToDisplay] = useState(initialScore);
  const [vote, setVote] = useLocalStorage<VoteStatus>(id, null);

  const onUpvote = (action: VoteStatus) => {
    if (vote === action) {
      return;
    }
    let down = action === 'down';

    if (action === 'neutral') {
      if (vote === 'up') {
        down = true;
      }
      if (vote === 'down') {
        down = false;
      }
    }
    upvotePlatform({
      variables: {
        id,
        down,
      },
    })
      .then(
        ({
          data: {
            vote: { score },
          },
        }) => {
          toast({
            status: 'success',
            title: 'Vote recorded!',
          });
          setScoreToDisplay(score);
          setVote(action);
        }
      )
      .catch((e) => {
        toast({
          status: 'error',
          title: 'Error voting for platform',
        });
        console.error(e);
      });
  };

  return [scoreToDisplay, vote, onUpvote];
};

export default useOnUpvote;
