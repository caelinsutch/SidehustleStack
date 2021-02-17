import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

export type FounderQuoteSectionProps = {
  quote: string;
  quoteAuthor: string;
  quoteAuthorLink: string;
  quoteAuthorPosition: string;
};

const FounderQuoteSection: React.FC<FounderQuoteSectionProps> = ({
  quote,
  quoteAuthor,
  quoteAuthorLink,
  quoteAuthorPosition,
}) => (
  <Box textAlign="right" mt={4}>
    <Text fontSize="2xl" fontWeight="semibold">
      {quote}
    </Text>
    <Text fontSize="2xl" fontWeight="semibold" mt={2}>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        borderBottom="2px solid"
        borderColor="orange.400"
        pb={1}
        color="orange.400"
        href={quoteAuthorLink}
        target="_blank"
      >
        {quoteAuthor}
      </Link>
      {', '}
      {quoteAuthorPosition}
    </Text>
  </Box>
);

export default FounderQuoteSection;
