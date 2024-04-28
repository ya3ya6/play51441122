import { ArrowIcon } from '@/common/icons';
import { useDirection } from '@/hooks';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface ButtonWithIconProps extends ButtonProps {
  icon?: React.ReactNode;
  iconPosition: 'left' | 'right';
}
/**
 * ### Common Component ELEMENT.
 */
export const ButtonWithIcon: FunctionComponent<ButtonWithIconProps> = ({
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const { isRtl } = useDirection();
  return (
    <Button alignItems="center" gap="5px" {...props}>
      {iconPosition === 'left' ? (
        <>
          <Box transform={!isRtl ? 'scaleX(-1)' : ''}>{icon || <ArrowIcon />}</Box>
          {children}
        </>
      ) : (
        <>
          {children}
          <Box transform={!isRtl ? 'scaleX(-1)' : ''}>{icon || <ArrowIcon />}</Box>
        </>
      )}
    </Button>
  );
};
