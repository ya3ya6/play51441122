import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { RequestOTPStep } from './RequestOTP';
import { VerifyOTP } from './VerifyOTP';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PhoneNumberModal: FC<Props> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState<'REQUEST' | 'VERIFY'>('REQUEST');
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('info.changePhoneNumberTitle')}</ModalHeader>
        <ModalBody pb={12}>
          {step === 'REQUEST' && (
            <RequestOTPStep
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              nextStep={() => setStep('VERIFY')}
            />
          )}
          {step === 'VERIFY' && <VerifyOTP close={onClose} phoneNumber={phoneNumber} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const PhoneNumberChangeModalWithButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <>
      <Button onClick={onOpen} mt={4} colorScheme="pink" w="100%">
        {t('info.form.button.changePhoneNumber')}
      </Button>
      {isOpen && <PhoneNumberModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};
