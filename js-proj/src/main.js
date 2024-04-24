const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainerElement = document.getElementById("answer-container");

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
];

let shuffledQuestions,
  currentQuestionIndex,
  correctAnswer,
  totalCorrectAnswers = 0,
  totalQuestions = questions.length;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  if (question.type == multipleChoice) {
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      answerContainerElement.appendChild(button);
    });
  } else {
  }
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerContainerElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.innerText == correctAnswer) {
    totalCorrectAnswers += 1;
  }
  console.log(totalCorrectAnswers);
  console.log(totalQuestions);
  nextButton.classList.remove("hide");
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerContainerElement.firstChild) {
    answerContainerElement.removeChild(answerContainerElement.firstChild);
  }
}
