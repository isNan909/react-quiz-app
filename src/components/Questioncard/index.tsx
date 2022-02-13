import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import Appbutton from "@/components/Button";
import { QuestionCardProps } from "@/interface/index"

const Questioncard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box fontSize="sm" mb={1}>
          {category}
        </Box>
        <Heading as="h1" size="lg">
          <Box mb={6}>{questions}</Box>
        </Heading>

        <Flex direction="column">
          <Box w="100%" mb={4}>
            <Appbutton
              colorScheme="purple"
              variant="outline"
              onClick={callback}
              value="True"
              width="full"
            />
          </Box>
          <Spacer />
          <Box w="100%" mb={4}>
            <Appbutton
              colorScheme="purple"
              variant="outline"
              onClick={callback}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Questioncard;
