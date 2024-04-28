import { useNewTicketMutation } from '@/api/services/overview/_mutations';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { TicketForm } from '@/features/SupportFeature/types';
import { useText, useToast } from '@/hooks';
import { errorHandler, toFormData } from '@/utils/helpers';
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
import { useQueryClient } from 'react-query';
import { TicketSchema } from './FormValidation';

interface CreateTicketProps {
  onClose: () => void;
  isOpen: boolean;
}

const CreateTicket: FunctionComponent<CreateTicketProps> = ({ onClose, isOpen }) => {
  const t = useText(I18_NAMESPACES.PROFILE);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketForm>({
    resolver: yupResolver(TicketSchema(t)),
  });

  const { errorToast, successToast } = useToast();
  const queryClient = useQueryClient();
  const mutateNewTicket = useNewTicketMutation(queryClient);

  const handleFormSubmit = (data: TicketForm) => {
    mutateNewTicket.mutate(toFormData(data), {
      onSuccess() {
        successToast(t('support.message.success'));
        onClose();
      },
      onError(error: any) {
        errorHandler(error.response?.data ?? {}, setError, errorToast);
      },
    });
  };

  return (
    <Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={{ base: 'full', lg: 'xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack spacing="auto">
              <Text>{t('support.addTicket.title')}</Text>
              <Center>
                <ModalCloseButton position="static" />
              </Center>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Stack spacing={5} as="form">
              <FormControl isRequired isInvalid={errors.title as boolean | undefined}>
                <FormLabel textAlign="left" htmlFor="ticket">
                  {t('support.addTicket.ticketTitle')}
                </FormLabel>
                <Input id="ticket" {...register('title')} />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.file as boolean | undefined}>
                <FormLabel>{t('support.addTicket.ticketFile')}</FormLabel>
                <Input py="10px" h="50px" bgColor="gray.50" type="file" {...register('file')} />
                <FormErrorMessage>{errors.file?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.message as boolean | undefined}>
                <FormLabel textAlign="left" htmlFor="text">
                  {t('support.addTicket.ticketFile')}
                </FormLabel>
                <Textarea id="text" minH="120px" {...register('message')} />
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack w="100%">
              <Button
                type="submit"
                size="sm"
                colorScheme="green"
                isLoading={mutateNewTicket.isLoading}
                disabled={mutateNewTicket.isLoading}
                onClick={handleSubmit(handleFormSubmit)}
              >
                {t('support.addTicket.submitTicket')}
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={onClose}
                isLoading={mutateNewTicket.isLoading}
                disabled={mutateNewTicket.isLoading}
              >
                {t('support.addTicket.cancel')}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CreateTicket;
