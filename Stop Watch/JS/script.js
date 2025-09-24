const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');


let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById('displayTime');
let timer = null;

const stopWatch = () => {
  seconds++
  if(seconds == 60){
    seconds = 0;
    minutes++
    if(minutes == 60){
    minutes = 0;
    hours++
  }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerText = `${h}:${m}:${s}`;

}

const watchStart = () => {
  if (timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}


const watchStop = () => {
  clearInterval(timer);
};

const watchReset = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerText = '00:00:00';
};

startBtn.addEventListener('click', () => {
  watchStart();
});

stopBtn.addEventListener('click', () => {
  watchStop();
});

resetBtn.addEventListener('click', () => {
  watchReset();
});