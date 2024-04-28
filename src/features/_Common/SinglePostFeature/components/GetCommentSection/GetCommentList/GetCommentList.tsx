import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { CommentModel } from '../../../types';
import { PostDetailModel } from '../../../types/types';
import GetCommentBox from './GetCommentBox/GetCommentBox';

interface Props {
  post: PostDetailModel;
  comments: CommentModel[];
  commentRef: any;
  replyUser: { id?: number; name: string };
  setReplyUser: Dispatch<SetStateAction<{ id?: number; name: string }>>;
}

export const GetCommentList: FunctionComponent<Props> = ({
  comments,
  post,
  setReplyUser,
  commentRef,
  replyUser,
}) => {
  return (
    <>
      {comments
        .filter(comment => !Number.isInteger(comment.parentId))
        .map(comment => (
          <GetCommentBox
            key={comment.id}
            commentRef={commentRef}
            comment={comment}
            comments={comments}
            post={post}
            replyUser={replyUser}
            setReplyUser={setReplyUser}
          />
        ))}
    </>
  );
};
