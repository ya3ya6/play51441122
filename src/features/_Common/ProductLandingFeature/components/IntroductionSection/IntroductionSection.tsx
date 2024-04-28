import { LandingModel } from '@/model/LandingPage';
import { Container, Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import ImageBox from './ImageBox/ImageBox';
import TextBox from './TextBox/TextBox';

type IntroductionSectionProps = Pick<LandingModel, 'introduction' | 'image' | 'color'>;

const IntroductionSection: FunctionComponent<IntroductionSectionProps> = ({
  introduction,
  image,
  color,
}) => {
  return (
    <Container mt="-50px" maxW="container.xl">
      <Flex direction={{ base: 'column', lg: 'row' }} w={{ base: '100%' }}>
        <TextBox title={introduction.title} description={introduction.description} color={color} />
        <ImageBox alt={image.alt} src={image.src} />
      </Flex>
    </Container>
  );
};

export default IntroductionSection;
