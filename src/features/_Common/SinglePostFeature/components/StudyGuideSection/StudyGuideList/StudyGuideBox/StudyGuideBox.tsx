import { Box, Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const StudyGuideBox: FunctionComponent<{ title?: string; id?: string }> = ({
  title,
  id,
}) => {
  if (!title && !id) return null;
  return (
    <Flex align="center" gap="10px" role="group" cursor="pointer">
      <Box
        w="3px"
        h="100%"
        bgColor="gray.300"
        _groupHover={{
          bgColor: 'brand.300',
        }}
      />
      <a href={`#${id}`}>
        <Heading lineHeight={8} mr="5px" w="100%" size="sm">
          {title}
        </Heading>
      </a>
    </Flex>
  );
};
