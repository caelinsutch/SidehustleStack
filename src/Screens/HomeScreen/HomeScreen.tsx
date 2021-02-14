import React from 'react';
import { HomeBanner } from './Components';

const HomeScreen: React.FC = () => (
  <>
    <HomeBanner onEmailSubmit={(email) => console.log(email)} />
  </>
);

export default HomeScreen;
