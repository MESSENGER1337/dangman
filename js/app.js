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
console.log("Random Category:", randomCategoryKey);
hintText.textContent = randomCategoryKey;

// RANDOM WORD_________________________________________________________
const currentWord = currentCategory[Math.floor(Math.random() * currentCategory.length)];
console.log("Random Word:", currentWord);

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
    }).join("");

}

function updateWordDisplay() {
    const blankedWord = createBlankedWord(currentWord);
    wordDisplay.textContent = blankedWord;
    console.log("Word:", currentWord);
    console.log("Guess:", wordDisplay.textContent);
}

// WIN GAME__________________________________________________________
const newGameBtn = document.getElementById('newGameBtn');
function gameWin(){
    console.log("YOU WIN!");
    updateWordDisplay();
    hintText.textContent="YOU WIN!!!";
    
    selectBtn.classList.add('hidden');  // Hide SELECT button
    newGameBtn.classList.remove('hidden');  // Show NEW GAME button
}

// NEW GAME_____________________________________________________________
newGameBtn.addEventListener('click', () => {
    location.reload();
})



updateWordDisplay();


// SCAN FOR LETTER___________________________________________________
const selectBtn = document.getElementById('selectBtn');
selectBtn.addEventListener('click', (e) => {
    const letterToSearch = letterSelected;
    const foundLetter = scanForLetters(currentWord, letterToSearch);
    if (foundLetter) {
        guessedLetters.add(letterToSearch);
    }
    console.log("Letter Searched:", letterToSearch);
    console.log("Letter Found:", foundLetter.toString());

    updateWordDisplay();

    if (wordDisplay.textContent === currentWord){
        gameWin();
    }

});





// WIN          
// if wordDisplay.textContent === currentWord or something






// LOSE
// if wrong then next pic
// if man pic = last pic

// KEY CHANGE
// one at a time - if any letter is clicked then unclick, then click new
// select refresh - if letterClicked === foundLetter change to clicpPermenant

// NEW MAN
// on load, refresh, win and lose - return a new man