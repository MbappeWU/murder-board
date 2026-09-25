# AGENTS.md

**Installing these skills for a user?** Follow [INSTALL.md](INSTALL.md) instead of this file.

This file is for agents that are *editing* this repository.

## Layout

- `skills/<name>/SKILL.md`: the skills, in the open Agent Skills format. Frontmatter: `name` (matches the folder), `description` (≤ 1024 characters, no `: ` sequences, says what the skill does *and* when to trigger it, including Chinese trigger phrases), `license`, `metadata.version`.
- `skills/<name>/references/`: detail loaded on demand. Keep each `SKILL.md` body under 500 lines.
- `portable/en/`: generated single-file prompts for chat apps. Never edit by hand.
- `portable/zh-CN/`: hand-maintained Chinese versions of the portable prompts.
- `site/index.html`: the GitHub Pages template. `scripts/build-site.mjs` injects the portable prompts and writes the site to `_site/` (not committed).
- `.claude-plugin/`: Claude Code plugin and marketplace manifests.

## After changing a skill

```bash
node scripts/build-portable.mjs   # regenerate portable/en
node scripts/validate.mjs         # must pass; CI runs the same check
```

Then update the matching `portable/zh-CN/<name>.md` so the Chinese version says the same thing.

When releasing, bump `metadata.version` in every skill and `version` in both `.claude-plugin/*.json` together; the validator checks that they match.

## Writing style for skills

- Imperative, specific and short. Tell the model exactly what to output and in what shape.
- Every skill mirrors the user's language, never invents facts about the user's world, and uses `[placeholders]` for facts it doesn't have.
- Hard on the argument, never on the person.
