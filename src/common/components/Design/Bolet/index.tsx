import { Box, ChakraProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type BoletProps = ChakraProps;
/**
 * ### Common Component DESIGN.
 */
export const Bolet: FunctionComponent<BoletProps> = ({ ...chakraProps }) => {
  return (
    <Box
      w="11px"
      h="11px"
      flexShrink={0}
      bgColor="brand.600"
      shadow="lg"
      rounded="full"
      backgroundPosition="center"
      backgroundSize="cover"
      outlineOffset="8px"
      className="rippleBolet"
      me="20px"
    />
  );
};
