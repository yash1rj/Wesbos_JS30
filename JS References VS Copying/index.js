// start with strings, numbers and booleans
let str1 = "apple";
let str2 = str1;
console.log("Originally : ",str1, str2);
str2 = "mango";
console.log("After update : ",str1, str2);

let num1 = 11;
let num2 = 22;
console.log("Originally : ",num1, num2);
num2 = 19;
console.log("After update : ",num1, num2);

let bool1 = true;
let bool2 = false;
console.log("Originally : ",bool1, bool2);
bool2 = true;
console.log("After update : ",bool1, bool2);

// Let's say we have an array
const players1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:
const team1 = players1;
console.log("Originally : ",players1, team1);

// however what happens when we update that array?
team1[2] = 'Yash';
console.log("After update : ",players1, team1);

// now here is the problem!
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team2 = players2.slice();
console.log("Originally[slicing] : ",players2, team2);
team2[2] = "Yash";
console.log("After update[slicing] : ",players2, team2);

// one way
// or create a new array and concat the old one in
const players3 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team3 = [].concat(players3);
console.log("Originally[concat] : ",players3, team3);
team3[2] = "Yash";
console.log("After update[concat] : ",players3, team3);

// or use the new ES6 Spread
const players4 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team4 = [...players4];
console.log("Originally[spread] : ",players4, team4);
team4[2] = "Yash";
// now when we update it, the original one isn't changed
console.log("After update[spread] : ",players4, team4);

// or
const players5 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team5 = Array.from(players5);
console.log("Originally[from] : ",players5, team5);
team5[2] = "Yash";
// now when we update it, the original one isn't changed
console.log("After update[from] : ",players5, team5);

// The same thing goes for objects, let's say we have a person object
// with Objects
const person1 = {
  name: 'Yash',
  age: 23
};

// and think we make a copy:
const captain1 = person1;
console.log("Originally[object] : ",person1, captain1);
captain1.name = "Raj";
captain1.number = 50;
console.log("After update[object] : ",person1, captain1);

// how do we take a copy instead?
const person2 = {
  name: 'Yash',
  age: 23
};

// let captain2 = Object.assign({}, person2);
const captain2 = Object.assign({}, person2, { number: 99, age: 12 });
console.log("After update[object-assign] : ",person2, captain2);

// We will hopefully soon see the object ...spread
const captain3 = {...person2};
console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const yash = {
	name: 'Yash',
	age: 23,
	social: {
		github: '@yash1j',
		facebook: 'yash1rj'
	}
};

console.log(yash);

const dev = Object.assign({}, yash);
console.log("Before[deep level] : ",yash,dev);
dev.name = "Raj";  // will not affect original
console.log("After[1 level deep] : ",yash,dev);
dev.social.github = "@cooldev";  // will affect original
console.log("After[2 level deep] : ",yash,dev);

const webdev = {
	name: 'Yash',
	age: 23,
	social: {
		github: '@yash1j',
		facebook: 'yash1rj'
	}
};

const dev2 = JSON.parse(JSON.stringify(webdev));
console.log("Before[jsonParse] : ",webdev,dev2);
dev2.name = "Raj";  // will not affect original
console.log("After[jsonParse] : ",webdev,dev2);
dev2.social.github = "@cooldev";  // will not affect original
console.log("After[jsonParse] : ",webdev,dev2);