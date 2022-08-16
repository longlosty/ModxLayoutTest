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
new Swiper("#sliderServices .swiper", {
    slidesPerView: 5,
    spaceBetween: 15,

    breakpoints: {
        549: {
        spaceBetween: 20,
        }   
    },

    loop: true,
    navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev",
      },
});

new Swiper("#sliderServices .swiper", {
  slidesPerView: 5,
  spaceBetween: 15,

  breakpoints: {
      549: {
      spaceBetween: 20,
      }   
  },

  loop: true,
  navigation: {
    nextEl: ".mbl-next",
    prevEl: ".mbl-prev",
    },
});


/* Section: Reviews */
new Swiper("#sliderReviews .swiper", {
  slidesPerView: 2,
  spaceBetween: 15,
});

/* Section: Articles */
new Swiper("#sliderArticles .swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".articles-next",
    prevEl: ".articles-prev",
  },
})

new Swiper("#sliderArticles .swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".mbl-next",
    prevEl: ".mbl-prev",
  },
})





