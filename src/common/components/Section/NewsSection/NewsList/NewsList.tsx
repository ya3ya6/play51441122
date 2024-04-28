import { FunctionComponent, ComponentProps } from 'react';
import { Grid } from '@chakra-ui/react';
import { NewsBox } from '@/common/components/Box';
import Utils from '@/utils';

interface Props {
  posts: ComponentProps<typeof NewsBox>['post'][];
}

export const NewsList: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Grid mt="40px" gap="20px" gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint()}>
      {posts.map(post => (
        <NewsBox key={post.id} post={post} />
      ))}
    </Grid>
  );
};
