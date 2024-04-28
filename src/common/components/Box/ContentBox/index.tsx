import { Box, ChakraProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

interface ContentBoxPorops extends ChakraProps {
  content: string;
  id: string;
}

export const ContentBox: FunctionComponent<ContentBoxPorops> = ({
  content,
  id,
  ...chakraProps
}) => {
  return (
    <Box className="content-box" {...chakraProps}>
      <Prose>
        <div id={id} dangerouslySetInnerHTML={{ __html: content }} />
      </Prose>
    </Box>
  );
};
