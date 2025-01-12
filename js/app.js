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

// GET LETTERS_______________________________________________________
function scanForLetters(currentWord, lettersToScan) {
    let foundLetters = [];
    for (const letter of currentWord) {
        if (lettersToScan.includes(letter)) {
            foundLetters.push(letter);
        }
    }
    return foundLetters;
}

// SELECT LETTER_____________________________________________________
const letterBtn = document.getElementsByClassName('letter');
const keyboard = Array.from(letterBtn);
let letterSelected = "";
keyboard.forEach(letterBtn => {
    letterBtn.addEventListener('click', (e) => {
        // letterBtn.classList.toggle('clicked');
        letterSelected = e.target.innerHTML.slice(0, 1);
        console.log("Letter selected:", letterSelected);
    });
});

// BLANK WORD_________________________________________________________
let wordDisplay = document.getElementById('wordDisplay');

let guessedLetters = new Set();

function createBlankedWord(currentWord) {
    return currentWord.split("").map((letter) => {
        if (guessedLetters.has(letter)) {
            return letter;
        } else {
            return "_";
        }
    }).join(" ");
}

function updateWordDisplay() {
    const blankedWord = createBlankedWord(currentWord);
    wordDisplay.textContent = blankedWord;
}

updateWordDisplay();


// SCAN FOR LETTER___________________________________________________
const selectBtn = document.getElementById('selectBtn');
selectBtn.addEventListener('click', (e) => {
    const letterToSearch = letterSelected;
    const foundLetter = scanForLetters(currentWord, letterToSearch);
    if (foundLetter) {
        guessedLetters.add(letterToSearch);
    }
    console.log("Letter searched:", letterToSearch);
    console.log("Letter found:", foundLetter);


    updateWordDisplay();
});