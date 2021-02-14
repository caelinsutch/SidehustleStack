import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import SubmitFormItem from '@Components/SubmitFormItem';

const SubmitForm: React.FC = () => (
  <Box my={8}>
    <SubmitFormItem
      type="input"
      label="Company Name"
      placeholder="Side Hustle Stack"
    />
    <SubmitFormItem
      type="input"
      label="Company Website"
      placeholder="https://sidehustlestack.co"
    />
    <SubmitFormItem
      type="input"
      label="Company Year Founded"
      placeholder="2020"
    />
    <SubmitFormItem
      type="input"
      label="Headquartered In"
      placeholder="Pittsburgh, PA"
    />
    <SubmitFormItem
      type="input"
      label="Total Funding"
      placeholder="$xx million"
    />
    <Button colorScheme="orange" borderRadius={1000}>
      Submit
    </Button>
  </Box>
);

export default SubmitForm;
