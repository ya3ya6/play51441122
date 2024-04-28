import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface SnowProps {}

export const Snow: FunctionComponent<SnowProps> = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      position="absolute"
      left="100px"
      top="50%"
      zIndex={-1}
      transform="translateY(-60%)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="279.102"
        height="148.692"
        viewBox="0 0 279.102 148.692"
      >
        <g id="Group_1985" data-name="Group 1985" transform="translate(-203.787 -319.309)">
          <g id="Group_25" data-name="Group 25" transform="translate(337.853 386.342)">
            <circle
              id="Ellipse_33"
              data-name="Ellipse 33"
              cx="6.094"
              cy="6.094"
              r="6.094"
              transform="translate(69.471 32.907)"
              fill="#fff"
            />
            <circle
              id="Ellipse_37"
              data-name="Ellipse 37"
              cx="4.875"
              cy="4.875"
              r="4.875"
              transform="translate(93.846 71.908)"
              fill="#fff"
              opacity="0.32"
            />
            <circle
              id="Ellipse_39"
              data-name="Ellipse 39"
              cx="4.875"
              cy="4.875"
              r="4.875"
              transform="translate(95.065 4.875)"
              fill="#fff"
              opacity="0.24"
            />
            <circle
              id="Ellipse_36"
              data-name="Ellipse 36"
              cx="3.656"
              cy="3.656"
              r="3.656"
              transform="translate(137.723 56.064)"
              fill="#fff"
            />
            <circle
              id="Ellipse_35"
              data-name="Ellipse 35"
              cx="3.656"
              cy="3.656"
              r="3.656"
              transform="translate(0 34.126)"
              fill="#fff"
              opacity="0.21"
            />
            <circle
              id="Ellipse_38"
              data-name="Ellipse 38"
              cx="2.438"
              cy="2.438"
              r="2.438"
              transform="translate(14.625)"
              fill="#fff"
            />
            <circle
              id="Ellipse_34"
              data-name="Ellipse 34"
              cx="2.438"
              cy="2.438"
              r="2.438"
              transform="translate(39.001 60.939)"
              fill="#fff"
            />
          </g>
          <g id="Group_26" data-name="Group 26" transform="translate(203.787 319.309)">
            <circle
              id="Ellipse_33-2"
              data-name="Ellipse 33"
              cx="6.094"
              cy="6.094"
              r="6.094"
              transform="translate(69.471 36.564)"
              fill="#fff"
            />
            <circle
              id="Ellipse_37-2"
              data-name="Ellipse 37"
              cx="4.875"
              cy="4.875"
              r="4.875"
              transform="translate(93.846)"
              fill="#fff"
              opacity="0.32"
            />
            <circle
              id="Ellipse_39-2"
              data-name="Ellipse 39"
              cx="4.875"
              cy="4.875"
              r="4.875"
              transform="translate(95.065 67.033)"
              fill="#fff"
              opacity="0.24"
            />
            <circle
              id="Ellipse_36-2"
              data-name="Ellipse 36"
              cx="3.656"
              cy="3.656"
              r="3.656"
              transform="translate(137.723 18.282)"
              fill="#fff"
            />
            <circle
              id="Ellipse_35-2"
              data-name="Ellipse 35"
              cx="3.656"
              cy="3.656"
              r="3.656"
              transform="translate(0 40.22)"
              fill="#fff"
              opacity="0.21"
            />
            <circle
              id="Ellipse_38-2"
              data-name="Ellipse 38"
              cx="2.438"
              cy="2.438"
              r="2.438"
              transform="translate(14.625 76.783)"
              fill="#fff"
            />
            <circle
              id="Ellipse_34-2"
              data-name="Ellipse 34"
              cx="2.438"
              cy="2.438"
              r="2.438"
              transform="translate(39.001 15.844)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
};
