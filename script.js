let totalTime = 60; 
let timeLeft = totalTime;
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
let interval = null;
function updateDisplay() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    timer.innerText = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    progress.style.transform = `scaleX(${timeLeft / totalTime})`;
}
updateDisplay();
document.getElementById("start").addEventListener("click", () => {
    if (interval) return;
    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    timeLeft = totalTime;
    updateDisplay();
});