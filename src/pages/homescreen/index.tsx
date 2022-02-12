import { useEffect, useState } from "react";
import { Difficulty, totalQuestions } from "@/constants/index";
import { getQuestionList } from "@/services/fetchQuestions";
import { Appspinner, Appbutton } from "@/components/index";
import { Questioncard } from "@/components/index";
import { Box } from "@chakra-ui/react";

import "./index.css";

interface QuestionProps {
  question: string;
  category: string;
  callback: Function;
  totalQuestions: number;
  questionNumber: number;
}

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Triviahome: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionListing = await getQuestionList(
        totalQuestions,
        Difficulty.HARD
      );
      setQuestions(questionListing);
    };
    fetchQuestions();
    setLoading(false);
  }, []);

  const checkAnswer = (): void => {
    console.log("Checking answer");
    setUserAnswer([]);
  };

  const nextQuestion = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nextQuestion = questionNumber + 1;
    if (totalQuestions === nextQuestion) {
      setGameOver(true);
      return;
    }
    setQuestionNumber(nextQuestion);
  };

  return (
    <>
      <div className="App">
        {loading && (
          <div className="app-spinner">
            <Appspinner
              speed="0.65s"
              emptyColor="gray.200"
              color="green"
              size="lg"
              thickness="5px"
            />
          </div>
        )}
        {!loading && !gameOver && (
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
            <Questioncard
              questions={questions[questionNumber].question}
              category={questions[questionNumber].category}
              callback={checkAnswer}
              totalQuestions={totalQuestions}
              questionNumber={questionNumber}
            />

            <Appbutton
              disabled={
                userAnswer.length === questionNumber + 1 &&
                questionNumber !== totalQuestions
                  ? ""
                  : "disabled"
              }
              colorScheme="green"
              variant="solid"
              onClick={nextQuestion}
              value="Next Question"
              className="next-button"
              width="full"
            />
          </Box>
        )}
        <>{gameOver && <>Game over!</>}</>
      </div>
    </>
  );
};

export default Triviahome;
