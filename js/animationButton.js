// Get section and animation-start button
var animationSection = document.getElementById('animation');
	buttonAnimation = document.getElementById('animation-start');

//Listener for button to add new element div, h1
buttonAnimation.addEventListener('click', function() {

	var animationSection = document.getElementById('animation');
		buttonAnimation = document.getElementById('animation-start');
	 	newElemBackButton = document.createElement('button');
		newElemRing = document.createElement('div');
		parent = document.getElementById('parent');

	//assign ring class to new div
	newElemRing.className = "ring";
	newElemRing.style.opacity = 0;

	// Create new elements
	var newElemQuote = document.createElement('h1');
	newElemQuote.innerHTML = "Keep it secret! Keep it safe!";
	var newElemGandalf = document.createElement('p');
	newElemGandalf.innerHTML = "Gandalf (13.04.3018r TE)";

	//add text and two classes to new "back-button" which will close all new created elements
	newElemBackButton.innerHTML = "Keep it safe!";
	newElemBackButton.className = "animation-button back-button";
	newElemBackButton.id = "keepItSafe";

	// Add animation, quote and backButton to HTML section "animation-ring"
	animationSection.appendChild(newElemRing);
	animationSection.appendChild(newElemQuote);
	animationSection.appendChild(newElemGandalf);
	animationSection.appendChild(newElemBackButton);

	// function for smooth appeard of elements
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
	// after added new elements with opacity feature first button deleted
	removeElement(parent, buttonAnimation);

	// Get new created button "keepItSafe" and store in new variable
	var backButton = document.getElementById('keepItSafe');

	// New button remove all appeard elements created by buttonAnimation
	backButton.addEventListener('click', function() {
		removeElement(animationSection, newElemRing);
		removeElement(animationSection, newElemQuote);
		removeElement(animationSection, newElemGandalf);
		removeElement(animationSection, backButton);
		// Create button animation for infinite loop for user.
		parent.appendChild(buttonAnimation);
	});
});

// Function to remove elements
function removeElement(param1, param2) {
	param1.removeChild(param2);
}
