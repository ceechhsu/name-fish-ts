import React, { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../assets/fishData";

// Define the props interface for ClassGameBoard.
interface ClassGameBoardProps {
  handleCounts: {
    correctCount: number;
    setCorrectCount: (value: number) => void;
    incorrectCount: number;
    setIncorrectCount: (value: number) => void;
  };
}

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  // Initialize the component's state.
  state = {
    guessFishName: "",
  };

  // Event handler for input change
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ guessFishName: e.target.value });
  };

  // Event handler for form submission
  handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { correctCount, setCorrectCount, incorrectCount, setIncorrectCount } =
      this.props.handleCounts;

    // Destructure props
    const currentCount = correctCount + incorrectCount;

    // Check if the guessed fish name is correct
    const isCorrect =
      initialFishes[currentCount].name === this.state.guessFishName;

    // Update counts based on correctness
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    // Clear the input field after submission
    this.setState({ guessFishName: "" });
  };

  render() {
    // Destructure props and state
    const { correctCount, incorrectCount } = this.props.handleCounts;
    const currentCount = correctCount + incorrectCount;

    // Calculate the current count and determine the next fish to display
    const nextFishToName = initialFishes[currentCount];
    const { guessFishName } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={guessFishName}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
