import React, { ChangeEvent, useState } from 'react';
import { PlatformCard } from '@Components';
import { useHomeQuery } from '@GraphQL/types';
import { gql } from '@apollo/client';

export const query = gql`
  query Home {
    allPlatforms {
      platformId
      name
    }
  }
`;

const TestScreen: React.FC = () => {
  const { data, loading, refetch } = useHomeQuery();
  // const [createPlatform] = useCreatePlatformMutation();

  const [newPlatform, setNewPlatform] = useState({
    name: '',
    description: '',
  });

  const updatePlatformName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPlatform((prev) => ({ ...prev, name: e.target.value }));
  };

  const updatePlatformDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPlatform((prev) => ({ ...prev, description: e.target.value }));
  };

  const onClickAddPlatform = () => {
    const { name, description } = newPlatform;
    // createPlatform({
    //   variables: {
    //     name,
    //     description,
    //   },
    // }).then(() => refetch());
  };

  const platformElements = data?.allPlatforms
    .map((a) => a.platformId)
    ?.map((id) => <PlatformCard platformId={id} key={id} />);

  if (loading || typeof platformElements === 'undefined') {
    return null;
  }

  const body =
    platformElements.length > 0 ? (
      <>
        <table>
          <tbody>{platformElements}</tbody>
        </table>
      </>
    ) : (
      <div>No Platforms!</div>
    );

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={newPlatform.name}
        onChange={updatePlatformName}
      />
      <input
        type="text"
        placeholder="Description"
        value={newPlatform.description}
        onChange={updatePlatformDescription}
      />

      <button type="button" onClick={onClickAddPlatform}>
        Add
      </button>
      {body}
    </>
  );
};

export default TestScreen;
