import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useProduct } from '../../hooks';

interface VideoSectionProps {}

const VideoSection: FunctionComponent<VideoSectionProps> = () => {
  const product = useProduct();

  if (!product.videoUrl) {
    return <Box my={{ base: '150px', sm: '200px', md: '250px', xl: '250px' }} />;
  }

  return (
    <Box
      mt={{ base: '30px', lg: '150px' }}
      mb={{ base: '50px', sm: '100px', md: '150px' }}
      h="400px"
      clipPath="fill-box"
      position="relative"
    >
      <Flex
        direction="column"
        maxW="600px"
        align="center"
        justify="center"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        w="90%"
        position="absolute"
      >
        <AspectRatio
          maxW="600px"
          w="100%"
          bgColor="white"
          rounded="3xl"
          border="1px solid"
          borderColor="var(--primaryColor)"
          shadow="md"
          zIndex="10"
          overflow="hidden"
          ratio={16 / 9}
        >
          <Aparat url={product.videoUrl} />
        </AspectRatio>
        <Flex
          w={{ base: '90%', lg: '110%' }}
          justify="center"
          align="flex-end"
          pb={{ base: '15px', sm: '30px' }}
          h={{ base: '100px', sm: '120px', lg: '130px' }}
          borderRadius={{ base: '10px 10px 50px 50px', lg: '10px 10px 80px 80px' }}
          bgColor="brand.500"
          color="white"
          border="1px solid"
          borderColor="gray.100"
          mt={{ base: '-50px', md: '-50px' }}
        >
          <Heading fontWeight="light" fontSize={{ base: '10px', sm: 'lg' }}>
            {product.videoText}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VideoSection;
