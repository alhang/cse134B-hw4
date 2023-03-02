window.onload = init;
window.onscroll = stickNavbar;
const navbar = document.querySelector("nav");
var navbarY = navbar.offsetTop;
document.getElementById("burger").addEventListener('click', burgerMenu);

function init(){
    greet();
}

//makes a responsive burger menu
function burgerMenu(){
    if (navbar.className === "") {
        navbar.className = "responsive";
    } else {
        navbar.className = "";
    }
}

//makes the navbar sticky
function stickNavbar() {
    if (window.pageYOffset >= navbarY - 36.5) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
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

