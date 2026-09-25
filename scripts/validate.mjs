// Validates every skills/<name>/SKILL.md against the Agent Skills format,
// and checks that generated files (portable prompts, plugin manifest) are in sync.
// Usage: node scripts/validate.mjs
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, listSkills } from "./lib.mjs";
import { renderPortable } from "./build-portable.mjs";

const errors = [];
const fail = (msg) => errors.push(msg);

const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const skills = listSkills();

if (skills.length === 0) fail("No skills found in skills/");

for (const skill of skills) {
  const where = `skills/${skill.name}/SKILL.md`;
  const { data, body } = skill;
  if (!data) {
    fail(`${where}: missing YAML frontmatter`);
    continue;
  }
  if (data.name !== skill.name) fail(`${where}: name "${data.name}" must match directory "${skill.name}"`);
  if (!NAME_RE.test(data.name || "")) fail(`${where}: name must be lowercase letters, digits and single hyphens`);
  if ((data.name || "").length > 64) fail(`${where}: name longer than 64 characters`);
  if (!data.description) fail(`${where}: description is required`);
  if ((data.description || "").length > 1024) {
    fail(`${where}: description is ${data.description.length} characters (max 1024)`);
  }
  if (/:\s/.test(data.description || "")) {
    fail(`${where}: description contains ": ", which breaks unquoted YAML`);
  }
  if (!data.license) fail(`${where}: license is required in this repo`);
  if (!data.metadata?.version) fail(`${where}: metadata.version is required in this repo`);

  const lines = body.split("\n").length;
  if (lines > 500) fail(`${where}: body is ${lines} lines; keep SKILL.md under 500 lines and move detail to references/`);

  // Every relative link must resolve.
  for (const [, target] of body.matchAll(/\]\(((?!https?:)[^)#]+)\)/g)) {
    if (!existsSync(join(skill.dir, target))) fail(`${where}: broken link to ${target}`);
  }

  const portable = join(ROOT, "portable", "en", `${skill.name}.md`);
  if (!existsSync(portable)) {
    fail(`portable/en/${skill.name}.md is missing; run: node scripts/build-portable.mjs`);
  } else if (readFileSync(portable, "utf8") !== renderPortable(skill)) {
    fail(`portable/en/${skill.name}.md is out of date; run: node scripts/build-portable.mjs`);
  }
  if (!existsSync(join(ROOT, "portable", "zh-CN", `${skill.name}.md`))) {
    fail(`portable/zh-CN/${skill.name}.md is missing (Chinese portable prompt)`);
  }
}

// The plugin manifest must list every skill folder the plugin ships.
const plugin = JSON.parse(readFileSync(join(ROOT, ".claude-plugin", "plugin.json"), "utf8"));
const marketplace = JSON.parse(readFileSync(join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));
if (!marketplace.plugins?.some((p) => p.name === plugin.name)) {
  fail(`.claude-plugin/marketplace.json does not list plugin "${plugin.name}"`);
}
const versions = new Set(skills.map((s) => s.data?.metadata?.version));
if (!versions.has(plugin.version) || versions.size !== 1) {
  fail(`skill metadata.version values (${[...versions].join(", ")}) must all equal plugin.json version ${plugin.version}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${skills.length} skills valid: ${skills.map((s) => s.name).join(", ")}`);
