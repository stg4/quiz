function makeCircle1(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="20px";
		newCircle.style.height="20px";
		newCircle.style.marginLeft = "105px";
		newCircle.style.marginTop = "40px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function

function makeCircle2(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "65px";
		newCircle.style.marginTop = "-40px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function

function makeCircle3(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "45px";
		newCircle.style.marginTop = "-20px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle4(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "25px";
		newCircle.style.marginTop = "-10px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle5(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "40px";
		newCircle.style.marginTop = "-5px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle6(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "27px";
		newCircle.style.marginTop = "-2px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function

function makeCircle7(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "-25px";
		newCircle.style.marginTop = "15px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle8(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "35px";
		newCircle.style.marginTop = "-28px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function



function makeCircle9(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "60px";
		newCircle.style.marginTop = "-65px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle10(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "30px";
		newCircle.style.marginTop = "-25px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle11(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "-20px";
		newCircle.style.marginTop = "-69px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle12(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "104px";
		newCircle.style.marginTop = "-55px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle13(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "-104px";
		newCircle.style.marginTop = "-69px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle14(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#151515";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "-50px";
		newCircle.style.marginTop = "71px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle15(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="#CC2222";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "-24px";
		newCircle.style.marginTop = "31px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function


function makeCircle16(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="rgba(204,34,34,.9)";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "39px";
		newCircle.style.marginTop = "40px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function

function makeCircle17(evt){
	// Make all browsers understand the event object
	evt = (evt || event);
	// Makes div, but does not put it onstage yet.
	var newCircle = document.createElement("div");
	newCircle.className = "circle";
	newCircle.style.left = evt.clientX + "px";
	newCircle.style.top = evt.clientY + "px";
	newCircle.style.width = "50px";
	newCircle.style.height = "50px";
	newCircle.style.backgroundColor="rgba(204,34,34,.9)";
	newCircle.style.borderRadius="300px";
	newCircle.style.position = "absolute";
	newCircle.style.opacity = "1";
	// Also use CSS3 transitions so that the CSS values change, they change over time as an animation.
	newCircle.style.transition = "all .75s ease-out"; 
	newCircle.style.webkitTransition = "all .75s ease-out";
	// Puts the circle on the page:
	document.body.appendChild(newCircle);
	// The next line causes the CSS property values (w,h,alpha) to change, making the circle larger and invisible. 
	// Doing it after a delay of zero puts it in the proper place on the timing stack
	setTimeout(function(){
		newCircle.style.opacity = "0";
		newCircle.style.width="50px";
		newCircle.style.height="50px";
		newCircle.style.marginLeft = "50px";
		newCircle.style.marginTop = "-30px";
		newCircle.style.width = "0px";
		newCircle.style.height = "0px";
	}, 0);
	setTimeout(function(){
		document.body.removeChild(newCircle);
	}, 800);
	//destroy();
}//Closes Function



function destroy(){
	var circle= document.getElementsByClassName("circle")[0];
	if(circle.style.opacity == "0"){
		
	}
}