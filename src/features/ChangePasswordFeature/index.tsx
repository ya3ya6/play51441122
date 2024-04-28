import { Box, Center, Container, Flex, Heading, IconButton } from '@chakra-ui/react';

import { HomeIcon } from '@/common/icons';
import Link from 'next/link';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import FormList from './components/FormList/FormList';

export const ChangePasswordFeature = () => {
  const t = useText();
  return (
    <Center minH="100vh" bgImage="/images/common/bgPattern.svg" bgSize="100%">
      <Container maxW="container.xl">
        <Box rounded="2xl" bgColor="white" shadow="xl" w="380px" maxW="full" m="0 auto">
          <Flex
            align="center"
            justify="space-between"
            rounded="xl"
            borderBottomRadius="0"
            bgColor="brand.600"
            p="20px"
          >
            <Heading color="white" fontSize="lg">
              {t('forgetPassword.two.title')}
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
          <Box mb="20px" p="20px">
            <FormList />
          </Box>
        </Box>
      </Container>
    </Center>
  );
};
