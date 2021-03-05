import React, { useRef, useState } from 'react';
import {
  Box,
  InputProps,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';

export type MultiItemInputProps = {
  onInput: (emails: string[]) => void;
  values: string[];
  disabled?: boolean;
  placeholder?: string;
  onBlur?: InputProps['onBlur'];
};

const MultiItemInput: React.FC<MultiItemInputProps> = ({
  values,
  onInput,
  placeholder,
  onBlur,
  disabled = false,
}) => {
  const tagInput = useRef<HTMLInputElement>(null);

  const [state, setState] = useState({
    tags: values,
  });

  const removeTag = (i: number): void => {
    const newTags = [...state.tags];
    newTags.splice(i, 1);
    setState({ tags: newTags });
    onInput(newTags);
  };

  const onInputKeyDown = (e: any): void => {
    const val = e.target.value;
    console.log(e.key);
    if (e.key === ',' && val) {
      if (state.tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      const newTags = [...state.tags, val];
      setState({ tags: newTags });
      onInput(newTags);
      tagInput.current.value = null;
      e.preventDefault();
    } else if (e.key === 'Backspace' && !val) {
      removeTag(state.tags.length - 1);
    }
  };

  const deleteTag = (tagIndex: number): void => {
    removeTag(tagIndex);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      w="auto"
      p={2}
      bgColor={disabled ? 'gray.200' : 'white'}
    >
      <Box display="flex">
        {state.tags.map((tag, i) => (
          <Box key={`tag-${tag}-${i}`} mr={1}>
            <Tag size="md">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => deleteTag(i)} />
            </Tag>
          </Box>
        ))}
        <input
          disabled={disabled}
          onBlur={onBlur}
          onKeyPress={(e) => !disabled && onInputKeyDown(e)}
          ref={tagInput}
          style={{ flex: 1, outline: 'none', marginLeft: '4px' }}
          placeholder={placeholder}
        />
      </Box>
    </Box>
  );
};

export default MultiItemInput;
