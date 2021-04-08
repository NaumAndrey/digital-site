
(() => {
    
    new WOW().init(); // инициализация анимации

    const switchDark = document.querySelector('.round');
    const body = document.querySelector('body');
    const white = document.querySelector('.p-like');
    const button_test_1 = document.querySelector('.button_test'); 
    const button_test = document.querySelector('.button_test2');
    const formtest = document.querySelector('.formtest');

    const picture1 = document.querySelector('.imgTest1000');

    const humburger = document.querySelector('.humburger');
    const humMenu = document.querySelector('.header-heading__heading_test');

    if (switchDark) {
        switchDark.addEventListener('click', () => {
            body.classList.toggle('dark');
            white.innerHTML = "Black";
       });
    } else {
        console.log('error');
    }

    button_test_1.addEventListener('click', () => {
        formtest.classList.toggle('active');
    });

    button_test.addEventListener('click' , () => {
        formtest.classList.toggle('active');
    });


    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });

})()
