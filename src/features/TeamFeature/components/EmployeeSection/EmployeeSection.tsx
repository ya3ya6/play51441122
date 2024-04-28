import { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import { useTeamQuery } from '@/api/services/overview/_queries';
import UnitList from './UnitList/UnitList';

interface EmployeeSectionProps {}

const EmployeeSection: FunctionComponent<EmployeeSectionProps> = () => {
  const { data } = useTeamQuery(null);

  return (
    <Box w="100%">
      <UnitList units={data!} />
    </Box>
  );
};

export default EmployeeSection;
