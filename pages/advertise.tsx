import React from 'react';
import { AdvertiseScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Advertise: React.FC = () => (
  <PageWrapper
    backgroundImage="url('static-background.svg')"
    backgroundSize="contain"
    backgroundPosition="top"
    title="Advertise - Sidehustle Stack"
  >
    <AdvertiseScreen />
  </PageWrapper>
);

export default Advertise;
