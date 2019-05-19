const secondsHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

const allHands = document.querySelectorAll('.hand');

function setDate() {
    // console.log("Hi");
    const now = new Date();
    // console.log(now);

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    // console.log(secondsDegree);
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins/60) * 360) + 90;
    // console.log(minsDegree);
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    const hr = now.getHours();
    const hrDegree = ((hr/12) * 360) + 90;
    // console.log(hrDegree);
    hrHand.style.transform = `rotate(${hrDegree}deg)`;

    // The below code gets rid of the little warp the hands do 
    // once seconds hits 60.
    if(secondsDegree === 90) {
        allHands.forEach(hand => hand.style.transition = 'none');
        // remove the all 0.05s transition
    }
    else {
        allHands.forEach(hand => hand.style.transition = '');
        // using '' removes the inline style and reverts back to the stylesheet
    }
}

setInterval(setDate, 1000);

setDate();