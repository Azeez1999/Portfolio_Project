// Hamburger Menu Toggle
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.showMenu');

menu.addEventListener('click', () => {
    showMenu.classList.toggle('showMenu');
});

// Typing Effect
const typed = new Typed('.skills', {
    strings: ['Full-Stack Developer', 'Software Engineer', 'Undergradute'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
