import { Grid } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { VideoPost } from '../types';
import { VideoBox } from './VideoBox/VideoBox';

interface Props {
  videos: VideoPost[];
  activePost: number;
  setActivePost: Dispatch<SetStateAction<number>>;
}

export const VideosList: FunctionComponent<Props> = ({ videos, activePost, setActivePost }) => {
  return (
    <Grid
      pb="20px"
      gap="30px"
      mt={{ base: '50px' }}
      justifyContent="center"
      gridTemplateColumns={{
        base: '100%',
        md: '1fr 1fr',
        lg: '1fr 1fr 1fr',
      }}
      overflowX="auto"
    >
      {videos.map(item => (
        <VideoBox activePost={activePost} setActivePost={setActivePost} key={item.id} post={item} />
      ))}
    </Grid>
  );
};
