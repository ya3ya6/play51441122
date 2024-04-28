import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Container, Divider, Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const MapSection: FunctionComponent = () => {
  const t = useText(I18_NAMESPACES.CONTACT);
  return (
    <Container mb={{ base: '0', lg: '100px' }} maxW="container.lg">
      <Flex my="20px" w="100%" h="100px" align="center" justify="center">
        <Divider w="100%" h="1px" shadow="lg" bgColor="#e1e1e1" borderRadius="full" />
        <Heading
          color="gray.700"
          maxW="fit-content"
          flexShrink={0}
          textAlign="center"
          w="100%"
          mx="15px"
        >
          {t('map.title')}
        </Heading>
        <Divider w="100%" h="1px" shadow="lg" bgColor="#e1e1e1" borderRadius="full" />
      </Flex>
      <Flex
        bgColor="#fff"
        boxShadow="0 0 20px rgba(0,0,0,0.1)"
        h="450px"
        rounded="3xl"
        position="relative"
        overflow="hidden"
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.4271136958964!2d51.4084628!3d35.75797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5928ad8325b1834!2z2LTYsdqp2Kog2b7YsdmG24zYp9mGINqv2LPYqtixINm-2LHYqtmIINiz2YbYrA!5e0!3m2!1sen!2s!4v1656585458645!5m2!1sen!2s"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Flex>
    </Container>
  );
};
