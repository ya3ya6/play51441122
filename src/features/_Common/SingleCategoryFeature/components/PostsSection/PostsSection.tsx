import { ContentBox, Pagination } from '@/common/components/Box';
import { CurveBottom, CurveTop } from '@/common/components/Design';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Box, Container, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useSingleCategoryFeature } from '../../context';
import PostList from './PostList/PostList';

interface PostsSectionProps {
  isShop?: boolean;
}

const PostsSection: FunctionComponent<PostsSectionProps> = ({ isShop = false }) => {
  const { category, currentPage, nextPage, prevPage, setPage, totalPosts } =
    useSingleCategoryFeature();
  const t = useText(I18_NAMESPACES.CATEGORY);

  return (
    <Box mt={category.children.length > 0 ? '120px' : '0'} mb="100px" py="20px">
      <Box>
        <Heading
          color="gray.600"
          textAlign="center"
          my="20px"
          mb={{ base: '40px', lg: '-50px' }}
          fontSize="xl"
        >
          {t(isShop ? 'productsCategory' : 'postCategory', {
            name: category.name,
          })}
        </Heading>
        <CurveTop display={{ base: 'none', lg: 'block' }} />
      </Box>
      <Box bgColor="gray.100" py={{ base: '50px', lg: '10px' }}>
        <PostList isShop={isShop} />
      </Box>
      <Box>
        <CurveBottom display={{ base: 'none', lg: 'block' }} />
        <Pagination
          mt={{ base: '50px', lg: '-70px' }}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
          totalPages={Math.ceil(totalPosts / 10)}
        />
      </Box>
      <Container maxW="container.xl">
        <ContentBox id="shopCategory" content={category.description} />
      </Container>
    </Box>
  );
};

export default PostsSection;
