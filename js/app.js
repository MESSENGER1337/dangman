const dangmanSets = [
    [
        'assets/artwork/set-01/dangman-01-01.png',
        'assets/artwork/set-01/dangman-01-02.png',
        'assets/artwork/set-01/dangman-01-03.png',
        'assets/artwork/set-01/dangman-01-04.png',
        'assets/artwork/set-01/dangman-01-05.png',
        'assets/artwork/set-01/dangman-01-06.png',
        'assets/artwork/set-01/dangman-01-07.png',
        'assets/artwork/set-01/dangman-01-08.png'
    ],
    [
        'assets/artwork/set-02/dangman-02-01.png',
        'assets/artwork/set-02/dangman-02-02.png',
        'assets/artwork/set-02/dangman-02-03.png',
        'assets/artwork/set-02/dangman-02-04.png',
        'assets/artwork/set-02/dangman-02-05.png',
        'assets/artwork/set-02/dangman-02-06.png',
        'assets/artwork/set-02/dangman-02-07.png',
        'assets/artwork/set-02/dangman-02-08.png'
    ],
    [
        'assets/artwork/set-03/dangman-03-01.png',
        'assets/artwork/set-03/dangman-03-02.png',
        'assets/artwork/set-03/dangman-03-03.png',
        'assets/artwork/set-03/dangman-03-04.png',
        'assets/artwork/set-03/dangman-03-05.png',
        'assets/artwork/set-03/dangman-03-06.png',
        'assets/artwork/set-03/dangman-03-07.png',
        'assets/artwork/set-03/dangman-03-08.png'
    ],
    [
        'assets/artwork/set-04/dangman-04-01.png',
        'assets/artwork/set-04/dangman-04-02.png',
        'assets/artwork/set-04/dangman-04-03.png',
        'assets/artwork/set-04/dangman-04-04.png',
        'assets/artwork/set-04/dangman-04-05.png',
        'assets/artwork/set-04/dangman-04-06.png',
        'assets/artwork/set-04/dangman-04-07.png',
        'assets/artwork/set-04/dangman-04-08.png'
    ]
];

let dangmanImages = [];

function selectRandomDangmanSet() {
    const randomIndex = Math.floor(Math.random() * dangmanSets.length);
    dangmanImages = dangmanSets[randomIndex];

    // Dynamically set the initial image
    const currentImage = document.getElementById('dangmanPic');
    currentImage.src = dangmanImages[0];
}


selectRandomDangmanSet(); // Call this when the game starts



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
    mythical: [
        "DRAGON", "UNICORN", "PHOENIX", "CENTAUR",
        "MERMAID", "GRIFFIN", "MINOTAUR", "PEGASUS",
        "FAIRY", "GNOME"
    ],
    emotions: [
        "HAPPY", "SAD", "ANGRY", "EXCITED",
        "SCARED", "CONFUSED", "BORED", "SURPRISED",
        "PROUD", "JEALOUS", "RELIEVED", "NERVOUS"
    ],
    beverages: [
        "COFFEE", "TEA", "JUICE", "SODA",
        "WATER", "MILK", "WINE", "BEER",
        "LEMONADE", "SMOOTHIE", "HOT CHOCOLATE"
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
        // Remove 'clicked' class from all buttons
        keyboard.forEach(btn => btn.classList.remove('clicked'));

        // Add 'clicked' class to the clicked button
        letterBtn.classList.add('clicked');

        // Get the letter from the button
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

    selectBtn.classList.add('hidden');
    newGameBtn.classList.remove('hidden');
}

// NEW GAME_____________________________________________________________
newGameBtn.addEventListener('click', () => {
    location.reload();
})

updateWordDisplay();

// LOSE______________________________________________________________
let currentStage = 0;

function updateDangmanImage() {
    const currentImage = document.getElementById('dangmanPic');
    currentImage.src = dangmanImages[currentStage];
}

function gameOver() {
    console.log("Game Over!");
    hintText.textContent = "GAME OVER";

    guessedLetters = new Set([...currentWord]);  // Add all letters of the word to guessedLetters
    updateWordDisplay(); // Update the word display to show the entire word

    selectBtn.classList.add('hidden');
    newGameBtn.classList.remove('hidden');
}

// SCAN FOR LETTER___________________________________________________
const selectBtn = document.getElementById('selectBtn');
selectBtn.addEventListener('click', () => {
    // Get the clicked letter button from the previously selected letter
    const clickedLetterBtn = keyboard.find(btn => btn.innerHTML === letterSelected);

    // If the button is marked as 'used', do not proceed
    if (clickedLetterBtn.classList.contains('used')) {
        return; // Skip the rest of the function if the button is 'used'
    }

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

        if (currentStage === dangmanImages.length - 1) {
            gameOver();
        }
    }

    if (clickedLetterBtn) {
        clickedLetterBtn.classList.add('used');
    }
});

// add timed mode????