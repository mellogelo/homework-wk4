let startBtn = document.getElementById("start-btn")
let questionContainer = document.getElementById("question-container")
const questionEl = document.getElementById("questions")



startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add("hide")
    questionContainer.classList.remove("hide")
    setQuestion
}

function setQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(question){
    questionEl.innerText = question.question
}

const question = [
    {
        question: 'what is your name',
        answers: [
            { text: 'Bob', correct: true },
            { text: 'Joe', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Scott', correct: false },
        ]
    