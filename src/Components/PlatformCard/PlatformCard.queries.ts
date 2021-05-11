import { gql } from '@apollo/client';

const upvotePlatformMutation = gql`
  mutation UpvotePlatform($id: ID!, $amount: Int!) {
    vote(id: $id, amount: $amount) {
      score
    }
  }
`;

export { upvotePlatformMutation };
