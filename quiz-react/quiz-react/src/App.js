import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const questions = [
  {
    type: "multipleChoice",
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    type: "fillInTheBlank",
    question: "The largest planet in our solar system is __________.",
    answer: "Jupiter",
  },
  {
    type: "multipleChoice",
    question: "Where was the first example of money used?",
    options: ["China", "Turkey", "Greece"],
    answer: "China",
  },
  {
    type: "fillInTheBlank",
    question: "What is the longest bone the human body? __________.",
    answer: "Femur",
  },
  {
    type: "multipleChoice",
    question: "In Greek mythology, Poseidon was the god of the sea.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    type: "multipleChoice",
    question: "What is the largest US state (by landmass)?",
    options: ["Texas", "Alaska", "California"],
    answer: "Alaska",
  },
  {
    type: "multipleChoice",
    question: "Tea was invented in China",
    options: ["True", "False"],
    answer: "True",
  },
  {
    type: "fillInTheBlank",
    question: "2 + 2 =  __________.",
    answer: "4",
  },
  {
    type: "fillInTheBlank",
    question: "What color is the sky? __________.",
    answer: "Blue",
  },
  {
    type: "multipleChoice",
    question: "What planet is closest to the Sun?",
    options: [
      "Saturn",
      "Uranus",
      "Jupiter",
      "Earth",
      "Mars",
      "Mercury",
      "Venus",
      "Neptune",
    ],
    answer: "Mercury",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <>
      <div className="quiz-app">
        <>
          <div className="question-container">
            <div className="question-text">Question</div>
          </div>
          <div className="answer-container">Answer</div>
        </>
      </div>
    </>
  );
}

export default App;
