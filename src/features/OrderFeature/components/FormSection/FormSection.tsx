import { useUserQuery } from '@/api/services/auth';
import { useOrderCreateMutation } from '@/api/services/shop';
import { PostOrderAPIArgsType } from '@/api/services/shop/types';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import ROUTES from '@/routers';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { OrderSchema } from './FormValidation';

export const FormSection: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const { successToast, errorToast } = useToast();
  const router = useRouter();
  const mutate = useOrderCreateMutation(queryClient);
  const { data: user } = useUserQuery(null);
  const t = useText(I18_NAMESPACES.ORDER);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostOrderAPIArgsType>({
    resolver: yupResolver(OrderSchema(t)),
    defaultValues: {
      full_name: user?.fullName ?? '',
      mobile_number: user?.telephone ?? '',
      phone_number: user?.phoneNumber ?? '',
      address: user?.address ?? '',
      company: user?.companyName ?? '',
    },
  });

  const onSubmit: SubmitHandler<PostOrderAPIArgsType> = data => {
    mutate.mutate(data, {
      onSuccess() {
        successToast(t('message.success'));
        router.push(ROUTES.PROFILE.ORDER);
      },
      onError() {
        errorToast(t('message.error'));
      },
    });
  };

  return (
    <Box mt="70px">
      <Flex mb="40px" align="center" justify="center" direction="column">
        <Heading mb="10px" size="sm" as="h3">
          {t('form.title')}
        </Heading>
        <Text>{t('form.description')}</Text>
      </Flex>
      <Grid
        gap="20px"
        gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }}
      >
        <FormControl isRequired isInvalid={errors.full_name as boolean | undefined}>
          <Input {...register('full_name')} bgColor="white" h="50px" placeholder={t('form.name')} />
          <FormErrorMessage>{errors.full_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.mobile_number as boolean | undefined}>
          <Input
            {...register('mobile_number')}
            bgColor="white"
            h="50px"
            placeholder={t('form.mobile')}
          />
          <FormErrorMessage>{errors.mobile_number?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.phone_number as boolean | undefined}>
          <Input
            {...register('phone_number')}
            bgColor="white"
            h="50px"
            placeholder={t('form.phone')}
          />
          <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.company as boolean | undefined}>
          <Input
            {...register('company')}
            bgColor="white"
            h="50px"
            placeholder={t('form.company')}
          />
          <FormErrorMessage>{errors.company?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.city as boolean | undefined}>
          <Input
            {...register('city')}
            gridColumn={{ base: '1/2', sm: '1/3', md: '1/2' }}
            bgColor="white"
            h="50px"
            placeholder={t('form.city')}
          />
          <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          gridColumn={{ base: '1/2', sm: '1/3', md: '2/5' }}
          isInvalid={errors.address as boolean | undefined}
        >
          <Input
            {...register('address')}
            bgColor="white"
            h="50px"
            placeholder={t('form.address')}
          />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>
      </Grid>
      <Center>
        <Button
          onClick={handleSubmit(onSubmit)}
          fontWeight="normal"
          w="275px"
          rounded="xl"
          mt="50px"
          size="lg"
          colorScheme="green"
        >
          {t('form.submitBtn')}
        </Button>
      </Center>
    </Box>
  );
};
