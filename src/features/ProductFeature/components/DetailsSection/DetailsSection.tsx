import { Container, Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import ImageList from './ImageList/ImageList';
import DataBox from './DataBox/DataBox';

interface DetailsSectionProps {}

const DetailsSection: FunctionComponent<DetailsSectionProps> = () => {
  return (
    <Flex mt="100px">
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', lg: 'row' }} align="flex-start" flexWrap="wrap">
          <ImageList />
          <DataBox />
        </Flex>
      </Container>
    </Flex>
  );
};

export default DetailsSection;
