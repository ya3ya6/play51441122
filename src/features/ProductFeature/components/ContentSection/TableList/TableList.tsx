import { VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import TableBox from './TableBox/TableBox';
import { useProduct } from '../../../hooks';

interface TableListProps {}

const TableList: FunctionComponent<TableListProps> = () => {
  const product = useProduct();

  return (
    <VStack spacing={3}>
      {product.specification.map(({ id, title, description }) => (
        <TableBox key={id} title={title} text={description} />
      ))}
    </VStack>
  );
};

export default TableList;
