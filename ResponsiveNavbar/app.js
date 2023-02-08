const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click',function(){
    // refer to commented code lines below
    links.classList.toggle("show-links");

});


// .toggle does this
// if (links.classList.contains("show-links")) {
//      links.classList.remove("show-links");
//  }
//  else {
//    links.classList.add("show-links");
//  }     
