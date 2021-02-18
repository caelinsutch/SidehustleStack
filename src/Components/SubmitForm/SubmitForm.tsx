import React from 'react';
import { Box } from '@chakra-ui/react';
import FormSection from '@Components/FormSection';

const SubmitForm: React.FC = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <Box my={8}>
      <FormSection
        onSubmit={onSubmit}
        items={[
          {
            name: 'companyName',
            placeholder: 'Side Hustle Stack',
            type: 'input',
            title: 'Company Name',
          },
          {
            name: 'workCategory',
            type: 'radio',
            values: [
              {
                value: 'gig',
                label: 'Gig work',
              },
              {
                value: 'creator',
                label: 'Creator / monetize audience/fans',
              },
            ],
            title: 'Category of Work',
          },
        ]}
      />
    </Box>
  );
};

export default SubmitForm;
