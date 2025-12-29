document.addEventListener('DOMContentLoaded', () => {
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    loop: true,
    speed: 700,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    slidesPerView: 1,
    spaceBetween: 24,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
