import React, { useState } from 'react';
import { Box, AlertIcon, Alert } from '@chakra-ui/react';
import FormSection from '@Components/FormSection';
import { steps } from '@Components/SubmitForm/SubmitForm.constants';
import { gql } from '@apollo/client';

export const query = gql`
  mutation {
    createPlatform(
      platform: {
        name: "Test"
        companyLogo: "Test"
        website: "Test"
        founded: "Test"
        headquarteredIn: "Test"
        funding: ZERO
        description: "Test"
        typeOfWork: AUDIO_CONTENT_CREATOR
        category: CREATOR
        requiresDigitalAudience: RECOMMENDED
        applicationRequired: YES_SELECTIVE
        remoteWork: true
        minimumAge: 18
        equipmentQualSkills: [COMPUTER]
        averageEarnings: { amount: 12, per: "days" }
        timeToFirstDollar: { amount: 12, per: "weeks" }
        geographicalFocus: "USA"
        affiliateLink: "google.com"
        founderMessage: "Test Message"
        founderTwitter: "@caelinsutch"
        email: "caelinsutch@gmail.com"
      }
    ) {
      platformId
    }
  }
`;

const SubmitForm: React.FC = () => {
  const [data, setData] = useState({});
  const [stepI, setStepI] = useState(0);
  const [maxSteps, setMaxSteps] = useState(steps.length);

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  const handleNext = (i) => (stepData) => {
    if (i === 1) {
      console.log(stepData);
      if (stepData.isFounder === 'false') {
        setMaxSteps(3);
      }
    }
    const newStepData = { ...data, ...stepData };
    setData(newStepData);

    if (i + 1 === maxSteps) {
      handleSubmit(newStepData);
    }

    setStepI((p) => p + 1);
  };

  const step = steps[stepI];

  return (
    <Box my={8}>
      {stepI < maxSteps ? (
        <FormSection
          key={step.map((a) => a.name).join('')}
          items={step}
          onSubmit={handleNext(stepI)}
          buttonText={stepI + 1 === maxSteps ? 'Submit' : undefined}
        />
      ) : (
        <Alert status="success">
          <AlertIcon />
          Submitted!
        </Alert>
      )}
    </Box>
  );
};

export default SubmitForm;
