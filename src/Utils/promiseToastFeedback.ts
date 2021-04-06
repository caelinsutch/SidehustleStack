import { useToast } from '@chakra-ui/react';

type PromiseToastFeedbackProps = {
  promise: Promise<any>;
  toast: ReturnType<typeof useToast>;
  successCallback?: (res: any) => void;
  successMessage?: string;
  errorMessage?: string;
  errorCallback?: (e: any) => void;
};

const promiseToastFeedback = ({
  promise,
  toast,
  successMessage = 'Success',
  successCallback,
  errorMessage = 'Error',
  errorCallback,
}: PromiseToastFeedbackProps) => {
  promise
    .then((res) => {
      toast({
        status: 'success',
        title: successMessage,
      });
      if (successCallback) successCallback(res);
    })
    .catch((e) => {
      toast({
        status: 'error',
        title: errorMessage,
        description: e.toString(),
      });
      console.error(e);
      if (errorCallback) errorCallback(e);
    });
};

export default promiseToastFeedback;
