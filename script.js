let startBtn = document.getElementById("start-btn")
let questionContainer = document.getElementById("question-container")
let questionEl = document.getElementById("questions")
let answerEl = document.getElementById("answer-buttons")
let correctEl = document.getElementById("correct")

var score = 0;


let shuffledQuestions, currentQuestions

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestions = 0
    questionContainer.classList.remove("hide")
    setQuestion()
}

function setQuestion() {
    showQuestion(shuffledQuestions[currentQuestions])
}

function showQuestion(question) {
    questionEl.innerHTML = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    })
}

function selectAnswer(e) {

}

// Questions Object Array
let question = [
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    },
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    },
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    },
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    },

]