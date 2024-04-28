import { FC } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  url: string;
}

export const Aparat: FC<Props> = ({ url }) => {
  if (!url) {
    return null;
  }

  const hash = url.split('/').filter(Boolean).reverse()[0];

  return (
    <Box
      as="iframe"
      h="full"
      w="full"
      title="aparat"
      src={`https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`}
      allowFullScreen
      // @ts-ignore
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  );
};
