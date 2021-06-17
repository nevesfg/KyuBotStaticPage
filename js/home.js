const logoElement = document.getElementById('kyu-logo');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const profiles = document.querySelectorAll('.team-member');
const menuButtons = document.querySelectorAll('.nav-menu > ul > li');

for (let profile of profiles) {
    let attr = profile.getAttribute('data-background');
    if (attr) {
        profile.style.setProperty('--bg-image', attr);
    }
}

var showingMenu = false;
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && showingMenu) {
        toggleMobileMenu();
    }
});

logoElement.addEventListener('click', () => {
    window.location.href = '/';
});

mobileMenuBtn.addEventListener('click', () => {
    toggleMobileMenu();
});

for (let button of menuButtons) {
    button.addEventListener('click', () => {
        if (showingMenu) {
            toggleMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    showingMenu = !showingMenu;
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
}