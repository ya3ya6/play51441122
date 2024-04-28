import { COLORS } from '@/common/constants/Ui';
import { Box, ChakraProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type CurveBottomProps = ChakraProps;

export const CurveBottom: FunctionComponent<CurveBottomProps> = ({ ...chakraProps }) => {
  return (
    <Box {...chakraProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="169"
        viewBox="0 0 1439 169"
      >
        <path
          id="Intersection_4"
          data-name="Intersection 4"
          d="M0,0V169H149.934c5.252-.311,12.145-.762,20.327-1.393,17.933-1.384,45.888-3.947,77.214-8.287a905.311,905.311,0,0,0,95.683-18.077c16.8-4.226,32.381-8.871,46.328-13.8a304.936,304.936,0,0,0,40.822-17.554,315.559,315.559,0,0,1,39.761-17.411c13.38-4.864,28.1-9.381,43.736-13.415a756.035,756.035,0,0,1,89.5-16.909c24.557-3.239,50.026-5.632,75.7-7.117,23.945-1.387,39.271-1.459,42.1-1.459h2.671c1.246-.005,2.8-.012,4.552-.012,65.859,0,189.192,7.321,275.24,56.324a291.376,291.376,0,0,0,42.277,19.374,472.122,472.122,0,0,0,47.5,14.656c28.89,7.382,61.611,13.36,97.253,17.779,14.009,1.738,28.5,3.234,43.073,4.442,11.667.972,23.408,1.766,34.908,2.36,3.935.2,7.569.369,10.863.5H1439V0Z"
          fill={COLORS.gray100}
        />
      </svg>
    </Box>
  );
};
