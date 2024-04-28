import { Container, Grid } from '@chakra-ui/react';
import { SettingIcon } from '@/common/icons';
import { FaUserGraduate } from '@react-icons/all-files/fa/FaUserGraduate';
import { FaHandHoldingHeart } from '@react-icons/all-files/fa/FaHandHoldingHeart';
import { FaDollarSign } from '@react-icons/all-files/fa/FaDollarSign';
import { FunctionComponent, useMemo } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import Utils from '@/utils';
import { StatisticsBox } from './StatisticsBox/StatisticsBox';
import { useOverview } from '../../hooks';

export const StatisticsList: FunctionComponent = () => {
  const { aboutus, overview } = useOverview();

  const t = useText(I18_NAMESPACES.HOME);

  const data = useMemo(
    () => [
      {
        id: 1,
        text: t('statistics.satisfaction'),
        icon: <FaUserGraduate />,
      },
      {
        id: 2,
        text: t('statistics.services'),
        icon: <SettingIcon />,
      },
      {
        id: 3,
        text: t('statistics.products'),
        icon: <FaHandHoldingHeart />,
      },
      {
        id: 4,
        text: t('statistics.articles'),
        icon: <FaDollarSign />,
      },
    ],
    [aboutus, overview],
  );

  return (
    <Container
      position="relative"
      zIndex="6"
      mt={{ base: '40px', lg: '-70px' }}
      maxW="container.md"
    >
      <Grid
        gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint(2, 4, 4, 4)}
        justifyItems="center"
        gap="20px"
      >
        {data.map(({ id, text, icon }) => (
          <StatisticsBox key={id} text={text} icon={icon} />
        ))}
      </Grid>
    </Container>
  );
};
