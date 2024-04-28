import { LandingModel } from '@/model/LandingPage';
import { Box, Center, Flex, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import GoToContactBox from './GoToContactBox/GoToContactBox';
import ImageBox from './ImageBox/ImageBox';
import InternacionalTitleBox from './InternacionalTitleBox/InternacionalTitleBox';
import LocaleTitleBox from './LocaleTitleBox/LocaleTitleBox';
import MenuList from './MenuList/MenuList';

type HeroSectionProps = Pick<LandingModel, 'hero' | 'image' | 'gradient' | 'headerSvg' | 'color'>;

const HeroSection: FunctionComponent<HeroSectionProps> = ({ hero, gradient, image, color }) => {
  return (
    <Flex
      justify={{ base: 'center', lg: 'unset' }}
      align={{ base: 'center', lg: 'stretch' }}
      direction={{ base: 'column-reverse', lg: 'row' }}
      w="full"
      mb={{ base: '0px', lg: '100px' }}
      position="relative"
    >
      <Center
        p={{ base: '0px', xl: '180px' }}
        py="0px"
        position="relative"
        w={{ base: '100%', lg: '50%' }}
        bgColor={color}
        borderBottomRightRadius={{ base: '0', lg: '50px' }}
        h={{ base: 'auto', xl: '98vh' }}
      >
        {/* <DesignCircleBox /> */}
        <ImageBox src={image.src} alt={image.alt} />
      </Center>
      <Center
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
        w={{ base: '120px', lg: '150px' }}
        h={{ base: '120px', lg: '150px' }}
        bgColor="#f7f7f7"
        borderRadius="full"
        display={{ base: 'none', xl: 'flex' }}
      >
        <Box
          w="17px"
          display={{ base: 'none', lg: 'block' }}
          h="18px"
          position="absolute"
          top="100%"
          left="50%"
          bgColor={color}
          borderRadius=" 0  72px 0 0"
          boxShadow="3px -6px 0 #f7f7f7"
          transform="translateX(-100%) rotate(1deg)"
        />
        <GoToContactBox gradient={gradient} />
        <Box
          w="17px"
          display={{ base: 'none', lg: 'block' }}
          h="18px"
          position="absolute"
          bottom="100%"
          left="50%"
          bgColor={color}
          borderRadius="0 0 72px 0 "
          boxShadow="3px 6px 0 #f7f7f7"
          transform="translateX(-100%) rotate(1deg)"
        />
      </Center>
      <Center
        my={{ base: '50px', lg: '20px' }}
        flexDirection="column"
        p={{ base: '20px', lg: '40px' }}
        h="100%"
        w={{ base: '100%', lg: '50%' }}
      >
        <Image src="/images/common/logo.png" transform="scale(1.2)" mb="40px" />
        <InternacionalTitleBox
          gradient={gradient}
          primaryTitle={hero.InternacionalTitle.primaryTitle}
          secondaryTitle={hero.InternacionalTitle.secondaryTitle}
        />
        <LocaleTitleBox
          gradient={gradient}
          primaryTitle={hero.LocaleTitleBox.primaryTitle}
          secondaryTitle={hero.LocaleTitleBox.secondaryTitle}
        />
        <MenuList color={color} />
      </Center>
    </Flex>
  );
};

export default HeroSection;
