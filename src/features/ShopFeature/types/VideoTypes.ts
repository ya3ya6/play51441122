import { Dispatch, SetStateAction } from 'react';
// Data
export type DataType = {
  id: number;
  name: string;
  image: string;
  imageAlt: string;
  videoUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
};

// Components Props
export interface ProductBoxProps extends DataType {
  position: 'RIGHT' | 'LEFT';
  setActiveVideo: Dispatch<SetStateAction<DataType['id']>>;
}

export interface ProductListProps {
  data: Array<DataType>;
  activeVideo: DataType;
  setActiveVideo: Dispatch<SetStateAction<DataType['id']>>;
}

export interface ActiveVideoProps {
  activeVideo: DataType;
}
