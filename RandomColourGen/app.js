const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// calls random number function on button click
btn.addEventListener('click', function() {
    const randomNum = getRandomNum();
// changes body color and text to color from colors
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});
// define function to select random color from colors
function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}
