import { Flex, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface CircleProps {}

export const Circle: FunctionComponent<CircleProps> = () => {
  return (
    <Flex
      align="center"
      w={{ base: '280px' }}
      h={{ base: '280px' }}
      justify="center"
      position="absolute"
      top={{ base: '0' }}
      transform="translateY(-50%)"
    >
      <Flex
        w={{ base: '280px' }}
        h={{ base: '280px' }}
        maxW="100%"
        rounded="full"
        bgColor="#2089AF"
        opacity="0.12"
        position="absolute"
      />
      <Flex
        w={{ base: '250px' }}
        h={{ base: '250px' }}
        maxW="100%"
        bgColor="#2089AF"
        opacity="0.4"
        rounded="full"
        position="absolute"
      />
      <Flex
        w={{ base: '220px' }}
        h={{ base: '220px' }}
        maxW="100%"
        bgColor="#2089AF"
        opacity="0.5"
        rounded="full"
        position="absolute"
      />
      <Flex
        w={{ base: '220px' }}
        h={{ base: '220px' }}
        flexShrink={0}
        position="absolute"
        maxW="100%"
      >
        <Image
          src="/images/common/44.png"
          alt="Dan Abramov"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-66%) scale(0.95)"
        />
      </Flex>
    </Flex>
  );
};
