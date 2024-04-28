import { MessageForm } from '@/features/SupportFeature/types';
import { TicketModel } from '@/features/SupportFeature/types/ticket';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { useNewTicketMessageMutation } from '@/api/services/overview/_mutations';
import { useQueryClient } from 'react-query';
import { useText, useToast } from '@/hooks';
import { errorHandler, toFormData } from '@/utils/helpers';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { MessageSchema } from './FormValidation';

interface CreateMessageProps {
  onClose: () => void;
  isOpen: boolean;
  ticket: TicketModel;
}

export const NewMessageModal: FunctionComponent<CreateMessageProps> = ({
  onClose,
  isOpen,
  ticket,
}) => {
  const t = useText(I18_NAMESPACES.PROFILE);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageForm>({
    resolver: yupResolver(MessageSchema(t)),
    defaultValues: {
      id: ticket.id,
    },
  });

  const { errorToast, successToast } = useToast();
  const queryClient = useQueryClient();
  const mutateNewMessage = useNewTicketMessageMutation(queryClient);
  const handleFormSubmit = (data: MessageForm) => {
    mutateNewMessage.mutate(toFormData(data), {
      onSuccess() {
        successToast(t('support.message.successMessage'));
        onClose();
      },
      onError(error: any) {
        errorHandler(error.response?.data ?? {}, setError, errorToast);
      },
    });
  };

  return (
    <Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack spacing="auto">
              <Text>{t('support.addMessage.title')}</Text>
              <Center>
                <ModalCloseButton position="static" />
              </Center>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Stack spacing={5} as="form">
              <FormControl isRequired isInvalid={errors.message as boolean | undefined}>
                <FormLabel textAlign="left" htmlFor="text">
                  {t('support.addMessage.ticketMessage')}
                </FormLabel>
                <Textarea id="text" minH="120px" {...register('message')} />
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.file as boolean | undefined}>
                <FormLabel> {t('support.addMessage.ticketFile')}</FormLabel>
                <Input py="10px" h="50px" bgColor="gray.50" type="file" {...register('file')} />
                <FormErrorMessage>{errors.file?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack w="100%">
              <Button
                type="submit"
                size="sm"
                colorScheme="green"
                isLoading={mutateNewMessage.isLoading}
                disabled={mutateNewMessage.isLoading}
                onClick={handleSubmit(handleFormSubmit)}
              >
                {t('support.addMessage.sendMessage')}
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={onClose}
                isLoading={mutateNewMessage.isLoading}
                disabled={mutateNewMessage.isLoading}
              >
                {t('support.addMessage.cancel')}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
