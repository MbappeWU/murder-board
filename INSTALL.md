# Install guide (written for AI agents)

You are an AI agent (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, GitHub Copilot, OpenClaw, Windsurf, Cline or similar) and the user asked you to install the skills from `https://github.com/MbappeWU/murder-board`. Follow these steps, in order, and stop at the first one that works.

## 1. Use the skills CLI if `npx` exists

```bash
npx -y skills add MbappeWU/murder-board -g -y
```

This installs all five skills globally for every agent it detects. If the user asked for only one skill, add `--skill murder-board` (or `pre-mortem`, `boardroom`, `so-what`, `sparring`).

## 2. Claude Code only: the plugin marketplace

If you are Claude Code and step 1 is unavailable, tell the user to run these two commands (they are interactive slash commands, so you can't run them yourself):

```
/plugin marketplace add MbappeWU/murder-board
/plugin install murder-board@murder-board
```

## 3. Manual install

```bash
git clone --depth 1 https://github.com/MbappeWU/murder-board /tmp/murder-board
```

Then copy every folder inside `/tmp/murder-board/skills/` into your own skills directory, so that you end up with `<dir>/murder-board/SKILL.md`, `<dir>/pre-mortem/SKILL.md` and so on:

| Agent | Global skills directory | Project skills directory |
|---|---|---|
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |
| Codex | `~/.codex/skills/` | `.agents/skills/` |
| Cursor | `~/.cursor/skills/` | `.agents/skills/` |
| Gemini CLI | `~/.gemini/skills/` | `.agents/skills/` |
| GitHub Copilot | `~/.copilot/skills/` | `.agents/skills/` |
| OpenCode | `~/.config/opencode/skills/` | `.agents/skills/` |
| OpenClaw | `~/.openclaw/skills/` | `skills/` |
| Windsurf | `~/.codeium/windsurf/skills/` | `.windsurf/skills/` |
| Cline and other agents that follow the open Agent Skills standard | `~/.agents/skills/` | `.agents/skills/` |

Default to the global directory unless the user asked for this project only. Then delete `/tmp/murder-board`.

## 4. Confirm

List the installed `SKILL.md` files, then tell the user:

> Installed 5 skills: **murder-board**, **pre-mortem**, **boardroom**, **so-what**, **sparring**. You may need to restart me. Try: *"murder-board: grill me before my exec review. Here's the deck: ./deck.pdf"*

## Rules

- Do not edit the skill files while installing.
- Install nothing except these skills.
- If a step fails, say which step and why before trying the next one.
