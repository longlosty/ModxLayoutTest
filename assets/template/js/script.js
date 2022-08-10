const burger = document.querySelector('.header-burger');
const submenu = document.querySelector('.header-menu');
const body = document.querySelector('body');

burger.addEventListener("click", function() {
    burger.classList.toggle('active');
    submenu.classList.toggle('active');
    body.classList.toggle('lock');
});

const intro = document.querySelector('.intro');
let introH = intro.clientHeight;
let scroll = window.scrollY;
const bookingBtn = document.querySelector('.intro-form button');

window.addEventListener("scroll", function() {
    scroll = this.scrollY;
    
    if(scroll > introH - 100) {
        bookingBtn.classList.add('fixed');
    }
    else {
        bookingBtn.classList.remove('fixed');
    }
})

bookingBtn.style = "margin:" + introH;

