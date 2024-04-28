import { ProductModel } from '@/model';
import { Box, ChakraProps, Heading, Text, VStack } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { motion } from 'framer-motion';

interface UserBoxProps extends ChakraProps {
  commentActive: number;
  setCommentActive: Dispatch<SetStateAction<number>>;
  comment: ProductModel['customerOpinion'][number];
}

const UserBox: FunctionComponent<UserBoxProps> = ({
  commentActive,
  setCommentActive,
  comment,
  ...chakraProps
}) => {
  const active = commentActive === comment.id;

  return (
    <a href="#videoBox">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <VStack
          cursor="pointer"
          spacing="30px"
          position="relative"
          flexShrink={0}
          maxH={{ base: 'revert', xl: '120px' }}
          onClick={() => {
            setCommentActive(comment.id);
          }}
          {...chakraProps}
        >
          <Box
            border="2px solid"
            borderColor={active ? 'brand.600' : 'gray.300'}
            w="130px"
            flexShrink={0}
            h="130px"
            bgColor="white"
            shadow="lg"
            rounded="full"
            outline="2px dashed"
            backgroundImage={comment.cover}
            backgroundPosition="center"
            backgroundSize="cover"
            outlineColor={active ? 'brand.600' : 'gray.300'}
            outlineOffset="8px"
            className={active ? 'ripple' : ''}
          />
          <VStack width="max-content">
            <Heading textAlign="left" fontSize="sm" color={active ? 'brand.600' : 'gray.700'}>
              {comment.name}
            </Heading>
            <Text color={active ? 'brand.100' : 'GrayText'} fontSize="sm">
              {comment.subName}
            </Text>
          </VStack>
        </VStack>
      </motion.div>
    </a>
  );
};

export default UserBox;
