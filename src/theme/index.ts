import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

export const initializeTheme = (isRTL: boolean) => {
  return extendTheme(
    {
      components: {
        Button: {
          baseStyle: {
            fontWeight: 'normall',
          },
        },
      },
      direction: isRTL ? 'rtl' : 'ltr',
      fonts: {
        heading: isRTL ? 'MyVazir' : 'Poppins',
        body: isRTL ? 'MyVazir' : 'Poppins',
      },
      colors: {
        brand: {
          50: '#e8f7fa',
          100: '#76d1e1',
          200: '#5fcadc',
          300: '#49c2d7',
          400: '#32bbd2',
          500: '#1bb3cd',
          600: '#18a1b9',
          700: '#168fa4',
          800: '#137d90',
          900: '#106b7b',
        },
      },
    },
    withProse(),
  );
};
