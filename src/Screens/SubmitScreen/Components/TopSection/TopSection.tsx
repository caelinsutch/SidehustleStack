import React from 'react';
import { SubmissionInfoText } from '@Screens/SubmitScreen/Components';
import { TextLink } from '@Components';
import { Box } from '@chakra-ui/react';

const TopSection: React.FC = () => (
  <Box mt={20}>
    <SubmissionInfoText>
      Our site receives hundreds of thousands of users and millions of page
      views each month. We would love to feature your platform, but first, a few
      notes:
    </SubmissionInfoText>
    <SubmissionInfoText>
      Data here will be shared to the public.
    </SubmissionInfoText>
    <SubmissionInfoText>
      Platforms with 0 earning users will NOT be featured. Please do NOT submit
      them.
    </SubmissionInfoText>
    <SubmissionInfoText>
      This is a form for direct submissions from company employees.
    </SubmissionInfoText>
    <SubmissionInfoText color="gray.400">
      Don't work for a company that you think we should feature?{' '}
      <TextLink href="google.com" color="gray.800" textDecoration="underline">
        Submit Here
      </TextLink>
    </SubmissionInfoText>
    <SubmissionInfoText color="gray.400">
      Is your company working on a tool or resource instead?{' '}
      <TextLink href="google.com" color="gray.800" textDecoration="underline">
        Submit Here
      </TextLink>
    </SubmissionInfoText>
    <SubmissionInfoText color="gray.400">
      Pre-launch and want Side Hustle Stack to help get your first users?{' '}
      <TextLink href="google.com" color="gray.800" textDecoration="underline">
        Submit Here
      </TextLink>
    </SubmissionInfoText>
    <SubmissionInfoText>
      To keep our site sustainable, we also ask for an affiliate link for the
      sign-ups we drive to your site. If this is not something your company has
      set up, no worries.
    </SubmissionInfoText>
  </Box>
);

export default TopSection;
