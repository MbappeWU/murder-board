// Builds the GitHub Pages site into _site/: injects every skill's portable prompt
// (English and Chinese) into site/index.html and copies the static assets.
// Usage: node scripts/build-site.mjs
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, listSkills } from "./lib.mjs";

const out = join(ROOT, "_site");
mkdirSync(out, { recursive: true });

const read = (path) => (existsSync(path) ? readFileSync(path, "utf8") : null);

// The flagship first, then the companions in the order the README introduces them.
const ORDER = ["murder-board", "pre-mortem", "boardroom", "so-what", "sparring"];
const rank = (name) => (ORDER.includes(name) ? ORDER.indexOf(name) : ORDER.length);

const data = {
  skills: listSkills()
    .sort((a, b) => rank(a.name) - rank(b.name))
    .map((skill) => ({
      name: skill.name,
      en: read(join(ROOT, "portable", "en", `${skill.name}.md`)) ?? "",
      zh: read(join(ROOT, "portable", "zh-CN", `${skill.name}.md`)),
    })),
};

// Escape "<" so no prompt text can close the <script> tag it is embedded in.
const json = JSON.stringify(data).replace(/</g, "\\u003c");
const template = readFileSync(join(ROOT, "site", "index.html"), "utf8");
if (!template.includes("__DATA__")) throw new Error("site/index.html is missing the __DATA__ placeholder");
writeFileSync(join(out, "index.html"), template.replace("__DATA__", () => json));

for (const [from, to] of [
  ["assets/social-card.png", "social-card.png"],
  ["assets/favicon.svg", "favicon.svg"],
]) {
  const src = join(ROOT, from);
  if (existsSync(src)) copyFileSync(src, join(out, to));
}

console.log(`built _site/index.html with ${data.skills.length} skills`);
