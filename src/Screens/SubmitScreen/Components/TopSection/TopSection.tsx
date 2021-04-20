import React from 'react';
import { SubmissionInfoText } from '@Screens/SubmitScreen/Components';
import { TextLink } from '@Components';
import { Box, BoxProps } from '@chakra-ui/react';

type TopSectionProps = BoxProps;

const TopSection: React.FC<TopSectionProps> = (props) => (
  <Box mt={100} {...props}>
    <SubmissionInfoText fontSize="3xl">
      Thank you for adding to the Stack! Are you submitting a platform or tool?
    </SubmissionInfoText>
    <SubmissionInfoText>
      A <i>platform</i> is a generally marketplace or similar entity that allows 
      people to directly monetize their skills, knowledge, or creativity (e.g. Uber, Etsy, etc.)
    </SubmissionInfoText>
    <SubmissionInfoText>
      A <i>tool</i>, allows side hustlers to do the above better, faster, or at a lower cost 
      (e.g. an audio transcriber or a new creator-first calendar client)
    </SubmissionInfoText>
  </Box>
);

export default TopSection;
