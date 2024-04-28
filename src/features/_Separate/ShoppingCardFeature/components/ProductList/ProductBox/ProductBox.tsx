import { CheckedIcon, TrashIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { Box, Flex, Heading, HStack, Icon, IconButton, Img, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface ProductBoxProps {
  id: number;
  name: string;
  isAvailable: boolean;
  cover: string;
  coverAlt: string;
  isLoading: boolean;
  price?: string;
  onRemoveOne: (id: number) => void;
}

const ProductBox: FunctionComponent<ProductBoxProps> = ({
  isAvailable,
  id,
  coverAlt,
  name,
  cover,
  isLoading,
  onRemoveOne,
}) => {
  const t = useText();
  return (
    <Flex py="8px" align="center" gap="10px" position="relative">
      <Img
        h="100px"
        w="100px"
        rounded="lg"
        alt={coverAlt}
        src={cover}
        border="1px solid"
        borderColor="gray.300"
        objectFit="contain"
        flexShrink={0}
      />
      <Box py="5px">
        <Heading fontSize="lg">{name}</Heading>
        <HStack mt="5px">
          <Icon color="green" as={CheckedIcon} />
          <Text color={isAvailable ? 'green' : 'red'}>
            {t(isAvailable ? 'available' : 'notAvailable')}
          </Text>
        </HStack>

        <HStack mt="5px">
          {/* <Icon color="green" as={CheckedIcon} /> */}
          {/* {productType === 1 && price ? (
            <Text color="GrayText">{price}</Text>
          ) : (
            <Text color="GrayText">Formal</Text>
          )} */}
        </HStack>
      </Box>
      <Box h="100%" ms="auto">
        {/* {productType === 1 && stock ? <CounterBox maxW="125px" mb="5px" /> : null} */}
        <IconButton
          w="35px"
          h="35px"
          isLoading={isLoading}
          disabled={isLoading}
          rounded="full"
          aria-label="remove-product"
          colorScheme="red"
          icon={<TrashIcon />}
          variant="outline"
          size="sm"
          onClick={() => onRemoveOne(id)}
        />
      </Box>
    </Flex>
  );
};

export default ProductBox;
