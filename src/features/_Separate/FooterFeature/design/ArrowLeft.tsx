import { useDirection } from '@/hooks';
import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface ArrowLeftProps {}

export const ArrowLeft: FunctionComponent<ArrowLeftProps> = () => {
  const { isRtl } = useDirection();
  return (
    <Box
      position="absolute"
      transform={isRtl ? '' : 'scaleX(-1)'}
      top="-25px"
      zIndex="5"
      right="450"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="237.494"
        height="146.759"
        viewBox="0 0 237.494 146.759"
      >
        <g
          id="Group_687"
          data-name="Group 687"
          transform="matrix(0.978, -0.208, 0.208, 0.978, -1226.872, -172.464)"
        >
          <g id="Group_686" data-name="Group 686" transform="translate(1156.031 468.714)">
            <path
              id="Path_4443"
              data-name="Path 4443"
              d="M-3345.948,10433.1s-10.857,38.889,27.491,60.043,74.527,16.94,67.113-7.155-49.658-20.364-44.073,7.155,43.442,46.841,96.553,40.961,63.946-26.585,63.946-26.585"
              transform="translate(3347.366 -10433.101)"
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
            d="M6.7,4.25a3,3,0,0,1,5.135,0l3.95,6.537a3,3,0,0,1-2.568,4.551h-7.9A3,3,0,0,1,2.75,10.787Z"
            transform="translate(1367.648 528.136) rotate(37)"
            fill="#2b2b28"
          />
        </g>
      </svg>
    </Box>
  );
};
