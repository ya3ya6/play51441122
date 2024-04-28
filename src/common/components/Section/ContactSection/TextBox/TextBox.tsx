import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TextBoxProps {}

const TextBox: FunctionComponent<TextBoxProps> = () => {
  const t = useText(I18_NAMESPACES.COMMON);
  return (
    <Heading
      ms="auto"
      me="50px"
      mt="30px"
      mb="40px"
      color="white"
      width={{ base: '100%' }}
      lineHeight={10}
      fontWeight="normal"
      fontSize="xl"
    >
      {t('freeCounseling.description')}
    </Heading>
  );
};

export default TextBox;
