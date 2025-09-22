let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let playBtn = document.getElementById('playBtn');
let totalDuration = document.getElementById('total-duration');
let currDuration = document.getElementById('curr-duration');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

const playPause = () => {
  if(ctrlIcon.classList.contains('fa-pause')){
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  } else{
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
  }
};

if(song.play()){
  setInterval(() => {
  progress.value = song.currentTime;
    totalDuration.innerText = (song.currentTime/60).toFixed(2);
    currDuration.innerHTML = `${((song.currentTime-song.duration)/60).toFixed(2)}`;
  }, 500);
};

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('fa-pause');
  ctrlIcon.classList.remove('fa-play');
}

playBtn.addEventListener('click', (e) => {
  playPause();
  e.preventDefault();
});