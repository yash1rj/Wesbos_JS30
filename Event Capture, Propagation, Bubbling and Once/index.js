const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
	// console.log(this);
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

// document.body.addEventListener("click", logText);

divs.forEach(div => div.addEventListener("click", logText, {
	// we will run the fn. on the way down rather than on way up
	capture: false,
	once: true
}));

button.addEventListener("click", () => {
	console.log("click!!");
}, {
	once: true
});