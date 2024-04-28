import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import HeadingBox from '../../../../features/_Common/ProductLandingFeature/components/common/HeadingBox/HeadingBox';
import FormBox from './FormBox/FormBox';
import TextBox from './TextBox/TextBox';

type ContactSectionProps = {
  hasImage?: boolean;
  hasHeader?: boolean;
  color?: string;
  gradient?: string;
};

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  gradient = 'linear-gradient(to right, #00b4db, #0083b0);',
  color = '#00b4db',
  hasImage = false,
  hasHeader = false,
}) => {
  return (
    <Container id="contact" maxW="container.lg" mt="100px">
      {hasHeader ? (
        <HeadingBox
          color={color}
          id="ContactSection"
          title="مشاوره رایگان"
          description="مشاوره رایگان برای محصول الکس"
        />
      ) : null}

      <Box mt="50px">
        <Flex
          rounded="3xl"
          w="100%"
          direction={{ base: 'column', md: 'row' }}
          p="20px"
          pb={{ base: '0' }}
          position="relative"
          bgImage={gradient}
        >
          <Box w={{ base: '100%', md: hasImage ? 'calc(100% - 300px)' : '100%' }} ms="auto">
            <TextBox />
            <FormBox />
          </Box>
          {hasImage ? (
            <Box
              flexShrink={0}
              order={{ base: '1', lg: '-1' }}
              position={{ base: 'static', md: 'absolute' }}
              bottom="0"
            >
              <Image src="images/common/operator.png" alt="operator" w="100%" h="100%" />
            </Box>
          ) : null}
        </Flex>
      </Box>
    </Container>
  );
};

export default ContactSection;
