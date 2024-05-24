import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const hAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const hSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const hMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const hDivision = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult("Error: Division by zero");
    }
  };

  return (
    <div className="calculator-container">
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div className="button-container">
        <button onClick={hAddition}>+</button>
        <button onClick={hSubtraction}>-</button>
        <button onClick={hMultiplication}>x</button>
        <button onClick={hDivision}>/</button>
      </div>
      <div className="result-container">
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
};

export default Calculator;
