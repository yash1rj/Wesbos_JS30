const player = document.querySelector(".player");

const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");

const skipButtons = player.querySelectorAll("[data-skip]");

const ranges = player.querySelectorAll(".player__slider");

const speakerIcon = player.querySelector("#speaker_icon");

const screen_size = player.querySelector('.screenSize');
const controls = player.querySelector('.player__controls'); 
const screenSize_icon = player.querySelector('#screenSize_icon'); 

progressBar.style.flexBasis = `0%`;

function togglePlay() {
	// console.log("Hi");
	/*
	if(video.paused) {
		video.pay();
	}
	else {
		video.pause();
	}
	*/
	// Below is same as above
	const method = video.paused ? "play" : "pause";
	video[method]();
}

function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	// console.log(icon);
	toggle.textContent = icon;
}

function skip() {
	// console.log(this.dataset);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	// console.log(this.name, this.value);
	video[this.name] = this.value;
	// Changing icon according to volume
	(video["volume"] === 0 ? speakerIcon.className = "fas fa-volume-off" : speakerIcon.className = "fas fa-volume-up");
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	// console.log(e);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((skipBtn) => {
	skipBtn.addEventListener("click", skip);
});

ranges.forEach((range) => {
	range.addEventListener("change", handleRangeUpdate);
});

ranges.forEach((range) => {
	range.addEventListener("mousemove", handleRangeUpdate);
});

let mouseDown = false;

progress.addEventListener("click", scrub);

/*
progress.addEventListener("mousemove", (e) => {
	if(mouseDown) {
		scrub(e);
	}
});
*/
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));  // Same as above commented snippet

progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);

// Expand video
function changeScreenSize() {
	if(player.mozRequestFullScreen) {
		// This is how to go into fullscren mode in Firefox
		// Note the "moz" prefix, which is short for Mozilla.
		player.mozRequestFullScreen();
		
		//change icon
		screenSize_icon.className = "fas fa-compress-arrows-alt"; 
		
		/*control panel once fullscreen*/
		video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)'); 
		video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
		controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
		
		screen_size.addEventListener('click', () =>  { 
			if(document.exitFullscreen) {
				document.exitFullscreen();
			}
			else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			}
			screenSize_icon.className = "fas fa-expand-arrows-alt";
		});
	}
	else if(player.webkitRequestFullScreen) {
		// This is how to go into fullscreen mode in Chrome and Safari
		// Both of those browsers are based on the Webkit project, hence the same prefix.
		player.webkitRequestFullScreen();
		
		//change icon 
		screenSize_icon.className = "fas fa-compress-arrows-alt";
		
		/*control panel once fullscreen*/
		video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)'); 
		video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
		controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
		
		screen_size.addEventListener('click', () =>  { 
			if(document.exitFullscreen) {
				document.exitFullscreen();
			}
			else if(document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			screenSize_icon.className = "fas fa-expand-arrows-alt";
		});
	}
}

screen_size.addEventListener("click", changeScreenSize);

/* MUTE button */
const speaker = player.querySelector('.speaker');
const volInput = player.querySelector('input[name="volume"]');

let muted = false;

function mute() {
	if(!muted) {
		video["volume"] = 0;
		volInput.value = 0;
		speakerIcon.className = "fas fa-volume-off";
		muted = true;
	}
	else {
		video["volume"] = 1;
		volInput.value = 1;
		speakerIcon.className = "fas fa-volume-up";
		muted = false;
	}
}

speaker.addEventListener("click", mute);

/*play rate button*/
const rate_icon = player.querySelector('.rate_icon');
const rateInput = player.querySelector('input[name="playbackRate"]');

function changeRate() {
	video["playbackRate"] = 1;
	rateInput.value = 1;
}

rate_icon.addEventListener("click", changeRate);