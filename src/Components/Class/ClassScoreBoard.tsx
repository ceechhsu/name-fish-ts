import { Component } from "react";

// Define the props interface for ClassScoreBoard.
interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    // Destructure from props.
    const { correctCount, incorrectCount } = this.props;

    // Initialize an array of answer choices
    let answersLeft: string[] = ["trout", "salmon", "tuna", "shark"];
    // Remove answer choices from the front of the array based on counts
    answersLeft = answersLeft.slice(correctCount + incorrectCount);

    // Rendering the UI
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
}
