const container = document.querySelector('.container');
const hamburgerBtn = document.querySelector('.hamburger');
hamburgerBtn.addEventListener('click', () => {
    container.classList.toggle('closed');
});