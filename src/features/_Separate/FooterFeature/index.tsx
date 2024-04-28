import { Box, Container, Divider, Flex, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Social } from '@/common/components/Box';
import { useMenuQuery } from '@/api/services/core/_queries';
import Image from 'next/image';
import AddressBox from './components/AddressBox';
import LogoBox from './components/LogoBox';
import MenuList from './components/MenuList/MenuList';
import ContactBox from './components/ContactBox';

export const FooterFeature: FunctionComponent = () => {
  const { data: footer1 } = useMenuQuery({
    slug: 'footer-1',
  });

  const { data: footer2 } = useMenuQuery({
    slug: 'footer-2',
  });

  const { data: footer3 } = useMenuQuery({
    slug: 'footer-3',
  });

  return (
    <Flex
      direction="column"
      w="100%"
      align="center"
      justifySelf="flex-start"
      justify="center"
      px="10px"
      mt="250px"
    >
      <Container maxW="container.xl">
        <Stack
          flexDirection="column"
          bgColor={{ xl: 'gray.100' }}
          borderRadius="80px 80px 0 0"
          spacing={{ xl: '30px' }}
        >
          <Stack direction={{ base: 'column', xl: 'row' }} p={{ xl: '20px' }}>
            <Stack
              direction={{ base: 'column', sm: 'column', md: 'row', xl: 'column' }}
              align="center"
              justify="center"
              w={{ xl: '320px' }}
              ml={{ xl: '50px' }}
              spacing="20px"
            >
              <ContactBox />
              <Flex display={{ base: 'flex', xl: 'none' }} mb="40px" w="100%" gap="8px">
                {[footer1, footer2, footer3]
                  .filter(footer => footer?.children.length)
                  .map(footer => (
                    <MenuList
                      key={footer?.id}
                      menu={footer?.children ?? []}
                      w="33.33%"
                      display={{ base: 'flex', xl: 'none' }}
                    />
                  ))}
              </Flex>
              <Social display={{ base: 'none', xl: 'flex' }} gap="5px" />
              <AddressBox display={{ base: 'none', xl: 'block' }} />
            </Stack>
            <Flex
              w="100%"
              direction={{ base: 'column', md: 'row', xl: 'row' }}
              align="center"
              justify="space-between"
            >
              <Flex
                direction={{ base: 'column', xl: 'row' }}
                w={{ base: '100%', xl: '70%' }}
                display={{ base: 'none', xl: 'flex' }}
                h="100%"
                justify="space-between"
                align="center"
              >
                {[footer1, footer2, footer3]
                  .filter(footer => footer?.children.length)
                  .map(footer => (
                    <Box key={footer?.id}>
                      <MenuList menu={footer!.children} display={{ base: 'none', xl: 'flex' }} />
                      <Divider w="1px" h="100%" bgColor="var(--primaryColor)" />
                    </Box>
                  ))}
              </Flex>
              <LogoBox
                mt="30px"
                flexDirection={{ base: 'row', xl: 'column' }}
                mb={{ base: '40px', xl: '0' }}
                gap="20px"
              />
              <Social
                mb={{ base: '20px', xl: '0' }}
                display={{ base: 'flex', xl: 'none' }}
                gap="5px"
              />
              <AddressBox display={{ xl: 'none' }} />
            </Flex>
          </Stack>
          <Flex width="100%" pb="40px" justifyContent="space-around" flexWrap="wrap" gap="5">
            <a
              href="https://parniangostar.com/media/filer_public/b3/20/b3201b0c-d271-49eb-bc85-f7ed9c38663d/parvaneh-sanat-o-madan.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="100px" h="70px" position="relative">
                <Image src="/images/common/footer1.png" alt="footer_footer1" layout="fill" />
              </Box>
            </a>
            <a
              href="https://parniangostar.com/media/filer_public/b0/b0/b0b0fa63-c813-46ff-9f8b-842da80285e6/gwhy_tyydyh_shrkht_prnyn_gstr_prtw_snj-min.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="140px" h="70px" position="relative">
                <Image src="/images/common/footer2.png" alt="footer_footer2" layout="fill" />
              </Box>
            </a>
            <a
              href="https://parniangostar.com/media/filer_public/8a/0c/8a0c8a9f-1d8d-44b4-8425-14f0aad7c3bd/parvaneh-alex.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="120px" h="90px" position="relative">
                <Image src="/images/common/footer3.png" alt="footer_footer3" layout="fill" />
              </Box>
            </a>
            <a
              href="https://parniangostar.com/media/filer_public/38/ac/38acc706-e70a-4d3b-8b67-92d2db9f6e56/iso.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="100px" h="70px" position="relative">
                <Image src="/images/common/footer4.png" alt="footer4" layout="fill" />
              </Box>
            </a>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
};
