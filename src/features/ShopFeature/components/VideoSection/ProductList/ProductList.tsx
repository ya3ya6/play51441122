import { Box, Heading, Stack } from '@chakra-ui/react';
import { ProductListProps } from '@/features/ShopFeature/types';
import { FunctionComponent } from 'react';
import { ProductBox } from './ProductBox/ProductBox';

export const ProductList: FunctionComponent<ProductListProps> = ({
  data,
  activeVideo,
  setActiveVideo,
}) => {
  const firstRow = data.slice(0, Math.min(2, data.length));
  const secondRow = data.slice(2, Math.min(4, data.length));

  return (
    <Box
      bgImage="/images/shop/pattern1.png"
      bgPosition="center top"
      bgSize="50%"
      bgRepeat={{ base: 'repeat', md: 'no-repeat' }}
      py="30px"
      px="10px"
      pb="50"
      mb={{ base: '0px', lg: '50px' }}
      w="100%"
      position="relative"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '15px', md: '50px', lg: '300px' }}
        mb="30px"
        w="100%"
        justify={{ md: 'center' }}
        align="center"
      >
        {firstRow.map(
          ({ id, image, primaryColor, secondaryColor, name, imageAlt, videoUrl }, index) => (
            <ProductBox
              imageAlt={imageAlt}
              videoUrl={videoUrl}
              setActiveVideo={setActiveVideo}
              position={index === firstRow.length - 1 ? 'LEFT' : 'RIGHT'}
              key={id}
              id={id}
              name={name}
              image={image}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          ),
        )}
      </Stack>
      {!!secondRow.length && (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing="15px"
          w="100%"
          justify="space-between"
          align="center"
        >
          {secondRow.map(
            ({ id, image, primaryColor, secondaryColor, name, imageAlt, videoUrl }, index) => (
              <ProductBox
                imageAlt={imageAlt}
                setActiveVideo={setActiveVideo}
                videoUrl={videoUrl}
                position={index === firstRow.length - 1 ? 'LEFT' : 'RIGHT'}
                key={id}
                id={id}
                name={name}
                image={image}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
            ),
          )}
        </Stack>
      )}
      <Heading
        mt={{ base: '30px', xl: '0px' }}
        position={{ md: 'absolute' }}
        top={{ md: '80%' }}
        left={{ md: '50%' }}
        transform={{ md: 'translate(-50%, -50%)' }}
        textAlign="center"
        color="gray.600"
        fontSize={{ base: 'lg', sm: '2xl', md: '3xl', lg: '3xl' }}
      >
        {activeVideo.name}
      </Heading>
    </Box>
  );
};
