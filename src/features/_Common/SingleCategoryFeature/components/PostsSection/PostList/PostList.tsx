import { ProductBox } from '@/common/components/Box';
import Utils from '@/utils';
import { Container, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useSingleCategoryFeature } from '../../../context';
import PostBox from './PostBox/PostBox';

const PostList: FunctionComponent<{ isShop?: boolean }> = ({ isShop = false }) => {
  const { posts } = useSingleCategoryFeature();
  const grid = isShop ? 4 : 3;
  return (
    <Container maxW="container.xl">
      <Grid
        gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint(1, 2, 3, grid)}
        gap="20px"
      >
        {posts.map(({ id, name, abstract, link, cover, coverAlt, category, slug }) =>
          isShop ? (
            <ProductBox product={{ id, name, abstract, slug, cover, coverAlt, category }} />
          ) : (
            <PostBox
              key={id}
              title={name}
              description={abstract}
              cover={cover}
              coverAlt={cover}
              view={0}
              link={link}
            />
          ),
        )}
      </Grid>
    </Container>
  );
};

export default PostList;
