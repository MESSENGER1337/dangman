const audio = new Audio('assets/music/Dangman in the Shadows (2).mp3');
const toggleButton = document.getElementById('toggleButton');
const volumeSlider = document.getElementById('volumeSlider');

audio.volume = 0.5;
volumeSlider.value = 0.5;

toggleButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = "Pause"; 
  } else {
    audio.pause();
    toggleButton.textContent = "Play"; 
  }
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});