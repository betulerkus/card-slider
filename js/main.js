var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    spaceBetween: 30,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {slidesPerView: 3,
          slidesPerGroup: 3},
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });