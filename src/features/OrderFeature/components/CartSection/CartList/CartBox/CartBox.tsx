import {
  Divider,
  Flex,
  Heading,
  IconButton,
  Img,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { HomeIcon, TrashIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';

interface Props {
  id: number;
  name: string;
  cover: string;
  coverAlt: string;
  isAvailable: boolean;
  abstract: string;
  onClickRemove: (id: number) => void;
}

export const CartBox: FunctionComponent<Props> = ({
  abstract,
  cover,
  id,
  coverAlt,
  name,
  onClickRemove,
  isAvailable,
}) => {
  const [mdSize] = useMediaQuery('(min-width: 500px)');
  const t = useText();
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '10px' }}
      bg="white"
      p="15px"
      shadow="md"
      rounded="md"
    >
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={{ base: '20px' }}
        align="center"
        justify="space-evenly"
        flexShrink={0}
      >
        <Flex
          align="center"
          justify="center"
          border="2px solid"
          borderColor="gray.100"
          rounded="lg"
          w={{ base: '100%', sm: '50%', md: '200px' }}
          position="relative"
        >
          <Img src={cover} alt={coverAlt} objectFit="contain" width="200px" height="200px" />
        </Flex>

        <Stack
          spacing={{ base: '20px' }}
          w={{ base: '100%', sm: '50%', md: 'calc(100% - 200px)' }}
          h="100%"
          ms={{ base: '0' }}
          justify="space-between"
          py="5px"
          direction="column"
        >
          <Heading as="h2" size="sm">
            {name}
          </Heading>
          <Flex align="center" color="gray.500">
            {isAvailable ? (
              <>
                <HomeIcon />
                <Text ms="5px">{t('available')}</Text>
              </>
            ) : (
              <>
                <HomeIcon color="red" />
                <Text ms="5px" color="red">
                  {t('notAvailable')}
                </Text>
              </>
            )}
          </Flex>
          {mdSize && (
            <Stack direction="row" spacing="10px">
              <IconButton
                fontSize="xl"
                aria-label="delete"
                variant="outline"
                icon={<TrashIcon />}
                colorScheme="red"
                rounded="full"
                onClick={() => onClickRemove(id)}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      <Flex flexShrink={0} mx="30px">
        <Divider orientation="vertical" />
      </Flex>

      <VStack align="center">
        <Text color="gray.600" lineHeight="35px" noOfLines={5}>
          {abstract}
        </Text>
      </VStack>
      {!mdSize && (
        <Flex>
          <IconButton
            fontSize="xl"
            aria-label="delete"
            variant="outline"
            icon={<TrashIcon />}
            colorScheme="red"
            rounded="full"
          />
        </Flex>
      )}
    </Stack>
  );
};
