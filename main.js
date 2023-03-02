window.onload = greet;

function greet(){
    let date = new Date();
    let hrs = date.getHours();
    let out;

    if (hrs < 12)
        out = 'Good Morning';
    else if (hrs >= 12 && hrs <= 18)
        out = 'Good Afternoon';
    else if (hrs >= 18 && hrs <= 24)
        out = 'Good Evening';

    document.getElementById('greeting').innerHTML = '<i>' + out + '</i> and welcome to my digital portfolio!';
}

