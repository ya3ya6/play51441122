import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface EmptyBoxProps {
  text: string;
  title: string;
}

const EmptyBox: FunctionComponent<EmptyBoxProps> = ({ text, title }) => {
  return (
    <Alert
      status="info"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      alignSelf="center"
      rounded="lg"
      justifyContent="center"
      textAlign="center"
      height="200px"
      bgColor="blue.100"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{text}</AlertDescription>
    </Alert>
  );
};

export default EmptyBox;
