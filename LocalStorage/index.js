const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const reset = document.querySelector('[name="reset"]');

let items = JSON.parse(localStorage.getItem("items")) || [];

const inputItem = document.querySelector('[name="item"]'); //created because this.reset was not working

function addItem(e) {
	e.preventDefault(); // keeps the page from refreshing - keeps info stored in console
	// console.log("Hello");
	const text = (this.querySelector("[name=item")).value;
	//can use 'document.querySelector()', but use instead, 'this', which is === to the form, because dont want to select at the global level when we can narrow down our search 
	//'text' will give up an input and inputs have a value method.
	const item = {
		// text: text, == can use shorthand for this aspect of the object (ES6)
		text,
		done: false
	};
	items.push(item); // every time we push an item to the array, 
	populateList(items, itemsList); // this function will run which will create a list item and populate list.
	localStorage.setItem('items', JSON.stringify(items)); // set the 'items' array to local storage.first param is the key. the second is the object that needs to converted into a string so it is readable
	//this.reset();
	inputItem.value = ''; // this.reset() ...doesn't work 'type error: not a function'??//clear the input. Remember 'this' is the form element and form elements have a reset method.
	// console.log(item);
	// console.table(items);
}

function populateList(plates = [], platesList) { // set the array parameter equal to an empty array(items/tasks), in case you forget to pass something(default parameter) 
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
				<label for="item${i}">${plate.text}</label>
			</li>
		`; // with the 'id' for the input and the 'for' for the label being exactly the same, you can click the label and the checkbox will check
	}).join(""); // convert the array into a string
}

function toggleDone(e) {
	console.log(e.target);
	if (!e.target.matches('input')) return; // skip this unless it's an input
	const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function resetList() {
	//one way
	items = []; //change const items =, to let items = 
	localStorage.setItem('items', JSON.stringify(items));  
	populateList(items, itemsList);
	localStorage.clear(); 
	//other way, 
		//keep const items = instead of let
	//localStorage.clear(); 
	//window.location.reload();
}

addItems.addEventListener("submit", addItem);

itemsList.addEventListener('click', toggleDone); // event delegation = the 'ul' element will be on the page at the time the event is triggered, which in turn pass the event on to one of its child elements.

reset.addEventListener('click', resetList)

populateList(items, itemsList);