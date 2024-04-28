import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { useUserMutation, useUserQuery } from '@/api/services/auth';
import { PatchUserAPIArgsType } from '@/api/services/auth/types';
import { useText, useToast } from '@/hooks';
import { camelToSnake } from '@/utils/api/axios';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { errorHandler } from '@/utils/helpers';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { editProfileSchema } from '../../constants/formSchema';
import { SignUpSchema } from '../../Validation';
import FieldBox, { FieldBoxProps } from './FieldBox/FieldBox';
import { PhoneNumberChangeModalWithButton } from './Components/PhoneNumber';
import { PasswordChangeModalWithButton } from './Components/PasswordChange';

const Field = ({ field, register, formState }: FieldBoxProps) => {
  return <FieldBox key={field.id} field={field} register={register} formState={formState} />;
};

const FormList: FunctionComponent = () => {
  const { data: user } = useUserQuery(null);
  const queryClient = useQueryClient();
  const t = useText(I18_NAMESPACES.PROFILE);
  const { successToast, errorToast } = useToast();
  const mutate = useUserMutation(queryClient);

  const { register, handleSubmit, formState, setError, setValue, reset } =
    useForm<PatchUserAPIArgsType>({
      resolver: yupResolver(SignUpSchema(t)),
    });

  const { errors } = formState;

  const onSubmitHandler = (data: PatchUserAPIArgsType) => {
    mutate.mutate(data, {
      onSuccess: () => {
        successToast(t('info.message.success'));
      },
      // @ts-ignore
      onError: (error: AxiosError<BaseErrorReposnseType<PatchUserAPIArgsType>>) => {
        errorHandler(error.response?.data ?? {}, setError, errorToast);
      },
    });
  };

  useEffect(() => {
    reset(
      Object.fromEntries(
        Object.entries(user ?? {})
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => [camelToSnake(key), value ?? '']),
      ),
    );
  }, [user]);

  return (
    <>
      <Grid gridTemplateColumns={{ base: '100%', lg: '1fr 1fr' }} w="100%" gap="20px">
        <Field
          field={{
            ...editProfileSchema.first_name,
            label: t(editProfileSchema.first_name.label),
            placeHolder: t(editProfileSchema.first_name.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.last_name,
            label: t(editProfileSchema.last_name.label),
            placeHolder: t(editProfileSchema.last_name.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <FormControl isRequired isInvalid={errors.gender as boolean | undefined}>
          <FormLabel>{t('info.form.gender.label')}</FormLabel>
          <RadioGroup
            p="8px"
            alignItems="center"
            h="42px"
            defaultValue={user?.gender ?? 'male'}
            rounded="md"
            minW="300px"
            onChange={(value: any) => {
              setValue('gender', value as 'male' | 'female');
            }}
          >
            <Stack spacing="15px" direction="row">
              <Radio value="male">{t('info.form.gender.male')}</Radio>
              <Radio value="female">{t('info.form.gender.female')}</Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
        </FormControl>
        <Field
          field={{
            ...editProfileSchema.email,
            label: t(editProfileSchema.email.label),
            placeHolder: t(editProfileSchema.email.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.code_meli,
            label: t(editProfileSchema.code_meli.label),
            placeHolder: t(editProfileSchema.code_meli.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.country,
            label: t(editProfileSchema.country.label),
            placeHolder: t(editProfileSchema.country.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.address,
            label: t(editProfileSchema.address.label),
            placeHolder: t(editProfileSchema.address.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.company_name,
            label: t(editProfileSchema.company_name.label),
            placeHolder: t(editProfileSchema.company_name.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.phone_number,
            label: t(editProfileSchema.phone_number.label),
            placeHolder: t(editProfileSchema.phone_number.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
        <Field
          field={{
            ...editProfileSchema.telephone,
            label: t(editProfileSchema.telephone.label),
            placeHolder: t(editProfileSchema.telephone.placeHolder as string),
          }}
          register={register}
          formState={formState}
        />
      </Grid>
      <Stack
        mt="20px"
        align="center"
        direction={{ base: 'column', lg: 'row' }}
        w="100%"
        spacing="10px"
      >
        <Button
          onClick={handleSubmit(onSubmitHandler)}
          colorScheme="whatsapp"
          w="100%"
          isLoading={mutate.isLoading}
          disabled={mutate.isLoading}
        >
          {t('info.form.button.editProfile')}
        </Button>
        <PasswordChangeModalWithButton />
        <PhoneNumberChangeModalWithButton />
      </Stack>
    </>
  );
};

export default FormList;
