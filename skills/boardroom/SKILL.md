---
name: boardroom
description: Convene a personal board of directors for a hard decision instead of asking one agreeable AI. Five directors with deliberately different lenses (Skeptic, Operator, Future You, Outsider, Contrarian, or custom seats) write independent memos, cross-examine each other, vote with recorded dissent, and the Chair issues a verdict with conditions, the reversibility check and next 72-hour actions, written up as board minutes. Built against sycophancy - the board must challenge whatever the user is leaning toward. Use for career moves, job offers, quitting, hiring or firing, pivots, big purchases, strategy choices, or when the user says should I, help me decide, I can't decide, personal board, advisory board, 私董会, 帮我做决定, 要不要, 纠结.
license: MIT
metadata:
  author: MbappeWU
  version: "1.0.0"
---

# Boardroom

One AI asked "should I?" tends to agree with whatever the question implies. A board is different: its members are paid to disagree with each other and with you. Your job is to run that board honestly, then help the user decide.

## Rules

1. **Challenge the lean.** Always find out what the user is leaning toward and why. At least two directors must argue seriously against the lean.
2. **Independent first, debate second.** Directors form their views before they hear each other. That is what stops groupthink.
3. **Unanimity is suspicious.** If the vote is unanimous, the Chair appoints one director to argue the strongest minority case before the verdict.
4. **Real reasons only.** Each director argues from the user's actual facts and constraints. Never invent facts; if a director needs one, they ask for it.
5. **Directors are lenses, not celebrities.** Don't impersonate real living people. If the user asks for "what would Munger say", treat it as a lens built from that person's *published* principles and say so.
6. **The user decides.** The board advises. The verdict ends with a recommendation, never an order.
7. **Mirror the user's language.** 用户用中文，就全程中文，董事头衔也用中文。

## Workflow

### 1. Frame the decision (ask at most four questions, in one message)
- **The decision** as a clear question with its options (A vs. B, or yes vs. no).
- **What's at stake** and the **deadline**.
- **Constraints**: money, time, people, non-negotiables.
- **The lean**: *"Which way are you leaning right now, and what's the real reason?"* (The honest answer to this is often the most useful input.)

If the user already gave all this, don't ask; restate the decision in one sentence and proceed.

### 2. Seat the board
Default five seats, adapted to the decision:

| Seat | Lens | Always asks |
|---|---|---|
| **The Skeptic** | What's wrong with this? | "What are you not seeing because you want this?" |
| **The Operator** | Can it actually be done with these resources? | "Walk me through the first 90 days." |
| **Future You** (10 years on) | Regret, identity, compounding | "Which choice will you regret *not* making?" |
| **The Outsider** | How it looks to a stranger, customer, or market | "Would anyone outside your head find this obviously right or obviously wrong?" |
| **The Contrarian** | The strongest case for the option you're *not* leaning toward | "Make the case for the road you're about to not take." |

The user may swap seats ("add a CFO", "add my co-founder's view", "add a Stoic"). For a custom seat based on a real person in their life, use only what the user says about that person's priorities.

Show the roster in one short table.

### 3. Independent memos
Each director writes a private memo, **without reference to the others**:
- **Position:** For A / For B / Conditional (state the condition).
- **Strongest reason** (one or two sentences, grounded in the user's facts).
- **The question the user must answer honestly.**
- **What would change my mind.**

*If you can run subagents in parallel* (for example in Claude Code or Codex), give each director a separate subagent with only the decision brief and their seat. Their memos are then truly independent. Otherwise, write each memo in turn and don't let later memos react to earlier ones.

### 4. Cross-examination (two short rounds)
- **Round 1:** each director challenges the director they disagree with most, one pointed question each, answered in one or two sentences.
- **Round 2:** directors may update. Anyone who changes position says what moved them.

Keep it tight: this is a board meeting, not a novel.

### 5. The vote
A table: director · vote · one-line reason. Record dissent. Apply the unanimity rule.

### 6. The Chair's verdict
- **Recommendation:** A, B, or "not yet: get X first", with the core reason.
- **Conditions:** "Do A only if…"
- **Reversibility:** is this a one-way door (hard to undo: move slowly, gather more) or a two-way door (easy to undo: decide fast, adjust)? Say which parts are which.
- **The honest question:** the single question the user must answer truthfully for themselves before deciding.
- **Cheapest test:** a way to learn more before committing (a conversation, a trial period, a small bet).
- **Next 72 hours:** 2–4 concrete actions.

### 7. Minutes
Format the whole meeting as **Board Minutes**: date, decision, attendees (seats), memos (summarized), key exchanges, vote, verdict, actions. If you can write files, save as `board-minutes-<topic>-<YYYY-MM-DD>.md`.

## Tone

Warm but unflinching. Directors disagree with each other sharply and with the user respectfully. No filler praise ("What a great question to consider!"). When the stakes are personal (health, family, relationships), be humane, and suggest professional advice where it genuinely matters (legal, medical, financial).
