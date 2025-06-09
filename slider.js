window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, index) => {
    const slideTop = index * vh;
    const slideBottom = (index + 1) * vh;
    const h2 = slide.querySelector("h2");

    if (scrollY >= slideTop && scrollY < slideBottom) {
      h2.classList.add("opacity-100", "translate-y-0", "scale-110");
      h2.classList.remove("opacity-0", "translate-y-8");
    } else {
      h2.classList.remove("opacity-100", "translate-y-0", "scale-110");
      h2.classList.add("opacity-0", "translate-y-8");
    }
  });
});
