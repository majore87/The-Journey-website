var slideIndex = 1;

function showPictures(n) {
	var i,
		slides = document.getElementsByClassName('slides');
		dots = document.getElementsByClassName('dot');
		slidesLength = slides.length;
		dotsLength = dots.length;
		console.log(n);
		console.log(slideIndex);

	if (n > slidesLength) {
		slideIndex = 1;
	}
	else if (n < 1) {
		slideIndex = slidesLength;
	}
	for (i = 0; i < slidesLength; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dotsLength; i++) {
		dots[i].className = dots[i].className.replace("active","");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function addSlides(n) {
	showPictures(slideIndex += n);
}

function currentSlide(n) {
	showPictures(slideIndex = n);
}

showPictures(slideIndex);

