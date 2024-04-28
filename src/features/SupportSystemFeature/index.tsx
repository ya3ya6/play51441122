import { Center, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import TextBox from './components/TextBox/TextBox';

interface SupportSystemFeatureProps {}

export const SupportSystemFeature: FunctionComponent<SupportSystemFeatureProps> = () => {
  return (
    <Container maxW="container.xl">
      <Center minH="50vh">
        <TextBox />
      </Center>
    </Container>
  );
};
