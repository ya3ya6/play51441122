import Utils from '@/utils';
import { Grid } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { PostModel } from '../../types';
import { VideoBox } from './VideoBox/VideoBox';

interface VideosListPropsType {
  posts: PostModel[];
  setACtivePost: Dispatch<SetStateAction<number>>;
  activePost: number;
}
export const VideosList: FunctionComponent<VideosListPropsType> = ({
  posts,
  activePost,
  setACtivePost,
}) => {
  return (
    <Grid
      alignContent="start"
      gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint(1, 2, 3, 1)}
    >
      {posts.map(item => (
        <VideoBox key={item.id} post={item} activePost={activePost} setACtivePost={setACtivePost} />
      ))}
    </Grid>
  );
};
