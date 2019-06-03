const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//unsorted band array
// console.log("unsorted : ", bands);

document.querySelector('#bandsU').innerHTML = `<center style="border-bottom: 1px solid">Un-sorted</center>`;
document.querySelector('#bandsU').innerHTML +=
	bands
		.map(band => `<li>${band}</li>`)
		.join('');

// Function to remove article("a", "an" or "the") from the beginning of band name
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sorting band names after removal of article from the name
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
// console.log("sorted : ", sortedBands);

document.querySelector('#bandsS').innerHTML = `<center style="border-bottom: 1px solid">Sorted</center>`;
document.querySelector('#bandsS').innerHTML +=
	sortedBands
		.map(band => `<li>${band}</li>`)
		.join('');
