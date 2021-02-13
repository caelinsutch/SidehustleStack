import React from 'react';
import { Navbar } from '@Components';

const PageWrapper: React.FC = ({ children }) => (
  <>
    <Navbar title="Nav" />
    {children}
  </>
);

export default PageWrapper;
