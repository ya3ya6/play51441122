import { Center, Img } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Snow } from './design';

interface ImageBoxProps {
  src: string;
  alt: string;
}

const ImageBox: FunctionComponent<ImageBoxProps> = ({ src, alt }) => {
  return (
    <Center
      display={{ base: 'flex', xl: 'flex' }}
      zIndex={8}
      w={{ base: '200px', md: '300px', lg: '440px' }}
      rounded="xl"
      transform={{ md: 'translateY(-50%)' }}
      right="0"
      top="50%"
      mx="auto"
      position={{ base: 'static', md: 'absolute' }}
      mb={{ base: '-80px' }}
    >
      <Snow />
      {src && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Img src={src} alt={alt} zIndex={4} />
        </motion.div>
      )}
    </Center>
  );
};

export default ImageBox;
