import React from 'react';
import { AboutScreen } from '@Screens';
import { PageWrapper } from '@Components';

const About: React.FC = () => (
  <PageWrapper
    backgroundImage="url('static-background.svg')"
    backgroundSize="contain"
    backgroundPosition="top"
    title="About - Sidehustle Stack"
  >
    <AboutScreen />
  </PageWrapper>
);

export default About;
