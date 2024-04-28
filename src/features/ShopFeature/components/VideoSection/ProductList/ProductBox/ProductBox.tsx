import { Box, Center, Img, Stack, Text } from '@chakra-ui/react';
import { ProductBoxProps } from '@/features/ShopFeature/types';
import { FunctionComponent } from 'react';
import classes from './ProductBox.module.css';

export const ProductBox: FunctionComponent<ProductBoxProps> = ({
  name,
  imageAlt,
  image,
  primaryColor,
  secondaryColor,
  position,
  id,
  setActiveVideo,
}) => {
  const horizontalPosition = position === 'RIGHT' ? { right: '-100px' } : { left: '-90px' };

  return (
    <Stack
      as="a"
      href="#mainVideoBox"
      spacing={{ base: '10px' }}
      position="relative"
      onClick={() => setActiveVideo(id)}
      align="center"
      justify="cente"
    >
      <Center rounded="full" cursor="pointer" w="200px" h="200px" bgColor={secondaryColor}>
        <Center flexShrink={0} rounded="full" w="160px" h="160px" bgColor={primaryColor}>
          <Img className={classes.floating} alt={imageAlt} src={image} maxH="180px" />
        </Center>
      </Center>
      <Box
        rounded="lg"
        backdropFilter="blur(50px)"
        bottom={{ sm: 2 }}
        mt={{ md: '-50px' }}
        position={{ base: 'static', '2xl': 'absolute' }}
        p="10px"
        bgColor={{ base: secondaryColor, md: 'rgba(255,255,255,0.5)' }}
        style={horizontalPosition}
      >
        <Text fontSize="small" color="gray.800">
          {name}
        </Text>
      </Box>
    </Stack>
  );
};
