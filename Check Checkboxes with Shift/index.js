const chkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
// console.log(chkboxes);

let lastChecked;

function handleCheck(e) {
	// console.log(e);
	
	let inBetween = false;
	// Check if shift key is pressed	
	if(e.shiftKey && this.checked) {
		chkboxes.forEach((checkBox) => {
			console.log(checkBox);
			if(checkBox === this || checkBox === lastChecked) {
				inBetween = !inBetween;
				// console.log("STarting to check in between -> ", inBetween);
			}
			
			if(inBetween) {
				// console.log("yes, checked");
				checkBox.checked = true;
			}
		});
	}
	
	lastChecked = this;
}

chkboxes.forEach((chkbox) => {
	chkbox.addEventListener("click", handleCheck);
});