// 'use strict';

(() => {

    const switchDark = document.querySelector('.round');
    const body = document.querySelector('body');
    const h1_like_one = document.querySelector('h1-like-one');

    switchDark.addEventListener('click', () => {
         body.classList.toggle('dark');
    });

})()
