// The only client JS. Base.astro minifies it and inlines it in <head>, so a saved pause choice applies before first
// paint. data-js reveals the buttons that need it, and one delegated click listener handles both of them.
(() => {
  const root = document.documentElement;
  root.dataset.js = "";
  try {
    if (localStorage.getItem("motion") === "paused") root.dataset.motion = "paused";
  } catch {
    // Storage can be blocked; the default is to animate.
  }

  // data-toggle="motion" sets data-motion="paused"; data-toggle="spec" sets data-spec="on".
  addEventListener("click", (event) => {
    const button = event.target.closest("[data-toggle]");
    if (!button) return;
    const name = button.dataset.toggle;
    const value = name === "motion" ? "paused" : "on";
    const isOn = root.getAttribute(`data-${name}`) !== value;
    if (isOn) root.setAttribute(`data-${name}`, value);
    else root.removeAttribute(`data-${name}`);
    if (name !== "motion") return;
    try {
      localStorage.setItem("motion", isOn ? "paused" : "running");
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
