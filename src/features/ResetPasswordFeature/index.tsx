import { SubmitHandler } from 'react-hook-form';
import { Box, Center, Container, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';

import Link from 'next/link';
import { HomeIcon } from '@/common/icons';
import ROUTES from '@/routers';
import { usePasswordForget } from '@/api/services/auth';
import { useText, useToast } from '@/hooks';
import { useRouter } from 'next/router';
import FormList from './components/FormList/FormList';
import { InputsType } from './types';

export const ResetPasswordFeature = () => {
  const { mutate, isLoading } = usePasswordForget();
  const { push } = useRouter();
  const t = useText();
  const { successToast } = useToast();
  const onSubmit: SubmitHandler<InputsType> = (data): void => {
    mutate(data, {
      onSuccess: () => {
        successToast(t('forgetPassword.one.message.success'));
        push(ROUTES.HOME);
      },
    });
  };

  return (
    <Center minH="100vh" bgImage="/images/common/bgPattern.svg" bgSize="100%">
      <Container maxW="container.xl">
        <Box rounded="2xl" bgColor="white" shadow="base" w="400px" maxW="full" m="0 auto">
          <Flex
            align="center"
            justify="space-between"
            rounded="xl"
            borderBottomRadius="0"
            bgColor="brand.600"
            p="20px"
          >
            <Heading color="white" fontSize="lg">
              {t('forgetPassword.one.title')}
            </Heading>
            <Link href={ROUTES.HOME} passHref>
              <a>
                <IconButton
                  aria-label="back-to-Home"
                  rounded="full"
                  icon={<HomeIcon />}
                  colorScheme="blackAlpha"
                  fontSize="xl"
                />
              </a>
            </Link>
          </Flex>
          <Box p="20px" pb="0">
            <FormList
              onSubmit={onSubmit}
              buttonText={t('forgetPassword.one.button')}
              isLoading={isLoading}
            />
          </Box>
          <Box p="20px">
            <Divider />
            <Text mt="20px" color="GrayText" lineHeight={9}>
              {t('forgetPassword.one.text')}
            </Text>
          </Box>
        </Box>
      </Container>
    </Center>
  );
};
