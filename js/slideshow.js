// Slider counts from: 1
var slideIndex = 1;

function showPictures(n) {
	var i,
		slides = document.getElementsByClassName('slides');
		dots = document.getElementsByClassName('dot');
		slidesLength = slides.length;
		dotsLength = dots.length;

	// If user click next after last slide, slideIndex will be 1
	// if n < 1 there will be reversal situation
	if (n > slidesLength) {
		slideIndex = 1;
	}
	else if (n < 1) {
		slideIndex = slidesLength;
	}

	// sets all the images display none
	for (i = 0; i < slidesLength; i++) {
		slides[i].style.display = "none";
	}

	// for which delete 'none' display
	for (i = 0; i < dotsLength; i++) {
		dots[i].className = dots[i].className.replace("active","");
	}

	// gives block or active to elements
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function addSlides(n) {
	showPictures(slideIndex += n);
}

// sets actual slide
function currentSlide(n) {
	showPictures(slideIndex = n);
}

// start function with default value of slideIndex 1
showPictures(slideIndex);

