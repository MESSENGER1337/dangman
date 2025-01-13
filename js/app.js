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


// LOSE______________________________________________________________
const dangmanImages = [
    'assets/artwork/1/dangman-01-01.png', 
    'assets/artwork/1/dangman-01-02.png', 
    'assets/artwork/1/dangman-01-03.png', 
    'assets/artwork/1/dangman-01-04.png', 
    'assets/artwork/1/dangman-01-05.png', 
    'assets/artwork/1/dangman-01-06.png', 
    'assets/artwork/1/dangman-01-07.png', 
    'assets/artwork/1/dangman-01-08.png'
];

let currentStage = 0;

function updateDangmanImage() {
    const currentImage = document.getElementById('dangmanPic');
    currentImage.src = dangmanImages[currentStage];
}

function gameOver() {
    console.log("Game Over! You've lost.");
    // You can expand this to show a game over screen or restart option
}


// SCAN FOR LETTER___________________________________________________
const selectBtn = document.getElementById('selectBtn');
selectBtn.addEventListener('click', () => {
    const letterToSearch = letterSelected;
    const foundLetter = scanForLetters(currentWord, letterToSearch);

    if (foundLetter.length > 0) {
        // If the letter is found, add it to guessed letters
        guessedLetters.add(letterToSearch);
    } else {
        // If the letter is not found, increment the stage
        currentStage++;
    }

    console.log("Letter Searched:", letterToSearch);
    console.log("Letter Found:", foundLetter.toString());

    updateWordDisplay();

    if (wordDisplay.textContent === currentWord) {
        gameWin();
    } else {
        updateDangmanImage();

        if (currentStage === dangmanImages.length-1) {
            gameOver();
        }
    }
});













// add timed mode????











// KEY CHANGE
// one at a time - if any letter is clicked then unclick, then click new
// select refresh - if letterClicked === foundLetter change to clicpPermenant

// NEW MAN
// on load, refresh, win and lose - return a new man