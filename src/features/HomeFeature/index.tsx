import ContactSection from '@/common/components/Section/ContactSection/ContactSection';
import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

import {
  OurProductsSection,
  AboutSection,
  OurNewsSection,
  CommentSection,
  LatestArticleSection,
  StatisticsList,
  VideoSection,
} from './components';

export const HomeFeature: FunctionComponent = () => {
  // const router = useRouter();
  // const currentLang = router.locale;
  // const [activeLang] = useState(currentLang);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor="#F7F7F7">
      <VideoSection />
      <StatisticsList />
      <Box overflowX="hidden" py="80px" mt="-80px">
        <AboutSection />
      </Box>
      <OurProductsSection />
      <ContactSection />
      <Box overflowX="hidden" py="80px" mt="-45px">
        <LatestArticleSection />
      </Box>
      <OurNewsSection />
      <CommentSection />
      {/* {activeLang === 'fa' && <Popup onOpen={onOpen} isOpen={isOpen} onClose={onClose} />} */}
    </Box>
  );
};
