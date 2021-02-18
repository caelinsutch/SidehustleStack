import React from 'react';
import { DefaultContainer, PlatformCard } from '@Components';
import { HomeBanner } from './Components';

const HomeScreen: React.FC = () => (
  <DefaultContainer as="section">
    <HomeBanner onEmailSubmit={(email) => console.log(email)} />
  </DefaultContainer>
);

export default HomeScreen;
