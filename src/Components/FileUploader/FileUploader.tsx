import React, { useState } from 'react';
import { Text, Box, useToast, Progress, Button } from '@chakra-ui/react';
import { storage } from '@Config';

export type ImageUploaderProps = {
  onUploadFinish: (urL: string) => void;
};

type FileUploaderState = {
  progress?: number;
  fileUrl?: string;
  fileBlob?: any;
};

const FileUploader: React.FC<ImageUploaderProps> = ({ onUploadFinish }) => {
  const toast = useToast();

  const [state, setState] = useState<FileUploaderState>({
    progress: 0,
    fileUrl: null,
    fileBlob: null,
  });

  const handleChange = (e) => {
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
      <Text as="h2" className="green-text">
        React Firebase Image Uploader
      </Text>
      {state.progress && <Progress value={state.progress} />}
      <Box>
        <Button className="btn">
          <span>File</span>
          <input type="file" onChange={handleChange} />
        </Button>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </Box>
      <Button onClick={handleUpload}>Upload</Button>
      <img
        src={state.fileUrl || 'https://via.placeholder.com/400x300'}
        alt="Uploaded Images"
        height="300"
        width="400"
      />
    </Box>
  );
};

export default FileUploader;
