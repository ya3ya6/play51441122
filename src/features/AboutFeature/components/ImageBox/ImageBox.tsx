import { useAboutusQuery } from '@/api/services/overview/_queries';
import { Box, Container, Image, Img } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import classes from './ImageBox.module.css';

export const ImageBox: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);

  return (
    <Box mt={{ base: 20, sm: 40, md: '140px', lg: 60 }} w="100%" position="relative">
      <Image
        position="absolute"
        src="/images/about/imgPattern.svg"
        alt="about-Image"
        top="50%"
        w="100%"
        transform="translateY(-50%) scaleY(1.1)"
        overflow="hidden"
        className={classes.wink}
      />
      <Container maxW="container.xl">
        <Box
          position="relative"
          zIndex="2"
          bgColor="rgba(255,255,255,0.2)"
          rounded="2xl"
          shadow="0 0 10px rgba(0,0,0,0.1)"
          w="100%"
          p={{ base: '5px', sm: '10px' }}
        >
          {aboutUs?.cover && <Img alt={aboutUs?.coverAlt} rounded="2xl" src={aboutUs?.cover} />}
        </Box>
      </Container>
    </Box>
  );
};
