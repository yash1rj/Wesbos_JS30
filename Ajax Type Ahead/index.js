const endpoint = "./cities.json";

const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data))
	
function findMatches(word2Match, cities) {
	return cities.filter(place => {
		const regx = new RegExp(word2Match, "gi");
		return place.city.match(regx) || place.state.match(regx);
	});
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function displayMatches() {
	// console.log(this.value);
	const matchArr = findMatches(this.value, cities);
	// console.log(matchArr);
	const addMatch2Html = matchArr.map(place => {
		const regx = new RegExp(this.value, "gi");
		const cityName = place.city.replace(regx, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regx, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${formatNumber(place.population)}</span>
			</li>
		`;
	}).join("");
	suggestions.innerHTML = addMatch2Html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
