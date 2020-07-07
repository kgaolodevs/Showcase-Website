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
    gsap.to(revealImage, 1, { x: "100%" });
  });
}
animateSlides();
