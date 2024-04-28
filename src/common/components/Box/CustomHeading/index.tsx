import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface CustomHeadingProps {
  title: string;
  text: string;
  link?: string;
}
/**
 * ### Common Component BOX.
 */
export const CustomHeading: FunctionComponent<CustomHeadingProps> = ({
  title,
  text,
  link = '',
}) => {
  return (
    <Stack direction="row" w="100%" align="center" spacing="50px" justify="center">
      <Box w="calc(100% - 350px)" h="2px" bg="#2089AF20" rounded="full" />
      <Box flexShrink={0} maxW="100%">
        <Heading textAlign="center" color="#2089AF" mb="15px" size="lg" as="h2">
          {title}
        </Heading>
        {link ? (
          <Link href={`${link}#allPost`} passHref style={{ width: '100%' }}>
            <Text
              as="a"
              display="flex"
              justifyContent="center"
              w="100%"
              color="gray.600"
              textAlign="center"
            >
              {text}
            </Text>
          </Link>
        ) : (
          <Text color="gray.600" textAlign="center">
            {text}
          </Text>
        )}
      </Box>
      <Box w="calc(100% - 350px)" h="2px" bg="#2089AF20" rounded="full" />
    </Stack>
  );
};
