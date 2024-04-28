import { FC } from 'react';
import { Box, ChakraProps, Image as ChakraImage, ImageProps } from '@chakra-ui/react';
import imgFallBack from '../../../../../public/images/common/imgFallBack.png';
// TODO: Replace all chakra img and image components to this component

interface ImageFallBackPropsType extends ImageProps {
  fallBackProps?: ImageProps;
  fallBackWrapperProps?: ChakraProps;
  width?: string;
  height?: string;
}

export const ImageFallBack: FC<ImageFallBackPropsType> = ({
  fallBackProps,
  width = 'auto',
  height = 'auto',
  fallBackWrapperProps,
  ...props
}) => (
  <ChakraImage
    fallback={
      <Box bgColor="#eee" {...fallBackWrapperProps}>
        <Box>
          <ChakraImage
            src={imgFallBack.src}
            w={width}
            h={height}
            alt="image-fallback"
            objectFit="cover"
            {...fallBackProps}
          />
        </Box>
      </Box>
    }
    w={width}
    h={height}
    {...props}
  />
);
