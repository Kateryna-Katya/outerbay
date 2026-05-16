import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

let mySwiper = null;

function initSwiper() {
  if (window.innerWidth < 1440 && !mySwiper) {
    mySwiper = new Swiper('.my-swiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,

      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },

      pagination: {
        el: '.custom-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1440 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);