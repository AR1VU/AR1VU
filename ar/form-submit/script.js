const startingTime = 4;
let time = startingTime;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let seconds = time % 60;

    countdownEl.innerHTML = `${seconds}`;
    time--;
}