import { FunctionComponent } from 'react';
import Utils from '@/utils';
import { Container, Grid } from '@chakra-ui/react';
import { ArticlesBox } from './ArticlesBox/ArticleBox';
import { PostModel } from '../../types';

export const ArticlesList: FunctionComponent<{ posts: PostModel[] }> = ({ posts }) => {
  return (
    <Container maxW="container.xl">
      <Grid w="100%" gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint()} gap="20px">
        {posts.map(item => (
          <ArticlesBox key={item.id} post={item} />
        ))}
      </Grid>
    </Container>
  );
};
