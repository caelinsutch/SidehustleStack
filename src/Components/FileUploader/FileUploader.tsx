import React, { useState, ChangeEvent } from 'react';
import { Text, Image, Box, useToast, Progress, Button } from '@chakra-ui/react';
import { storage } from '@Config';

export type FileUploaderProps = {
  onUploadFinish: (urL: string) => void;
};

type FileUploaderState = {
  progress?: number;
  fileUrl?: string;
  fileBlob?: File;
};

const FileUploader: React.FC<FileUploaderProps> = ({ onUploadFinish }) => {
  const toast = useToast();

  const [state, setState] = useState<FileUploaderState>({
    progress: 0,
    fileUrl: null,
    fileBlob: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files[0]) {
      const fileBlob = e.target.files[0];
      setState(() => ({ fileBlob }));
    }
  };

  const handleUpload = () => {
    const image = state.fileBlob;
    if (!image) {
      return;
    }

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setState({ progress });
      },
      (error) => {
        // Error function ...
        toast({
          status: 'error',
          title: 'Error uploading image',
          description: error.message,
        });
      },
      () => {
        // complete function ...
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((fileUrl) => {
            setState({ fileUrl });
            onUploadFinish(fileUrl);
          });
      }
    );
  };

  return (
    <Box textAlign="center">
      {state.progress > 0 && <Progress value={state.progress} />}
      <Box position="relative" overflow="hidden" my={8}>
        <Button colorScheme="blue" size="xs">
          {state.fileBlob ? state.fileBlob.name : 'Choose Image'}
        </Button>
        <input
          type="file"
          onChange={handleChange}
          style={{
            fontSize: '100px',
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0,
          }}
        />
      </Box>
      {state.fileUrl && (
        <Box px={2}>
          <Text>Image Preview:</Text>
          <Image
            mb={4}
            mx="auto"
            maxW="500px"
            borderRadius="md"
            src={state.fileUrl || 'https://via.placeholder.com/400x300'}
            alt="Uploaded Image"
          />
        </Box>
      )}
      <Button onClick={handleUpload} disabled={!state.fileBlob}>
        Upload
      </Button>
    </Box>
  );
};

export default FileUploader;
