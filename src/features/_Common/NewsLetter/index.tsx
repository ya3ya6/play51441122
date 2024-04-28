import { useNewsLetterMutation } from '@/api/services/core';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useDirection, useText, useToast } from '@/hooks';
import { Button, ChakraProps, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
/**
 * ### Common Component BOX.
 */
type NewsLetterProps = ChakraProps;
export const NewsLetter: FunctionComponent<NewsLetterProps> = ({ ...chakraProps }) => {
  const { errorToast, successToast } = useToast();
  const { mutate, isLoading } = useNewsLetterMutation();
  const [email, setEmail] = useState('');

  const handleAdd = () => {
    mutate(
      {
        email,
      },
      {
        onSuccess: () => {
          successToast('شما با موفقیت عضو شدید');
          setEmail('');
        },
        onError: () => {
          errorToast('ایمیل شما معتبر نیست');
          setEmail('');
        },
      },
    );
  };

  const t = useText(I18_NAMESPACES.COMMON);
  const { isRtl } = useDirection();
  return (
    <Flex w="100%" {...chakraProps}>
      <Container maxW="container.xl">
        <Flex
          align="center"
          justify="center"
          p={{ base: '70px 12px', lg: '70px 20px' }}
          direction={{ base: 'column', lg: 'row' }}
          w="100%"
          rounded="2xl"
          bgColor="gray.100"
          border="2px solid"
          borderColor="gray.100"
          bgImage="url(/images/bgNewsLetter.png)"
          h="100%"
        >
          <Flex
            w="100%"
            align={{ base: 'center', lg: 'flex-start' }}
            mb={{ base: '30px', lg: '0' }}
            justify="center"
            direction="column"
          >
            <Heading
              textAlign={{ base: 'center', lg: 'unset' }}
              color="#1f87ad"
              mb="10px"
              size="md"
            >
              {t('newsletter.title')}
            </Heading>
            <Text textAlign={{ base: 'center', lg: 'unset' }}>{t('newsletter.description')}</Text>
          </Flex>
          <Flex align="center" justify={{ base: 'center', lg: 'flex-end' }} w="40%">
            <Input
              borderRadius="0"
              sx={isRtl ? { borderEndRadius: '14px' } : { borderStartRadius: '14px' }}
              flexShrink={0}
              width={{ base: '180px', sm: '200px', md: '240px' }}
              placeholder="Enter your Email"
              h="52px"
              type="email"
              bgColor="#fff"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Button
              onClick={handleAdd}
              borderRadius="0"
              px="10px"
              isLoading={isLoading}
              sx={isRtl ? { borderStartRadius: '14px' } : { borderEndRadius: '14px' }}
              h="50px"
              width={{ md: '120px' }}
              colorScheme="brand"
              flexShrink={0}
            >
              {t('newsletter.button')}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
