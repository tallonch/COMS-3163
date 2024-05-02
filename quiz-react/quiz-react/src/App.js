import "./App.css";
import { useEffect, useState } from "react";

let showMultipleChoice = true;

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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [textInputValue, setTextInputValue] = useState("");

  useEffect(() => {
    console.log(score);
  });

  const textChange = (event) => {
    console.log(event.target.value);
    const newText = event.target.value;
    setTextInputValue(newText);
  };

  const findQuestionType = (questionIndex) => {
    if (questions[questionIndex].type === "multipleChoice") {
      showMultipleChoice = true;
    } else {
      showMultipleChoice = false;
    }
  };

  const handleAnswerBtnClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((score) => score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      findQuestionType(nextQuestion);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleEnterBtnClick = () => {
    console.log(textInputValue);
    if (textInputValue === questions[currentQuestion].answer) {
      setScore((score) => score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      findQuestionType(nextQuestion);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setTextInputValue("");
  };

  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-container">
            Your score is {score} out of {questions.length}!
          </div>
        ) : (
          <>
            <div className="question-container">
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
              {showMultipleChoice ? (
                <div className="answer-container btn-grid">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      className="btn"
                      key={option}
                      onClick={() => handleAnswerBtnClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    id="textInput"
                    value={textInputValue}
                    onChange={textChange}
                    className="textInput"
                  ></input>
                  <button className="btn" onClick={() => handleEnterBtnClick()}>
                    Enter
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
