import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function countWord(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== " ").length;
  }
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea />
      <h4>Time reminaing: ???</h4>
      <button onChange={handleChange} value={text}>
        Start
      </button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
