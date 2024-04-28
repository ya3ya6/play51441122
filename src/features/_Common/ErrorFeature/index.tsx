import { Box, Center } from '@chakra-ui/react';
import Head from 'next/head';
import { FunctionComponent } from 'react';

interface ErrorFeatureProps {
  code: number;
  message: string;
}

export const ErrorFeature: FunctionComponent<ErrorFeatureProps> = ({ code, message }) => {
  return (
    <Center minHeight="600px">
      <Head>
        <title>خطایی رخ داد | پرنیان</title>
      </Head>
      <Box />
      Error - {code} - {message}
    </Center>
  );
};
