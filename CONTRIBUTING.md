# Contributing

Thanks for making the board tougher. Three kinds of contribution help most.

## 1. A killer question

The question that actually sank someone, or nearly did. Open an issue with the **🔪 Killer question** template: the situation, who asked, the question, and why it was deadly. The best ones become sample questions in [`panel.md`](skills/murder-board/references/panel.md) or [`presets.md`](skills/murder-board/references/presets.md).

## 2. A preset

Your high-stakes moment isn't covered? Add it to [`presets.md`](skills/murder-board/references/presets.md) using the same shape as the others:

- **Seats**: which archetypes from `panel.md` are in the room
- **Really deciding**: what the room is actually judging
- **Decisive questions**: 3–6, written the way that room talks
- **Rules**: anything special (timing, format, what gets penalized)

Presets in other languages are welcome. Write them in that language, as the Chinese presets are.

## 3. Improvements to a skill

Before you open a PR:

```bash
node scripts/build-portable.mjs   # regenerates portable/en
node scripts/validate.mjs         # must pass; CI runs it too
```

If you change a skill's behavior, update the matching `portable/zh-CN/<name>.md` as well (or say in the PR that it needs translating, and someone will pick it up).

### Style

- Tell the model exactly what to do and what the output looks like. Short imperative sentences.
- Keep every `SKILL.md` under 500 lines; move libraries and long examples to `references/`.
- Hard on the argument, never on the person. No invented facts about the user's world.
