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
    ],
    [
        'assets/artwork/set-05/dangman-05-01.png',
        'assets/artwork/set-05/dangman-05-02.png',
        'assets/artwork/set-05/dangman-05-03.png',
        'assets/artwork/set-05/dangman-05-04.png',
        'assets/artwork/set-05/dangman-05-05.png',
        'assets/artwork/set-05/dangman-05-06.png',
        'assets/artwork/set-05/dangman-05-07.png',
        'assets/artwork/set-05/dangman-05-08.png'
    ],
    [
        'assets/artwork/set-06/dangman-06-01.png',
        'assets/artwork/set-06/dangman-06-02.png',
        'assets/artwork/set-06/dangman-06-03.png',
        'assets/artwork/set-06/dangman-06-04.png',
        'assets/artwork/set-06/dangman-06-05.png',
        'assets/artwork/set-06/dangman-06-06.png',
        'assets/artwork/set-06/dangman-06-07.png',
        'assets/artwork/set-06/dangman-06-08.png'
    ]
];

const categories = {
    colors: [
        "PURPLE", "ORANGE", "MAROON",
        "RED", "BLUE", "GREEN", "YELLOW",
        "PINK", "BLACK", "WHITE", "GOLD",
        "CYAN", "BROWN", "TEAL"
    ],
    countries: [
        "FRANCE", "JAPAN", "BRAZIL", "CANADA",
        "GERMANY", "INDIA", "EGYPT", "AUSTRALIA",
        "CHINA", "SPAIN", "ITALY", "MEXICO",
        "RUSSIA", "ARGENTINA", "NORWAY"
    ],
    planets: [
        "MARS", "VENUS", "JUPITER", "SATURN",
        "MERCURY", "URANUS", "NEPTUNE", "PLUTO",
        "EARTH"
    ],
    cities: [
        "PARIS", "TOKYO", "LONDON", "TORONTO",
        "NEW YORK", "LOS ANGELES", "ROME",
        "BERLIN", "SYDNEY", "MOSCOW",
        "BEIJING"
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
        "RECTANGLE", "PENTAGON", "OCTAGON"
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
        "SCIENTIST", "POLICE OFFICER", "FIRE FIGHTER"
    ],
    sports: [
        "SOCCER", "TENNIS", "BASEBALL", "CRICKET",
        "BASKETBALL", "GOLF", "HOCKEY", "RUGBY",
        "SWIMMING", "BOXING", "SKIING", "SURFING", "WRESTLING"
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
    ],
    superheroes: [
        "SUPERMAN", "BATMAN", "SPIDERMAN", "IRON MAN",
        "WONDER WOMAN", "THOR", "CAPTAIN AMERICA", "HULK",
        "BLACK PANTHER", "FLASH", "AQUAMAN", "GREEN LANTERN",
        "WOLVERINE"
    ],
    super_villains: [
        "JOKER", "LEX LUTHOR", "THANOS", "LOKI",
        "GREEN GOBLIN", "VENOM", "MAGNETO", "DOCTOR DOOM",
        "CATWOMAN", "HARLEY QUINN", "ULTRON", "RED SKULL"
    ],
    movie_heroes: [
        "INDIANA JONES", "JAMES BOND", "JOHN WICK", "SARAH CONNOR",
        "RIPLEY", "RAMBO", "MAD MAX", "JASON BOURNE", "ROBOCOP"    
    ],
    movies: [
        "THE GODFATHER", "FORREST GUMP", "STAR WARS", "TITANIC", 
        "JURASSIC PARK", "THE MATRIX", "CASABLANCA", "GLADIATOR"
    ],
    musicians: [
        "ELVIS PRESLEY", "MICHAEL JACKSON", "BEYONCE", "FREDDIE MERCURY",
        "PRINCE", "TAYLOR SWIFT", "JOHN LENNON", "MADONNA",
        "WHITNEY HOUSTON", "BOB DYLAN", "JIMI HENDRIX", "DAVID BOWIE",
        "FRANK SINATRA", "KURT COBAIN", "ADELE", "ELTON JOHN"
    ],
    // bands: [
    //     "THE BEATLES", "QUEEN", "ROLLING STONES", "NIRVANA",
    //     "METALLICA", "PINK FLOYD", "THE EAGLES",
    //     "COLDPLAY", "GREEN DAY", "LED ZEPPELIN", "FOO FIGHTERS"
    // ],
    // classical_composers: [
    //     "BEETHOVEN", "MOZART", "BACH", "CHOPIN",
    //     "TCHAIKOVSKY", "VIVALDI", "BRAHMS", "SCHUBERT",
    //     "HANDEL", "WAGNER", "DEBUSSY", "LISZT",
    //     "MAHLER", "ROSSINI", "RACHMANINOFF", "STRAVINSKY"
    // ],
    videogame_characters: [
        "MARIO", "LUIGI", "SONIC", "LINK",
        "ZELDA", "LARA CROFT", "KRATOS",
        "DONKEY KONG", "PAC MAN", "MEGA MAN", "SOLID SNAKE",
        "KIRBY", "CLOUD"
    ],
    fairy_tales: [
        "CINDERELLA", "SNOW WHITE", "SLEEPING BEAUTY", "RAPUNZEL",
        "PETER PAN", "PINOCCHIO", "RED RIDING HOOD", "HANSEL AND GRETEL",
        "RUMPELSTILTSKIN", "GOLDILOCKS"
    ],
    fantasy_creatures: [
        "DRAGON", "UNICORN", "PHOENIX", "GRIFFIN",
        "CENTAUR", "MERMAID", "FAIRY", "GNOME",
        "TROLL", "GOBLIN", "ORC", "WEREWOLF",
        "VAMPIRE", "ELF", "DWARF", "GIANT"
    ]
};

let guessedLetters = new Set();
let currentStage = 0;
let hintText = document.getElementById('hintText');

function getCategory(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function newGame() {

    guessedLetters = new Set();
    currentStage = 0;

    selectRandomDangmanSet();
    updateDangmanImage();
    randomCategoryKey = getCategory(Object.keys(categories));
    currentCategory = categories[randomCategoryKey];
    currentWord = getCategory(currentCategory);
    console.log("Random Category:", randomCategoryKey);
    console.log("Random Word:", currentWord);

    hintText.textContent = randomCategoryKey;

    updateWordDisplay();
    keyboard.forEach(btn => btn.classList.remove('clicked', 'used'));

    newGameBtn.classList.add('hidden');
    selectBtn.classList.remove('hidden');

    console.log("New Game Started!");
}

let dangmanImages = [];

function selectRandomDangmanSet() {
    const randomIndex = Math.floor(Math.random() * dangmanSets.length);
    dangmanImages = dangmanSets[randomIndex];

    // Dynamically set the initial image
    const currentImage = document.getElementById('dangmanPic');
    currentImage.src = dangmanImages[0];
}

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
        document.querySelectorAll('.clicked').forEach(btn => btn.classList.remove('clicked'));
        letterBtn.classList.add('clicked');
        letterSelected = e.target.innerHTML.slice(0, 1);
    });
});


// BLANK WORD_________________________________________________________
let wordDisplay = document.getElementById('wordDisplay');

function createBlankedWord(currentWord) {
    return currentWord.split("").map((letter) => {
        if (letter === " ") {
            // Return space if the character is a space
            return " ";
        } else if (guessedLetters.has(letter)) {
            return letter;
        } else {
            return "_";
        }
    }).join("");
}

function updateWordDisplay() {
    let blankedWord = createBlankedWord(currentWord);
    wordDisplay.textContent = blankedWord;
    console.log("Word:", currentWord);
    console.log("Guess:", wordDisplay.textContent);
}

// WIN GAME__________________________________________________________
const newGameBtn = document.getElementById('newGameBtn');

function gameWin() {

    currentStage = 0;
    updateDangmanImage();
    console.log("YOU WIN!");
    updateWordDisplay();
    hintText.textContent = "YOU WIN!!!";

    selectBtn.classList.add('hidden');
    newGameBtn.classList.remove('hidden');
}

newGameBtn.addEventListener('click', newGame);

// updateWordDisplay();

function updateDangmanImage() {
    const currentImage = document.getElementById('dangmanPic');
    currentImage.src = dangmanImages[currentStage];
}

function gameOver() {
    console.log("Game Over!");
    hintText.textContent = "GAME OVER";

    // Add all letters of the word to guessedLetters
    guessedLetters = new Set([...currentWord]);
    // Update the word display to show the entire word
    updateWordDisplay();

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
        // Skip the rest of the function if the button is 'used'
        return;
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

newGame();
