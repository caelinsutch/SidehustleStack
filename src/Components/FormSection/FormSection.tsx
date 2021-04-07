import React from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select as ChakraSelect,
  Stack,
  Text,
} from '@chakra-ui/react';
import Select from 'react-select';
import { RegisterOptions, useForm, Controller } from 'react-hook-form';
import MultiItemInput from '@Components/MultiItemInput';
import FileUploader from '@Components/FileUploader';

export type FormItemBase = {
  name: string;
  title?: string;
  description?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions;
  defaultValue?: any;
};

export type FormItemInput = {
  type: 'input';
} & FormItemBase;

export type FormItemSelect = {
  type: 'select';
  options: SelectItem[];
} & FormItemBase;

export type FormItemRadio = {
  type: 'radio';
  options: SelectItem[];
} & FormItemBase;

export type FormMultiItemInput = {
  type: 'multiItemInput';
} & FormItemBase;

export type FormMultiSelect = {
  type: 'multiSelect';
  options?: SelectItem[];
} & FormItemBase;

export type FormFileUpload = {
  type: 'file';
} & FormItemBase;

export type SelectItem = {
  label: string;
  value: string;
};

export type FormItem =
  | FormItemSelect
  | FormItemInput
  | FormItemRadio
  | FormMultiItemInput
  | FormMultiSelect
  | FormFileUpload;

export type FormSectionProps = {
  items: FormItem[];
  onSubmit: (data: any) => void;
  onError?: (errors: any) => void;
  buttonText?: string;
  onBack: () => void;
  showBack: boolean;
};

const FormSection: React.FC<FormSectionProps> = ({
  items,
  onSubmit,
  onError,
  buttonText = 'Next',
  onBack,
  showBack,
}) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'all',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {items.map((props) => {
        const { placeholder, name, registerOptions, defaultValue } = props;
        let formElement = (
          <Input
            key={name}
            as="input"
            borderRadius="2xl"
            boxShadow="md"
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            ref={register(registerOptions)}
            bgColor="white"
            _focus={{
              boxShadow: 'md',
            }}
          />
        );

        if (props.type === 'select') {
          const { options } = props;
          formElement = (
            <ChakraSelect
              placeholder={placeholder}
              ref={register(registerOptions)}
              name={name}
              bgColor="white"
              defaultValue={defaultValue}
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </ChakraSelect>
          );
        }

        if (props.type === 'radio') {
          const { options } = props;
          formElement = (
            <RadioGroup name={name}>
              <Stack direction="column">
                {options.map(({ value, label }) => (
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

        if (props.type === 'multiItemInput') {
          formElement = (
            <Controller
              control={control}
              name={name}
              defaultValue={defaultValue ?? []}
              render={({ onChange, value, onBlur }) => (
                <MultiItemInput
                  onInput={onChange}
                  onBlur={onBlur}
                  values={value}
                />
              )}
            />
          );
        }

        if (props.type === 'multiSelect') {
          const { options } = props;
          formElement = (
            <Controller
              control={control}
              name={name}
              defaultValue={defaultValue ?? []}
              rules={registerOptions}
              render={({ onChange, value }) => (
                <Select
                  options={options}
                  onChange={(a) => onChange(a.map((i) => i.value))}
                  menuIsOpen={options ? undefined : false}
                  isMulti
                  value={options.filter((a) => value.includes(a.value))}
                />
              )}
            />
          );
        }

        if (props.type === 'file') {
          formElement = (
            <Controller
              name={name}
              control={control}
              defaultValue={defaultValue ?? ''}
              rules={registerOptions}
              render={({ onChange }) => (
                <FileUploader onUploadFinish={onChange} />
              )}
            />
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
      <Flex>
        {showBack && (
          <Button mr={4} onClick={onBack}>
            Back
          </Button>
        )}
        <Button
          borderRadius={1000}
          type="submit"
          isDisabled={Object.keys(errors).length !== 0}
        >
          {buttonText}
        </Button>
      </Flex>
    </form>
  );
};

export default FormSection;
