import"./main-5ca176b0.js";const t=new Swiper(".swiper",{spaceBetween:16,slidesPerView:"auto",breakpoints:{768:{slidesPerView:"auto",spaceBetween:24},1280:{slidesPerView:3,slidesPerGroup:3,spaceBetween:16,autoHeight:!0},1920:{slidesPerView:3,slidesPerGroup:3,spaceBetween:192,autoHeight:!0}},direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});t.on("navigationNext",function(){metrica6A("Siguiente")});t.on("navigationPrev",function(){metrica6A("Regresar")});gsap.registerPlugin(ScrollTrigger);const e=(i,o)=>{let r=gsap.utils.toArray(i);r.forEach(()=>{gsap.fromTo(r,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1,ease:"ease",scrollTrigger:{trigger:o,start:"-=200 center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})})};e(".section-hero > *",".section-hero");e(".compras > *",".compras");e(".app > *",".app");
