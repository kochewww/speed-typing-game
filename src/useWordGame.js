import { useEffect, useRef, useState } from "react";

function useWordGame() {
  const STARTING_TIME = 60;
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textAreaRef = useRef(null);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== " ").length;
  }
  function startGame() {
    setIsTimeRunning(true);
    setText("");
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }
  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);
  return [
    isTimeRunning,
    text,
    handleChange,
    textAreaRef,
    timeRemaining,
    startGame,
    wordCount
  ];
}
export default useWordGame;
