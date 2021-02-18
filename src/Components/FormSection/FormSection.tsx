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
import { useForm } from 'react-hook-form';

export type FormItemBase = {
  name: string;
  title?: string;
  description?: string;
  placeholder?: string;
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
};

const FormSection: React.FC<FormSectionProps> = ({
  items,
  onSubmit,
  onError,
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {items.map((props) => {
        const { placeholder, name } = props;
        let formElement = (
          <Input
            key={name}
            as="input"
            borderRadius="2xl"
            boxShadow="md"
            name={name}
            placeholder={placeholder}
            ref={register()}
            _focus={{
              boxShadow: 'md',
            }}
          />
        );
        if (props.type === 'select') {
          const { values } = props;
          formElement = (
            <Select placeholder={placeholder} ref={register} name={name}>
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
                    ref={register}
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
          </Box>
        );
      })}
      <Button type="submit" borderRadius={1000}>
        Submit
      </Button>
    </form>
  );
};

export default FormSection;
