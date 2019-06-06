const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	// console.log("x",startX);
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;  // stop the fn from running
	// console.count(isDown);
	// console.log("X",startX);
	e.preventDefault();  // prevents selecting of text,etc.
	const x = e.pageX - slider.offsetLeft;
	// console.log({x, startX});
	const walk = (x - startX) * 3;  // multiplying by 3 for fast scrolling  --> scroll 3 times the amount of pixels moved
	// console.log(walk);
	// slider.scrollLeft = walk;  --> works but it is jerky, here the problem is we are calculating the scrollLeft every single time
	slider.scrollLeft = scrollLeft - walk;
});