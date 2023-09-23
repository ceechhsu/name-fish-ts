import "./styles/score-board.css";

// Define the props interface for FunctionalScoreBoard component
interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}

// FunctionalScoreBoard component receives the props defined above
export function FunctionalScoreBoard(props: ScoreBoardProps) {
  // Destructure correctCount and incorrectCount from props
  const { correctCount, incorrectCount } = props;

  // Initialize an array of answer choices
  let answersLeft: string[] = ["trout", "salmon", "tuna", "shark"];

  // Remove answer from the front of the array.
  answersLeft = answersLeft.slice(correctCount + incorrectCount);

  // Rendering the score board
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
