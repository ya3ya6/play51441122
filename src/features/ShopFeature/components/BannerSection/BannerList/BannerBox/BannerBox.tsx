import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useRouter } from 'next/router';
import { IBanner } from '../../types';

export const BannerBox: FunctionComponent<{ banner: IBanner }> = ({ banner }) => {
  const router = useRouter();
  const t = useText(I18_NAMESPACES.SHOP);

  return (
    <Flex
      position="relative"
      p={{ base: '10px', md: '20px' }}
      pt={{ base: '100px', md: '20px', lg: '50px' }}
      h={{ base: '100%', md: '250px', lg: '380px' }}
      pb="20px"
      overflow="hidden"
      align="center"
      bgColor="transparent"
    >
      <Box
        top="0"
        display={{ base: 'none', xl: 'block' }}
        transform="translateY(-70%)"
        position="absolute"
        left="50px"
        bgColor="#f7f7f7"
        rounded="full"
        w="150px"
        h="100px"
        _before={{
          content: "''",
          display: 'block',
          width: '10px',
          height: '10px',
          backgroundColor: 'transparent',
          position: 'absolute',
          left: '-2px',
          borderRadius: '0 50px 0 0',
          boxShadow: '0 -6px 0px #f7f7f7',
          top: '70%',
        }}
        _after={{
          content: "''",
          display: 'block',
          width: '10px',
          height: '10px',
          backgroundColor: 'transparent', // #138DBE
          position: 'absolute',
          right: '-2px',
          borderRadius: '50px 0 0 0',
          boxShadow: '0 -6px 0 #f7f7f7',
          top: '70%',
        }}
      />
      <Box w={{ base: '100%', md: '60%', lg: '80%' }} fontSize={{ base: 'sm', lg: 'lg', xl: 'xl' }}>
        <Heading
          fontSize={{ base: 'sm', lg: '3xl', xl: '3xl' }}
          textAlign={{ base: 'center', md: 'revert' }}
          color="white"
        >
          {banner.title}
        </Heading>
        <Heading
          fontSize="inherit"
          textAlign={{ base: 'center', md: 'revert' }}
          mt={{ base: '10px', md: '20px', lg: '30px' }}
          size="lg"
          fontWeight="semibold"
          color="white"
        >
          {banner.subTitle}
        </Heading>
        <Text
          noOfLines={3}
          lineHeight={10}
          fontSize="inherit"
          textAlign={{ base: 'center', md: 'revert' }}
          mt={{ base: '10px', md: '20px', lg: '30px' }}
          maxW={{ base: '600px', lg: '600px' }}
          color="white"
        >
          {banner.description}
        </Text>
        <Stack
          direction="row"
          mt={{ base: '15px', xl: '30px' }}
          spacing={{
            base: '10px',
          }}
          align={{ base: 'center' }}
        />
      </Box>
    </Flex>
  );
};
