import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../assets/fishData";

// Define the shape of component's state.
interface AppState {
  correctCount: number;
  incorrectCount: number;
}

export class ClassApp extends Component<AppState> {
  // Initialize the component's state.
  state = {
    correctCount: 0,
    incorrectCount: 0,
  };

  // Check when game is over.
  isGameOver = (): boolean => {
    return (
      this.state.correctCount + this.state.incorrectCount ===
      initialFishes.length
    );
  };

  // Set correct count to state.
  setCorrectCount = (value: number): void => {
    this.setState({ correctCount: value });
  };

  // Set incorrect count to state.
  setIncorrectCount = (value: number): void => {
    this.setState({ incorrectCount: value });
  };

  // Render the UI.
  render() {
    return (
      <>
        {this.isGameOver() ? (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
            />
            <ClassGameBoard
              handleCounts={{
                correctCount: this.state.correctCount,
                setCorrectCount: this.setCorrectCount,
                incorrectCount: this.state.incorrectCount,
                setIncorrectCount: this.setIncorrectCount,
              }}
            />
          </>
        )}
      </>
    );
  }
}
