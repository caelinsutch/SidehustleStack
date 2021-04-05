import { gql } from '@apollo/client';

const upvotePlatformMutation = gql`
  mutation UpvotePlatform($id: ID!, $down: Boolean) {
    vote(id: $id, down: $down) {
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
