import"./main-ca5ff1e1.js";gsap.registerPlugin(ScrollTrigger);const s=(r,t)=>{let e=gsap.utils.toArray(r);e.forEach(()=>{gsap.fromTo(e,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1,ease:"ease",scrollTrigger:{trigger:t,start:"-=200 center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})})};s(".faqs > *",".faqs");
