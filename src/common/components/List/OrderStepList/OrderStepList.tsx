import { ChakraProps, Grid } from '@chakra-ui/react';
import { ContractIcon, OrderCheckedIcon, SelectProductIcon, SendIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import Utils from '@/utils';
import OrderStepBox from './OrderStepBox/OrderStepBox';

interface OrderStepListProps extends ChakraProps {
  varient?: 'vertical' | 'horizontal';
}

/**
 * ### Common Component LIST.
 * #### PROPS:
 * ##### varient?: vertical* | horizontal
 */

export const OrderStepList: FunctionComponent<OrderStepListProps> = ({
  varient,
  ...chakraProps
}) => {
  const t = useText(I18_NAMESPACES.COMMON);
  const data = [
    {
      id: '1',
      step: t('steps.one'),
      title: t('steps.stepOne.title'),
      description: t('steps.stepOne.description'),
      icon: SelectProductIcon,
    },
    {
      id: '2',
      step: t('steps.two'),
      title: t('steps.stepTwo.title'),
      description: t('steps.stepTwo.description'),
      icon: OrderCheckedIcon,
    },
    {
      id: '3',
      step: t('steps.one'),
      title: t('steps.stepThree.title'),
      description: t('steps.stepThree.description'),
      icon: ContractIcon,
    },
    {
      id: '4',
      step: t('steps.four'),
      title: t('steps.stepFour.title'),
      description: t('steps.stepFour.description'),
      icon: SendIcon,
    },
  ];
  return (
    <Grid
      w="100%"
      gridTemplateColumns={
        varient === 'vertical'
          ? Utils.DesignUtils.ReponsiveGridBreakPoint(1, 2, 4, 4)
          : Utils.DesignUtils.ReponsiveGridBreakPoint(1, 2, 2, 1)
      }
      gap={{ base: '40px', md: '40px 30px', lg: '20px' }}
      {...chakraProps}
    >
      {data.map(({ id, step, title, description, icon }, index) => (
        <OrderStepBox
          varient={varient}
          key={id}
          id={id}
          last={index === data.length - 1}
          step={step}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </Grid>
  );
};
