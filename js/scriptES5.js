"use strict";

// Constants
var hamburger = document.querySelector(".hamburger");
var options = document.querySelector(".header-options");

// Functions
var actionOnWindowResize = function actionOnWindowResize() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 668) {
		options.style.display = "block";
		return;
	}
	options.style.display = "none";
	hamburger.classList.remove("change");
};
var animateHamburger = function animateHamburger() {
	hamburger.classList.toggle("change");
	if (hamburger.classList.contains("change")) {
		options.style.display = "block";
		return;
	}
	options.style.display = "none";
	actionOnWindowResize();
};

// Event listeners
hamburger.addEventListener("click", animateHamburger);
window.addEventListener("resize", actionOnWindowResize);