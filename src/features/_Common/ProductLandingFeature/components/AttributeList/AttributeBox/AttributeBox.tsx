import { Box, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface AttributeBoxProps {
  title: string;
  text: string;
  icon: () => JSX.Element;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  activeIndex: number;
  id: number;
  gradient: string;
  color: string;
}

const AttributeBox: FunctionComponent<AttributeBoxProps> = ({
  icon,
  title,
  text,
  setActiveIndex,
  activeIndex,
  gradient,
  color,
  id,
}) => {
  return (
    <VStack
      onMouseEnter={() => setActiveIndex(id)}
      p="10px"
      sx={
        activeIndex === id
          ? {
              bgImage: gradient,
              shadow: `0 0 20px ${color}`,
              color: 'white',
              rounded: '3xl',
            }
          : {}
      }
      role="group"
    >
      <Box
        p="10px"
        bgColor="transparent"
        my="15px"
        rounded="full"
        color={color}
        sx={
          activeIndex === id
            ? {
                bgColor: 'white',
              }
            : {}
        }
      >
        <Icon as={icon as any} />
      </Box>
      <Heading
        color={color}
        sx={
          activeIndex === id
            ? {
                color: 'white',
              }
            : {}
        }
        fontSize="lg"
      >
        {title}
      </Heading>
      <Text
        lineHeight={9}
        textAlign="center"
        color="GrayText"
        sx={
          activeIndex === id
            ? {
                color: 'white',
              }
            : {}
        }
        fontSize="sm"
      >
        {text}
      </Text>
    </VStack>
  );
};

export default AttributeBox;
