import React from 'react';
import { HomeScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Home: React.FC = () => (
  <PageWrapper
    backgroundImage="url('home-top-background.png')"
    backgroundSize="cover"
  >
    <HomeScreen />
  </PageWrapper>
);

export default Home;
