import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { useLoginMutation } from '@/api/services/auth';
import { PostLoginAPIArgsType } from '@/api/services/auth/types/login';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import { useAuth } from '@/store/AuthStore/auth/store';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { errorHandler } from '@/utils/helpers';
import { Button, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormSchema } from '../../constants/formSchema';
import { IDTypes, InputsType } from '../../types';
import { LoginSchema } from '../../Validation';
import FieldBox from './FieldBox/FieldBox';

interface FormListProps {
  buttonText: string;
}

const FormList: FunctionComponent<FormListProps> = ({ buttonText }) => {
  const { successToast, errorToast } = useToast();
  const { loginAction } = useAuth();
  const { mutate, isLoading } = useLoginMutation();
  const { loginModalSetClose } = useLoginModal();
  const router = useRouter();
  const t = useText(I18_NAMESPACES.COMMON);
  const { register, handleSubmit, formState, setError } = useForm<InputsType>({
    resolver: yupResolver(LoginSchema(t)),
  });

  const onSubmit: SubmitHandler<InputsType> = data =>
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          loginAction();
          successToast(t('loginSuccess'));
          loginModalSetClose();
          router.reload();
        },
        // @ts-ignore
        onError: (error: AxiosError<BaseErrorReposnseType<PostLoginAPIArgsType>>) => {
          errorHandler(error.response?.data ?? {}, setError, errorToast);
        },
      },
    );

  return (
    <Flex w="full" direction="column" gap="10px" as="form" onSubmit={handleSubmit(onSubmit)}>
      {FormSchema.map(({ id, label, placeHolder, type }) => (
        <FieldBox
          key={id}
          id={id as IDTypes}
          label={t(label)}
          type={type}
          placeHolder={t(placeHolder)}
          formState={formState}
          register={register}
        />
      ))}
      <Button type="submit" mt={4} colorScheme="brand" w="100%" isLoading={isLoading}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default FormList;
