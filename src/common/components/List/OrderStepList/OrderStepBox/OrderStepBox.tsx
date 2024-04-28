import { Box, Center, Heading, Stack, Text, Tooltip } from '@chakra-ui/react';
import { FunctionComponent, ReactElement } from 'react';
import { useDirection } from '@/hooks';
import { ArrowElement } from '../../../../../features/ShopFeature/design/elements';

export interface OrderStepBoxProps {
  step: string;
  title: string;
  description: string;
  icon: ReactElement;
  id: string;
  last: boolean;
  varient?: 'vertical' | 'horizontal';
}

const OrderStepBox: FunctionComponent<OrderStepBoxProps> = ({
  icon,
  step,
  title,
  last,
  varient = 'vertical',
  description,
}) => {
  const { isRtl } = useDirection();
  return (
    <Box
      position="relative"
      bgColor="white"
      boxShadow="lg"
      shadow={varient === 'vertical' ? 'md' : 'base'}
      p="10px"
      py={varient === 'vertical' ? '50px' : '8px'}
      pt={varient === 'vertical' ? '60px' : '8px'}
      rounded={varient === 'vertical' ? '3xl' : 'lg'}
    >
      {varient === 'vertical' && !last && (
        <Box
          display={{ base: 'none', lg: 'block' }}
          bottom="-50px"
          transform={isRtl ? '' : 'scaleX(-1)'}
          right="-70px"
          position="absolute"
        >
          <ArrowElement />
        </Box>
      )}

      <Stack
        align={varient === 'vertical' ? 'center' : 'center'}
        justify="center"
        direction={varient === 'vertical' ? 'column' : 'row'}
        spacing="15px"
      >
        <Box flexShrink={0}>
          <Center
            rounded="full"
            position={varient === 'vertical' ? 'absolute' : 'static'}
            top="-20px"
            left="50%"
            transform={varient === 'vertical' ? 'translateX(-50%)' : 'translateX(0)'}
            mx="auto"
            w="60px"
            h="60px"
            bgColor="#fff"
            outline={varient === 'vertical' ? '10px solid #f7f7f7' : 'none'}
          >
            <Box color="brand.600">{icon}</Box>
          </Center>
          <Text fontSize={varient === 'vertical' ? 'md' : 'sm'} color="gray.300">
            {step}
          </Text>
        </Box>

        <Stack
          align={varient === 'vertical' ? 'center' : 'flex-start'}
          justify="center"
          spacing="10px"
        >
          <Heading fontSize={varient === 'vertical' ? 'lg' : 'sm'} color="brand.800" size="md">
            {title}
          </Heading>
          <Tooltip hasArrow label={description} rounded="md">
            <Text
              textAlign={varient === 'vertical' ? 'center' : 'start'}
              color="GrayText"
              fontSize={varient === 'vertical' ? 'md' : 'sm'}
              noOfLines={2}
            >
              {description}
            </Text>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};
export default OrderStepBox;
