// Builds portable/en/<skill>.md: one self-contained prompt per skill (SKILL.md body plus its
// references as appendices) for chat apps that can't load skills: ChatGPT, Claude.ai, Gemini,
// DeepSeek, Kimi, Doubao, custom GPTs, Projects, Gems.
// Usage: node scripts/build-portable.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { ROOT, listSkills } from "./lib.mjs";

const titleOf = (markdown, fallback) => markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? fallback;

// Links to reference files become pointers to the appendix of the same name.
function inlineLinks(markdown) {
  return markdown.replace(/\[([^\]]+)\]\((?:references\/)?([\w-]+)\.md\)/g, "**$1** (see the appendix below)");
}

function demote(markdown) {
  return markdown.replace(/^(#{1,5}) /gm, "#$1 ");
}

export function renderPortable(skill) {
  const title = titleOf(skill.body, skill.name);
  const parts = [
    `<!-- Generated from skills/${skill.name}/SKILL.md by scripts/build-portable.mjs. Edit the skill, not this file. -->`,
    `# ${title}: portable prompt`,
    "",
    "> Copy everything below the line into ChatGPT, Claude, Gemini, DeepSeek, Kimi, Doubao or any chat AI,",
    "> or paste it into a Project / Custom GPT / Gem as its instructions. Then describe your situation.",
    "",
    "---",
    "",
    `You are now running the "${skill.name}" skill. Follow these instructions for the rest of this conversation. Start with step 1 of the workflow.`,
    "",
    inlineLinks(skill.body.trim()),
  ];
  for (const ref of skill.references) {
    parts.push("", "---", "", `## Appendix: ${titleOf(ref.text, ref.file)}`, "", inlineLinks(demote(ref.text.trim()).replace(/^## .+\n+/, "")));
  }
  return parts.join("\n") + "\n";
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const outDir = join(ROOT, "portable", "en");
  mkdirSync(outDir, { recursive: true });
  for (const skill of listSkills()) {
    writeFileSync(join(outDir, `${skill.name}.md`), renderPortable(skill));
    console.log(`wrote portable/en/${skill.name}.md`);
  }
}
