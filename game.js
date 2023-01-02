// generate questions, choices, take score and store it



const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choiceText'));
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "5",
        choice4: "8",
        answer: 2,
    },
    {
        question: "what is my dogs name?",
        choice1: "Riley",
        choice2: "Dogmeat",
        choice3: "Pookie",
        choice4: "Cuddle-Bug",
        answer: 1,
    },
    {
        question: "Is my dog a good boy?",
        choice1: "nah, he's fat",
        choice2: "ew, I don't like him",
        choice3: "He's ok, I guess...",
        choice4: "OMG! Yes. I love him.",
        answer: 4,
    },
    {
        question: "what this educational?",
        choice1: "91.412 million miles",
        choice2: "7.837 billion as of 2021",
        choice3: "It was educational for you to build this and that's what really mattered",
        choice4: "The Triassic Period",
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}