const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) { 
        menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show'); 
        menuToggle.classList.toggle('active'); 
    });
} else {
    console.error("Menu toggle button or nav links not found!");
}

const links = navLinks.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});