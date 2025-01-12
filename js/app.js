const categories = {
    colors: ["PURPLE", "ORANGE", "MAROON", "SILVER"],
    countries: ["FRANCE", "JAPAN", "BRAZIL", "CANADA"],
    planets: ["MARS", "VENUS", "JUPITER", "SATURN"],
    cities: ["PARIS", "TOKYO", "LONDON", "TORONTO"],
    fruits: ["APPLE", "BANANA", "ORANGE", "GRAPE"],
    animals: ["DOG", "CAT", "ELEPHANT", "LION"]
};


// RANDOM CATEGORY_____________________________________________________
let hintText = document.getElementById('hintText');
const randomCategoryKey = Object.keys(categories)[Math.floor(Math.random() * Object.keys(categories).length)];
const currentCategory = categories[randomCategoryKey];
hintText.textContent = randomCategoryKey;

// RANDOM WORD_________________________________________________________
const currentWord = currentCategory[Math.floor(Math.random() * currentCategory.length)];
console.log("Random word:", currentWord);

// COUNT LETTERS_______________________________________________________
function countLetters(currentWord) {
    return currentWord.length;
}
function scanForLetters(currentWord, lettersToScan) {
    let foundLetters = [];
    for (const letter of currentWord) {
        if (lettersToScan.includes(letter)) {
            foundLetters.push(letter);
        }
    }
    return foundLetters;
}

// RETURN LETTERS COUNTED_____________________________________________
const letterCount = countLetters(currentWord);
console.log("Number of letters:", letterCount);

// SELECT LETTER_____________________________________________________
const letterBtn = document.getElementsByClassName('letter');
const keyboard = Array.from(letterBtn);
let letterSelected = "";
keyboard.forEach(letterBtn => {
    letterBtn.addEventListener('click', (e) => {
        letterSelected = e.target.innerHTML.slice(0, 1);
        console.log("Letter selected:", letterSelected);
    });
});

// SCAN FOR LETTER___________________________________________________
const selectBtn = document.getElementById('selectBtn');
let letterToSearch = "";
selectBtn.addEventListener('click', (e) => {
    let letterToSearch = letterSelected;
    const foundLetter = scanForLetters(currentWord, letterToSearch);
    console.log("Letter searched:", letterToSearch);
    console.log("Letter found:", foundLetter);
});


// BLANK WORD_________________________________________________________
let wordDisplay = document.getElementById('wordDisplay');
function createBlankedWord(currentWord) {
    return "_ ".repeat(currentWord.length);
}
const blankedWord = createBlankedWord(currentWord);
console.log("Blanked word:", blankedWord);
wordDisplay.textContent = blankedWord;







// MUSIC STUFF
// const audio = new Audio('assets/music/Dangman in the Shadows (2).mp3');
// const toggleButton = document.getElementById('toggleButton');
// const volumeSlider = document.getElementById('volumeSlider');

// audio.volume = 0.15;
// volumeSlider.value = 0.5;

// toggleButton.addEventListener('click', () => {
//     if (audio.paused) {
//         audio.play();
//         toggleButton.textContent = "Pause";
//     } else {
//         audio.pause();
//         toggleButton.textContent = "Play";
//     }
// });

// volumeSlider.addEventListener('input', () => {
//     audio.volume = volumeSlider.value;
// });