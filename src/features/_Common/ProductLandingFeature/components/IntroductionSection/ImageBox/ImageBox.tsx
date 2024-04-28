import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface ImageBoxProps {
  src: string;
  alt: string;
}

const ImageBox: FunctionComponent<ImageBoxProps> = ({ alt, src }) => {
  return (
    <Box
      w={{ base: '100%', lg: '50%' }}
      transform="scale(-0.8 , 0.8) translate(0,-100px)"
      bgImage="images/landing/imagePattern.png"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPosition="100px 100px"
    >
      <Image src={src} alt={alt} width="680px" height="920px" />
    </Box>
  );
};

export default ImageBox;
