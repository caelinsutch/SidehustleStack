import React from 'react';
import { Box } from '@chakra-ui/react';
import BreadcrumbSection from '@Screens/PlatformScreen/Components/BreadcrumbSection/BreadcrumbSection';

export type PlatformScreenProps = {
  id: string;
};

const PlatformScreen: React.FC<PlatformScreenProps> = ({ id }) => {
  console.log(id);
  return (
    <Box>
      <Box as="section">
        <BreadcrumbSection platformId="fea" platformName="Reseller" />
      </Box>
    </Box>
  );
};

export default PlatformScreen;
