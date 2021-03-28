// Variables
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navItems = document.querySelectorAll('.nav__item');
let isOpen = false;
// Functions
function toggleMenu (){

    if (!isOpen) {
        navToggle.style.backgroundImage = 'url(../../../images/icon-close.svg)';
    } else {
        navToggle.style.backgroundImage = 'url(../../../images/icon-hamburger.svg)';
    }

    isOpen = !isOpen;
    navMenu.classList.toggle('show-menu');
}

function toggleSubMenu (){
    const subMenu = this.lastElementChild;
    subMenu.classList.toggle('show-submenu');
}

// Main

navToggle.addEventListener('click', toggleMenu);
navItems.forEach(navItem => navItem.addEventListener('click', toggleSubMenu));