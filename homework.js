var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("qImg");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge")
var gaugeProgress = document.getElementById("gaugeProgress")
var scoreContainer = document.getElementById("scoreContainer")
var score = 0;


var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

let questions = [
    {
        question : "Are you having fun?",
        imgSrc : "Questionimgage.png",
        choiceA : "Absolutely",
        choiceB : "No",
        choiceC : "Sort of",
        choiceD : "Are you crazy",
        correct : "A",
    },{
        question : "Question2?",
        imgSrc : "placeholder.png",
        choiceA : "NO",
        choiceB : "No",
        choiceC : "Correct",
        choiceD : "NO",
        correct : "B",
    }
]

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function questionRender(){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = `<img src=${q.imgSrc}>`;
    choiceA.innerHTML =  q.choiceA;
    choiceB.innerHTML =  q.choiceB;
    choiceC.innerHTML =  q.choiceC;
    choiceD.innerHTML =  q.choiceD;
    }

function renderProgress(){
    for( let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        gaugeProgress.innerHTML += "<div class='prog'id=" +qIndex +"></div>";
    }
}
var questionTime = 10;
var gaugeWidth = 150;
let count = 0;
var gaugeProgressUnit = gaugeWidth/questionTime;
let timer = setInterval(counterRender(), 1000);


function counterRender(){
    if(count<=questionTime){
        count.innerHTML = count;
        timeGauge.style.width = gaugeProgress * count + "px";
        count++;
    }else{
    count = 0;
    if( runningQuestionIndex<lastquestion){
        runningQuestionIndex++;
        questionRender();
    }else{clearInterval(timer);
    scoreRender();
}}
}
function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePercent = Math.round(score/questions.length *100);
    let img = ( scorePercent >= 70) ? "smile.png":
              ( scorePercent >= 50) ? "medium.png": "sad.jpeg";
        scoreContainer.innerHTML = "<img src =" + img +"><p> scorePercent + % </p>"
        console.log(img)
}

function checkAnswer(answer){
    console.log(questions[runningQuestionIndex].correct)
    console.log(answer)
    if(questions[runningQuestionIndex].correct==answer){
        score++;
        answerIsCorrect();
    console.log(score)
    }else{
        answerIswrong();

    }
    count = 0;
    if(runningQuestionIndex< lastQuestionIndex){

        runningQuestionIndex++;
        count = 0;
        question();
        }else{
            clearInterval(timer);
            scoreRender();
        }
}
function answerIsCorrect(){
    runningQuestionIndex++;
    questionRender();

}
function answerIswrong(){
    runningQuestionIndex++;
    questionRender();

}

function startQuiz(){
    start.style.display = "none";
    counterRender();
    console.log("hello")
    timer = setInterval(counterRender, 1000)
    renderProgress();
    questionRender();
    quiz.style.display = "block";
}

start.addEventListener("click", function(){
    startQuiz()
})
choiceA.addEventListener("click", function(){
    checkAnswer("A")
})
choiceB.addEventListener("click", function(){
    checkAnswer("B")
})
choiceC.addEventListener("click", function(){
    checkAnswer("C")
})
choiceD.addEventListener("click", function(){
    checkAnswer("D")
})




quiz.style.display = "none";
questionRender();
renderProgress();
counterRender();

