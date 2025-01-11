const audio = new Audio('assets/music/Dangman in the Shadows (2).mp3');
const toggleButton = document.getElementById('toggleButton');
const volumeSlider = document.getElementById('volumeSlider');
const categories = ["colors", "countries", "planets", "cities"];
const catColors = ["purple", "orange", "maroon", "silver"];
const hintText = document.getElementById('hintText');

const randomCategory = Math.floor(Math.random() * categories.length);
category = categories[randomCategory];
hintText.textContent = category;
if (category === "colors") {
    var currentCategory = catColors;
}

const randomWord = Math.floor(Math.random() * currentCategory.length);

console.log(currentCategory[randomWord]);

audio.volume = 0.15;
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