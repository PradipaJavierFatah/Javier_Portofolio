// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};



// Humburger

const hamburger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    humberger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});