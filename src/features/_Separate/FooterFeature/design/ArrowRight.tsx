import { useDirection } from '@/hooks';
import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface ArrowRightProps {}

export const ArrowRight: FunctionComponent<ArrowRightProps> = () => {
  const { isRtl } = useDirection();
  return (
    <Box position="absolute" left="25%" top="-15%" transform={isRtl ? '' : 'scaleX(-1)'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134.677"
        height="61.087"
        viewBox="0 0 134.677 61.087"
      >
        <g
          id="Group_1011"
          data-name="Group 1011"
          transform="translate(133.609 59.855) rotate(-180)"
        >
          <g id="Group_686" data-name="Group 686" transform="translate(0 0)">
            <path
              id="Path_4443"
              data-name="Path 4443"
              d="M.818,0S-5.439,22.413,16.662,34.605s42.953,9.763,38.68-4.124-28.62-11.737-25.4,4.124,25.037,27,55.648,23.607,36.855-15.322,36.855-15.322"
              fill="none"
              stroke="#2b2b28"
              strokeLinecap="round"
              strokeWidth="2"
              strokeDasharray="6 9"
            />
          </g>
          <path
            id="Polygon_3"
            data-name="Polygon 3"
            d="M4.958,4.58a3,3,0,0,1,5.214,0l2.4,4.224A3,3,0,0,1,9.97,13.288H5.16A3,3,0,0,1,2.553,8.8Z"
            transform="matrix(0.799, 0.602, -0.602, 0.799, 121.526, 31.133)"
            fill="#2b2b28"
          />
        </g>
      </svg>
    </Box>
  );
};
