import"./main-2d035c59.js";const i=new Swiper("#swiper-fechas",{spaceBetween:24,slidesPerView:1,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),r=document.querySelectorAll(".carrusel-item");r.forEach((e,a)=>{e.addEventListener("click",()=>{var t=document.querySelector("#accordionExample");t.classList.add("show");for(const c of r)c.classList.remove("active"),c.removeAttribute("data-bs-toggle");e.classList.add("active"),n(e.id),setTimeout(()=>{i.slideTo(a)},100)})});i.on("slideChange",function(){let e=this.slides[this.activeIndex].getAttribute("data-slide");for(const a of r)a.classList.remove("active");document.getElementById(e).classList.add("active")});i.on("navigationNext",function(){metrica5A(o(i.slides[i.realIndex]),"Siguiente")});i.on("navigationPrev",function(){metrica5A(o(i.slides[i.realIndex]),"Regresar")});function o(e){let a=e.dataset.slide,t;return a=="card-fecha-1"?(t="Fecha de corte",metrica5B()):a=="card-fecha-2"?(t="Periodo de Pago",metrica5C()):(t="Fecha límite de pago",metrica5D()),t}function n(e){e=="card-fecha-1"?metrica5B():e=="card-fecha-2"?metrica5C():metrica5D()}gsap.registerPlugin(ScrollTrigger);const s=(e,a)=>{let t=gsap.utils.toArray(e);t.forEach(()=>{gsap.fromTo(t,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1,ease:"ease",scrollTrigger:{trigger:a,start:"-=200 center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})})};s(".section-hero > *",".section-hero");s(".fechas > *",".fechas");s(".app > *",".app");
