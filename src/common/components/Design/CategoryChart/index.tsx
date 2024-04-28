import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface CategoryChartProps {
  title: string;
  count: number;
  hasHero?: boolean;
}
/**
 * ### Common Component DESIGN.
 */
export const CategoryChart: FunctionComponent<CategoryChartProps> = ({
  title,
  count,
  hasHero = true,
}) => {
  return (
    <>
      {count >= 4 ? (
        <Container maxW="container.lg">
          <Stack align="center" w="100%" mt="40px">
            <Flex direction="column" gap="50px" align="center" justify="center" w="100%">
              <Box
                h="40px"
                w="3px"
                rounded="lg"
                bgColor={hasHero ? 'var(--primaryColor)' : 'transparent'}
              />
              <Heading
                border="3px solid"
                borderColor="var(--primaryColor)"
                rounded="lg"
                p="12px 30px"
                color="var(--primaryColor)"
                size="md"
                my="15px"
                as="h2"
                position="absolute"
              >
                {title}
              </Heading>
              <Box mt="5px" h="40px" w="3px" rounded="lg" bgColor="var(--primaryColor)" />
            </Flex>
            <Box w="100%" h="3px" rounded="lg" bgColor="var(--primaryColor)" />
            <Flex w="100%" justify="space-between">
              <Box
                h="80px"
                w="3px"
                borderRadius="10px"
                bgColor="var(--primaryColor)"
                display={{ base: 'none', xl: 'block' }}
              />
              <Box
                h="80px"
                w="3px"
                borderRadius="10px"
                bgColor="var(--primaryColor)"
                display={{ base: 'none', md: 'block' }}
              />
              <Box
                h="80px"
                w="3px"
                borderRadius="10px"
                bgColor="var(--primaryColor)"
                display={{ base: 'none', md: 'block' }}
              />
              <Box
                h="80px"
                w="3px"
                borderRadius="10px"
                bgColor="var(--primaryColor)"
                display={{ base: 'none', lg: 'block' }}
              />
            </Flex>
          </Stack>
        </Container>
      ) : (
        <Heading my={10} textAlign="center" color="gray.600" size="md">
          {title}
        </Heading>
      )}
    </>
  );
};
