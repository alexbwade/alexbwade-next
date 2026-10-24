import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const widths = [320, 375, 768, 1280, 1920];
const pages = ["/", "/colophon", "/es", "/es/colophon"];

async function expectNoAxeViolations(page: Page) {
  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(violations.map(({ id, nodes }) => `${id}: ${nodes.map((node) => node.target).join(", ")}`)).toEqual([]);
}

test.describe("accessibility", () => {
  for (const path of [...pages, "/no-such-page"]) {
    for (const width of [375, 1280]) {
      test(`axe finds no violations on ${path} at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        await expectNoAxeViolations(page);
      });
    }
  }

  test("the page has one h1, the landmarks and a working skip link", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "Hi, I’m Alex. I build quality design systems, micro-frontends and component APIs you can always rely on."
    );
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
  });
});

test.describe("health", () => {
  for (const path of pages) {
    test(`${path} loads with no console errors or CSP violations`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (message) => {
        // Vercel injects its toolbar from vercel.live on preview deployments only, and the CSP blocks it.
        if (message.type() === "error" && !message.text().includes("vercel.live")) errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto(path, { waitUntil: "networkidle" });
      // Exercise the inline script too, where there is something for it to do.
      const pause = page.getByRole("button", { name: /^(Pause animation|Pausar animación)$/ });
      if (await pause.count()) await pause.click();
      expect(errors).toEqual([]);
    });
  }

  test("the self-hosted font loads", async ({ page }) => {
    await page.goto("/");
    const loaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.fonts].some((font) => font.family.includes("Schibsted Grotesk") && font.status === "loaded");
    });
    expect(loaded).toBe(true);
  });

  test("unknown paths get the custom 404 page", async ({ page }) => {
    const response = await page.goto("/no-such-page");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("This page doesn’t exist.");
    await expect(page.getByRole("heading", { level: 2, name: "Esta página no existe." })).toBeVisible();
  });
});

test.describe("layout", () => {
  for (const width of widths) {
    test(`no horizontal scroll at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const path of pages) {
        await page.goto(path);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      }
    });
  }
});

test.describe("headline", () => {
  // The rotator is as wide as its widest phrase, so this covers all three.
  for (const path of ["/", "/es"]) {
    for (const width of [640, 768, 1024, 1280, 1920]) {
      test(`the rotating line stays on one line on ${path} at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        await page.evaluate(() => document.fonts.ready);
        const { lineHeight, fontSize } = await page
          .locator(".line")
          .nth(1)
          .evaluate((line) => ({
            lineHeight: line.getBoundingClientRect().height,
            fontSize: parseFloat(getComputedStyle(line).fontSize),
          }));
        expect(lineHeight).toBeLessThan(fontSize * 1.5);
      });
    }
  }
});

test.describe("spanish", () => {
  test("the Spanish home page is in Spanish, with its own headline, dates and skip link", async ({ page }) => {
    await page.goto("/es");
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "Hola, soy Alex. Construyo sistemas de diseño, micro-frontends y APIs de componentes de calidad que nunca fallan."
    );
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeVisible();
    await expect(page.locator("time").first()).toHaveText("ago 2023");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  });

  for (const [from, to, label] of [
    ["/", "/es", "Español"],
    ["/colophon", "/es/colophon", "Español"],
    ["/es/colophon", "/colophon", "English"],
  ] as const) {
    test(`the language switcher on ${from} leads to ${to}`, async ({ page }) => {
      await page.goto(from);
      const link = page.getByRole("link", { name: label, exact: true });
      await expect(link).toHaveAttribute("lang", to.startsWith("/es") ? "es" : "en");
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${to}$`));
    });
  }

  test("each page lists both languages as hreflang alternates", async ({ page }) => {
    await page.goto("/es/colophon");
    const alternates = await page
      .locator('link[rel="alternate"][hreflang]')
      .evaluateAll((links) =>
        links.map((link) => `${link.getAttribute("hreflang")} ${new URL(link.getAttribute("href") ?? "").pathname}`)
      );
    expect(alternates).toEqual(["en /colophon", "es /es/colophon", "x-default /colophon"]);
  });

  test("the Spanish résumé link says the PDF is in English", async ({ page }) => {
    await page.goto("/es");
    await expect(page.getByRole("link", { name: /Ver mi currículum/ })).toHaveText(/PDF en inglés, \d+ KB/);
    await expect(page.getByRole("link", { name: /^Currículum/ })).toHaveAccessibleName(/se abre en una pestaña nueva/);
  });
});

test.describe("motion", () => {
  test("the pause button pauses the loop and remembers the choice", async ({ page }) => {
    await page.goto("/");
    const root = page.locator("html");
    await page.getByRole("button", { name: "Pause animation" }).click();
    await expect(root).toHaveAttribute("data-motion", "paused");
    await expect(page.locator(".rotator > span").first()).toHaveCSS("animation-play-state", "paused");

    await page.reload();
    await expect(root).toHaveAttribute("data-motion", "paused");
    await page.getByRole("button", { name: "Play animation" }).click();
    await expect(root).not.toHaveAttribute("data-motion");
  });

  test("reduced motion shows the first word and panel, static, with no pause button", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const words = page.locator(".rotator > span");
    await expect(words.first()).toHaveCSS("animation-name", "none");
    await expect(words.first()).toHaveCSS("transform", "none");
    await expect(words.nth(1)).not.toHaveCSS("transform", "none");
    await expect(page.locator(".exhibit > *").first()).toHaveCSS("transform", "none");
    await expect(page.getByRole("button", { name: "Pause animation" })).toBeHidden();
  });
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("renders the content and hides the controls that need JS", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Read my résumé/ })).toBeVisible();
    await expect(page.locator(".motion-toggle")).toBeHidden();
  });
});

test("the résumé links open the PDF in a new tab, and the main one names its size", async ({ page, request }) => {
  await page.goto("/");
  for (const name of [/^Résumé/, /^Read my résumé/]) {
    const resume = page.getByRole("link", { name });
    await expect(resume).toHaveAttribute("target", "_blank");
    await expect(resume).toHaveAccessibleName(/opens in a new tab/);
  }
  const link = page.getByRole("link", { name: /Read my résumé/ });
  await expect(link).toHaveText(/PDF, \d+ KB/);
  const response = await request.get((await link.getAttribute("href")) ?? "");
  expect(response.headers()["content-type"]).toContain("application/pdf");
});
