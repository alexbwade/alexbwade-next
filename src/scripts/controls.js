// The only client JS. Base.astro minifies it and inlines it in <head>, so a saved pause choice applies before first
// paint. data-js reveals the pause button, which needs this script to work.
(() => {
  const root = document.documentElement;
  root.dataset.js = "";
  try {
    if (localStorage.getItem("motion") === "paused") root.dataset.motion = "paused";
  } catch {
    // Storage can be blocked; the default is to animate.
  }

  addEventListener("click", (event) => {
    if (!event.target.closest("[data-motion-toggle]")) return;
    const isPaused = root.dataset.motion !== "paused";
    if (isPaused) root.dataset.motion = "paused";
    else root.removeAttribute("data-motion");
    try {
      localStorage.setItem("motion", isPaused ? "paused" : "running");
    } catch {
      // The choice just won't persist.
    }
  });

  addEventListener("DOMContentLoaded", () => {
    // Mark the header once it is stuck to the top, which shows its backdrop.
    const header = document.querySelector(".header");
    if (header) {
      const markStuck = () => {
        const stickyTop = parseFloat(getComputedStyle(header).top);
        header.toggleAttribute("data-stuck", header.getBoundingClientRect().top <= stickyTop);
      };
      markStuck();
      addEventListener("scroll", markStuck, { passive: true });
      addEventListener("resize", markStuck, { passive: true });
    }

    // Pause the loop while the band is scrolled out of view.
    const band = document.querySelector("[data-band]");
    if (!band) return;
    new IntersectionObserver(([entry]) => {
      root.toggleAttribute("data-offscreen", !entry.isIntersecting);
    }).observe(band);
  });
})();
