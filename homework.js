var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("questionImage");
var question = document.getElementById("question");


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
        choiceD : "Are you crazy"
        correct : "A"
    }
]

let lastQuestionIndex = questions - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = <img src="+ q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML =  q.choiceA;
    choiceA.innerHTML =  q.choiceB;
    choiceA.innerHTML =  q.choiceC;
    choiceA.innerHTML =  q.choiceD;
    }