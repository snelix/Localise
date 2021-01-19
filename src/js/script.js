const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu');
    close = document.querySelector('.header__close');
    // overlay = document.querySelector('.header__overlay');1
    
hamburger.addEventListener('click',()=> {
    menu.classList.add('active')
});
close.addEventListener('click',()=> {
    menu.classList.remove('active')
});
// overlay.addEventListener('click',()=> {
//     menu.classList.remove('active')
// });