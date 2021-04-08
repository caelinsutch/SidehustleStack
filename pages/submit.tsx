import React from 'react';
import { SubmitScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Submit: React.FC = () => (
  <PageWrapper
    backgroundImage="url('submit-top-background.png')"
    backgroundPosition="top"
    title="Submit - Sidehustle Stack"
  >
    <SubmitScreen />
  </PageWrapper>
);

export default Submit;
