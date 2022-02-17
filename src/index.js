// Estilos dos componentes da aplicacao
import '@styles/main.css';

// Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// Estilos Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper(document.getElementById('bought'), {
  slidesPerView: 2,
  spaceBetween: 8,
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
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});

new Swiper(document.getElementById('viewed'), {
  slidesPerView: 2,
  spaceBetween: 8,
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

new Swiper(document.getElementById('trending'), {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: document.getElementById('carousel-control-trending-left'),
    nextEl: document.getElementById('carousel-control-trending-right'),
  },
});

// Selecao de caracteristicas do produto
const colorOptions = Array.from(document.getElementsByClassName('color-tile'));
const sizeOptions = Array.from(document.getElementsByClassName('size-tile'));

const createRadioLists = (arr) => {
  arr.forEach((radioList) => {
    radioList.forEach((radio) => {
      radio.addEventListener('click', (e) => {
        radioList.forEach((radio) => radio.classList.remove('selected'));
        e.target.classList.add('selected');
      });
    });
  });
};

createRadioLists([colorOptions, sizeOptions]);

// Contador de itens
const plusBtn = document.getElementById('btn-plus');
const minusBtn = document.getElementById('btn-minus');
const balanceDisplay = document.getElementById('balance');
const amountDisplay = document.getElementById('amount');

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const createProductCounter = (buttons, amount, balance) => {
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      const itemPrice = 3199;
      let amountVal = Number(amount.textContent);
      let balanceVal = Number(balance.textContent.replace(/[^0-9.-]+/g, ''));

      if (button.id === 'btn-minus') {
        if (amountVal <= 1) return;
        amountVal--;
        balanceVal = itemPrice * amountVal;
      } else {
        if (amountVal >= 99) return;
        amountVal++;
        balanceVal = itemPrice * amountVal;
      }

      if (amountVal < 10) {
        amountVal = `0${amountVal}`;
      }

      amount.textContent = amountVal;
      balance.textContent = currencyFormatter.format(balanceVal);
    });
  });
};

createProductCounter([plusBtn, minusBtn], amountDisplay, balanceDisplay);

// Adicao do(s) item(ns) a sacola
const ElemBagBtn = document.getElementById('btn-bag');
const ElemAddToBagBtn = document.getElementById('btn-add-bag');

ElemAddToBagBtn.addEventListener('click', () => addToBag(amountDisplay));

const addToBag = (amount) => {
  const value = Number(amount.textContent);

  ElemBagBtn.setAttribute('data-content', value);
};
