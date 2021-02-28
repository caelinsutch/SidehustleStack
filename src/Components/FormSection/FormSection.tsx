import React from 'react';
import {
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { RegisterOptions, useForm } from 'react-hook-form';

export type FormItemBase = {
  name: string;
  title?: string;
  description?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions;
};

export type FormItemInput = {
  type: 'input';
} & FormItemBase;

export type FormItemSelect = {
  type: 'select';
  values: SelectItem[];
} & FormItemBase;

export type FormItemRadio = {
  type: 'radio';
  values: SelectItem[];
} & FormItemBase;

export type SelectItem = {
  label: string;
  value: string;
};

export type FormItem = FormItemSelect | FormItemInput | FormItemRadio;

export type FormSectionProps = {
  items: FormItem[];
  onSubmit: (data: any) => void;
  onError?: (errors: any) => void;
  buttonText?: string;
};

const FormSection: React.FC<FormSectionProps> = ({
  items,
  onSubmit,
  onError,
  buttonText = 'Next',
}) => {
  const { register, handleSubmit, errors } = useForm();

  const handleError = () => {
    if (onError) onError(errors);
    console.log(errors);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, handleError)}>
      {items.map((props) => {
        const { placeholder, name, registerOptions } = props;
        let formElement = (
          <Input
            key={name}
            as="input"
            borderRadius="2xl"
            boxShadow="md"
            name={name}
            placeholder={placeholder}
            ref={register(registerOptions)}
            _focus={{
              boxShadow: 'md',
            }}
          />
        );
        if (props.type === 'select') {
          const { values } = props;
          formElement = (
            <Select
              placeholder={placeholder}
              ref={register(registerOptions)}
              name={name}
            >
              {values.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          );
        }

        if (props.type === 'radio') {
          const { values } = props;
          formElement = (
            <RadioGroup name={name}>
              <Stack direction="column">
                {values.map(({ value, label }) => (
                  <Radio
                    name={name}
                    key={value}
                    value={value}
                    type="radio"
                    ref={register(registerOptions)}
                  >
                    {label}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          );
        }

        const { title, description } = props;
        return (
          <Box key={`box${props.name}${props.title}`} mb={4}>
            {title && (
              <Text fontWeight="bold" fontSize="2xl" color="orange.400" mb={3}>
                {title}
              </Text>
            )}
            {description && (
              <Text fontSize="md" color="gray.600" mb={3}>
                {description}
              </Text>
            )}
            {formElement}
            <Text fontSize="xs" color="red.400" mt={2}>
              {errors[name]?.type === 'required' && 'Required'}
              {errors[name]?.type === 'number' && 'Should be a number'}
            </Text>
          </Box>
        );
      })}
      <Button
        type="submit"
        borderRadius={1000}
        isDisabled={Object.keys(errors).length !== 0}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default FormSection;
