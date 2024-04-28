import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TextBoxProps {}

const TextBox: FunctionComponent<TextBoxProps> = () => {
  const t = useText(I18_NAMESPACES.NEWS);
  return (
    <Box flexShrink={0} width={{ base: '100%', xl: '44%' }}>
      <Heading textAlign={{ base: 'center', xl: 'revert' }} size="lg" color="white">
        {t('visitedBox.title')}
      </Heading>
      <Text textAlign={{ base: 'center', xl: 'revert' }} mt="20px" lineHeight="10" color="white">
        {t('visitedBox.description')}
      </Text>
      <Box textAlign={{ base: 'center', xl: 'revert' }}>
        <Button as="a" href="#allPost" mt="20px" colorScheme="whiteAlpha">
          {t('visitedBox.button')}
        </Button>
      </Box>
    </Box>
  );
};

export default TextBox;
