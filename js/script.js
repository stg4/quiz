/**
* Interactive Quiz for Pittsburgh Technical Institute's Touch Screens | init file
* @author Sean Gracy
* @version 1.0
*/

window.onload = init;

function init(){
	document.getElementById("q1b1").onclick = function(){
		correct1();
	}
	document.getElementById("q1b2").onclick = function(){
		incorrect1();
	}
	document.getElementById("q1b3").onclick = function(){
		incorrect1();
	}
	document.getElementById("q1b4").onclick = function(){
		incorrect1();
	}
	
	document.getElementById("q2b1").onclick = function(){
		incorrect2();
	}
	document.getElementById("q2b2").onclick = function(){
		incorrect2();
	}
	document.getElementById("q2b3").onclick = function(){
		correct2();
	}
	document.getElementById("q2b4").onclick = function(){
		incorrect2();
	}
		
	document.getElementById("q3b1").onclick = function(){
		incorrect3();
	}
	document.getElementById("q3b2").onclick = function(){
		correct3();
	}
	document.getElementById("q3b3").onclick = function(){
		incorrect3();
	}
	document.getElementById("q3b4").onclick = function(){
		incorrect3();
	}
	
	document.getElementById("q4b1").onclick = function(){
		correct4();
	}
	document.getElementById("q4b2").onclick = function(){
		incorrect4();
	}
	document.getElementById("q4b3").onclick = function(){
		incorrect4();
	}
	document.getElementById("q4b4").onclick = function(){
		incorrect4();
	}
	
	document.getElementById("q5b1").onclick = function(){
		incorrect5();
	}
	document.getElementById("q5b2").onclick = function(){
		incorrect5();
	}
	document.getElementById("q5b3").onclick = function(){
		correct5();
	}
	document.getElementById("q5b4").onclick = function(){
		incorrect5();
	}
	
	document.getElementById("q6b1").onclick = function(){
		incorrect6();
	}
	document.getElementById("q6b2").onclick = function(){
		incorrect6();
	}
	document.getElementById("q6b3").onclick = function(){
		incorrect6();
	}
	document.getElementById("q6b4").onclick = function(){
		correct6();
	}
	
	document.getElementById("q7b1").onclick = function(){
		incorrect7();
	}
	document.getElementById("q7b2").onclick = function(){
		correct7();
	}
	document.getElementById("q7b3").onclick = function(){
		incorrect7();
	}
	document.getElementById("q7b4").onclick = function(){
		incorrect7();
	}
	
	document.getElementById("q8b1").onclick = function(){
		incorrect8();
	}
	document.getElementById("q8b2").onclick = function(){
		incorrect8();
	}
	document.getElementById("q8b3").onclick = function(){
		correct8();
	}
	document.getElementById("q8b4").onclick = function(){
		incorrect8();
	}
	
	document.getElementById("q9b1").onclick = function(){
		incorrect9();
	}
	document.getElementById("q9b2").onclick = function(){
		incorrect9();
	}
	document.getElementById("q9b3").onclick = function(){
		incorrect9();
	}
	document.getElementById("q9b4").onclick = function(){
		correct9();
	}
	
	document.getElementById("q10b1").onclick = function(){
		incorrect10();
	}
	document.getElementById("q10b2").onclick = function(){
		correct10();
	}
	document.getElementById("q10b3").onclick = function(){
		incorrect10();
	}
	document.getElementById("q10b4").onclick = function(){
		incorrect10();
	}
	$(".toConfirm").click(function(){
		$("#content-q10").slideUp(1000);
		$("#results").delay(1000).slideDown(1000);
		$("#final-result").html("Your final score: " + total_score + " out of 10");
		if(total_score == 10){
			$("#para").html("WOW DAD, YOU GOT A PERFECT SCORE! President DeFeo has been notified and is on his way to congratulate you! Please wait for his arrival.");
		}else if(total_score == 9){
			$("#para").html("You missed one? Are you kidding me?! You should be ashamed of yourself; please run to your closest corner and proceed to cry... but on the real that is a good score! Care to try again?");
		}else if(total_score == 8){
			$("#para").html("Very nice job! I mean, you didn't score as high as that one kid that was here about a half hour ago... but don't let that discourage you.");
		}else if(total_score == 7){
			$("#para").html("Not too bad yo! This score is above the current average; you should be proud! Now go interrupt the closest class and tell everyone to try out this quiz!");
		}else if(total_score == 6){
			$("#para").html("You did alright! Answering 6 out of 10 is about average for this quiz; but by all means we don't think you are average! You are special in our eyes. Give the quiz another go!");
		}else if(total_score == 5){
			$("#para").html("For pessimists: You missed half of the questions... for optimists: You got half of the questions correct!... actually either way sounds kinda off... we believe in you! Try again!");
		}else if(total_score == 4){
			$("#para").html("Only 4 of them were correct, but don't beat yourself up over that. Did you know for every correct answer you click, President DeFeo gets a dollar? Help a prez out! Go again!");
		}else if(total_score == 3){
			$("#para").html("3 of the questions you have answered were correct; you can do better! You know most of these questions can be answered by looking on the schools website or visiting one of the locations around campus? Walk around a bit, do some research then return!");
		}else if(total_score == 2){
			$("#para").html("Okay man/girl/mangirl, I know you can do better than that. Give it another go! Don't give up!");
		}else if(total_score == 1){
			$("#para").html("YOU ARE NUMBER ONE! YOU ARE NUMBER ONE! Sadly the number one is bad thing, since you only got one question correct. Don't make me come outta here and yell; try again.");
		}
		else if(total_score == 0){
			$("#para").html("The paramedics have been notified about your score; please sit tight, help is on the way!");
		}
	});
	document.onclick= function(evt){
		makeCircle1(evt);
		makeCircle2(evt);
		makeCircle3(evt);
		makeCircle4(evt);
		makeCircle5(evt);
		makeCircle6(evt);
		makeCircle7(evt);
		makeCircle8(evt);
		makeCircle9(evt);
		makeCircle10(evt);
		makeCircle11(evt);
		makeCircle12(evt);
		makeCircle13(evt);
		makeCircle14(evt);
		makeCircle15(evt);
		makeCircle16(evt);
	}
}