import React from 'react';
import { PlatformScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Platform: React.FC = () => (
  <PageWrapper
    backgroundImage="url('../platform-profile-background.png')"
    backgroundSize="contain"
  >
    <PlatformScreen />
  </PageWrapper>
);

export default Platform;
