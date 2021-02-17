import React from 'react';
import { Box } from '@chakra-ui/react';
import BreadcrumbSection from '@Screens/PlatformScreen/Components/BreadcrumbSection/BreadcrumbSection';
import {
  FounderQuoteSection,
  HeaderInfo,
} from '@Screens/PlatformScreen/Components';

export type PlatformScreenProps = {
  id: string;
};

const PlatformScreen: React.FC<PlatformScreenProps> = ({ id }) => (
  <Box>
    <Box as="section">
      <BreadcrumbSection platformId={id} platformName="Reseller" />
      <HeaderInfo
        name="StockX"
        tags={['Small Business', 'Work From Home', '18+', '$$$']}
        signUpLink="https://google.com"
      />
      <FounderQuoteSection
        quote="We built StockX to become the largest marketplace for sneakers. Nowadays its
more known for its role as the marketplace for anything. Sneakers, baseball cards, the
new PS5 — everything has a home to be resold on StockX. Our mission is to turn your
old-school memorabilia into new-school money."
        quoteAuthor="Scott Cutler"
        quoteAuthorPosition="CEO"
        quoteAuthorLink="https://google.com"
      />
    </Box>
  </Box>
);

export default PlatformScreen;
