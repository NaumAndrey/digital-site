

// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const slider = document.querySelector('.swiper-container');

const swiper = new Swiper(slider, {

    slidesPerView: 1,

    slideToClickedSlide: true,

    loop: true,

    navigation: {
        nextEl: '.__switch_case_go',
        prevEl: '.__switch_case_back',
    },
});