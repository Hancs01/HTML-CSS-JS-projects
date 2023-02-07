// initialise counter
let count = 0;

// select buttons and values
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// for each button in buttons
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // get classes of item clicked
        const styles = e.currentTarget.classList;
        // if item has class... do
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    } );

});

