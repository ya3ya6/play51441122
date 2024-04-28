import { usePasswordResetConfirmMutation } from '@/api/services/auth';
import { PostPasswordResetConfirmAPIArgsType } from '@/api/services/auth/types/password';
import { useText, useToast } from '@/hooks';
import { Button, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { errorHandler } from '@/utils/helpers';
import { FormSchema } from '../../constants/formSchema';
import { passwordSchema } from '../../Validation';
import FieldBox from './FieldBox/FieldBox';

const FormList: FunctionComponent = () => {
  const mutate = usePasswordResetConfirmMutation();
  const router = useRouter();
  const { errorToast, successToast } = useToast();
  const t = useText();
  const { register, handleSubmit, formState, setError } =
    useForm<PostPasswordResetConfirmAPIArgsType>({
      resolver: yupResolver(passwordSchema(t)),
      defaultValues: {
        token: router.query.key as string,
        uid: router.query.uidb36 as string,
      },
    });

  const onSubmit = (data: PostPasswordResetConfirmAPIArgsType) => {
    mutate.mutate(data, {
      onSuccess: () => {
        successToast(t('forgetPassword.two.message.success'));
        router.push('/?login');
      },
      // @ts-ignore
      onError: (error: AxiosError<BaseErrorReposnseType<PostPasswordResetConfirmAPIArgsType>>) => {
        errorHandler(error.response?.data ?? {}, setError, errorToast);
      },
    });
  };

  return (
    <Flex
      w="full"
      textAlign="end"
      direction="column"
      gap="10px"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {FormSchema.map(({ id, label, placeHolder, type }) => (
        <FieldBox
          key={id}
          id={id}
          label={t(label)}
          type={type}
          placeHolder={t(placeHolder)}
          formState={formState}
          register={register}
        />
      ))}
      <Button type="submit" mt={4} colorScheme="brand" w="100%">
        {t('forgetPassword.two.button')}
      </Button>
    </Flex>
  );
};

export default FormList;
