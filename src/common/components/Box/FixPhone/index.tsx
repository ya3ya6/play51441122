import { useAboutusQuery } from '@/api/services/overview/_queries';
import { PhoneIcon } from '@/common/icons';
import { HStack, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface FixPhoneProps {
  color: 'brand' | string;
}
/**
 * ### Common Component BOX.
 */
export const FixPhone: FunctionComponent<FixPhoneProps> = ({ color }) => {
  const { data: aboutUs } = useAboutusQuery(null);

  if (!aboutUs?.phoneNumber) {
    return null;
  }

  return (
    <HStack
      display={{ base: color === 'brand' ? 'none' : 'flex', lg: 'flex' }}
      align="center"
      spacing="10px"
      zIndex="1300"
      position="fixed"
      bottom="30px"
      transform={
        color === 'brand' ? 'translateX(0)' : { base: 'translateX(-50%)', lg: 'translateX(0)' }
      }
      left={color === 'brand' ? '25px' : { base: '50%', lg: '25px' }}
      bgColor={color === 'brand' ? '#1f87ad' : color}
      rounded="3xl"
      color="white"
      p="8px 10px"
    >
      <Link href={`tel:${aboutUs.mobileNumber}`}>
        <a href={`tel:${aboutUs.mobileNumber}`}>{aboutUs.mobileNumber}</a>
      </Link>
      <IconButton
        rounded="full"
        p="2px"
        minW="30px"
        minH="30px"
        w="25px"
        h="25px"
        flexShrink={0}
        color={color === 'brand' ? '#1f87ad' : color}
        fontSize="lg"
        colorScheme="gray"
        aria-label="scroll-top"
        icon={<PhoneIcon />}
      />
    </HStack>
  );
};
