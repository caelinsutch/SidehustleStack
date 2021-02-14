import React from 'react';
import {
  Box,
  Input,
  InputProps,
  RadioGroupProps,
  Text,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';

type SubmitFormItemPropsBase = {
  label?: string;
};

type SubmitFormItemInput = {
  type: 'input';
} & SubmitFormItemPropsBase &
  InputProps;

type SubmitFormItemRadio = {
  type: 'radio';
  values: string[];
} & SubmitFormItemPropsBase &
  RadioGroupProps;

type SubmitFormItemProps = SubmitFormItemInput | SubmitFormItemRadio;

const SubmitFormItem: React.FC<SubmitFormItemProps> = ({
  label,
  ...componentProps
}) => {
  let inputElement;

  if (componentProps.type === 'input') {
    inputElement = (
      <Input
        borderRadius="xl"
        boxShadow="md"
        _focus={{
          boxShadow: 'md',
        }}
        {...componentProps}
      />
    );
  } else if (componentProps.type === 'radio') {
    inputElement = (
      <RadioGroup {...componentProps}>
        <Stack>
          {componentProps.values.map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    );
  }

  return (
    <Box mb={4}>
      <Text fontWeight="bold" fontSize="2xl" color="orange.400" mb={3}>
        {label}
      </Text>
      {inputElement}
    </Box>
  );
};

export default SubmitFormItem;
