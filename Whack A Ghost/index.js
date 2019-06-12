const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const ghosts = document.querySelectorAll('.ghost');

let sbtn = document.getElementById("sbtn");

let lastHole;
let score = 0;

let timeUp = false;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	// console.log(holes.length);
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	
	if (hole === lastHole) {
		// console.log('Ah nah thats the same one bud');
		return randomHole(holes);
	}
	
	// console.log(hole);
	lastHole = hole;
	
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	// console.log({time, hole});
	
	hole.classList.add('up');
	
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function peepLvl2() {
	const time = randomTime(180, 520);
	const hole = randomHole(holes);
	// console.log({time, hole});
	
	hole.classList.add('up');
	
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	// console.log("lvl1");
	scoreBoard.textContent = 0;
	score = 0;
	
	timeUp = false;
	
	peep();
	
	// Setting a time-out of 10 seconds
	setTimeout(() => {
		timeUp = true;
		
		// Level 2
		if(scoreBoard.textContent >= 10) {
			// console.log("Start Lvl 2");
			sbtn.innerHTML = "Start Lvl 2";
			// level2();
			sbtn.removeEventListener("click", startGame);
			sbtn.addEventListener("click", level2);
			
			alert("You won Level 1! Go ahead and try Level 2.");
		}
	}, 10000);
}

function level2() {
	// console.log("lvl2");
	scoreBoard.textContent = 0;
	score = 0;
	sbtn.innerHTML = "Start!";
	
	timeUp = false;
	
	peepLvl2();
	
	// Setting a time-out of 10 seconds
	setTimeout(() => {
		timeUp = true;
		
		// Back to normal
		if(scoreBoard.textContent >= 8) {
			alert("Ghost Smacking Maniac!!");
		}
		sbtn.removeEventListener("click", level2);
		sbtn.addEventListener("click", startGame);
			
	}, 10000);
}

function bonk(e) {
	//console.log(e.isTrusted);
	// to check if click is not fake i.e. not made from JS
	if(!e.isTrusted) return; // cheater!
	
	score++;
	
	// move down the ghost after smacking the ghost
	this.parentNode.classList.remove('up');
	
	scoreBoard.textContent = score;
}

ghosts.forEach(ghost => ghost.addEventListener('click', bonk));

sbtn.addEventListener("click", startGame);
