
// (() => {

//     let scrolled;
//     let timer;
//     let scroll = document.getElementById("main");

//     scroll.addEventListener('click' , () => {
//         scrolled = window.pageYOffset;
//         scrollToBootom();
//     });
        
//     function scrollToBootom() {
//         if (scrolled > 0) {
//             window.scrollBy(10, scrolled);
//             scrolled = scrolled - 50;
//             timer = setTimeout(scrollToBootom, 50);
//         } else {
//             clearTimeout(timer);
//             window.scrollBy(0,0);
//         }
//     }

// })()




    let anchor = document.querySelector("[data-main]");

    if (anchor) {
    anchor.addEventListener("click", function (e) {

            e.preventDefault();

            let blockID = anchor.getAttribute("href").substr(1),
            offset = document.getElementById(blockID).getBoundingClientRect().top;

            window.scrollBy ({
                behavior: "smooth",
                top: offset - 108,
            });

        });
    }
