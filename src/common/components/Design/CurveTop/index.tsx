import { COLORS } from '@/common/constants/Ui';
import { Box, ChakraProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type CurveTopProps = ChakraProps;

export const CurveTop: FunctionComponent<CurveTopProps> = ({ ...chakraProps }) => {
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
          id="Intersection_2"
          data-name="Intersection 2"
          d="M.524,169.593V.593H150.458c5.252.311,12.145.762,20.327,1.393C188.717,3.371,216.673,5.933,248,10.274a905.314,905.314,0,0,1,95.683,18.077c16.8,4.226,32.381,8.871,46.328,13.8a304.937,304.937,0,0,1,40.822,17.554A315.558,315.558,0,0,0,470.593,77.12c13.38,4.865,28.1,9.381,43.736,13.415a756.035,756.035,0,0,0,89.5,16.909c24.557,3.239,50.026,5.632,75.7,7.117,23.945,1.387,39.271,1.459,42.1,1.459H724.3c1.246.005,2.8.012,4.552.012,65.859,0,189.192-7.321,275.24-56.324a291.377,291.377,0,0,1,42.277-19.374,472.122,472.122,0,0,1,47.5-14.656c28.89-7.382,61.611-13.361,97.253-17.779,14.009-1.738,28.5-3.234,43.073-4.442,11.667-.972,23.408-1.766,34.908-2.36,3.935-.2,7.569-.369,10.863-.5h159.555v169Z"
          transform="translate(-0.524 -0.593)"
          fill={COLORS.gray100}
        />
      </svg>
    </Box>
  );
};
