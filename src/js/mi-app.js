
const enableSwiper = () => {
    new Swiper(".swiper", {
        // spaceBetween: 24,
        slidesPerView: "auto",
        direction: "horizontal",
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       
    });
};

enableSwiper();
