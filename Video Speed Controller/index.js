const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
	// console.log("handling mouse move", e);
	const y = e.pageY - this.offsetTop;
	// console.log(y);
	const percent = y / this.offsetHeight;
	// console.log(percent);
	const min = 0.4;
	const max = 4;
	const height = Math.round(percent * 100) + "%";
	// console.log(height);
	const playbackRate = percent * (max - min) + min;
	bar.style.height = height;
	bar.textContent = playbackRate.toFixed(2) + 'x';
	video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);