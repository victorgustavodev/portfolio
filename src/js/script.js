const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    if(window.scrollY < 90){
        header.classList.toggle ("sticky");
    }
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle ("show-top", window.scrollY > 140)
    topo.classList.toggle ("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle ("hide-top");
}

// scrollreveal

window.sr = ScrollReveal({reset : true});

var top = {
    duration: 1000,
    distance: '50px',
    origin: 'top',
    delay: 200
}

sr.reveal('.home1-sr', {
    duration: 1000,
    delay: 100,
    origin: 'left',
    distance: '50px'
})

sr.reveal('.home2-sr', {
    duration: 2000,
    delay: 200,
    origin: 'left',
    distance: '30px'
})

sr.reveal('.home3-sr', {
    duration: 3000,
    delay: 400,
    origin: 'left',
    distance: '20px'
})

sr.reveal('.about-sr', {
    duration: 1000,
    distance: '50px',
    origin: 'right',
})

//icons social media 

sr.reveal('.socials1-sr', {
    duration: 1500,
    delay: 70,
    origin: 'bottom',
    distance: '30px'
})

sr.reveal('.socials2-sr', {
    duration: 2000,
    delay: 100,
    origin: 'bottom',
    distance: '30px'
})

sr.reveal('.socials3-sr', {
    duration: 3000,
    delay: 150,
    origin: 'bottom',
    distance: '30px'
})


sr.reveal('.main-text-sr', {
    duration: 3000,
    distance: '60px',
    origin: 'top'
})

sr.reveal('.portfolio-content-sr', {
    duration: 3000,
    scale: 1.3,
})

sr.reveal('.h2-sr', {
    duration: 2000,
})

sr.reveal('.services-content-sr', {
    duration: 2000,
    scale: 0.7,
})


