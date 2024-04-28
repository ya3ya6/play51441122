import EmptyBox from '@/common/components/Box/EmptyBox/EmptyBox';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { TicketModel } from '../../types/ticket';
import TicketBox from '../common/TicketBox/TicketBox';

interface AllTicketListProps {
  tickets: TicketModel[];
}

export const AllTicketList: FunctionComponent<AllTicketListProps> = ({ tickets }) => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Stack spacing={5}>
      {tickets.length ? (
        tickets.map(ticket => <TicketBox ticket={ticket} key={ticket.id} />)
      ) : (
        <EmptyBox title={t('support.alert.title')} text={t('support.alert.text')} />
      )}
    </Stack>
  );
};
