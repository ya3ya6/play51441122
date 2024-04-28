import { LandingModel } from '@/model/LandingPage';
import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import HeadingBox from '../common/HeadingBox/HeadingBox';
import FactorList from './FactorList/FactorList';

type FactorsSectionProps = Pick<LandingModel, 'factors' | 'color'>;

const FactorsSection: FunctionComponent<FactorsSectionProps> = ({ factors, color }) => {
  return (
    <Box>
      <HeadingBox
        color={color}
        id="FactorsSection"
        title="فاکتورهای اصلی"
        description="برای بهترین نتایج کلینیکال"
      />
      <FactorList data={factors} />
    </Box>
  );
};

export default FactorsSection;
