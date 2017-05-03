console.log('loaded');
function checkOnclickEvent(param) {
	console.log(param);
}

// Take button which starts the animation

var buttonAnimation = document.getElementById('animation-start');

//Listener for button to add new element div, h1
buttonAnimation.addEventListener('click', function() {
	var animationSection = document.getElementById('animation');

	var newElemRing = document.createElement('div');
	newElemRing.className = "ring";
	newElemRing.style.opacity = 0;

	var newElemQuote = document.createElement('h1');
	newElemQuote.innerHTML = "Keep it secret! Keep it safe!";

	var newElemGandalf = document.createElement('p');
	newElemGandalf.innerHTML = "Gandalf (13.04.3018r TE)";

	// Add animation and quote to HTML section "animation-ring"
	animationSection.appendChild(newElemRing);
	animationSection.appendChild(newElemQuote);
	animationSection.appendChild(newElemGandalf);

	// Function for smooth append for animation
	var steps = 0;
	var timer = setInterval(function() {
		steps++;
		newElemRing.style.opacity = 0.05 * steps;
		if(steps >= 20) {
			clearInterval(timer);
		}
	}, 50);

	checkOnclickEvent('Item added');
	removeButton();
});

// Remove button after Animation starts

function removeButton() {
	var child = document.getElementById('animation-start');
	var parent = document.getElementById('parent');

	parent.removeChild(child);
}