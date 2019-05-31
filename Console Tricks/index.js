const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'hugo', age: 8 }
];

let temp = 0;
function makeGreen() {
	
	const p = document.querySelector('p');
	if (temp === 0) {
		temp = 1;
		console.log(temp);
		p.style.color = '#BADA55';
		p.style.fontSize = '50px';
	}
	else if (temp === 1) {
		console.log(temp);
		p.style.color = "black";
		p.style.fontSize = "16px";
		temp = 0;
	}
	
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am an %s string!', 'important');

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// console.clear();

// Grouping together
dogs.forEach(dog => {
	// console.group(`${dog.name}`);
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// Counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/yash1rj')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});
	
// Table view
console.table(dogs);