import { useCareersQuery } from '@/api/services/overview/_queries';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useRef } from 'react';
import { numberOrDefault, toFormData } from '@/utils/helpers';
import * as yup from 'yup';
import { useJobRequestMutation } from '@/api/services/overview/_mutations';
import { yupResolver } from '@hookform/resolvers/yup';
import { PostJobRequestAPIArgsType } from '@/api/services/overview/types/careers';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Title } from './Title/Title';

export const FormSection: FunctionComponent = () => {
  const { data: careers } = useCareersQuery(null);
  const { mutate, isLoading } = useJobRequestMutation();
  const { successToast, errorToast } = useToast();
  const ref = useRef<HTMLDivElement>();
  const t = useText(I18_NAMESPACES.CAREERS);

  const router = useRouter();

  const schema = yup
    .object({
      name: yup.string().required(t('fieldRequired', { isCommon: true })),
      gender: yup.string().required(t('fieldRequired', { isCommon: true })),
      jobpost_id: yup.string().required(t('fieldRequired', { isCommon: true })),
      birth: yup.string().required(t('fieldRequired', { isCommon: true })),
      mobile_number: yup.string().required(t('fieldRequired', { isCommon: true })),
      phone_number: yup.string().required(t('fieldRequired', { isCommon: true })),
      address: yup.string().required(t('fieldRequired', { isCommon: true })),
      education_field: yup.string().required(t('fieldRequired', { isCommon: true })),
      email: yup
        .string()
        .email()
        .required(t('fieldRequired', { isCommon: true })),
      education_grade: yup.string().required(t('fieldRequired', { isCommon: true })),
      education_average: yup.string().required(t('fieldRequired', { isCommon: true })),
      referral_type: yup.string().required(t('fieldRequired', { isCommon: true })),
      resume_file: yup.mixed().required(t('fieldRequired', { isCommon: true })),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<PostJobRequestAPIArgsType>({
    resolver: yupResolver(schema),
    defaultValues: {
      jobpost_id: numberOrDefault(router.query.requirement, -1),
      gender: 'male',
      referral_type: 'Social Media',
    },
  });

  const selectedItem = careers
    ?.map(unit => unit.jobposts)
    .flat()
    .find(item => item.id === numberOrDefault(router.query.requirement, -1));

  const onSubmit: SubmitHandler<PostJobRequestAPIArgsType> = data => {
    mutate(toFormData(data), {
      onSuccess: () => {
        successToast(t('successMsg'));
        reset();
      },
      onError: () => {
        errorToast(t('errorMsg'));
      },
    });
  };

  useEffect(() => {
    if (router.query.requirement) {
      ref.current?.scrollIntoView();
      setValue('jobpost_id', numberOrDefault(router.query.requirement, -1));
    }
  }, [router.query.requirement]);

  if (router.query.requirement === undefined || selectedItem === undefined) {
    return null;
  }

  return (
    <Box
      // @ts-ignore
      ref={ref}
      bgColor="white"
      py="60px"
      position="relative"
    >
      <Container maxW="container.xl">
        <Flex my="50px" gap="15px" direction="column" align="center">
          <Heading size="lg">
            {t('form.title')} - {selectedItem.name}
          </Heading>
          <Text>{t('form.description')}</Text>
        </Flex>
        <Box>
          <Title>{t('personal.title')}</Title>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap="30px" mt="30px">
            <FormControl isRequired isInvalid={!!errors.name}>
              <FormLabel>{t('personal.name')}</FormLabel>
              <Input {...register('name')} bgColor="gray.50" />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.birth}>
              <FormLabel>{t('personal.birth')}</FormLabel>
              <Controller
                control={control}
                name="birth"
                defaultValue={router.locale === 'fa' ? '1380/01/01' : '1999/01/01'}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    value={value}
                    containerStyle={{ display: 'block' }}
                    inputClass={`chakra-input css-${router.locale}-1nfd54t`}
                    onChange={date => onChange(date?.toString() ?? '')}
                    calendarPosition="bottom-right"
                    {...(router.locale === 'fa' ? { calendar: persian, locale: persian_fa } : {})}
                  />
                )}
              />
              <FormErrorMessage>{errors.birth?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.gender}>
              <FormLabel>{t('personal.gender.title')}</FormLabel>
              <RadioGroup
                p="8px"
                alignItems="center"
                h="42px"
                border="1px solid"
                borderColor="gray.200"
                defaultValue="male"
                rounded="md"
                minW="300px"
                bgColor="gray.50"
                onChange={value => {
                  setValue('gender', value);
                }}
              >
                <Flex gap="15px" direction="row">
                  <Radio value="male">{t('personal.gender.male')}</Radio>
                  <Radio value="female">{t('personal.gender.female')}</Radio>
                </Flex>
              </RadioGroup>
              <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
        </Box>
        <Box my="80px">
          <Title>{t('contacts.title')}</Title>
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }} gap="30px" mt="30px">
            <FormControl isRequired isInvalid={!!errors.mobile_number}>
              <FormLabel>{t('contacts.mobile')}</FormLabel>
              <Input {...register('mobile_number')} bgColor="gray.50" />
              <FormErrorMessage>{errors.mobile_number?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.phone_number}>
              <FormLabel>{t('contacts.phone')}</FormLabel>
              <Input {...register('phone_number')} bgColor="gray.50" />
              <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.email}>
              <FormLabel>{t('contacts.email')}</FormLabel>
              <Input {...register('email')} bgColor="gray.50" />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!errors.address}
              gridColumn={{ base: '1/2', md: '1/4' }}
            >
              <FormLabel>{t('contacts.address')}</FormLabel>
              <Input {...register('address')} bgColor="gray.50" />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>
          </Grid>
        </Box>
        <Box my="80px">
          <Title>{t('educational.title')}</Title>
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }} gap="30px" mt="30px">
            <FormControl isRequired isInvalid={!!errors.education_field}>
              <FormLabel>{t('educational.field')}</FormLabel>
              <Input {...register('education_field')} bgColor="gray.50" />
              <FormErrorMessage>{errors.education_field?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.education_average}>
              <FormLabel>{t('educational.average')}</FormLabel>
              <Input {...register('education_average')} bgColor="gray.50" />
              <FormErrorMessage>{errors.education_average?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.education_grade}>
              <FormLabel>{t('educational.grade')}</FormLabel>
              <Input {...register('education_grade')} bgColor="gray.50" />
              <FormErrorMessage>{errors.education_grade?.message}</FormErrorMessage>
            </FormControl>
          </Grid>
        </Box>
        <Box mb="80px">
          <Title>{t('resume.title')}</Title>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gap="50px" mt="30px">
            <FormControl isRequired isInvalid={!!errors.referral_type} gridColumn="1/4">
              <FormLabel>{t('resume.input1')}</FormLabel>
              <RadioGroup
                onChange={value => {
                  setValue('referral_type', value);
                }}
                p="15"
                alignItems="center"
                border="1px solid"
                borderColor="gray.200"
                rounded="md"
                minW="300px"
                defaultValue="Social Media"
                bgColor="gray.50"
              >
                <Flex gap="15px" justify="space-between" direction={{ base: 'column', lg: 'row' }}>
                  <Radio value="Social Media">{t('resume.option1')}</Radio>
                  <Radio value="Ads">{t('resume.option2')}</Radio>
                  <Radio value="Friends">{t('resume.option3')}</Radio>
                  <Radio value="Random">{t('resume.option4')}</Radio>
                  <Radio value="Job Sites">{t('resume.option5')}</Radio>
                  <Radio value="Other">{t('resume.option6')}</Radio>
                </Flex>
              </RadioGroup>
              <FormErrorMessage>{errors.referral_type?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.resume_file} gridColumn="1/4">
              <FormLabel>{t('resume.input2')}</FormLabel>
              <Controller
                control={control}
                name="resume_file"
                render={({ field: { onChange, onBlur } }) => (
                  <Input
                    py="10px"
                    h="50px"
                    bgColor="gray.50"
                    type="file"
                    onBlur={onBlur}
                    onChange={event => {
                      onChange(event.currentTarget.files?.[0] ?? undefined);
                    }}
                  />
                )}
              />

              <FormErrorMessage>{errors.resume_file?.message}</FormErrorMessage>
            </FormControl>
          </Grid>
        </Box>
        <Center>
          <Button
            isLoading={isLoading}
            w="170px"
            colorScheme="brand"
            onClick={handleSubmit(onSubmit)}
          >
            {t('form.btn')}
          </Button>
        </Center>
      </Container>
      <Box
        pointerEvents="none"
        w="100%"
        position="absolute"
        bottom="0"
        h="100px"
        mt="auto"
        shadow="0px 60px 60px white"
      />
    </Box>
  );
};
