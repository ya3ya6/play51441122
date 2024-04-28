import { DetailsPost } from '@/common/components/Box';
import { ImageFallBack } from '@/common/components/Element';
import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { PostModel } from '../../types';

interface MainvideoBoxProps {
  post: PostModel;
}

const MainvideoBox: FunctionComponent<MainvideoBoxProps> = ({ post }) => {
  return (
    <Box id="tutorialVideoMainBox">
      <AspectRatio ratio={16 / 9} rounded="xl" overflow="hidden">
        {post.video ? (
          <Aparat url={post.video} />
        ) : (
          <ImageFallBack src={post.cover} alt={post.coverAlt} />
        )}
      </AspectRatio>

      <Box rounded="2xl" bgColor="gray.100" p="20px" mt="30px">
        <Heading
          textAlign={{ base: 'center', xl: 'revert' }}
          lineHeight={{ base: '10' }}
          color="gray.700"
          size="lg"
          as="h3"
          mb="20px"
        >
          {post.name}
        </Heading>
        <Text mb="20px" noOfLines={{ base: 0, md: 7 }} lineHeight={9}>
          {post.abstract}
        </Text>
        <DetailsPost post={post} />
      </Box>
    </Box>
  );
};

export default MainvideoBox;
