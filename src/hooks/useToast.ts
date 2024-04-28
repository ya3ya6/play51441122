import { useMediaQuery, useToast as useChakraToast } from '@chakra-ui/react';
import { useDirection } from './useDirection';

export const useToast = () => {
  const { isRtl } = useDirection();
  const [mobile] = useMediaQuery('(max-width: 480px)');
  const rtlPosition = mobile ? 'top' : 'top-right';
  const ltrPosition = mobile ? 'top' : 'top-left';
  const toast = useChakraToast();

  const successToast = (msg: string) =>
    toast({
      title: msg,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: isRtl ? rtlPosition : ltrPosition,
    });

  const errorToast = (msg: string) =>
    toast({
      title: msg,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: isRtl ? rtlPosition : ltrPosition,
    });

  return {
    successToast,
    errorToast,
  };
};
