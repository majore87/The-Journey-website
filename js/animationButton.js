console.log('loaded');
function checkOnclickEvent(param) {
	console.log(param);
}

var animationSection = document.getElementById('animation');
	buttonAnimation = document.getElementById('animation-start');
 	newElemBackButton = document.createElement('button');
	newElemRing = document.createElement('div');
	parent = document.getElementById('parent');

//Listener for button to add new element div, h1
buttonAnimation.addEventListener('click', function() {
	//assign ring class to new div
	newElemRing.className = "ring";
	newElemRing.style.opacity = 0;

	var newElemQuote = document.createElement('h1');
	newElemQuote.innerHTML = "Keep it secret! Keep it safe!";

	var newElemGandalf = document.createElement('p');
	newElemGandalf.innerHTML = "Gandalf (13.04.3018r TE)";

	//add text and two classes to "back-button"
	newElemBackButton.innerHTML = "Keep it safe!";
	newElemBackButton.className = "animation-button back-button";
	newElemBackButton.id = "keepItSafe";

	// Add animation and quote to HTML section "animation-ring"
	animationSection.appendChild(newElemRing);
	animationSection.appendChild(newElemQuote);
	animationSection.appendChild(newElemGandalf);
	animationSection.appendChild(newElemBackButton);

	function opacity(param) {
	var steps = 0;
	var timer = setInterval(function() {
		steps++;
		param.style.opacity = 0.05 * steps;
		if(steps >= 20) {
			clearInterval(timer);
			}
		}, 50);
	}

	opacity(newElemRing);
	opacity(newElemBackButton);
	opacity(newElemQuote);
	opacity(newElemGandalf);
	checkOnclickEvent('Item added');
	removeButton(parent, buttonAnimation);


	var backButton = document.getElementById('keepItSafe');

	backButton.addEventListener('click', function() {
		removeButton(animationSection, newElemRing);
		removeButton(animationSection, newElemQuote);
		removeButton(animationSection, newElemGandalf);
		removeButton(animationSection, backButton);
		animationSection.appendChild(buttonAnimation);
	});

});

// Remove function
function removeButton(param1, param2) {
	param1.removeChild(param2);
}
