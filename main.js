window.onload = init;
window.onscroll = stickNavbar;
const navbar = document.querySelector("nav");
const burger = document.getElementById("burger");
var navbarY = navbar.offsetTop;
var burgerY = burger.offsetTop;
document.getElementById("burger").addEventListener('click', burgerMenu);

function init(){
    greet();
}

//makes a responsive burger menu
function burgerMenu(){
    if (navbar.className === "" || navbar.className === "sticky") {
        if(navbar.className === "sticky"){
            navbar.classList.add("responsive");
            navbar.classList.add("show");
        }else{
            navbar.classList.add("responsive");
        }
    } else {
        navbar.classList.remove("responsive");
        navbar.classList.remove("show");
    }
}

//makes the navbar sticky
function stickNavbar() {
    if (window.pageYOffset >= navbarY - 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("show");
    }

    if (window.pageYOffset >= burgerY - 40) {
        burger.classList.add("stickyBurger");
    } else {
        burger.classList.remove("stickyBurger");
    }
}

//greets user based on time of day
function greet(){
    let date = new Date();
    let hrs = date.getHours();
    let out;

    if (hrs < 12)
        out = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        out = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        out = 'Good Evening';

    document.getElementById('greeting').innerHTML = out + ' and welcome to my digital portfolio!';
}

