
const questions = [

    {
        question: "أول يوم لينا كان إمتى؟ ❤️",

        answers: [
            {
                text: "17/9/2022",
                correct: true
            },

            {
                text: "30/2/2022",
                correct: false
            }
        ]
    },

    {
        question: "بتحب مين أكتر؟ ❤️",

        answers: [
            {
                text: "أنا طبعًا ❤️",
                correct: true
            },

            {
                text: "اصحابك",
                correct: false
            }
        ]
    },

    {
        question: "مين أكتر شخص بدلع التاني؟ 😂",

        answers: [
            {
                text: "أنا ❤️",
                correct: true
            },

            {
                text: "إنت 😌",
                correct: false
            }
        ]
    },

    {
        question: "لو زعلت منك، تعمل إيه؟ 😤",

        answers: [
            {
                text: "تصالحني فورًا ❤️",
                correct: true
            },

            {
                text: "اولعي 😂",
                correct: false
            }
        ]
    },

    {
        question: "إيه أهم حاجة بينا؟ ❤️",

        answers: [
            {
                text: "الحب والاهتمام ❤️",
                correct: true
            },

            {
                text: "الخناق 😂",
                correct: false
            }
        ]
    },

    {
        question: "هتفضل معايا؟ 🥹❤️",

        answers: [
            {
                text: "طبعًا للأبد ❤️",
                correct: true
            },

            {
                text: "مش عارف 😂",
                correct: false
            }
        ]
    }

];

let currentQuestion = 0;

let answers = [];

let score = 0;


const questionElement =
    document.getElementById("question");

const questionNumber =
    document.getElementById("questionNumber");

const answersContainer =
    document.querySelector(".answers");

const questionCard =
    document.querySelector(".question-card");

const resultCard =
    document.getElementById("resultCard");

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const quizNextBtn =
    document.getElementById("quizNextBtn");

const quizPrevBtn =
    document.getElementById("quizPrevBtn");

const finalCard =
    document.getElementById("finalCard");

const scoreElement =
    document.getElementById("score");


function showQuestion() {

    const current = questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    answersContainer.innerHTML = "";


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.classList.add("answer");


        button.textContent =
            answer.text;


        if (answers[currentQuestion] !== undefined) {

            if (answers[currentQuestion].index === index) {

                button.classList.add("selected");

            }

        }


        button.addEventListener("click", function () {

            selectAnswer(answer.correct, index);

        });


        answersContainer.appendChild(button);

    });


    if (currentQuestion === 0) {

        quizPrevBtn.disabled = true;

    } else {

        quizPrevBtn.disabled = false;

    }

    if (currentQuestion === questions.length - 1) {

        quizNextBtn.textContent = "Finish ❤️";

    } else {

        quizNextBtn.textContent = "Next ❤️";

    }

}


function selectAnswer(correct, answerIndex) {

    answers[currentQuestion] = {

        index: answerIndex,

        correct: correct

    };


    calculateScore();


    questionCard.style.display = "none";

    resultCard.style.display = "block";


    if (correct) {

        resultIcon.textContent = "🥰";

        resultTitle.textContent =
            "برافوووو عليك ❤️";

        resultMessage.textContent =
            "إيه الجمال ده!   😂❤️";

    } else {

        resultIcon.textContent = "😤";

        resultTitle.textContent =
            "ليلتك سودااا 😤";

        resultMessage.textContent =
            " ! إزاي تختار الإجابة دي😂💔";

    }

}

function calculateScore() {

    score = 0;


    answers.forEach(answer => {

        if (answer && answer.correct) {

            score++;

        }

    });

}

quizNextBtn.addEventListener("click", function () {


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        resultCard.style.display = "none";

        questionCard.style.display = "block";

        showQuestion();

    }


    else {

        resultCard.style.display = "none";

        questionCard.style.display = "none";

        showFinalResult();

    }

});

quizPrevBtn.addEventListener("click", function () {


    if (currentQuestion > 0) {

        currentQuestion--;

        resultCard.style.display = "none";

        finalCard.style.display = "none";

        questionCard.style.display = "block";

        showQuestion();

    }

});


function showFinalResult() {

    calculateScore();


    finalCard.style.display = "block";


    scoreElement.textContent =
        `نتيجتك: ${score} / ${questions.length}`;


    const finalMessage =
        document.querySelector(".final-message");


    if (score === questions.length) {

        finalMessage.textContent =
            "برافوو عليك! كده أنت عارفني أكتر من نفسي 😂❤️";

    }

    else if (score >= questions.length / 2) {

        finalMessage.textContent =
            "مش وحش 😂❤️ بس محتاج تذاكرني أكتر!";

    }

    else {

        finalMessage.textContent =
            "ليلتك سودا رسمي 😂😤❤️";

    }

}


showQuestion(); 
