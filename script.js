let startBtn = document.getElementById("start-btn")
let questionContainer = document.getElementById("question-container")
const questionEl = document.getElementById("questions")
const answerEl = document.getElementById("answer-buttons")
const correctEl = document.getElementById("correct")

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

function showQuestion(question){
    questionEl.innerHTML = question.question
}

let question = [
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    }
]