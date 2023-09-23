import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../assets/fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const isGameOver: boolean =
    correctCount + incorrectCount === initialFishes.length; // Check if the user is done with all questions.

  return (
    <>
      {isGameOver ? (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard
            handleCounts={{
              correctCount,
              setCorrectCount,
              incorrectCount,
              setIncorrectCount,
            }}
          />
        </>
      )}
    </>
  );
}
