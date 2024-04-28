import { useAboutusQuery } from '@/api/services/overview/_queries';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Circle } from '../design';

interface ContactBoxProps {}

const ContactBox: FunctionComponent<ContactBoxProps> = () => {
  const { data: aboutUs } = useAboutusQuery(null);
  const { push } = useRouter();
  const t = useText();
  return (
    <Flex
      mb={{ base: '30px', xl: '10px' }}
      p="20px"
      mt={{ xl: '-120px' }}
      h={{ base: '100%', xl: '270px' }}
      w={{ base: '100%', xl: '320px' }}
      position="relative"
      direction="column"
      border="1px solid #ddd"
      rounded="3xl"
      align="center"
      justify="space-between"
      bgColor="white"
      pt="160px"
    >
      <Circle />
      <Button
        display={{ xl: 'none' }}
        mb="20px"
        mt="10px"
        shadow="lg"
        rounded="full"
        w="160px"
        h="50px"
        onClick={() => push(ROUTES.SHOP.INDEX)}
        colorScheme="brand"
      >
        {t('footer.orderBtn')}
      </Button>
      <Flex>
        {!!aboutUs?.phoneNumber && (
          <Text color="#2089AF" p="5px 20px">
            {aboutUs?.phoneNumber}
          </Text>
        )}
        {/* {!!aboutUs?.phoneNumber && !!aboutUs?.mobileNumber && <Divider orientation="vertical" />}
        {!!aboutUs?.mobileNumber && (
          <Text color="#2089AF" p="5px 20px">
            {aboutUs?.mobileNumber}
          </Text>
        )} */}
      </Flex>

      {!!aboutUs?.email && (
        <Text
          bgColor="gray.100"
          w="100%"
          textAlign="center"
          rounded="md"
          p="5px 10px"
          border="1px solid #ddd"
          mt="14px"
        >
          {aboutUs?.email}
        </Text>
      )}
    </Flex>
  );
};

export default ContactBox;
