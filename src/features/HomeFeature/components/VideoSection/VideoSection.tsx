import { FunctionComponent } from 'react';
import TextBox from './TextBox/TextBox';
import VideoBox from './VideoBox/VideoBox';

interface VideoSectionProps {}

export const VideoSection: FunctionComponent<VideoSectionProps> = () => {
  return (
    <VideoBox>
      <TextBox />
    </VideoBox>
  );
};
