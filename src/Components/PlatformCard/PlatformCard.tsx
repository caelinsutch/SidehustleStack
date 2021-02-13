import React from 'react';
import { gql } from '@apollo/client';
import { usePlatformQuery } from '@GraphQL/types';

export type PlatformCardProps = {
  platformId: string;
};

export const query = gql`
  query Platform($platformId: ID!) {
    Platform(platformId: $platformId) {
      name
      description
    }
  }
`;

const PlatformCard: React.FC<PlatformCardProps> = ({ platformId }) => {
  const { loading, data } = usePlatformQuery({
    variables: {
      platformId,
    },
  });

  const { description, name } = data?.Platform ?? {};

  return <div>{name}</div>;
};

export default PlatformCard;
