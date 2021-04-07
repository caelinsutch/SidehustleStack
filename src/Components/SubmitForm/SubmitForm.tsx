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
import { LoadingSection } from '@Components/index';

const SubmitForm: React.FC = () => {
  const [data, setData] = useState({});
  const [stepI, setStepI] = useState(0);
  const [error, setError] = useState();
  const [maxSteps, setMaxSteps] = useState(steps.length);
  const [createPlatform] = useCreatePlatformMutation();
  const [createSuggestion, { loading }] = useCreateSuggestionMutation();
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
    console.log(i);
    console.log(stepData);
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

  const handleBack = () => {
    setStepI((p) => p - 1);
  };

  const step = steps[stepI];

  let body = (
    <FormSection
      key={step.map((a) => a.name).join('')}
      items={step.map((s) => ({ ...s, defaultValue: data[s.name] }))}
      onSubmit={handleNext(stepI)}
      buttonText={stepI + 1 === maxSteps ? 'Submit' : undefined}
      onBack={handleBack}
      showBack={stepI > 0}
    />
  );

  if (stepI >= maxSteps) {
    body = loading ? (
      <LoadingSection />
    ) : (
      <Alert status={error ? 'error' : 'success'}>
        <AlertIcon />
        {error || 'Submitted!'}
      </Alert>
    );
  }

  return (
    <>
      <TopSection display={stepI > 0 ? 'none' : 'inherit'} />
      <Box my={8}>{body}</Box>
    </>
  );
};

export default SubmitForm;
