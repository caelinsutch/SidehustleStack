import React from 'react';
import { SubmitScreen } from '@Screens';
import { PageWrapper } from '@Components';

const Submit: React.FC = () => (
  <PageWrapper
    backgroundImage="url('static-background.svg')"
    backgroundSize="cover"
    backgroundPosition="bottom"
    title="Submit - Sidehustle Stack"
  >
    <SubmitScreen />
  </PageWrapper>
);

export default Submit;
