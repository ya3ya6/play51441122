import { ImageFallBack } from '@/common/components/Element';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { MemberModel } from '../CardList';

interface CardBoxProps {
  member: MemberModel;
}

const CardBox: FunctionComponent<CardBoxProps> = ({ member }) => {
  return (
    <Box
      w="100%"
      bgColor="white"
      rounded="xl"
      position="relative"
      overflow="hidden"
      role="group"
      shadow="lg"
    >
      <ImageFallBack flexShrink={0} rounded="xl" alt={member.imageAlt} src={member.image} />
      <Box
        width="100%"
        position="absolute"
        bottom={{ base: '-1', lg: '-100%' }}
        left="0"
        right="0"
        _groupHover={{
          bottom: '-1',
        }}
        transition="all 0.3s ease-in-out"
        bgColor="rgba(0,0,0,0.5)"
        backdropFilter="blur(10px)"
        color="#fff"
      >
        <Box w="100%" p="25px 10px" zIndex={4}>
          <VStack>
            <Heading textShadow="0 0 5px #000" flexShrink={1} size="small">
              {member.name}
            </Heading>
            <Text textShadow="0 0 5px #000" color="white" flexShrink={1} fontSize="small">
              {member.role}
            </Text>
          </VStack>
          {member.description && member.description !== '-' && (
            <Text lineHeight={8} color="white" noOfLines={3} fontSize="small">
              {member.description}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CardBox;
