import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
@font-face {
  font-family: 'Poppins';
  font-weight: 400;
  src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 500;
  src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 700;
  src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'MyVazir';
    font-weight: 400;
    src: url('/fonts/Vazir/Vazirmatn-FD-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'MyVazir';
    font-weight: 500;
    src: url('/fonts/Vazir/Vazirmatn-FD-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'MyVazir';
    font-weight: 700;
    src: url('/fonts/Vazir/Vazirmatn-FD-Bold.ttf') format('truetype');
}
`}
  />
);

export default Fonts;
