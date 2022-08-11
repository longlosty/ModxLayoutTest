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

/* Section: Bath-houses */
new Swiper("#sb1 .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: "#sb1 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb2 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb2 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb3 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb3 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb4 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb4 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb5 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb5 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb6 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb6 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb7 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb7 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});

new Swiper("#sb8 .swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#sb8 .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    }
});


    // Set slider only for mobile
// const bathContent = document.querySelector('.bath-content');
// let bathContentH = bathContent.clientHeight;

// if (bathContentH > 1500) {
//     let sliderBh = document.querySelectorAll('#slider-bathHouses');
//     for (let elem of sliderBh) {
//         elem.classList.add('slider');
//         console.log(elem.length);
//     }
// }

/* Section: Services */
new Swiper("#test .swiper", {
    slidesPerView: 2,

    breakpoints: {
        839: {
            slidesPerView: 3, 
            spaceBetween: 15,
        },

        1259: {
            slidesPerView: 4,
            spaceBetween: 15,
        },

        1689: {
            slidesPerVIew: 5,
            spaceBetween: 15,
        },
    },
    
    spaceBetween: 15000,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });



