window.onload = init;
window.onscroll = stickNavbar;
const navbar = document.querySelector("nav");
var navbarY = navbar.offsetTop;
//window.onbeforeunload = 
document.getElementById("burger").addEventListener('click', burgerMenu);

function init(){
    greet();
}

function burgerMenu(){
    if (navbar.className === "") {
        navbar.className = "responsive";
    } else {
        navbar.className = "";
    }
}

function stickNavbar() {
    if (window.pageYOffset >= navbarY - 36.5) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

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

