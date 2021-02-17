import React from 'react';
import { PlatformScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Platform: React.FC = () => (
  <PageWrapper
    backgroundImage="url('home-top-background.png')"
    backgroundSize="cover"
  >
    <PlatformScreen id="test" />
  </PageWrapper>
);

export default Platform;
