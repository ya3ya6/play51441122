import { PostConsultationAPIArgsType } from '@/api/services/overview/types/contact_us';
import { useText, useToast } from '@/hooks';
import { Button, Flex, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useConsultationMutation } from '@/api/services/overview/_mutations';
import { I18_NAMESPACES } from '@/common/constants/Locales';

const FormBox: FunctionComponent = () => {
  const { successToast, errorToast } = useToast();
  const mutate = useConsultationMutation();

  const t = useText(I18_NAMESPACES.COMMON);

  const schema = yup
    .object({
      full_name: yup.string().required(t('freeCounseling.required')),
      phone_number: yup.string().required(t('freeCounseling.required')),
      email: yup.string().email(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostConsultationAPIArgsType>({
    resolver: yupResolver(schema),
    defaultValues: {
      url: typeof window !== 'undefined' ? window.location.href : '',
    },
  });

  const onSubmit: SubmitHandler<PostConsultationAPIArgsType> = data => {
    mutate.mutate(data, {
      onSuccess() {
        successToast(t('freeCounseling.sucess'));
        setValue('full_name', '');
        setValue('email', '');
        setValue('phone_number', '');
      },
      onError() {
        errorToast(t('freeCounseling.error'));
      },
    });
  };

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      gap={3}
      ms="auto"
      me={{ base: 0, lg: '50px' }}
      my="30px"
    >
      <FormControl isRequired isInvalid={errors.full_name as boolean | undefined}>
        <Input
          {...register('full_name')}
          w={{ base: '100%', lg: '230px' }}
          bgColor="blackAlpha.300"
          border="none"
          color="white"
          h="50px"
          placeholder={t('freeCounseling.name')}
          _placeholder={{
            color: 'white',
          }}
        />
        <FormErrorMessage>{errors.full_name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.phone_number as boolean | undefined}>
        <Input
          {...register('phone_number')}
          w={{ base: '100%', lg: '230px' }}
          bgColor="blackAlpha.300"
          h="50px"
          border="none"
          color="white"
          placeholder={t('freeCounseling.phoneNumber')}
          _placeholder={{
            color: 'white',
          }}
        />
        <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.email as boolean | undefined}>
        <Input
          {...register('email')}
          w={{ base: '100%', lg: '230px' }}
          bgColor="blackAlpha.300"
          h="50px"
          border="none"
          color="white"
          placeholder={t('freeCounseling.email')}
          _placeholder={{
            color: 'white',
          }}
        />
        <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmit)}
        isLoading={mutate.isLoading}
        disabled={mutate.isLoading}
        w="130px"
        flexShrink={0}
        h="50px"
        shadow="lg"
      >
        {t('freeCounseling.submit')}
      </Button>
    </Flex>
  );
};

export default FormBox;
