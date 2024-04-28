import { Button, Flex, Text } from '@chakra-ui/react';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import ROUTES from '@/routers';
import { useOverview } from '../../../hooks';

const TextBox: FunctionComponent = () => {
  const { aboutus } = useOverview();
  const { push } = useRouter();
  const t = useText(I18_NAMESPACES.HOME);
  return (
    <Flex
      pt={{ base: 0, xl: '20px' }}
      ps={{ base: '0', xl: '10px' }}
      pb={0}
      pe={{ base: '0', xl: '100px' }}
      direction="column"
      mb={{ base: '20px' }}
      mt={{ base: '-20px' }}
      zIndex="5"
    >
      <Text
        noOfLines={{ base: 6, xl: 7 }}
        color="gray.600"
        lineHeight={9}
        textAlign={{ base: 'center', xl: 'revert' }}
      >
        {aboutus?.description}
      </Text>
      <Button
        display={{ base: 'none', xl: 'flex' }}
        rounded="full"
        alignSelf={{ base: 'center', xl: 'flex-end' }}
        mt="20px"
        colorScheme="brand"
        h="45px"
        minW="140px"
        onClick={() => push(ROUTES.ABOUT)}
      >
        {t('readMore', { isCommon: true })}
      </Button>
    </Flex>
  );
};

export default TextBox;
