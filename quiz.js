let timeLeft = 60;  // Time in seconds
let timerId;
let currentQuestionIndex = 0;
let score = 0;

// Array of questions, options, and correct answers
const questions = [
    {
        question: "What is the capital of France?",
        options: {
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid"
        },
        correct: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            a: "Earth",
            b: "Mars",
            c: "Venus",
            d: "Jupiter"
        },
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: {
            a: "Atlantic",
            b: "Indian",
            c: "Arctic",
            d: "Pacific"
        },
        correct: "d"
    }
];

function startTimer() {
    timerId = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = `Time Left: ${timeLeft}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("Time's up! Submitting the quiz.");
            showScore();
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        
        // Display question and options
        document.getElementById('question').textContent = question.question;
        const options = question.options;
        const optionButtons = document.querySelectorAll('.answer-btn');
        
        optionButtons[0].textContent = options.a;
        optionButtons[1].textContent = options.b;
        optionButtons[2].textContent = options.c;
        optionButtons[3].textContent = options.d;
    } else {
        showScore();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    // Check if the selected option matches the correct answer
    if (selectedOption === correctAnswer) {
        score++;
    }

    // Move to next question
    currentQuestionIndex++;
    displayQuestion();
}

function showScore() {
    document.getElementById('quiz').style.display = 'none';  // Hide quiz
    document.getElementById('score').textContent = `Your Score: ${score} / ${questions.length}`;
}

// Initialize the quiz
window.onload = function() {
    startTimer();
    displayQuestion();
};
