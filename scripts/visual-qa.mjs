import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = "http://127.0.0.1:3000";
const viewports = [
  { name: "mobile-360", width: 360, height: 780 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 900 },
];
const routes = [
  { name: "home", url: "/" },
  { name: "blog", url: "/blog" },
  { name: "article", url: "/blog/como-empezar-en-el-gym-sin-perder-el-tiempo" },
  { name: "admin-login", url: "/admin/login" },
  { name: "legal", url: "/legal" },
];

await mkdir("qa-screenshots", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
let failures = 0;

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: {width: viewport.width, height: viewport.height}, deviceScaleFactor: 1, reducedMotion: "reduce" });
  const page = await context.newPage();

  for (const route of routes) {
    const browserErrors = [];
    const onError = error => browserErrors.push(error.message);
    page.on("pageerror", onError);
    try {
      const response = await page.goto(base + route.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.locator("h1").first().waitFor({ timeout: 10000 });
      await page.evaluate(() => document.fonts.ready);

      const result = await page.evaluate(() => {
        const body = document.body;
        const title = document.querySelector("h1");
        const bodyFamily = getComputedStyle(body).fontFamily;
        const titleFamily = title ? getComputedStyle(title).fontFamily : "";
        const horizontal = Math.max(document.documentElement.scrollWidth, body.scrollWidth);
        return { horizontal, viewport: window.innerWidth, bodyFamily, titleFamily };
      });

      const errors = [];
      if (!response || response.status() >= 400) errors.push("HTTP " + response?.status());
      if (result.horizontal > result.viewport + 2) errors.push("Horizontal overflow: " + result.horizontal + " > " + result.viewport);
      if (!result.bodyFamily.toLowerCase().includes("raleway") || !result.titleFamily.toLowerCase().includes("raleway")) errors.push("Raleway not applied");
      errors.push(...browserErrors.map(message => "JS: " + message));

      if (route.name === "home" && viewport.width < 1024) {
        const button = page.getByRole("button", { name: "Abrir menú" });
        await button.click();
        if (!await page.getByRole("navigation", { name: "Menú móvil" }).isVisible()) errors.push("Mobile navigation not visible");
        await page.keyboard.press("Escape");
        if (await page.getByRole("navigation", { name: "Menú móvil" }).count()) errors.push("Mobile navigation did not close with Escape");
      }

      const takeScreenshot = (
        ["home", "blog"].includes(route.name) && ["mobile-390", "desktop-1440"].includes(viewport.name)
      ) || (["article", "admin-login"].includes(route.name) && viewport.name === "mobile-390");
      if (takeScreenshot) {
        // Scroll through the complete page so native lazy images are fetched.
        await page.evaluate(async () => {
          const step = Math.max(450, Math.floor(window.innerHeight * 0.75));
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 60));
          }
          window.scrollTo(0, 0);
        });
        await page.waitForLoadState("networkidle");
        const brokenImages = await page.evaluate(() => Array.from(document.images)
          .filter(image => image.complete && image.naturalWidth === 0)
          .map(image => image.getAttribute("src")));
        if (brokenImages.length) errors.push("Broken images: " + brokenImages.join(", "));
      }
      if (["home", "blog"].includes(route.name) && ["mobile-390", "desktop-1440"].includes(viewport.name)) {
        await page.screenshot({ path: "qa-screenshots/" + route.name + "-" + viewport.name + ".png", fullPage: true, animations: "disabled" });
      }
      if (["article", "admin-login"].includes(route.name) && viewport.name === "mobile-390") {
        await page.screenshot({ path: "qa-screenshots/" + route.name + "-" + viewport.name + ".png", fullPage: true, animations: "disabled" });
      }

      if (errors.length) {
        failures++;
        console.error("FAIL", viewport.name, route.name, JSON.stringify(errors));
      } else {
        console.log("PASS", viewport.name, route.name, "width=" + result.horizontal, "font=" + result.titleFamily);
      }
    } catch (error) {
      failures++;
      console.error("FAIL", viewport.name, route.name, error);
    } finally {
      page.off("pageerror", onError);
    }
  }
  await context.close();
}

await browser.close();
if (failures) {
  console.error("Responsive smoke checks failed:", failures);
  process.exitCode = 1;
} else {
  console.log("All 20 responsive page checks passed.");
}
