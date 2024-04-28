import { Box, Container, Flex, Img } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import TextBox from './TextBox/TextBox';
import { useProduct } from '../../hooks';

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const product = useProduct();
  // const [modal, setModal] = useState(false);
  // const router = useRouter();
  // const currentLang = router.locale;

  // const onCloseHandler = () => {
  //   setModal(false);
  // };

  // useEffect(() => {
  //   if (currentLang !== 'fa') return;
  //   setTimeout(() => {
  //     setModal(true);
  //   }, 1500);
  // }, []);

  return (
    <Box
      py="50px"
      bgSize="cover"
      bgPos="center"
      bgImage="linear-gradient(27deg, rgba(247,247,247,0.96) 0%, rgba(247,247,247,0.96) 100%),url('/images/order/order.png')"
    >
      <Head>
        <title>{product.name} | پرنیان</title>
      </Head>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          align="center"
          justify="space-between"
        >
          <TextBox />
          <Flex
            align="center"
            justify="center"
            w={{ base: '100%', xl: '50%' }}
            minH="500px"
            position="relative"
          >
            <Img src={product.cover} alt={product.name} />
          </Flex>
        </Flex>
      </Container>
      {/* <Modal size="4xl" isOpen={modal} onClose={onCloseHandler}>
        <ModalOverlay />
        <ModalContent w="600px" p={6}>
          <ModalCloseButton />
          <Heading mb={5} mt={4} textAlign="center" color="red.500">
            اطلاعیه
          </Heading>
          <Text fontSize="lg">عرض سلام خدمت همراهان عزیز شرکت دانش بنیان پرنیان گسترپرتوسنج</Text>
          <Text fontSize="lg">
            به اطلاع می رساند شرکت پرنیان گستر به پاس احترام به مشتریان گرامی و حمایت از صنعت زیبایی
            تاکنون تمام تلاش خود را در ارتقای ثبات قیمت محصولات خود داشته است.
          </Text>
          <Text fontSize="lg">
            لذا با توجه به شرایط کنونی اعلام می دارد از هفته جاری آخرین فرصت خرید دستگاه لیزر الکس
            گرویتی،دایود لومینا،هایفو و آراف فرکشنال میباشد و با تقدیم احترام از هفته بعد افزایش
            قیمت ها اعمال مگردد.
          </Text>
          <Text fontSize="lg">
            ضمنا علی رغم شرایط حاکم فروش اقساطی شرکت کماکان پابرجاست فرصت را از دست ندهید.
          </Text>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default HeroSection;
