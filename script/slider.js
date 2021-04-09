
const slider = document.querySelector('.swiper-container');

const swiper = new Swiper(slider, {
    
    speed: 800,

    slidesPerView: 1,

    slideToClickedSlide: true,

    loop: true,

    navigation: {
        nextEl: '.__switch_case_go',
        prevEl: '.__switch_case_back',
    },
});