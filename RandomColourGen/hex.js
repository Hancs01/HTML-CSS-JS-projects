const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // loop to obtain 6 digit hex number from values in hex
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNum()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

})

// get random integer between 0 and hex length
function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}