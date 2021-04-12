// window.onload = function () {

//     let scrolled;
//     let timer;

//     document.getElementById("main").onclick = function(){
//         scrolled = window.pageYOffset;
//         scrollToBootom();
//     }

//     function scrollToBootom() {
//         if (scrolled > 0) {
//             window.scrollBy(0, scrolled);
//             scrolled = scrolled - 50;
//             timer = setTimeout(scrollToBootom, 50);
//         } else {
//             clearTimeout(timer);
//             window.scrollBy(0,0);
//         }
//     }
// }


(() => {

    let scrolled;
    let timer;
    let scroll = document.getElementById("main");

    scroll.addEventListener('click' , () => {
        scrolled = window.pageYOffset;
        scrollToBootom();
    });
        
    function scrollToBootom() {
        if (scrolled > 0) {
            window.scrollBy(10, scrolled);
            scrolled = scrolled - 50;
            timer = setTimeout(scrollToBootom, 50);
        } else {
            clearTimeout(timer);
            window.scrollBy(0,0);
        }
    }

})()