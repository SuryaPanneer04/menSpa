new Swiper('.card-wrapper', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  
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

  // Corrected breakpoints for responsiveness
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }
  }
});
