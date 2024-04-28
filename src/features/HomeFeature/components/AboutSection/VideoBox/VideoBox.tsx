import { useAboutusQuery } from '@/api/services/overview/_queries';
import { Aparat } from '@/common/components/Media/Aparat';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { AspectRatio, Box, Button, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const VideoBox: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);
  const { push } = useRouter();
  const t = useText(I18_NAMESPACES.HOME);
  return (
    <>
      <Flex
        w="100%"
        maxW={{ base: '600px', xl: '500px' }}
        shadow="md"
        flexShrink={0}
        mb={{ base: '0', xl: '40px' }}
        me={{ base: '0', xl: '15px' }}
        overflow="hidden"
        rounded="2xl"
        zIndex="5"
      >
        <AspectRatio w="100%" bgColor="white" ratio={16 / 9}>
          {aboutUs?.video ? <Aparat url={aboutUs.video} /> : <Box />}
        </AspectRatio>
      </Flex>

      <Flex
        w="100%"
        transform={{ base: 'scaleY(1.2)', xl: 'scale(1.5)' }}
        position={{ base: 'static', xl: 'absolute' }}
        left="0"
        bottom="0"
        objectFit="cover"
        zIndex="3"
        maxW={{ base: '900px', xl: '500px' }}
        mt={{ base: '-50px', md: '-120px', xl: '0' }}
        me={{ xl: '200px' }}
      >
        <Image src="/images/home/gol.png" alt="gol" w="100%" />
      </Flex>

      <Button
        display={{ xl: 'none' }}
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
    </>
  );
};
