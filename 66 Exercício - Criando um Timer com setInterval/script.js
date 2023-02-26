function createSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const clock = document.querySelector(".clock");
const startBtn = document.querySelector(".btn-resume");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
let seconds = 0;
let timer;

function startClock() {
  clearInterval(timer);
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = createSeconds(seconds);
  }, 1000);
}

startBtn.addEventListener("click", function () {
  startClock();
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
  clock.innerHTML = "00:00:00";
  clearInterval(timer);
  seconds = 0;
});
