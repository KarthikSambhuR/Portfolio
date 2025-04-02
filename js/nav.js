// js/nav.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) { // Check if elements exist
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle visibility
        menuToggle.classList.toggle('active'); // Toggle burger animation
    });
} else {
    console.error("Menu toggle button or nav links not found!");
}

// Optional: Close menu when a link is clicked (good for single-page apps, but can be useful here too)
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});