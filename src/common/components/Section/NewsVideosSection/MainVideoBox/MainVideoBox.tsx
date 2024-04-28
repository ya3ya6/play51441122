import { DetailsPost } from '@/common/components/Box';
import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, ChakraProps, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { VideoPost } from '../types';

interface MainVideoBoxProps extends ChakraProps {
  video: VideoPost;
}

export const MainVideoBox: FunctionComponent<MainVideoBoxProps> = ({ video, ...chakraProps }) => {
  return (
    <Flex
      id="newsMainVideoBox"
      direction="column"
      align="center"
      mt={{ base: '50px' }}
      position="relative"
      w="100%"
      {...chakraProps}
    >
      <AspectRatio
        w={{ base: '300px', sm: '400px', md: '500px', lg: '500px', xl: '550px', '2xl': '600px' }}
        mb={{ base: '-80px', sm: '-70px' }}
        position={{ base: 'relative', xl: 'absolute' }}
        right={{ base: '0', xl: '0px', '2xl': '-40px' }}
        transform={{ xl: 'translateY(-50%)' }}
        top={{ xl: '50%' }}
        border="1px solid"
        borderColor="gray.100"
        zIndex={2}
        overflow="hidden"
        ratio={16 / 9}
        rounded="3xl"
        bgColor="white"
      >
        {video.video ? (
          <Aparat url={video.video} />
        ) : (
          <Img src={video.cover} alt={video.coverAlt} objectFit="contain" />
        )}
      </AspectRatio>

      <Flex
        w="100%"
        minH={{ xl: '400px' }}
        position="relative"
        borderTopRightRadius={{ base: '0px' }}
        borderBottomRightRadius={{ base: '0px' }}
        borderRadius={{ base: '20px', xl: '0 300px 300px 0' }}
        justify={{ base: 'center', xl: 'flex-end' }}
        bgColor="gray.100"
        py={{ base: '100px', lg: '100px', xl: '80px' }}
        pb={{ base: '20px', lg: '50px', xl: '50px' }}
        pe={{ xl: '300px' }}
      >
        <Flex
          w={{ base: '90%', xl: '70%' }}
          direction="column"
          justify="center"
          me={{ xl: 'auto' }}
        >
          <Heading
            textAlign={{ base: 'center', xl: 'left' }}
            color="gray.700"
            mb={{ base: '20px', '2xl': '20px' }}
            lineHeight="50px"
            size="lg"
          >
            {video.name}
          </Heading>
          <Text textAlign={{ base: 'center', xl: 'left' }} lineHeight="35px" noOfLines={7}>
            {video.abstract}
          </Text>
          <Box mt="30px">
            <DetailsPost post={video} />
          </Box>
        </Flex>

        <Flex
          display={{ base: 'none', xl: 'flex' }}
          right="100%"
          top="50%"
          transform="translateY(-50%)"
          alignSelf="center"
          bgColor="gray.100"
          w="100000px"
          h="100%"
          position="absolute"
        />
      </Flex>
    </Flex>
  );
};
