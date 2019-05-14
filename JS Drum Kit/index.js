function playSound(e) {
    // console.log(e.keyCode);
    // console.log(`audio[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);

    if (!audio) { // stop the function from running alltogether
        return false;
    }

    audio.currentTime = 0; // rewind to the start
    audio.play();

    key.classList.add("playing");
    // in jQuery -> key.addClass("playing");
}

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== "transform") { // skip it if it's not a transform
        return false;
    }
    // console.log(this);
    this.classList.remove("playing");
}

window.addEventListener('keydown', playSound);

let keys = document.querySelectorAll(".key");
// console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));