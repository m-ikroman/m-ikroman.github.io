const menuToggle = document.querySelector('.menu-togle input');
const nav = document.querySelector('header ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});