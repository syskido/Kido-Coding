const toggleBtn = document.querySelector('.navbar__toogleBtn');
const meun = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    meun.classList.toggle('active');
    icons.classList.toggle('active');
});
