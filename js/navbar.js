// get the hamburger element
var menu = document.getElementById("menu");

// get the menu element
var nav = document.getElementById("nav");

// get the overlay element
var overlay = document.getElementById("overlay")

// define toggle function
function toggleMenu(){
    //either add or remove active class from element 
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
}
// execute toggle function from hamburger on click
menu.addEventListener("click", toggleMenu);

///execute toggle function from menu on click
menu.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
overlay.addEventListener("click", toggleMenu);

