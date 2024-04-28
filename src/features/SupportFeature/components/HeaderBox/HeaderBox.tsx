import { I18_NAMESPACES } from '@/common/constants/Locales';
import { SupportIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { Button, Heading, HStack, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface HeaderBoxProps {
  onOpen: () => void;
}

export const HeaderBox: FunctionComponent<HeaderBoxProps> = ({ onOpen }) => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <HStack align="center" spacing="auto">
      <HStack spacing={3}>
        <Icon as={SupportIcon} />
        <Heading fontSize="lg">{t('support.title')}</Heading>
      </HStack>
      <HStack spacing={3}>
        <Button size="sm" onClick={onOpen}>
          {t('support.addTicket.button')}
        </Button>
      </HStack>
    </HStack>
  );
};
