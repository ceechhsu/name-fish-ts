import "./styles/final-score.css";

interface FinalScoreProps {
  correctCount: number;
  incorrectCount: number;
}

export const FunctionalFinalScore = (props: FinalScoreProps) => {
  const { correctCount, incorrectCount } = props;
  const totalCount = correctCount + incorrectCount;

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
