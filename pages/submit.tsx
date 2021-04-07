import React from 'react';
import { SubmitScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Submit: React.FC = () => (
  <PageWrapper
    backgroundImage="url('submit-top-background.png')"
    backgroundPosition="top"
  >
    <SubmitScreen />
  </PageWrapper>
);

export default Submit;
