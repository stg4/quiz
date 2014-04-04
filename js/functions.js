var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;
var answer5 = 0;
var answer6 = 0;
var answer7 = 0;
var answer8 = 0;
var answer9 = 0;
var answer10 = 0;
var total_score = 0;

function correct1(){
	answer1 = 1;
	document.getElementById("question1").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect1(){
	answer1 = 0;
	document.getElementById("question1").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct2(){
	answer2 = 1;
	document.getElementById("question2").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect2(){
	answer2 = 0;
	document.getElementById("question2").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct3(){
	answer3 = 1;
	document.getElementById("question3").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect3(){
	answer3 = 0;
	document.getElementById("question3").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct4(){
	answer4 = 1;
	document.getElementById("question4").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect4(){
	answer4 = 0;
	document.getElementById("question4").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct5(){
	answer5 = 1;
	document.getElementById("question5").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect5(){
	answer5 = 0;
	document.getElementById("question5").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct6(){
	answer6 = 1;
	document.getElementById("question6").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect6(){
	answer6 = 0;
	document.getElementById("question6").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct7(){
	answer7 = 1;
	document.getElementById("question7").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect7(){
	answer7 = 0;
	document.getElementById("question7").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct8(){
	answer8 = 1;
	document.getElementById("question8").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect8(){
	answer8 = 0;
	document.getElementById("question8").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct9(){
	answer9 = 1;
	document.getElementById("question9").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect9(){
	answer9 = 0;
	document.getElementById("question9").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function correct10(){
	answer10 = 1;
	document.getElementById("question10").style.backgroundImage = "url('img/correct.png')";
	updateTotal();
}
function incorrect10(){
	answer10 = 0;
	document.getElementById("question10").style.backgroundImage = "url('img/incorrect.png')";
	updateTotal();
}

function updateTotal(){
	total_score = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10;
}