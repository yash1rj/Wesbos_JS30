const hero = document.querySelector('.hero');
const txt = hero.querySelector('h1');

const walk = 500; // 500px

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	// console.log(width, height);
	
	let { offsetX: x, offsetY: y } = e;
	// console.log(x, y);
	
	// console.log(this, e.target);
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	
	// console.log(x, y);
	
	// if walk is 500 we will transition from -250 to 250
	const xWalk = Math.round((x / width * walk) - (walk / 2));
	// console.log(xWalk);
	
	const yWalk = Math.round((y / height * walk) - (walk / 2));
	// console.log(yWalk);
	
	txt.style.textShadow = `
	${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
	${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
	${yWalk * -1}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
	${yWalk}px ${xWalk * -1}px 0 rgba(0,0,255,0.7)
	`;
}

hero.addEventListener('mousemove', shadow);