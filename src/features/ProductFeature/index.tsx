import ContactSection from '@/common/components/Section/ContactSection/ContactSection';
import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import {
  CommentSection,
  ContentSection,
  DetailsSection,
  HeroSection,
  VideoSection,
} from './components';

interface ProductFeatureProps {}

export const ProductFeature: FunctionComponent<ProductFeatureProps> = () => {
  // const router = useRouter();
  // const currentLang = router.locale;
  // const [activeLang] = useState(currentLang);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mb={{ base: '0', xl: '180px' }}>
      <HeroSection />
      <DetailsSection />
      <ContactSection />
      <VideoSection />
      <ContentSection id="productContent" />
      <CommentSection />
      {/* {activeLang === 'fa' && <Popup onOpen={onOpen} isOpen={isOpen} onClose={onClose} />} */}
    </Box>
  );
};
