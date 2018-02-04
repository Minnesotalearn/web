var prev = document.querySelector('#gallery .buttons .prev');
var next = document.querySelector('#gallery .buttons .next');
var images = document.querySelectorAll('#gallery .gallery__photos img');
console.log(next);
	var i = 0;

next.onclick = function() {

	images[i].style.display = "none";
	i++;
	
	if (i >= images.length) {
		i = 0;
	}
		images[i].style.display = "block";
}

prev.onclick = function() {

	images[i].style.display = "none";
	i--;

	if (i < 0) {
		i = images.length - 1;
	}
		images[i].style.display = "block";
}