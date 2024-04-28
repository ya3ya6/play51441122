import { BaseResponseType } from '@/api/common/types/baseResponseType';

export type PostLogOutAPIResponseType = BaseResponseType;

export interface PostLogOutAPIBodyType {}

export interface PostLogOutApiDtoType {}

export type PostLogOutAPIType = () => Promise<PostLogOutAPIResponseType>;
