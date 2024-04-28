import { FunctionComponent } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

interface AlertBoxProps {
  title: string;
  text: string;
  status?: 'info' | 'warning' | 'success' | 'error' | undefined;
}

const AlertBox: FunctionComponent<AlertBoxProps> = ({ title, text, status = 'info' }) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      rounded="lg"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="lg">{text}</AlertDescription>
    </Alert>
  );
};

export default AlertBox;

// تیکت در انتظار پاسخ میباشد
