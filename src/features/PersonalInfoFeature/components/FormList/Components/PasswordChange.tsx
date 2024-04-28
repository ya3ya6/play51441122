import {
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { useText, useToast } from '@/hooks';

import { AxiosError } from 'axios';
import { usePasswordChangeMutation } from '@/api/services/auth/_mutations';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PostPasswordChangeAPIArgsType } from '@/api/services/auth/types/password';
import { errorHandler } from '@/utils/helpers';
import { I18_NAMESPACES } from '@/common/constants/Locales';

export const passwordSchema = (t: any) =>
  yup
    .object({
      new_password1: yup
        .string()
        .required(t('fieldRequired', { isCommon: true }))
        .min(12, t('validation.password.min', { isCommon: true })),
      new_password2: yup
        .string()
        .required(t(''))
        .min(12, t('validation.password.min', { isCommon: true }))
        .oneOf([yup.ref('new_password1'), null], t('validation.confirm', { isCommon: true })),
    })
    .required();

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PasswordChangeModal: FC<Props> = ({ isOpen, onClose }) => {
  const { successToast, errorToast } = useToast();
  const t = useText(I18_NAMESPACES.PROFILE);
  const { mutate, isLoading } = usePasswordChangeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PostPasswordChangeAPIArgsType>({
    resolver: yupResolver(passwordSchema(t)),
  });

  const handleChange = (data: PostPasswordChangeAPIArgsType) => {
    mutate(data, {
      onSuccess: () => {
        successToast(t('info.message.changePasswordSuccess'));
        onClose();
      },
      // @ts-ignore
      onError: (error: AxiosError<BaseErrorReposnseType<PostPasswordChangeAPIArgsType>>) => {
        errorHandler(error.response?.data ?? {}, setError, errorToast);
      },
    });
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('info.changePasswordTitle')}</ModalHeader>
        <ModalBody pb={12}>
          <VStack align="flex-start" justifyItems="center" spacing={6}>
            <FormControl isInvalid={!!errors.new_password1}>
              <FormLabel>{t('form.password', { isCommon: true })}</FormLabel>
              <Input type="password" isReadOnly={isLoading} {...register('new_password1')} />
              <FormErrorMessage>{errors.new_password1?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.new_password2}>
              <FormLabel>{t('form.confirm', { isCommon: true })}</FormLabel>
              <Input type="password" isReadOnly={isLoading} {...register('new_password2')} />
              <FormErrorMessage>{errors.new_password2?.message}</FormErrorMessage>
            </FormControl>
            <Button
              onClick={handleSubmit(handleChange)}
              disabled={isLoading}
              isLoading={isLoading}
              colorScheme="brand"
              mt="8"
            >
              {t('info.form.button.changePassword')}
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const PasswordChangeModalWithButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <>
      <Button onClick={onOpen} mt={4} colorScheme="brand" w="100%">
        {t('info.form.button.changePassword')}
      </Button>
      {isOpen && <PasswordChangeModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};
