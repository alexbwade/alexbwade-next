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
    const header = document.querySelector(".header");
    // The nav links to sections on this page. On other pages they lead to the home page, so none match.
    const sections = [...document.querySelectorAll('.header nav a[href^="#"]:not([href="#top"])')]
      .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
      .filter(({ section }) => section);

    const onScroll = () => {
      if (!header) return;
      // Mark the header once it is stuck to the top, which shows its backdrop.
      const stickyTop = parseFloat(getComputedStyle(header).top);
      header.toggleAttribute("data-stuck", header.getBoundingClientRect().top <= stickyTop);

      // Mark the link for the section in view: the last one whose top has passed under the header, which is where a
      // nav click leaves it (scroll-padding-top). At the bottom of the page, the last section counts even if its top
      // can't scroll that far.
      const line = parseFloat(getComputedStyle(root).scrollPaddingTop) + 1;
      const isAtBottom = scrollY + innerHeight >= root.scrollHeight - 1;
      const current = isAtBottom
        ? sections.at(-1)
        : sections.findLast(({ section }) => section.getBoundingClientRect().top <= line);
      for (const item of sections) {
        if (item === current) item.link.setAttribute("aria-current", "true");
        else item.link.removeAttribute("aria-current");
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll, { passive: true });

    // Pause the loop while the band is scrolled out of view.
    const band = document.querySelector("[data-band]");
    if (!band) return;
    new IntersectionObserver(([entry]) => {
      root.toggleAttribute("data-offscreen", !entry.isIntersecting);
    }).observe(band);
  });
})();
