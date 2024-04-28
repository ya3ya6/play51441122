import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Image } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { FunctionComponent, useEffect, useRef } from 'react';

interface PopupPropsType {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export const Popup: FunctionComponent<PopupPropsType> = ({ isOpen, onClose, onOpen }) => {
  const first = useRef(false);
  useEffect(() => {
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
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0}>
          <Image src="/images/popup.jpg" w="100%" alt="new popup" />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
