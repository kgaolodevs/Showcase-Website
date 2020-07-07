let controller;
let slideScene;
let pageScene;

function animateSlides() {
  // Init controller
  controller = new ScrollMagic.Controller();

  // Selections
  const slides = document.querySelectorAll(".app__slide");
  const nav = document.querySelector(".app__header");
  slides.forEach((slide, index, allSlides) => {
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

    // Add animation scene (point)
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideTimeline)
      .addIndicators({
        colorStart: "cyan",
        colorTrigger: "#f51844",
        name: "slide",
      })
      .addTo(controller);

    // Page animation
    const pageTimeline = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTimeline.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTimeline.fromTo(
      slide,
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.5 }
    );
    pageTimeline.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.7");
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .addIndicators({
        colorStart: "cyan",
        colorTrigger: "#f51844",
        name: "page",
        indent: 200,
      })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTimeline)
      .addTo(controller);
  });
}
animateSlides();

function cursor(e) {
  let mouse = document.querySelector(".app__cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
window.addEventListener("mousemove", cursor);
