import { Box, useMediaQuery } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HomeHeading } from '../Common/HomeHeading';
import CommentListDesktop from './desktop/CommentList/CommentList';
import CommentListMobile from './mobile/CommentList/CommentList';
import { useOverview } from '../../hooks';

export const CommentSection: FunctionComponent = () => {
  const { customerOpinions } = useOverview();
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  if (!customerOpinions) {
    return null;
  }

  return (
    <Box mt={{ base: '50px', xl: '-100px' }} mb="100px">
      <HomeHeading title="Customers comments" />
      {isMobile ? <CommentListMobile /> : <CommentListDesktop />}
    </Box>
  );
};
