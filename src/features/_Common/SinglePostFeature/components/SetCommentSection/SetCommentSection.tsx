import { Box, Flex, Heading } from '@chakra-ui/react';
import { QuoteIcon } from '@/common/icons';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { SetCommentBox } from './SetCommentBox/SetCommentBox';
import { PostDetailModel } from '../../types/types';

interface SetCommentSectionPropsType {
  post: PostDetailModel;
  setReplyUser: Dispatch<SetStateAction<{ id?: number; name: string }>>;
  replyUser: { id?: number; name: string };
  commentRef: any;
}

export const SetCommentSection: FunctionComponent<SetCommentSectionPropsType> = ({
  post,
  setReplyUser,
  replyUser,
  commentRef,
}) => {
  const t = useText(I18_NAMESPACES.SINGLE);
  return (
    <Box ref={commentRef} mb="80px">
      <Flex mb="30px" w="100%" align="center" justify="center" style={{ gap: '10px' }}>
        <Box color="GrayText" transform="rotate(180deg)" fontSize="xl" ml="20px">
          <QuoteIcon />
        </Box>
        <Heading color="#2089AF" textAlign="center" size="lg">
          {replyUser.id
            ? t('comments.setTitleReply', {
                name: replyUser.name,
              })
            : t('comments.setTitleNormal')}
        </Heading>
        <Box color="GrayText" fontSize="xl" mr="20px">
          <QuoteIcon />
        </Box>
      </Flex>
      <SetCommentBox post={post} setReplyUser={setReplyUser} replyUser={replyUser} />
    </Box>
  );
};
