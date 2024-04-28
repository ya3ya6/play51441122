import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface LocaleTitleBoxProps {
  primaryTitle: string;
  secondaryTitle: string;
  gradient: string;
}

const LocaleTitleBox: FunctionComponent<LocaleTitleBoxProps> = ({
  primaryTitle,
  secondaryTitle,
  gradient,
}) => {
  return (
    <Box textAlign="center" zIndex={7} dir="rtl" mt="-20px">
      <Heading fontSize={{ base: '30px', lg: '50px' }} fontWeight="bold">
        {primaryTitle}
      </Heading>
    </Box>
  );
};

export default LocaleTitleBox;
