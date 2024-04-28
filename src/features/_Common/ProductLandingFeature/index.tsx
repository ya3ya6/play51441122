import { LandingModel } from '@/model/LandingPage';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import { HeroSection } from './components';
import AttributeList from './components/AttributeList/AttributeList';
import ContactSection from '../../../common/components/Section/ContactSection/ContactSection';
import DetialsSection from './components/DetialsSection/DetialsSection';
import FactorsSection from './components/FactorsSection/FactorsSection';
import FooterSection from './components/FooterSection/FooterSection';
import IntroductionSection from './components/IntroductionSection/IntroductionSection';
import VideoSection from './components/VideoSection/VideoSection';

type ProductLandingFeatureProps = { data: LandingModel };

export const ProductLandingFeature: FunctionComponent<ProductLandingFeatureProps> = ({
  data: {
    attribute,
    color,
    detials,
    factors,
    gradient,
    hero,
    image,
    introduction,
    videos,
    headerSvg,
  },
}) => {
  return (
    <Box>
      <Head>
        <title>{introduction.title} | پرنیان</title>
      </Head>
      <HeroSection
        hero={hero}
        image={image}
        gradient={gradient}
        headerSvg={headerSvg}
        color={color}
      />
      <IntroductionSection introduction={introduction} image={image} color={color} />
      {/* OK */}
      <AttributeList attribute={attribute} gradient={gradient} color={color} />
      {/* OK */}
      <DetialsSection detials={detials} gradient={gradient} color={color} />
      <FactorsSection factors={factors} color={color} /> {/* OK */}
      <VideoSection videos={videos} color={color} />
      <ContactSection gradient={gradient} color={color} hasHeader hasImage />
      <FooterSection />
    </Box>
  );
};
