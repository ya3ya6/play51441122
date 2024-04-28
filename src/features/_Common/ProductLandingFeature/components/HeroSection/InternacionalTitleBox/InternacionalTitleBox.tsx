import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface InternacionalTitleBoxProps {
  primaryTitle: string;
  secondaryTitle: string;
  gradient: string;
}

const InternacionalTitleBox: FunctionComponent<InternacionalTitleBoxProps> = ({
  primaryTitle,
  secondaryTitle,
  gradient,
}) => {
  return (
    <Box textAlign="center" p="20px" zIndex={7} dir="ltr">
      <Heading fontSize={{ base: '30px', lg: '50px' }}>{secondaryTitle}</Heading>
      <Heading
        bgGradient={gradient}
        style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}
        fontSize={{ base: '100px', lg: '130px', xl: '160px' }}
      >
        {primaryTitle}
      </Heading>
    </Box>
  );
};

export default InternacionalTitleBox;
