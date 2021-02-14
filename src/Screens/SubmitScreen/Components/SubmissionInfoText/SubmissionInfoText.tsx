import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type SubmissionInfoTextProps = TextProps;

const SubmissionInfoText: React.FC<SubmissionInfoTextProps> = ({
  children,
  ...props
}) => (
  <Text mt={4} fontSize="2xl" fontWeight="semibold" {...props}>
    {children}
  </Text>
);

export default SubmissionInfoText;
