var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Quiz questions

var quizQuestions = [{
    question: "What does CSS stand for?",
    choiceA: "Creative Style Sheets",
    choiceB: "Colorful Style Sheets",
    choiceC: "Cascading Style Sheets",
    choiceD: "Computer Style Sheets",
    correctAnswer: "c"
},
{
    question: "How do you insert a comment in a CSS file?",
    choiceA: "// this is a comment //",
    choiceB: "/* this is a comment */",
    choiceC: "‘ this is a comment",
    choiceD: "// this is a comment",
    correctAnswer: "b"
},
{
    question: "How do you change the left margin of an element?",
    choiceA: "margin:",
    choiceB: "indent:",
    choiceC: "margin-left:",
    choiceD: "text-indent:",
    correctAnswer: "c"
},
{
    question: " How do you make a list that lists its items with squares?",
    choiceA: "list-type: square",
    choiceB: "type: square",
    choiceC: "type: 2",
    choiceD: " list-style-type: square",
    correctAnswer: "d"
},
{
    question: "Which HTML attribute is used to define inline styles?",
    choiceA: "font",
    choiceB: "class",
    choiceC: "styles",
    choiceD: "style",
    correctAnswer: "d"
},

];
// Other global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}
// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}


// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);