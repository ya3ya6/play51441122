import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BannerSection, ProductSection } from './components';

export const ShopFeature: FunctionComponent = () => {
  // const router = useRouter();
  // const currentLang = router.locale;
  // const [activeLang] = useState(currentLang);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <BannerSection />
      {/* <OrderStepSection /> */}
      {/* <VideoSection /> */}
      {/* {activeLang === 'fa' && <Popup onOpen={onOpen} isOpen={isOpen} onClose={onClose} />} */}
      <ProductSection />
    </Box>
  );
};
