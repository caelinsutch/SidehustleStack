import { gql } from '@apollo/client';

const upvotePlatformMutation = gql`
  mutation UpvotePlatform($id: ID!, $amount: Int!) {
    vote(id: $id, amount: $amount) {
      score
    }
  }
`;

const platformScoreQuery = gql`
  query GetPlatformScore($id: ID!) {
    platform(id: $id) {
      score
    }
  }
`;

export { platformScoreQuery, upvotePlatformMutation };
