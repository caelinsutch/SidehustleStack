import React, { useState } from 'react';
import { useToast, Box, AlertIcon, Alert } from '@chakra-ui/react';
import FormSection from '@Components/FormSection';
import { steps } from '@Components/SubmitForm/SubmitForm.constants';
import { gql } from '@apollo/client';
import { useCreatePlatformMutation } from '@GraphQL/types';

export const query = gql`
  mutation CreatePlatform(
    $name: String!
    $companyLogo: String!
    $website: String!
    $founded: String!
    $headquarteredIn: String!
    $funding: Funding!
    $description: String!
    $typeOfWork: TypeOfWork!
    $category: CategoryOfWork!
    $requiresDigitalAudience: ExistingDigitalAudienceRequired!
    $applicationRequired: ApplicationRequired!
    $remoteWork: Boolean!
    $minimumAge: Int!
    $equipmentQualSkills: [EquipmentQualSkills!]!
    $averageEarnings: AmountPerInput!
    $timeToFirstDollar: AmountPerInput!
    $geographicalFocus: String!
    $affiliateLink: String!
    $founderMessage: String!
    $founderTwitter: String!
    $email: String!
  ) {
    createPlatform(
      platform: {
        name: $name
        companyLogo: $companyLogo
        website: $website
        founded: $founded
        headquarteredIn: $headquarteredIn
        funding: $funding
        description: $description
        typeOfWork: $typeOfWork
        category: $category
        requiresDigitalAudience: $requiresDigitalAudience
        applicationRequired: $applicationRequired
        remoteWork: $remoteWork
        minimumAge: $minimumAge
        equipmentQualSkills: $equipmentQualSkills
        averageEarnings: $averageEarnings
        timeToFirstDollar: $timeToFirstDollar
        geographicalFocus: $geographicalFocus
        affiliateLink: $affiliateLink
        founderMessage: $founderMessage
        founderTwitter: $founderTwitter
        email: $email
      }
    ) {
      platformId
    }
  }
`;

const SubmitForm: React.FC = () => {
  const [data, setData] = useState({});
  const [stepI, setStepI] = useState(0);
  const [error, setError] = useState();
  const [maxSteps, setMaxSteps] = useState(steps.length);
  const [createPlatform] = useCreatePlatformMutation();
  const toast = useToast();

  const handleSubmit = (formData) => {
    createPlatform({
      variables: {
        ...formData,
        remoteWork: Boolean(formData.remoteWork),
        companyLogo: '',
        minimumAge: parseInt(formData.minimumAge, 10),
        equipmentQualSkills: [],
        averageEarnings: {
          amount: 12,
          per: 'days',
        },
        timeToFirstDollar: {
          amount: 12,
          per: 'days',
        },
      },
    })
      .then(() => {
        toast({
          status: 'success',
          title: 'Platform Submitted',
        });
      })
      .catch((e) => {
        setError(e?.message);
        console.error(e);
        toast({
          status: 'error',
          title: e.toString(),
        });
      });
  };

  const handleNext = (i) => (stepData) => {
    if (i === 1) {
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
        <Alert status={error ? 'error' : 'success'}>
          <AlertIcon />
          {error || 'Submitted!'}
        </Alert>
      )}
    </Box>
  );
};

export default SubmitForm;
