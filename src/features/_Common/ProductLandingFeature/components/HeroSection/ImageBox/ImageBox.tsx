import { Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface ImageBoxProps {
  src: string;
  alt: string;
}

const ImageBox: FunctionComponent<ImageBoxProps> = ({ alt, src }) => {
  return <Image src={src} alt={alt} />;
};

export default ImageBox;
