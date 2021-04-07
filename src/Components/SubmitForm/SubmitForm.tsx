import React, { useState } from 'react';
import { useToast, Box, AlertIcon, Alert } from '@chakra-ui/react';
import FormSection from '@Components/FormSection';
import { steps } from '@Components/SubmitForm/SubmitForm.constants';
import {
  useCreatePlatformMutation,
  useCreateSuggestionMutation,
} from '@GraphQL/types';
import { TopSection } from '@Screens/SubmitScreen/Components';
import { promiseToastFeedback } from '@Utils';

const SubmitForm: React.FC = () => {
  const [data, setData] = useState({});
  const [stepI, setStepI] = useState(0);
  const [error, setError] = useState();
  const [maxSteps, setMaxSteps] = useState(steps.length);
  const [createPlatform] = useCreatePlatformMutation();
  const [createSuggestion] = useCreateSuggestionMutation();
  const toast = useToast();

  const handleSubmit = (formData) => {
    if (maxSteps === 3) {
      promiseToastFeedback({
        promise: createSuggestion({
          variables: {
            ...formData,
          },
        }),
        toast,
        successMessage: 'Suggestion submitted!',
      });
    } else {
      promiseToastFeedback({
        promise: createPlatform({
          variables: {
            ...formData,
            remoteWork: Boolean(formData.remoteWork),
            companyLogo: '',
            minimumAge: parseInt(formData.minimumAge, 10),
            averageEarnings: {
              amount: formData.averageEarnings,
              per: 'days',
            },
            timeToFirstDollar: {
              amount: formData.timeToFirstDollar,
              per: 'days',
            },
          },
        }),
        toast,
        successMessage: 'Platform submitted!',
        errorCallback: (e) => {
          setError(e?.message);
        },
      });
    }
  };

  const handleNext = (i) => (stepData) => {
    if (i === 1) {
      if (stepData.isFounder === 'false') {
        setMaxSteps(3);
      }
    }

    console.log(stepData);

    const newStepData = { ...data, ...stepData };
    setData(newStepData);

    if (i + 1 === maxSteps) {
      handleSubmit(newStepData);
    }

    setStepI((p) => p + 1);
  };

  const step = steps[stepI];

  return (
    <>
      <TopSection display={stepI > 0 ? 'none' : 'inherit'} />
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
    </>
  );
};

export default SubmitForm;
