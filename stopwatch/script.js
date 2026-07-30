let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;
const display = document.getElementById("display");
function updateDisplay() {
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    const ms = String(milliseconds).padStart(3, "0");
    display.innerText = `${h}:${m}:${s}:${ms}`;
}

function runStopwatch() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(runStopwatch, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector(".lap").innerHTML = "";
    updateDisplay();
});

document.getElementById("laps").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = display.innerText;
    document.querySelector(".lap").appendChild(li);
});

updateDisplay();