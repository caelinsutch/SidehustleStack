import { gql } from '@apollo/client';

const getPlatformReviews = gql`
  query GetPlatformReviews($id: ID!) {
    platform(id: $id) {
      reviews {
        rating
        description
        author
        status
      }
    }
  }
`;

export { getPlatformReviews };
