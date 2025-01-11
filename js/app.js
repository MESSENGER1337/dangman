const categories = ["colors", "countries", "planets", "cities"];
const catColors = ["purple", "orange", "maroon", "silver"];
const hintText = document.getElementById('hintText');
const letterBtn = document.getElementsByClassName('letter');
let arr = Array.from(letterBtn);

console.log(arr);

const randomCategory = Math.floor(Math.random() * categories.length);
category = categories[randomCategory];
hintText.textContent = category;
if (category === "colors") {
    var currentCategory = catColors;
}

const randomWord = Math.floor(Math.random() * currentCategory.length);
console.log(currentCategory[randomWord]);




// let string = "";

// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.Length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })


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