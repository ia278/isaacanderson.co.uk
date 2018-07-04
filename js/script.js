// Constants
const hamburger = document.querySelector(".hamburger");
const options = document.querySelector(".header-options");

// Functions
const actionOnWindowResize = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth >= 668) {
		options.style.display = "block";
		return;
	}
	options.style.display = "none";
	hamburger.classList.remove("change");
};
const animateHamburger = () => {
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