import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export type InfoSectionProps = {
  title: string;
  body: string[];
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, body }) => (
  <Box mt={4} mb={8} as="section">
    <Box>
      <Text fontWeight="bold" color="orange.500" fontSize="2xl">
        {title}
      </Text>
    </Box>
    {body.map((item) => (
      <Box key={title + item}>
        <Text fontWeight="semibold" fontSize="xl" color="gray.700" my={2}>
          {item}
        </Text>
      </Box>
    ))}
  </Box>
);

export default InfoSection;
