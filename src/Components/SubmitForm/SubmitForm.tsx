import React, { useState } from 'react';
import { Box, AlertIcon, Alert } from '@chakra-ui/react';
import FormSection from '@Components/FormSection';
import { steps } from '@Components/SubmitForm/SubmitForm.constants';

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
