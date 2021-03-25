// 'use strict';

(() => {

    const switchDark = document.querySelector('.round');
    const body = document.querySelector('body');
    const h1_like_one = document.querySelector('h1-like-one');
    const white = document.querySelector('.p-like');

    if (switchDark) {
        switchDark.addEventListener('click', () => {
            body.classList.toggle('dark');
            white.innerHTML = "Black";
       });
    } else {
        console.log('error');
    }

    

})()
