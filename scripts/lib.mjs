// Shared helpers for the repo scripts. No dependencies.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SKILLS_DIR = join(ROOT, "skills");

// Minimal frontmatter parser for the subset of YAML used in SKILL.md files:
// top-level `key: value` lines plus one level of nested `key: value` under a parent key.
export function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: null, body: text };
  const data = {};
  let parent = null;
  for (const line of match[1].split("\n")) {
    if (!line.trim()) continue;
    const nested = line.match(/^\s{2,}([\w-]+):\s*(.*)$/);
    const top = line.match(/^([\w-]+):\s*(.*)$/);
    if (nested && parent) {
      data[parent][nested[1]] = unquote(nested[2]);
    } else if (top) {
      if (top[2] === "") {
        parent = top[1];
        data[parent] = {};
      } else {
        parent = null;
        data[top[1]] = unquote(top[2]);
      }
    }
  }
  return { data, body: text.slice(match[0].length) };
}

function unquote(value) {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

export function listSkills() {
  return readdirSync(SKILLS_DIR)
    .filter((name) => statSync(join(SKILLS_DIR, name)).isDirectory())
    .sort()
    .map((name) => {
      const dir = join(SKILLS_DIR, name);
      const raw = readFileSync(join(dir, "SKILL.md"), "utf8");
      const { data, body } = parseFrontmatter(raw);
      const refDir = join(dir, "references");
      const references = safeList(refDir)
        .filter((f) => f.endsWith(".md"))
        .sort()
        .map((file) => ({ file, text: readFileSync(join(refDir, file), "utf8") }));
      return { name, dir, raw, data, body, references };
    });
}

function safeList(dir) {
  try {
    return readdirSync(dir);
  } catch {
    return [];
  }
}
