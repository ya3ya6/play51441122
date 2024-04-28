import { useAboutusQuery } from '@/api/services/overview/_queries';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { ChakraProps, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type AddressBoxProps = ChakraProps;

const AddressBox: FunctionComponent<AddressBoxProps> = ({ ...chakraProps }) => {
  const { data: aboutUs } = useAboutusQuery(null);
  const t = useText(I18_NAMESPACES.COMMON);
  return (
    <Text
      textAlign="center"
      pb={{ base: '20px', md: '0' }}
      lineHeight={8}
      color="gray.600"
      fontSize="md"
      {...chakraProps}
    >
      {aboutUs?.address} - {t('postCode')} {aboutUs?.postalCode}
    </Text>
  );
};

export default AddressBox;
