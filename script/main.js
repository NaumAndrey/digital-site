
(() => {

    const switchDark = document.querySelector('.round');
    const body = document.querySelector('body');
    const white = document.querySelector('.p-like');
    const button_test = document.querySelector('.button_test');
    const formtest = document.querySelector('.formtest');

    const picture1 = document.querySelector('.imgTest1000');

    if (switchDark) {
        switchDark.addEventListener('click', () => {
            body.classList.toggle('dark');
            white.innerHTML = "Black";
            picture1.setAttributej('src','img/1500.jpg');
       });
    } else {
        console.log('error');
    }
    
    button_test.addEventListener('click' , () => {
        formtest.classList.toggle('active');
    });

})()
