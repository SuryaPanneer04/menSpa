
// Swiper image

new Swiper('.card-wrapper', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Corrected breakpoints
  // breakpoints: {
  //     0: {
  //         slidesPerView: 1
  //     },
  //     2068: {
  //         slidesPerView: 2
  //     },
  //     2024: {
  //         slidesPerView: 3
  //     },
  // }
});



