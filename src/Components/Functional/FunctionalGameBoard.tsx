// Import necessary modules and types
import React, { useState } from "react";
import { initialFishes } from "../../assets/fishData"; // Import fish data from a separate file

// Define the props interface for FunctionalGameBoard component
interface GameBoardProps {
  handleCounts: {
    correctCount: number;
    setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
    incorrectCount: number;
    setIncorrectCount: React.Dispatch<React.SetStateAction<number>>;
  };
}

// Define the FunctionalGameBoard component
export function FunctionalGameBoard(props: GameBoardProps) {
  // Destructure props for easier access
  const { correctCount, setCorrectCount, incorrectCount, setIncorrectCount } =
    props.handleCounts;

  // Calculate the current count based on correct and incorrect counts
  const currentCount: number = correctCount + incorrectCount;

  // Determine the next fish to display based on the current count
  const nextFishToName = initialFishes[currentCount];

  // Define state for the guessed fish name
  const [guessFishName, setGuessFishName] = useState<string>("");

  // Event handler for input change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuessFishName(e.target.value);
  };

  // Event handler for form submission
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the guessed fish name is correct and update counts accordingly
    initialFishes[currentCount].name === guessFishName
      ? setCorrectCount((prevCorrectCount) => prevCorrectCount + 1)
      : setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);

    // Clear the input field after submission
    setGuessFishName("");
  };

  // Render the FunctionalGameBoard component
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleOnSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guessFishName}
          onChange={handleOnChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
