import { ContentBox } from '@/common/components/Box';
import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, Img } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { PostDetailModel } from '../../types/types';
import { StudyGuideSection } from '../StudyGuideSection/StudyGuideSection';

interface ContentSectionProps {
  post: PostDetailModel;
  id: string;
}

export const ContentSection: FunctionComponent<ContentSectionProps> = ({ post, id }) => {
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Box
          as="figure"
          w="100%"
          border="1px solid"
          borderColor="gray.100"
          position="relative"
          height="450px"
          rounded="xl"
          overflow="hidden"
        >
          {!post.video && <Img src={post.cover} alt={post.coverAlt} objectFit="cover" w="100%" />}
          {post.video && <Aparat url={post.video} />}
        </Box>
      </AspectRatio>
      <StudyGuideSection id={id} mb="20px" mt="80px" display={{ base: 'flex', xl: 'none' }} />
      <ContentBox id={id} mt="30px" content={post.description} />
    </Box>
  );
};
