import { Aparat } from '@/common/components/Media/Aparat';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { createElement, FunctionComponent } from 'react';
import { FreeMode } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { socialIcons } from '@/common/components/Box/Social';
import classes from './LandingFeature.module.css';
import 'swiper/css';

interface LandingFeaturePropsType {}

export const LandingFeature: FunctionComponent<LandingFeaturePropsType> = () => {
  const [mobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Container mb={10} maxW="container.xl">
      <Box w="100%">
        <Flex p={3} justifyContent="space-evenly" alignItems="center" w="100%" gap="10px">
          <Box>
            <Image src="/images/common/logo.png" alt="logo" />
          </Box>
          <Box>صفحه اصلی</Box>
          <Box>محصولات</Box>
          <Box>درباره ما</Box>
          <Box>همراهان ما</Box>
          <Box>اتاق خبر</Box>
        </Flex>
      </Box>
      <Flex mt={10} gap={10}>
        <Box>
          <Image w={500} h={300} src="/images/" />
        </Box>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas fugiat
            excepturi. Sequi numquam cumque libero nulla dolorum! Officia perspiciatis quos sed
            nulla quisquam fuga excepturi rem minus autem aspernatur! Ab corrupti corporis quod sit,
            voluptate dignissimos reiciendis, accusamus eveniet excepturi obcaecati impedit velit
            voluptatibus ullam dolore reprehenderit, unde nulla. Fugit velit quis dolore accusantium
            dolores, nemo quasi saepe explicabo animi mollitia voluptatibus eum illum ut sequi
            placeat obcaecati rerum quisquam ullam sit ex, eos ea optio? Fuga ullam explicabo
            eligendi optio laudantium soluta, recusandae nulla sunt. Qui voluptates praesentium
            architecto dolores, similique corporis ex, ut exercitationem minus quae repellendus!
          </Text>
        </Box>
      </Flex>
      <Flex mt={16} gap={5} direction="column">
        <Heading size="lg">معرفی پرنیان گستر</Heading>
        <Flex gap={10}>
          <Box>
            <Text lineHeight="10">
              شرکت دانش‌بنیان پرنیان گستر پرتو‌سنج به عنوان تنها شرکت دانش‌بنیان فعال در زمینه
              صادرات لیزرهای پزشکی در سال 1391 با هدف تولید و ارائه خدمات تخصصی لیزرهای پزشکی ، با
              بهره‌گیری از متخصصین و نخبگان داخلی تأسیس گردید. فعالیت حدود یک دهه پرنیان منجر به
              شکل‌گیری مجموعه‌های اغماری در حوزه‌های مختلف گردیده و شرکت‌های پرنیان آبادگران فردا،
              سیوان طب پرنیان، بهینا پرتو سدید و قطب صادرات لیزر پزشکی (در کشور ترکیه Glory Majestic
              Medical Solutions ) شده است.
            </Text>
            <Link href="https://parniangostar.com/about-us">
              <Button mt={8} colorScheme="brand">
                اطلاعات بیشتر
              </Button>
            </Link>
          </Box>
          <Box borderRadius="xl" shadow="base" overflow="hidden" flexShrink={0} w={500} h={300}>
            <Aparat url="https://www.aparat.com/v/jKI0T" />
          </Box>
        </Flex>
      </Flex>
      <Heading mt={16} size="lg">
        معرفی محصولات
      </Heading>
      <Flex mt={16} direction="column">
        <Flex direction="row-reverse" align="center" gap={10}>
          <Box>
            <Text lineHeight="10">
              شرکت دانش‌بنیان پرنیان گستر پرتو‌سنج به عنوان تنها شرکت دانش‌بنیان فعال در زمینه
              صادرات لیزرهای پزشکی در سال 1391 با هدف تولید و ارائه خدمات تخصصی لیزرهای پزشکی ، با
              بهره‌گیری از متخصصین و نخبگان داخلی تأسیس گردید. فعالیت حدود یک دهه پرنیان منجر به
              شکل‌گیری مجموعه‌های اغماری در حوزه‌های مختلف گردیده و شرکت‌های پرنیان آبادگران فردا،
              سیوان طب پرنیان، بهینا پرتو سدید و قطب صادرات لیزر پزشکی (در کشور ترکیه Glory Majestic
              Medical Solutions ) شده است.
            </Text>
            <Link href="https://parniangostar.com/product/alexandrite-gravity-laser-device">
              <Button mt={8} colorScheme="brand">
                اطلاعات بیشتر
              </Button>
            </Link>
          </Box>
          <Box flexShrink={0}>
            <Image h={500} src="/images/landingPage/alex.png" />
          </Box>
        </Flex>
        <Flex direction="row" align="center" gap={10}>
          <Box>
            <Text lineHeight="10">
              شرکت دانش‌بنیان پرنیان گستر پرتو‌سنج به عنوان تنها شرکت دانش‌بنیان فعال در زمینه
              صادرات لیزرهای پزشکی در سال 1391 با هدف تولید و ارائه خدمات تخصصی لیزرهای پزشکی ، با
              بهره‌گیری از متخصصین و نخبگان داخلی تأسیس گردید. فعالیت حدود یک دهه پرنیان منجر به
              شکل‌گیری مجموعه‌های اغماری در حوزه‌های مختلف گردیده و شرکت‌های پرنیان آبادگران فردا،
              سیوان طب پرنیان، بهینا پرتو سدید و قطب صادرات لیزر پزشکی (در کشور ترکیه Glory Majestic
              Medical Solutions ) شده است.
            </Text>
            <Link href="https://parniangostar.com/product/lumina-diode-laser-device">
              <Button mt={8} colorScheme="brand">
                اطلاعات بیشتر
              </Button>
            </Link>
          </Box>
          <Box flexShrink={0}>
            <Image h={500} src="/images/landingPage/diode.png" />
          </Box>
        </Flex>
        <Flex direction="row-reverse" align="center" gap={10}>
          <Box>
            <Text lineHeight="10">
              شرکت دانش‌بنیان پرنیان گستر پرتو‌سنج به عنوان تنها شرکت دانش‌بنیان فعال در زمینه
              صادرات لیزرهای پزشکی در سال 1391 با هدف تولید و ارائه خدمات تخصصی لیزرهای پزشکی ، با
              بهره‌گیری از متخصصین و نخبگان داخلی تأسیس گردید. فعالیت حدود یک دهه پرنیان منجر به
              شکل‌گیری مجموعه‌های اغماری در حوزه‌های مختلف گردیده و شرکت‌های پرنیان آبادگران فردا،
              سیوان طب پرنیان، بهینا پرتو سدید و قطب صادرات لیزر پزشکی (در کشور ترکیه Glory Majestic
              Medical Solutions ) شده است.
            </Text>
            <Link href="https://parniangostar.com/product/hifu-3d-device">
              <Button mt={8} colorScheme="brand">
                اطلاعات بیشتر
              </Button>
            </Link>
          </Box>
          <Box flexShrink={0}>
            <Image h={500} src="/images/landingPage/hifu.png" />
          </Box>
        </Flex>
      </Flex>
      <Flex border="1px solid #f1f1f1" rounded="lg" p={10} bg="white" mt={5} direction="column">
        <Box>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, expedita. Sapiente minima
            pariatur exercitationem sunt quis aspernatur harum atque hic, nostrum incidunt obcaecati
            inventore culpa voluptates maxime dolorum laboriosam eaque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sed, expedita. Sapiente minima pariatur exercitationem
            sunt quis aspernatur harum atque hic, nostrum incidunt obcaecati inventore culpa
            voluptates maxime dolorum laboriosam eaque.
          </Text>
        </Box>
        <Flex direction="column" mt={5} gap={5}>
          <FormControl>
            <FormLabel>نام و نام خانوادگی</FormLabel>
            <Input placeholder="محمد محمدی" />
          </FormControl>
          <FormControl>
            <FormLabel>شماره همراه</FormLabel>
            <Input dir="ltr" placeholder="0930*****25" />
          </FormControl>
          <FormControl>
            <FormLabel>ایمیل (اختیاری)</FormLabel>
            <Input dir="ltr" placeholder="test@gmail.com" />
          </FormControl>
        </Flex>
        <Button colorScheme="brand" w={120} ms="auto" mt={7}>
          ارسال
        </Button>
      </Flex>
      <Flex mt={8} direction="column">
        <Heading size="lg">همراهان ما</Heading>
        <Box>
          <Swiper
            className={classes.swiper}
            slidesPerView={1}
            spaceBetween={10}
            freeMode={mobile}
            modules={mobile ? [FreeMode] : []}
            breakpoints={{
              '530': {
                slidesPerView: 2,
              },
              '730': {
                slidesPerView: 3,
              },
              '930': {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={90} h={90} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  کلینیک پاییزان
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  پس از پرس و جو های فراوان دستگاه لیزر الکساندرایت گرویتی را بخاطر خدمات پس از فروش
                  سریع و عالی شرکت پرنیان گستر انتخاب کردم.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={90} h={90} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  کلینیک سیب صورتی
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  مراجعین ما از نتیجه لیزر با دستگاه لیزر الکساندرایت گرویتی فوق العاده راضی هستند،
                  بازدهی لیزر بی نظیر است.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={90} h={90} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  کلینیک دکتر نمازی
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  سیستم کولینگ پیشرفته با تکنولوژی جدید اسمارت پالس دستگاه لیزر الکساندرایت گرویتی
                  درد لیزر را بسیار بسیار پایین آورده و مراجعین ما از این دستگاه رضایت کامل را
                  دارند.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={90} h={90} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  دکتر علیرضا خانزاده
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  سال‌هاست از خدمات و محصولات پرنیان استفاده می‌‌کنم و از خدماتشان راضی هستم زیرا
                  بسیاری از شرکت ها تنها در مرحله فروش خدمات ارائه می‌دهند ولی پرنیان پس از فروش
                  محصول نیز پیگری مستمر در خدمات دارد.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={90} h={90} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  دکتر شاهین فر
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  در سال 1395 با خرید دستگاه لیزر دایود لومینا همکاری خود با مجموعه پرنیان را آغاز
                  کردم، از خدمات پس از فروش پرنیان بسیار راضی هستم.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <Flex align="center" p={4} direction="column">
                <Box mb={4} w={100} h={100} border="2px solid" borderColor="brand" rounded="md" />
                <Heading size="md" mb={2}>
                  دکتر احدی
                </Heading>
                <Text fontSize="14px" noOfLines={3}>
                  تمامی تجهیزات زیبایی کلینیک خود را از مجموعه پرنیان تهیه کردیم. از کیفیت محصولات
                  راضی بودیم و پس از ارائه خدمات مشتریان ما از نتیجه حاصل شده رضایت تمام داشتند.
                </Text>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
      <Flex border="1px solid #f1f1f1" direction="column" rounded="lg" p={10} mt={8} bg="white">
        <Heading size="lg">تماس با ما</Heading>
        <Flex mt={4} gap={4}>
          <Center gap={10} flex={1}>
            <Link href="https://www.instagram.com/parnian.gostar.partosanj/" target="_blank">
              <IconButton
                size="lg"
                fontSize="50px"
                variant="ghost"
                icon={createElement(socialIcons.instagram)}
                aria-label="insta"
                colorScheme="red"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/parnian-gostar/" target="_blank">
              <IconButton
                size="lg"
                fontSize="50px"
                variant="ghost"
                icon={createElement(socialIcons.linkedin)}
                aria-label="linkedin"
                colorScheme="linkedin"
              />
            </Link>
            <Link href="http://wa.me/989398608798" target="_blank">
              <IconButton
                size="60px"
                fontSize="50px"
                variant="ghost"
                icon={createElement(socialIcons.whatsapp)}
                aria-label="whatsapp"
                colorScheme="whatsapp"
              />
            </Link>
          </Center>
          <Flex direction="column" gap={4}>
            <Text>میدان ونک - برج آسمان - طبقه اول - واحد ۱۰۰ - کد پستی 1991945343</Text>
            <Text dir="ltr">02192004505</Text>
            <Text dir="ltr">info@parniangostar.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
