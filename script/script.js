let nav = document.getElementById('nav');
let bars = document.getElementById('bars');
let exit = document.getElementById('exit');
let mobile = document.getElementById('mobile');

function openMenu() {
    mobile.classList.replace('translate-x-full', 'translate-x-0');
}

function closeMenu() {
    mobile.classList.replace('translate-x-0', 'translate-x-full');
}

const scroller = document.getElementById("scroller").cloneNode(true);

// document.getElementById("scroller").appendChild(scroller);