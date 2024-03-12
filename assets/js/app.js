$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slick-slider-2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    // rtl: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
let scroll_top = document.querySelector(".to-top");

let pt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > pt) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }

    scroll_top.addEventListener("click", () => {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(function () {
//         document.getElementById("loading-screen").style.display = "none";
//     }, 2000)
// })

// gsap.from(".to-top", {
//     y: 30,
//     repeat: -1,
//     yoyo: true
// });

// gsap.from(".nav-links", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     y: -155,
//     scrollTrigger: {
//         trigger: ".nav-links"
//     }
// });

// gsap.from(".nav-txt", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     // delay: 0.5
// });

// gsap.from(".choice", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".choice"
//     }
// });

// gsap.from(".slick-slider", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".slick-slider"
//     }
// });

// gsap.from(".part-1", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".slick-slider"
//     }
// });
// gsap.from(".part-2", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: "slick-slider"
//     }
// });
// gsap.from("#process", {
//     scale: 0,
//     duration: 2,
//     x: -155,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#process"
//     }
// });

// gsap.from(".crd-1", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".crd-1"
//     }
// });
// gsap.from(".crd-2", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".crd-2"
//     }
// });
// gsap.from(".crd-3", {
//     scale: 0,
//     duration: 2,
//     x: -155,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".crd-3"
//     }
// });
// gsap.from(".inspition", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".crd-3"
//     }
// });

// gsap.from(".team", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".team"
//     }
// });
// gsap.from(".testionmial", {
//     scale: 0,
//     duration: 2,
//     opacity: 0,
//     x: -155,
//     scrollTrigger: {
//         trigger: ".testionmial"
//     }
// });