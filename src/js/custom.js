$('#myCarousel').on('click', () => {
    console.log('jQuery is working');
});

// JavaScript Version
const buttonMenu = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navbar-ul');
const nav = document.querySelector('.navbar');

buttonMenu.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    navMenu.classList.toggle('active');
});
