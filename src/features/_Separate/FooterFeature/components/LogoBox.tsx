/* eslint-disable react/jsx-no-target-blank */
import { Box, ChakraProps, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';

type LogoBoxProps = ChakraProps;

const LogoBox: FunctionComponent<LogoBoxProps> = ({ ...chakraProps }) => {
  return (
    <Flex
      w={{ xl: '30%' }}
      h="100%"
      align="center"
      justify={{ base: 'center', xl: 'space-evenly' }}
      {...chakraProps}
    >
      <Box transform="scale(1.4)" w="91px" h="38px" position="relative">
        <Image src="/images/common/logo.png" alt="footer_logo" layout="fill" />
      </Box>

      <Box transform="scale(1.4)" w="91px" h="92px" position="relative">
        <a
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=184197&amp;Code=57tNcSQyU5co74yQCV6D"
          style={{ width: '91px', height: '92px' }}
        >
          <img
            referrerPolicy="origin"
            style={{ width: '91px', height: '92px' }}
            src="https://Trustseal.eNamad.ir/logo.aspx?id=184197&amp;Code=57tNcSQyU5co74yQCV6D"
            alt="enamad"
            id="57tNcSQyU5co74yQCV6D"
          />
        </a>
      </Box>
    </Flex>
  );
};

export default LogoBox;
