import React from "react";
import useWordGame from "./useWordGame";
import "./App.css";
function App() {
  const [
    isTimeRunning,
    text,
    handleChange,
    textAreaRef,
    timeRemaining,
    startGame,
    wordCount
  ] = useWordGame();
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
        ref={textAreaRef}
      ></textarea>
      <h4>Time remaining:{timeRemaining} </h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
