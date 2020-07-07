let controller;
let slideScene;

function animateSlides() {
  // Init controller
  controller = new ScrollMagic.Controller();

  // Selections
  const slides = document.querySelectorAll(".app__slide");
  const nav = document.querySelector(".app__header");
  slides.forEach((slide) => {
    const revealImage = slide.querySelector(".reveal-image");
    const revealText = slide.querySelector(".reveal-text");
    const slideImage = slide.querySelector("img");

    // GSAP
    const slideTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTimeline.fromTo(revealImage, { x: "0%" }, { x: "100%" });
    slideTimeline.fromTo(slideImage, { scale: 2 }, { scale: 1 }, "-=1");
    slideTimeline.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.7");
    slideTimeline.fromTo(nav, { y: "-80%" }, { y: "0%" }, "-=0.7");
  });
}
animateSlides();
