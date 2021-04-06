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
      A <i>platform</i> is a generally marketplace-like entity that allows
      people to directly monetize their skills and creativity, from driving for
      Uber to selling custom enamel pins on Etsy.
    </SubmissionInfoText>
    <SubmissionInfoText>
      A <i>tool</i>, roughly defined, is something that allows side hustlers to
      do the above better, faster, or less expensively. A video transcriber or a
      new creator-first calendar client would be quick examples of a tool.
    </SubmissionInfoText>
  </Box>
);

export default TopSection;
