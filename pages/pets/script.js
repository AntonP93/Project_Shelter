let header = document.querySelector('.header_content');
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
let not_only = document.querySelector('.not_only');
let menu_link = document.querySelector('.menu_item');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
	header.classList.toggle('active');
	menu.classList.toggle('active');
    not_only.classList.toggle('active');
});

menu.addEventListener('click', function(){
    hamburger.classList.toggle('active');
	header.classList.toggle('active');
	menu.classList.toggle('active');
    not_only.classList.toggle('active');
});

