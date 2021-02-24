var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("qImg");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge")
var progress = document.getElementById("progress")
var scoreContainer = document.getElementById("scoreContainer")


var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

let questions = [
    {
        question : "Are you having fun?",
        imgSrc : "questionimage.png",
        choiceA : "Absolutely",
        choiceB : "No",
        choiceC : "Sort of",
        choiceD : "Are you crazy",
        correct : "A",
    },{
        question : "Question2?",
        imgSrc : "questionimage.png",
        choiceA : "NO",
        choiceB : "No",
        choiceC : "Correct",
        choiceD : "NO",
        correct : "B",
    }
]

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = `<img src=${q.imgSrc}>`;
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML =  q.choiceA;
    choiceA.innerHTML =  q.choiceB;
    choiceA.innerHTML =  q.choiceC;
    choiceA.innerHTML =  q.choiceD;
    }
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

/*
var questionTime = 10;
var gaugeWidth = 150;
let count = 0;
var gaugeProgressUnit = gaugeWidth/questionTime;
let timer = setInterval(counterRender, 1000);


functioncounterRender(){
    if(count<=questionTime){
        count.innerHTML = count;
        timeGauge.syle.width = gaugeProgress * count + "px";
        count++;
    }
}else{
    count = 0;
    if( runningQuestionIndex<lastquestion){
        runningQuestionIndex++;
        questionRender();
    }else{clearInterval(timer);
    scoreRender();
}

}

let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct==answer){
        score++;
        answerIsCorrect();
    }else{
        answerIswrong();

    }
    if(runningQuestionIndex< lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        question();
        }else{
            clearInterval(timer);
            scoreRender();
        }
}

start.addEventListener("click", startQuiz)
let timer;

function startQuiz(){
    start.style.display = "none";
    counterRender();
    timer = setInterval(counterRender, 1000)
    progressRender();
    questionRender();
    quiz.style.display = "block";
}

function scoreRender(){
    ServiceWorkerContainer.style.display = "block";
    let scorePercent = Math.round(score/questions.length *100);
    let img = ( scorePercent >= 70) ? "smile.png":
              ( scorePercent >= 50) ? "medium.png": "sad.jpeg";
        scoreContainer.innerHTML = "<img src" + img +"><p> scorePercent + % </p>"
}
