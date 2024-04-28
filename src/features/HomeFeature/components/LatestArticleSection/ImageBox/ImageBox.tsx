import { Flex, Img, Image as ImageChakra } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useOverview } from '../../../hooks';

interface ImageBoxProps {
  active: number;
}

const ImageBox: FunctionComponent<ImageBoxProps> = ({ active }) => {
  const { overview } = useOverview();
  const [rotate, setRotate] = useState(false);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    let interVal: NodeJS.Timeout;
    if (rotate) {
      interVal = setInterval(() => {
        setRotate(false);
      }, 0);
    } else {
      setRotate(true);
    }

    // TODO::FIX ES-LINT ERROR
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interVal);
  }, [active]);

  return (
    <Flex
      w={{ base: '230px', xl: '280px' }}
      h={{ base: '230px', xl: '280px' }}
      align="center"
      justify="center"
      position="absolute"
      bottom={{ base: '100%', xl: 'revert' }}
      top={{ xl: '50%' }}
      right={{ base: '50%', xl: '0px' }}
      zIndex="100"
      transform={{ base: 'translate(50%,50%)', xl: 'translateY(-50%)' }}
      direction="column"
    >
      <Flex w="100%" align="center" justify="center">
        <ImageChakra
          display={{ base: 'none', xl: 'block' }}
          transformOrigin="50%"
          transition="transform 1s ease-in-out"
          transform={
            rotate
              ? 'translate(-50%,-50%) scale(1.85) rotate(360deg)'
              : 'translate(-50%,-50%) scale(1.85)'
          }
          src="/images/home/border.png"
          alt="post"
          position="absolute"
          top="50%"
          left="50%"
        />
        <Flex
          w={{ base: '230px', xl: '270px' }}
          border="3px solid #1f87ad"
          h={{ base: '230px', xl: '270px' }}
          rounded="full"
          position="relative"
          overflow="hidden"
          objectFit="cover"
        >
          {!!overview?.mags[active].cover && (
            <Img
              src={overview?.mags[active].cover}
              alt={overview?.mags[active].coverAlt}
              h="full"
              w="full"
              objectFit="cover"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageBox;
