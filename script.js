// ==========================
// SMOOTH SCROLLING
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ==========================
// FADE UP ANIMATIONS
// ==========================

const fadeElements = document.querySelectorAll(
  ".portfolio-card, .timeline-item, .about-grid, .contact, .project-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up");
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(element => {
  observer.observe(element);
});

// ==========================
// MOBILE NAVIGATION
// ==========================

const mobileButton =
  document.querySelector(".mobile-toggle");

const nav =
  document.querySelector("nav");

if (mobileButton) {

  mobileButton.addEventListener("click", () => {

    if (
      nav.style.display === "flex"
    ) {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "80px";
      nav.style.right = "20px";
      nav.style.background = "#fff";
      nav.style.padding = "20px";
      nav.style.borderRadius = "15px";
      nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.1)";
      nav.style.gap = "15px";
    }

  });

}