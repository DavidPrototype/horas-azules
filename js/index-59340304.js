import"./main-0b5e4c7b.js";gsap.registerPlugin(ScrollTrigger);const e=(s,a)=>{let i=gsap.utils.toArray(s);i.forEach(()=>{gsap.fromTo(i,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1,ease:"ease",scrollTrigger:{trigger:a,start:"-=200 center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})})};e(".section-hero > *",".section-hero");e(".promociones > *",".promociones");e(".efectivo > *",".efectivo");e(".app > *",".app");const r=window.matchMedia("(max-width:1279px)");let t;const o=()=>{if(r.matches===!0)return n();if(r.matches===!1){t!==void 0&&t.destroy(!0,!0);return}},n=()=>{t=new Swiper(".swiper",{spaceBetween:24,slidesPerView:"auto",direction:"horizontal",pagination:{el:".swiper-pagination"}})};r.addListener(o);o();
