const swiper = new Swiper("#swiper-fechas", {
    spaceBetween: 24,
    slidesPerView: 1,
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slides = document.querySelectorAll(".accordion-item");

slides.forEach((element, index) => {
    element.addEventListener("click", () => {
        var collapseElementList = document.querySelector("#accordionExample");
        collapseElementList.classList.add("show");

        for (const slidesEl of slides) {
            slidesEl.classList.remove("active");
            slidesEl.removeAttribute("data-bs-toggle");
        }

        element.classList.add("active");
        setTimeout(() => {
            swiper.slideTo(index);
        }, 100);
    });
});

swiper.on("slideChange", function () {
    let id = this.slides[this.activeIndex].getAttribute("data-slide");

    for (const slidesEl of slides) {
        slidesEl.classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
});
