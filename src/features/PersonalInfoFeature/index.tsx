import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AuthIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { Box, Divider, Flex, Heading, HStack, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FormList } from './components';

interface PersonalInfoFeatureProps {}

export const PersonalInfoFeature: FunctionComponent<PersonalInfoFeatureProps> = () => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Flex direction="column">
      <Box>
        <HStack spacing={3} mb={5}>
          <Icon as={AuthIcon} />
          <Heading fontSize="lg">{t('info.title')}</Heading>
        </HStack>
        <Divider />
      </Box>
      <Box mt="20px">
        <FormList />
      </Box>
    </Flex>
  );
};
