import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  FounderQuoteSection,
  HeaderInfo,
  BreadcrumbSection,
  InfoSection,
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
      <InfoSection
        title="Requirements"
        body={[
          'Items to sell including unworn sneakers, trading cards, luxury goods, electronics, and more',
          'A smartphone or similar device to access StockX with',
          'The ability to ship items',
        ]}
      />
      <InfoSection
        title="People Making Money on Platform"
        body={['100,000 (January 2021)']}
      />
    </Box>
  </Box>
);

export default PlatformScreen;
