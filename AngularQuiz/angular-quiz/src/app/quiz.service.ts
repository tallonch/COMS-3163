import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions = [
    {
      type: 'multipleChoice',
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      type: 'fillInTheBlank',
      question: 'The largest planet in our solar system is __________.',
      answer: 'Jupiter',
    },
    {
      type: 'multipleChoice',
      question: 'Where was the first example of money used?',
      options: ['China', 'Turkey', 'Greece'],
      answer: 'China',
    },
    {
      type: 'fillInTheBlank',
      question: 'What is the longest bone the human body? __________.',
      answer: 'Femur',
    },
    {
      type: 'multipleChoice',
      question: 'In Greek mythology, Poseidon was the god of the sea.',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      type: 'multipleChoice',
      question: 'What is the largest US state (by landmass)?',
      options: ['Texas', 'Alaska', 'California'],
      answer: 'Alaska',
    },
    {
      type: 'multipleChoice',
      question: 'Tea was invented in China',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      type: 'fillInTheBlank',
      question: '2 + 2 =  __________.',
      answer: '4',
    },
    {
      type: 'fillInTheBlank',
      question: 'What color is the sky? __________.',
      answer: 'Blue',
    },
    {
      type: 'multipleChoice',
      question: 'What planet is closest to the Sun?',
      options: [
        'Saturn',
        'Uranus',
        'Jupiter',
        'Earth',
        'Mars',
        'Mercury',
        'Venus',
        'Neptune',
      ],
      answer: 'Mercury',
    },
  ];
  constructor() {}

  getQuestions() {
    return this.questions;
  }
}
