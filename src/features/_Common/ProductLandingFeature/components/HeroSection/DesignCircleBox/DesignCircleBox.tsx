import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface DesignCircleBoxProps {}

const DesignCircleBox: FunctionComponent<DesignCircleBoxProps> = () => {
  return (
    <>
      <Box position="absolute" top="50%" left="0" transform="translate(50%,-100%)" zIndex={6}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="335.935"
          height="335.935"
          viewBox="0 0 335.935 335.935"
        >
          <g
            id="Ellipse_55"
            data-name="Ellipse 55"
            transform="translate(221.963) rotate(62.821)"
            fill="none"
            stroke="#2b2b28"
            strokeWidth="61"
            opacity="0.05"
          >
            <circle cx="124.757" cy="124.757" r="124.757" stroke="none" />
            <circle cx="124.757" cy="124.757" r="94.257" fill="none" />
          </g>
        </svg>
      </Box>
      <Box
        position="absolute"
        top="62%"
        left="0"
        transform="scale(0.7) translate(-75%,-100%)"
        zIndex={6}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="335.935"
          height="335.935"
          viewBox="0 0 335.935 335.935"
        >
          <g
            id="Ellipse_55"
            data-name="Ellipse 55"
            transform="translate(221.963) rotate(62.821)"
            fill="none"
            stroke="#2b2b28"
            strokeWidth="61"
            opacity="0.05"
          >
            <circle cx="124.757" cy="124.757" r="124.757" stroke="none" />
            <circle cx="124.757" cy="124.757" r="94.257" fill="none" />
          </g>
        </svg>
      </Box>
    </>
  );
};

export default DesignCircleBox;
