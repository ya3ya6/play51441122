import { useCloseTicketMutation } from '@/api/services/overview/_mutations';
import { TicketModel } from '@/features/SupportFeature/types/ticket';
import { useDate } from '@/utils/helpers';
import { Button, HStack, Stack, useDisclosure } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText, useToast } from '@/hooks';
import { useQueryClient } from 'react-query';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import AlertBox from './AlertBox/AlertBox';
import TicketMessageBox from './TicketMessageBox/TicketMessageBox';
import { NewMessageModal } from '../../CreateTicket/CreateMessage';

interface TicketMessageListProps {
  ticket: TicketModel;
}

const TicketMessageList: FunctionComponent<TicketMessageListProps> = ({ ticket }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { errorToast, successToast } = useToast();
  const queryClient = useQueryClient();
  const mutateClose = useCloseTicketMutation(queryClient);
  const { date } = useDate();
  const t = useText(I18_NAMESPACES.PROFILE);
  const handleCloseTicket = () => {
    mutateClose.mutate(
      {
        id: ticket.id,
      },
      {
        onSuccess: () => {
          successToast(t('support.message.successClose'));
        },
        onError: () => {
          errorToast(t('support.message.errorClose'));
        },
      },
    );
  };

  return (
    <Stack py="10px" spacing="20px">
      {ticket.messages.map(message => (
        <TicketMessageBox key={message.id} message={message} />
      ))}
      {ticket.status === 'closed' && (
        <AlertBox
          title={t('support.ticketCloseAlert.title')}
          text={t('support.ticketCloseAlert.text')}
          status="success"
        />
      )}
      {ticket.status === 'answered' && (
        <AlertBox title={t('support.ticketAnsAlert.title')} text="" status="info" />
      )}
      {ticket.status === 'open' && (
        <AlertBox
          title={t('support.ticketOpenAlert.title')}
          text={t('support.ticketOpenAlert.text', {
            date: `${t('support.lastPm')} ${date(ticket.messages.at(-1)!.createdAt)}`,
          })}
          status="info"
        />
      )}
      <HStack>
        <Button minW="120px" size="md" colorScheme="green" onClick={onOpen}>
          {['answered', 'open'].includes(ticket.status) && t('support.sendMessage')}
          {ticket.status === 'closed' && t('support.openAndSend')}
        </Button>
        {['answered', 'open'].includes(ticket.status) && (
          <Button
            onClick={handleCloseTicket}
            isLoading={mutateClose.isLoading}
            disabled={mutateClose.isLoading}
            minW="120px"
            size="md"
            colorScheme="red"
          >
            {t('support.closeTicket')}
          </Button>
        )}
      </HStack>
      <NewMessageModal ticket={ticket} isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default TicketMessageList;
