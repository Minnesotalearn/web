var first = document.querySelectorAll('.nav__item .drop-menu');
var second = document.querySelectorAll('.nav-sub-link');
console.log(first);

first.onmouseover = function() {
	second.style.color = "#fff";
}
