let header = document.querySelector('.header');
let menu = document.querySelector('.menu');
let gamburger = document.querySelector('.hamburger');
let not_only = document.querySelector('.not_only');
let menu_link = document.querySelector('.menu_item');


gamburger.addEventListener('click', function(){
    gamburger.classList.toggle('active');
	header.classList.toggle('active');
	menu.classList.toggle('active');
    not_only.classList.toggle('active');
});

menu.addEventListener('click', function(){
    gamburger.classList.toggle('active');
	header.classList.toggle('active');
	menu.classList.toggle('active');
    not_only.classList.toggle('active');
});

// СЛАДЕР

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const CAROUSEL = document.querySelector("#carousel");

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click',moveLeft); 
    BTN_RIGHT.removeEventListener('click',moveRight); 
}

const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_RIGHT.removeEventListener('click',moveRight);
    BTN_LEFT.removeEventListener('click',moveLeft); 
}
// слайд влево
BTN_LEFT.addEventListener('click',moveLeft);
// слайд вправо
BTN_RIGHT.addEventListener('click',moveRight);
// возврат в исходное и продолжение слушать событие
CAROUSEL.addEventListener('animationend',(animationEvent) => {
   if(animationEvent.animationName === "move-left"){
    CAROUSEL.classList.remove('transition-left');
    const leftItems = document.querySelector("#item-left").innerHTML;

    document.querySelector("#item-active").innerHTML = leftItems;
     
   } else {
    CAROUSEL.classList.remove('transition-right');
    const rightItems = document.querySelector("#item-right").innerHTML;

    document.querySelector("#item-active").innerHTML = rightItems;
   }
    
    
    BTN_LEFT.addEventListener('click',moveLeft);
    BTN_RIGHT.addEventListener('click',moveRight);
})