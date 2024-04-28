import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type StatisticsBoxProps = {
  icon: JSX.Element;
  text: string;
  // number: number;
};

export function StatisticsBox({ icon, text }: StatisticsBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Flex
        direction="column"
        height="120px"
        rounded="xl"
        overflow="hidden"
        align="center"
        border="3px solid var(--primaryColor)"
        // borderTop="2px solid"
        borderTopColor="var(--primaryColor)"
        w="140px"
        bgColor="#fff"
      >
        <Flex
          h="65px"
          rounded="xl"
          borderBottomRadius="none"
          p="10px"
          w="100%"
          align="center"
          justify="center"
        >
          <Flex
            align="center"
            justify="center"
            w="40px"
            h="40px"
            rounded="full"
            bgColor="rgba(95, 199, 237,0.15)"
            fontSize="lg"
            color="#0C789F"
          >
            {icon}
          </Flex>
        </Flex>

        <Flex w="full" p="5px 10px 10px" bgColor="#fff" align="center" direction="column">
          {/* <Text fontSize="lg" fontWeight="bold" color="brand.500">
            {number}+
          </Text> */}
          <Text fontSize="13px" textAlign="center">
            {text}
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
}
