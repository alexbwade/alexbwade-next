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

  // Pause the loop while the band is scrolled out of view.
  addEventListener("DOMContentLoaded", () => {
    const band = document.querySelector("[data-band]");
    if (!band) return;
    new IntersectionObserver(([entry]) => {
      root.toggleAttribute("data-offscreen", !entry.isIntersecting);
    }).observe(band);
  });
})();
