const { chromium } = require("/Users/spagett/.npm/_npx/705bc6b22212b352/node_modules/playwright");

const VIEWPORT = { width: 1440, height: 900 };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });
  await page.goto("https://www.gentle.systems", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(2500);

  const data = await page.evaluate(() => {
    const buckets = new Map();

    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (rect.width < 4 || rect.height < 4) continue;

      const hasTextNode = [...el.childNodes].some(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
      );
      if (!hasTextNode) continue;

      const text = el.textContent?.trim().replace(/\s+/g, " ");
      if (!text || text.length < 2 || text.length > 100) continue;

      const px = parseFloat(cs.fontSize);
      if (!px || px < 10) continue;

      const key = [px, cs.fontWeight, cs.lineHeight, cs.letterSpacing].join("|");
      if (!buckets.has(key)) {
        buckets.set(key, {
          fontSizePx: px,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          fontFamily: cs.fontFamily.split(",")[0].replace(/"/g, "").trim(),
          tags: new Set(),
          classHints: new Set(),
          examples: [],
          count: 0,
        });
      }
      const b = buckets.get(key);
      b.count++;
      b.tags.add(el.tagName.toLowerCase());
      const cls =
        typeof el.className === "string"
          ? el.className.split(/\s+/).find((c) => c && !c.startsWith("css-"))
          : "";
      if (cls) b.classHints.add(cls);
      if (b.examples.length < 2) b.examples.push(text.slice(0, 55));
    }

    const inferRole = (b) => {
      const tags = [...b.tags];
      const cls = [...b.classHints].join(" ").toLowerCase();
      if (cls.includes("tag") || cls.includes("pill") || cls.includes("badge"))
        return "Tag / pill";
      if (tags.includes("button") || cls.includes("button")) return "Button";
      if (tags.includes("h1")) return "Display / H1";
      if (tags.includes("h2")) return "H2";
      if (tags.includes("h3")) return "H3";
      if (tags.includes("h4")) return "H4";
      if (tags.includes("a") && b.fontSizePx <= 14) return "Nav link / small link";
      if (tags.includes("a")) return "Text link";
      if (tags.includes("p") && b.fontSizePx >= 20) return "Lead body";
      if (tags.includes("p")) return "Body";
      if (tags.includes("li")) return "List";
      if (tags.includes("span") && b.fontSizePx <= 14) return "Label / meta";
      if (b.fontSizePx >= 40) return "Display headline";
      if (b.fontSizePx >= 28) return "Large headline";
      if (b.fontSizePx >= 22) return "Subhead";
      if (b.fontSizePx >= 16) return "Body";
      return "Small / UI";
    };

    return {
      viewport: { width: innerWidth, height: innerHeight },
      buckets: [...buckets.values()]
        .sort((a, b) => b.fontSizePx - a.fontSizePx)
        .map((b) => ({
          role: inferRole(b),
          fontSizePx: b.fontSizePx,
          fontWeight: b.fontWeight,
          lineHeight: b.lineHeight,
          letterSpacing: b.letterSpacing,
          fontFamily: b.fontFamily,
          tags: [...b.tags].slice(0, 5),
          classHints: [...b.classHints].slice(0, 3),
          examples: b.examples,
          count: b.count,
        })),
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
