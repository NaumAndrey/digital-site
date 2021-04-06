
(() => {

    const switchDark = document.querySelector('.round');
    const body = document.querySelector('body');
    const white = document.querySelector('.p-like');
    const button_test = document.querySelector('.button_test2');
    const formtest = document.querySelector('.formtest');

    const picture1 = document.querySelector('.imgTest1000');

    if (switchDark) {
        switchDark.addEventListener('click', () => {
            body.classList.toggle('dark');
            white.innerHTML = "Black";
       });
    } else {
        console.log('error');
    }

    button_test.addEventListener('click' , () => {
        formtest.classList.toggle('active');
    });

    // const list = document.querySelector('.main-content-ul__list');
    
    

})()
