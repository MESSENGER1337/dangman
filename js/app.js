const categories = {
    colors: [
        "PURPLE", "ORANGE", "MAROON", "SILVER", 
        "RED", "BLUE", "GREEN", "YELLOW", 
        "PINK", "BLACK", "WHITE", "GOLD", 
        "CYAN", "MAGENTA", "BROWN", "BEIGE", 
        "AQUA", "LAVENDER", "NAVY", "TEAL"
    ],
    countries: [
        "FRANCE", "JAPAN", "BRAZIL", "CANADA", 
        "GERMANY", "INDIA", "EGYPT", "AUSTRALIA", 
        "CHINA", "SPAIN", "ITALY", "MEXICO", 
        "RUSSIA", "SOUTH AFRICA", "ARGENTINA", "NORWAY"
    ],
    planets: [
        "MARS", "VENUS", "JUPITER", "SATURN", 
        "MERCURY", "URANUS", "NEPTUNE", "PLUTO", 
        "EARTH"
    ],
    cities: [
        "PARIS", "TOKYO", "LONDON", "TORONTO", 
        "NEW YORK", "LOS ANGELES", "DUBAI", "ROME", 
        "BERLIN", "SYDNEY", "CAIRO", "MOSCOW", 
        "BEIJING", "RIO DE JANEIRO", "SEOUL", "MUMBAI"
    ],
    fruits: [
        "APPLE", "BANANA", "ORANGE", "GRAPE", 
        "MANGO", "PEACH", "KIWI", "PINEAPPLE", 
        "STRAWBERRY", "WATERMELON", "BLUEBERRY", "CHERRY", 
        "PAPAYA", "PLUM", "LEMON", "LIME"
    ],
    animals: [
        "DOG", "CAT", "ELEPHANT", "LION", 
        "TIGER", "PENGUIN", "SNAKE", "ZEBRA", 
        "GIRAFFE", "RHINO", "KANGAROO", "BEAR", 
        "MONKEY", "DOLPHIN", "CROCODILE", "WOLF"
    ],
    shapes: [
        "CIRCLE", "SQUARE", "TRIANGLE", "HEXAGON", 
        "RECTANGLE", "PENTAGON", "OCTAGON", "RHOMBUS"
    ],
    vehicles: [
        "CAR", "BOAT", "PLANE", "MOTORCYCLE", 
        "BICYCLE", "BUS", "TRUCK", "HELICOPTER", 
        "TRAIN", "SUBMARINE", "SCOOTER", "TANK"
    ],
    instruments: [
        "GUITAR", "PIANO", "DRUM", "VIOLIN", 
        "TRUMPET", "FLUTE", "SAXOPHONE", "HARP", 
        "CELLO", "TROMBONE", "CLARINET", "BONGO"
    ],
    professions: [
        "DOCTOR", "TEACHER", "CHEF", "PILOT", 
        "ENGINEER", "LAWYER", "ARTIST", "NURSE", 
        "SCIENTIST", "WRITER", "POLICE OFFICER", "FIRE FIGHTER"
    ],
    sports: [
        "SOCCER", "TENNIS", "BASEBALL", "CRICKET", 
        "BASKETBALL", "GOLF", "HOCKEY", "RUGBY", 
        "SWIMMING", "BOXING", "CYCLING", "SKIING", 
        "SURFING", "SKATEBOARDING", "ARCHERY", "WRESTLING"
    ],
    flowers: [
        "ROSE", "TULIP", "LILY", "ORCHID", 
        "DAISY", "SUNFLOWER", "JASMINE", "LOTUS", 
        "HIBISCUS", "LAVENDER", "VIOLET", "DAFFODIL"
    ],
    mythicalCreatures: [
        "DRAGON", "UNICORN", "PHOENIX", "CENTAUR", 
        "MERMAID", "GRIFFIN", "MINOTAUR", "PEGASUS", 
        "CHIMERA", "HYDRA", "FAIRY", "GNOME"
    ],
    emotions: [
        "HAPPY", "SAD", "ANGRY", "EXCITED", 
        "SCARED", "CONFUSED", "BORED", "SURPRISED", 
        "PROUD", "JEALOUS", "RELIEVED", "NERVOUS"
    ],
    elements: [
        "FIRE", "WATER", "EARTH", "AIR", 
        "LIGHTNING", "ICE", "METAL", "WOOD"
    ],
    beverages: [
        "COFFEE", "TEA", "JUICE", "SODA", 
        "WATER", "MILK", "WINE", "BEER", 
        "LEMONADE", "MOCKTAIL", "SMOOTHIE", "HOT CHOCOLATE"
    ]
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
        if (letter === " ") {
            return " "; // Return space if the character is a space
        } else if (guessedLetters.has(letter)) {
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
function gameWin() {
    console.log("YOU WIN!");
    updateWordDisplay();
    hintText.textContent = "YOU WIN!!!";

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

    if (wordDisplay.textContent === currentWord) {
        gameWin();
    }

});


// LOSE
// if wrong then next pic
// if man pic = last pic

// KEY CHANGE
// one at a time - if any letter is clicked then unclick, then click new
// select refresh - if letterClicked === foundLetter change to clicpPermenant

// NEW MAN
// on load, refresh, win and lose - return a new man