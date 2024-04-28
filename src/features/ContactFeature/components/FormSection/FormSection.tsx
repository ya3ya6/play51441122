import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { EmailIcon, MapIcon, PhoneIcon, ShareIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useText, useToast } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Social } from '@/common/components/Box';
import { useAboutusQuery } from '@/api/services/overview/_queries';
import * as yup from 'yup';
import { PostContactUsAPIArgsType } from '@/api/services/overview/types/contact_us';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUsMutation } from '@/api/services/overview/_mutations';

export const FormSection: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);
  const { mutate, isLoading } = useContactUsMutation();
  const { successToast, errorToast } = useToast();
  const t = useText(I18_NAMESPACES.CONTACT);

  const CommentSchema = yup
    .object({
      full_name: yup.string().required(t('validation.name')),
      email: yup.string().email().required(t('validation.email')),
      message: yup.string().required(t('validation.message')),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostContactUsAPIArgsType>({
    resolver: yupResolver(CommentSchema),
  });

  const onSubmit: SubmitHandler<PostContactUsAPIArgsType> = data => {
    mutate(data, {
      onSuccess() {
        successToast(t('successMsg'));
        setValue('full_name', '');
        setValue('email', '');
        setValue('message', '');
      },
      onError() {
        errorToast(t('errorMsg'));
      },
    });
  };

  return (
    <Container mt="-150px" mb="90px" zIndex="5" maxW="container.lg">
      <Flex
        align="center"
        direction={{ base: 'column', xl: 'row' }}
        boxShadow="0 0 20px rgba(0,0,0,0.1)"
        rounded="3xl"
        bgColor="#fff"
      >
        <Flex w={{ base: '100%', xl: '65%' }} direction="column">
          <Flex direction="column" p="30px">
            <Heading mb="10px" as="h1" size="md" color="gray.600">
              {t('hero.title')}
            </Heading>
            <Text color="gray.400"> {t('hero.description')}</Text>
          </Flex>
          <Flex direction="column" p="20px" paddingTop="0" style={{ gap: '15px' }}>
            <FormControl isRequired isInvalid={errors.full_name as boolean | undefined}>
              <Input
                {...register('full_name')}
                bgColor="white"
                h="45px"
                placeholder={t('form.name')}
              />
              <FormErrorMessage>{errors.full_name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.email as boolean | undefined}>
              <Input
                {...register('email')}
                bgColor="white"
                h="45px"
                placeholder={t('form.email')}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.message as boolean | undefined}>
              <Textarea
                {...register('message')}
                bgColor="white"
                h="250"
                placeholder={t('form.message')}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            <Button
              onClick={handleSubmit(onSubmit)}
              minW="130px"
              mt="5px"
              isLoading={isLoading}
              rounded="full"
              fontWeight="light"
              colorScheme="brand"
            >
              {t('form.button')}
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={{ base: 'row', xl: 'column' }}
          borderStart={{ xl: '1px solid #eee' }}
          flexWrap="wrap"
          gap="40px"
          py="20px"
          align="center"
          justify="space-evenly"
          w={{ base: '100%', xl: '35%' }}
        >
          <Flex w="100%" align="center" direction="column" justify="center" h="25%">
            <Flex
              align="center"
              justify="center"
              direction="column"
              rounded="full"
              shadow="md"
              w="50px"
              h="50px"
              color="#fff"
              fontSize="lg"
              bgImage="linear-gradient(38deg, rgba(36,148,188,1) 0%, rgba(18,74,94,1) 100%);"
            >
              <PhoneIcon />
            </Flex>
            <Flex mt="15px">
              {!!aboutUs?.phoneNumber && <Text>{aboutUs?.phoneNumber}</Text>}
              {/* {!!aboutUs?.phoneNumber && !!aboutUs?.mobileNumber && <Text mx="10px"> | </Text>} */}
              {/* {!!aboutUs?.mobileNumber && <Text>{aboutUs?.mobileNumber}</Text>} */}
            </Flex>
            <Text mt="5px">{aboutUs?.workingTimeText}</Text>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" h="25%">
            <Flex
              align="center"
              justify="center"
              direction="column"
              rounded="full"
              w="50px"
              h="50px"
              color="#fff"
              shadow="md"
              fontSize="lg"
              bgImage="linear-gradient(38deg, rgba(36,148,188,1) 0%, rgba(18,74,94,1) 100%);"
            >
              <EmailIcon />
            </Flex>
            <Text mt="15px">{t('form.email')}</Text>
            <Text mt="3px">{aboutUs?.email}</Text>
          </Flex>
          <Flex w="100%" flexShrink={0} align="center" justify="center" direction="column" h="25%">
            <Flex
              align="center"
              justify="center"
              direction="column"
              rounded="full"
              w="50px"
              h="50px"
              color="#fff"
              fontSize="lg"
              shadow="md"
              bgImage="linear-gradient(38deg, rgba(36,148,188,1) 0%, rgba(18,74,94,1) 100%);"
            >
              <MapIcon />
            </Flex>
            <Text mt="15px" textAlign="center" p="0 10px">
              {aboutUs?.address}
            </Text>
            <Text mt="5px">
              {t('postCode', { isCommon: true })}: {aboutUs?.postalCode}
            </Text>
          </Flex>
          <Flex align="center" flexShrink={0} justify="center" direction="column" h="25%">
            <Flex
              align="center"
              justify="center"
              direction="column"
              rounded="full"
              w="50px"
              h="50px"
              color="#fff"
              fontSize="lg"
              shadow="md"
              bgImage="linear-gradient(38deg, rgba(36,148,188,1) 0%, rgba(18,74,94,1) 100%);"
            >
              <ShareIcon />
            </Flex>
            <Flex direction="column" justify="center" align="center" gap="10px" mt="15px">
              <Text>{t('SocialText')}</Text>
              <Social />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
