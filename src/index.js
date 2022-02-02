import '@styles/main.css';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper(document.getElementById('bought'), {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: document.getElementById('carousel-control-top-left'),
    nextEl: document.getElementById('carousel-control-top-right'),
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});

new Swiper(document.getElementById('viewed'), {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: document.getElementById('carousel-control-bottom-left'),
    nextEl: document.getElementById('carousel-control-bottom-right'),
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});
