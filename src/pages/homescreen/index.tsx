import { useEffect, useState } from "react";
import { getQuestionList } from "../../services/fetchQuestions";
import { Difficulty, Total } from "../../constants";

import { Questioncard } from "@/components/index";
import "./index.css";

interface QuestionProps {
  category: string;
  question: string;
}

const Triviahome: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionListing = await getQuestionList(Total.TEN, Difficulty.HARD);
      setQuestions(questionListing);
    };
    fetchQuestions();
  }, []);

  const checkAnswer = ():void => {
    console.log("Checking answer");
  };

  return (
    <>
      <div className="App">
        {questions.map((question) => {
          return (
            <>
              <Questioncard
                questions={question.question}
                category={question.category}
                callback={checkAnswer}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Triviahome;
