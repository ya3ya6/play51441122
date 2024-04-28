import { PhoneIcon, WhatsAppIcon } from '@/common/icons';
import { Box, Center, Container, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface FooterSectionProps {}

const FooterSection: FunctionComponent<FooterSectionProps> = () => {
  return (
    <Center
      pb={{ base: '50px', lg: '0' }}
      shadow="xl"
      mt="150px"
      w="100%"
      bgColor="#f3f3f3"
      borderTop="2px solid #eee"
    >
      <Container maxW="container.lg">
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
          <Box display={{ base: 'none', lg: 'block' }}>
            <a href="whatsapp://send?text=سلام&amp;phone=+989398608798">
              <VStack role="group" cursor="pointer">
                <Center
                  _groupHover={{
                    borderColor: '#12C837',
                  }}
                  w="60px"
                  h="60px"
                  rounded="full"
                  border="2px solid #aaa"
                >
                  <Icon
                    fontSize="4xl"
                    as={WhatsAppIcon}
                    color="#aaa"
                    _groupHover={{
                      color: '#12C837',
                    }}
                  />
                </Center>
                <Text
                  color="#aaa"
                  _groupHover={{
                    color: '#12C837',
                  }}
                >
                  تماس واتس اپ
                </Text>
              </VStack>
            </a>
          </Box>

          <VStack mt="30px" spacing={5}>
            <HStack spacing={5}>
              <Box w="200px" h="1px" bgColor="#aaa" display={{ base: 'none' }} />
              <Flex gap="40px">
                <Text textAlign="center">شما تماس شرکت: 02188209274</Text>
                <Text textAlign="center">شماره موبایل: 09931605737</Text>
              </Flex>
              <Box w="200px" h="1px" bgColor="#aaa" display={{ base: 'none' }} />
            </HStack>
            <Box border="1px solid #aaa" p="5px 10px" rounded="xl">
              <Text>pgps.ir2017@gmail.com</Text>
            </Box>
          </VStack>
          <Flex my="50px" gap="30px">
            <a href="tel:09931605737">
              <VStack role="group" cursor="pointer">
                <Center
                  _groupHover={{
                    borderColor: '#00b5d8',
                  }}
                  w="60px"
                  h="60px"
                  rounded="full"
                  border="2px solid #aaa"
                >
                  <Icon
                    fontSize="3xl"
                    as={PhoneIcon}
                    color="#aaa"
                    _groupHover={{
                      color: '#00b5d8',
                    }}
                  />
                </Center>
                <Text
                  color="#aaa"
                  _groupHover={{
                    color: '#00b5d8',
                  }}
                >
                  تماس با شرکت
                </Text>
              </VStack>
            </a>
            <Box display={{ lg: 'none' }}>
              <a href="whatsapp://send?text=سلام&amp;phone=+989398608798">
                <VStack role="group" cursor="pointer">
                  <Center
                    _groupHover={{
                      borderColor: '#12C837',
                    }}
                    w="60px"
                    h="60px"
                    rounded="full"
                    border="2px solid #aaa"
                  >
                    <Icon
                      fontSize="4xl"
                      as={WhatsAppIcon}
                      color="#aaa"
                      _groupHover={{
                        color: '#12C837',
                      }}
                    />
                  </Center>
                  <Text
                    color="#aaa"
                    _groupHover={{
                      color: '#12C837',
                    }}
                  >
                    تماس واتس اپ
                  </Text>
                </VStack>
              </a>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Center>
  );
};

export default FooterSection;
