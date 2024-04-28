import { PhoneIcon, SettingsIcon } from '@/common/icons';
import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useAboutusQuery } from '@/api/services/overview/_queries';
import SellProduct from './SellProduct/SellProduct';
import { useProduct } from '../../../hooks';

interface TextBoxProps {
  type?: 1 | 2;
  stock?: 0 | 1;
}

const TextBox: FunctionComponent<TextBoxProps> = ({ type = 2 }) => {
  const product = useProduct();
  // const { addItem, isLoading } = useAddCheckout();
  const { data: aboutUs, isLoading } = useAboutusQuery(null);
  const t = useText(I18_NAMESPACES.SHOP);
  return (
    <Flex
      gap={{ base: '15px', lg: '15px' }}
      direction={{ base: 'column', lg: 'row' }}
      flexWrap="wrap"
      w={{ base: '100%', lg: 'calc(100% - 470px)' }}
      ms={{ base: '0', lg: '20px' }}
      my={{ base: '250px', lg: '0' }}
      mb="0"
    >
      <Stack w={{ base: '100%' }} minW={{ lg: '450px' }} justify="start" spacing="20px">
        <HStack spacing={2}>
          <Badge px="8px" py="4px" rounded="full" colorScheme="green">
            {product.category.name}{' '}
          </Badge>
        </HStack>
        <Heading fontSize="3xl">{product.name}</Heading>
        <Center>
          <Divider />
        </Center>
        {!!product.specification.slice(0, 6).length && (
          <>
            <Heading fontSize="xl" color="gray.700">
              {t('product.technical')}
            </Heading>
            <List spacing={3}>
              {product.specification.slice(1, 8).map(({ id, description, title }) => (
                <ListItem color="GrayText" display="flex" alignItems="center" key={id}>
                  <ListIcon as={SettingsIcon} color="brand.600" />
                  {title}: {description}
                </ListItem>
              ))}
            </List>
            <Center>
              <Divider />
            </Center>
          </>
        )}
        <Flex
          width="100%"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          mt="auto"
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          gap="10px"
        >
          {/* <Button
            colorScheme={product.quantity ? 'green' : 'red'}
            disabled={!product.quantity}
            maxW="180px"
            _loading={{
              width: '180px',
            }}
            isLoading={isLoading}
            onClick={() => {
              addItem([product.id]);
            }}
          >
            {!product.quantity && t('product.endButton')}
            {!!product.quantity && type === 1 && t('product.callButton')}
            {!!product.quantity && type === 2 && t('product.addButton')}
          </Button> */}

          <Button
            colorScheme={product.quantity ? 'green' : 'red'}
            as="a"
            isLoading={isLoading}
            href={`tel:${aboutUs?.mobileNumber}`}
            leftIcon={<PhoneIcon />}
          >
            تماس {'  '}
            {aboutUs?.mobileNumber}
          </Button>
          {product.catalog && (
            <Button as="a" target="_blank" href={product.catalog} colorScheme="brand">
              {t('product.DownloadButton')}
            </Button>
          )}
          {product?.price ? (
            <Flex ms="auto" gap="5px" fontSize={18} color="#18a1b9">
              <Text>{Number(product.price).toLocaleString()}</Text>
              <Text>تومان</Text>
            </Flex>
          ) : null}
        </Flex>
      </Stack>
      {/* <OrderStepList
        w={{ base: '100%', xl: '300px' }}
        maxH={{ xl: '455px' }}
        ps={{ base: '0', xl: '10px' }}
        varient="horizontal"
        gap="15px"
      /> */}
      <SellProduct />
    </Flex>
  );
};

export default TextBox;
