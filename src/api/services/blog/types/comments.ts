export type GetCommentsAPIArgsType = {
  slug: string;
};

interface IComment {
  id: number;
  name: string;
  email: string;
  message: string;
  parent_id: number;
  created_at: string;
  post_slug: string;
}

export type GetCommentAPIAxiosResponseType = IComment[];

export type PostCommentAPIArgsType = {
  name: string;
  postSlug: string;
  email: string;
  message: string;
  parent_id: number;
};

export type PostCommentAPIAxiosResponseType = IComment;
