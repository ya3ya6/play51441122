import { DetailsPost } from '@/common/components/Box';
import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { PostModel } from '../../types';

export const MainWebinar: FunctionComponent<{ post: PostModel }> = ({ post }) => {
  return (
    <Flex id="mainVideo" w="100%" justify="center" align="center" direction="column" mt="50px">
      <Box w="90%" flexShrink={0}>
        <AspectRatio
          m="0 auto"
          maxW="700px"
          border="1px solid"
          borderColor="gray.300"
          mb="-100px"
          rounded="2xl"
          zIndex="2"
          bgColor="white"
          overflow="hidden"
          ratio={16 / 9}
        >
          {post?.video ? (
            <Aparat url={post.video} />
          ) : (
            <Img src={post.cover} alt={post.coverAlt} objectFit="contain" />
          )}
        </AspectRatio>
      </Box>

      <Flex
        w="100%"
        p="20px"
        pt="150px"
        align="center"
        justify="center"
        direction="column"
        borderTopRadius="80px"
        borderBottomRadius="10px"
        bgColor="gray.100"
        position="relative"
      >
        <Heading
          w="100%"
          textAlign="center"
          pb="30px"
          borderBottom="2px solid"
          borderColor="gray.300"
          mb="30px"
          as="h2"
          fontSize={{ base: 'md', md: 'xl', xl: '2xl' }}
          color="gray.700"
        >
          {post.name}
        </Heading>
        <Text
          maxW="container.lg"
          noOfLines={{ base: 6 }}
          color="gray.500"
          textAlign="justify"
          lineHeight="35px"
        >
          {post.abstract}
        </Text>
        <Box w="100%" m="20px auto" maxW="container.lg">
          <DetailsPost post={post} />
        </Box>
      </Flex>
    </Flex>
  );
};
