import { MinusIcon, PlusIcon } from '@/common/icons';
import { ChakraProps, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';

interface CounterBoxProps extends ChakraProps {
  stock?: number;
}

export const CounterBox: FunctionComponent<CounterBoxProps> = ({
  stock = Number.POSITIVE_INFINITY,
  ...chakraProps
}) => {
  const [count, setCount] = useState(1);
  return (
    <Flex
      bgColor="white"
      border="1px solid"
      justify="space-between"
      align="center"
      borderColor="gray.300"
      rounded="lg"
      p="4px"
      maxH="40px"
      minW="110px"
      {...chakraProps}
    >
      <Tooltip
        shouldWrapChildren
        isDisabled={count < stock}
        rounded="xl"
        hasArrow
        placement="top"
        label="درخواست شما بیشتر از موجودی است"
      >
        <IconButton
          aria-label="share"
          colorScheme="green"
          variant="ghost"
          size="sm"
          disabled={count >= stock}
          icon={<PlusIcon />}
          onClick={() => setCount(prev => prev + 1)}
        />
      </Tooltip>

      <Text>{count}</Text>
      <IconButton
        aria-label="share"
        colorScheme="red"
        variant="ghost"
        size="sm"
        icon={<MinusIcon />}
        disabled={count <= 1}
        onClick={() => setCount(prev => prev - 1)}
      />
    </Flex>
  );
};
