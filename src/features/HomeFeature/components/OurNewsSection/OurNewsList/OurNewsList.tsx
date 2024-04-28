import { Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Utils from '@/utils';
import { OurNewsBox } from './OurNewsBox/OurNewsBox';
import { useOverview } from '../../../hooks';

export const OurNewsList: FunctionComponent = () => {
  const { overview } = useOverview();

  return (
    <Grid w="100%" gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint()} gap="20px">
      {overview?.news.map(({ id, slug, abstract, name, cover, coverAlt, type, contentType }) => (
        <OurNewsBox
          imageAlt={coverAlt}
          slug={slug}
          key={id}
          image={cover}
          title={name}
          text={abstract}
          contentType={contentType}
        />
      ))}
    </Grid>
  );
};
