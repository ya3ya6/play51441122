import {
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Heading,
  CloseButton,
  Img,
} from '@chakra-ui/react';
import { debounce, toString } from 'lodash';
import { FC, useEffect, useRef, useState } from 'react';

interface RenderComponentPropsType {
  hours: number;
  minutes: number;
  days: number;
  seconds: number;
  completed: boolean;
}
interface BannerBoxProps {}

// Renderer callback with condition
export const RenderComponent: FC<RenderComponentPropsType> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a complete state
    return (
      <Text minW="240px" mt="10px" ms="20px" fontSize="25px">
        پایان زمان تخفیف
      </Text>
    );
  }
  // Render a countdown
  return (
    <Flex
      minW="250px"
      justify="center"
      mt="10px"
      dir="ltr"
      gap="20px"
      align="center"
      me="20px"
      fontSize="25px"
    >
      <Flex direction="column">
        <Text>{days}</Text>
        <Text fontSize="14px">روز</Text>
      </Flex>
      <Text mb="16px">:</Text>
      <Flex direction="column">
        <Text>{hours}</Text>
        <Text fontSize="14px">ساعت</Text>
      </Flex>
      <Text mb="16px">:</Text>
      <Flex direction="column">
        <Text>{minutes}</Text>
        <Text fontSize="14px">دقیقه</Text>
      </Flex>
      <Text mb="16px">:</Text>
      <Flex direction="column">
        <Text>{seconds}</Text>
        <Text fontSize="14px">ثانیه</Text>
      </Flex>
    </Flex>
  );
};

export const BannerBox: FC<BannerBoxProps> = () => {
  const expireTime = Date.now() + 100000000;
  const [time, setTime] = useState(expireTime);
  const first = useRef(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (localStorage.getItem('time')) {
      setTime(+localStorage.getItem('time')!);
    } else {
      localStorage.setItem('time', toString(expireTime));
    }
    window.addEventListener(
      'scroll',
      debounce(
        () => {
          if (!first.current && window.scrollY >= 300) {
            first.current = true;
            onOpen();
          }
        },
        100,
        {
          leading: false,
          trailing: true,
        },
      ),
    );
  }, []);

  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} closeOnEsc>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            flexDirection="column"
            align={{ base: 'center', xl: 'flex-start' }}
            justify="flex-end"
            height={{ base: '290px', sm: '290px', md: '240px', xl: '140px' }}
            width="100%"
            zIndex="999999999"
            bgImage="/images/home/1.png"
            bgSize="cover"
            color="white"
            py="30px"
            px={{ base: '5px', xl: '20px' }}
          >
            <Flex
              position="absolute"
              width="100%"
              me={{ xl: '20px' }}
              justify={{ base: 'center', xl: 'flex-end' }}
              left="0"
              align={{ base: 'center' }}
              top={{ base: '-46%', md: '-60%', xl: '-100%' }}
              transform={{
                base: 'scale(0.4)',
                sm: 'scale(0.6)',
                md: 'scale(0.9)',
                xl: 'scale(0.92)',
              }}
            >
              <Img src="/images/home/br1.png" dropShadow="dark-lg" />
              <Img src="/images/home/br2.png" dropShadow="dark-lg" />
              <Img src="/images/home/bcenter.png" dropShadow="dark-lg" />
              <Img src="/images/home/bl1.png" dropShadow="dark-lg" />
              <Img src="/images/home/bl2.png" dropShadow="dark-lg" />
            </Flex>

            <Flex align="center" gap="30px">
              <Box padding="0 20px">
                <Heading
                  textAlign={{ base: 'center', xl: 'start' }}
                  lineHeight="50px"
                  textShadow="1px 1px 3px black"
                >
                  فروش ویژه برترین تجهیزات پزشکی زیبایی
                </Heading>
                <Text
                  textAlign={{ base: 'center', xl: 'start' }}
                  textShadow="1px 1px 3px black"
                  lineHeight="9"
                  fontSize="14px"
                  mt="15px"
                >
                  ویژه پانزدهمین نمایشگاه بین المللی تجهیزات پزشکی، بیمارستانی و صنایع دارویی شیراز
                  2 الی 5 آذر
                </Text>
                {/* <Flex align="center">
                  <Text fontSize="25px" mt="10px" textShadow="1px 1px 3px black">
                    زمان محدود برای فروش ویژه
                  </Text>
                  <Flex gap="10px">
                    <Countdown
                      date={time}
                      renderer={RenderComponent}
                      onStart={delta => {
                        console.log(delta);
                      }}
                      onComplete={() => {
                        if (localStorage.getItem('time')) {
                          localStorage.removeItem('time');
                        }
                      }}
                    />
                  </Flex>
                </Flex> */}
              </Box>
              <CloseButton
                display={{ base: 'none', md: 'unset' }}
                size="lg"
                position="absolute"
                top="10px"
                right="10px"
                onClick={() => onClose()}
              />
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};
