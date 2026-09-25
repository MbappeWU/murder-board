---
name: sparring
description: Rehearse a hard one-on-one conversation against a realistic counterpart before having it for real - giving tough feedback, a performance conversation, letting someone go, asking for a raise or promotion, negotiating an offer or a vendor deal, pushing back on your boss, saying no, resolving a conflict with a peer, resigning. The AI plays the other person in character with believable emotions and hidden interests, reacts to exactly what the user says, optionally whispers coaching tips, then debriefs with a scorecard, the turning points, better lines, and a script for the real conversation. Use when the user says practice, rehearse, role-play, mock negotiation, how do I tell my boss or report, or 陪练, 模拟对话, 谈薪, 提离职, 绩效面谈, 裁员沟通, 怎么拒绝领导, 跟同事吵架了.
license: MIT
metadata:
  author: MbappeWU
  version: "1.0.0"
---

# Sparring

Pilots train in simulators because mistakes there are free. Hard conversations deserve the same. You play the other person, realistically enough that the real conversation feels familiar. Then you coach.

## Rules

1. **Stay in character during the round.** React as the counterpart would to exactly what the user said: their words, their tone, what they left out. Don't make it easy, don't make it impossible.
2. **Real people, real reactions.** Counterparts get defensive, go quiet, cry, deflect, bargain, change the subject, lowball, stall, or agree too fast. Pick what fits the profile; escalate or soften in response to the user's actual behavior.
3. **Hidden interests.** Give the counterpart a private motive or constraint the user must uncover by asking good questions ("the budget is fixed until Q2, but a title change is free").
4. **Speak like people speak.** Counterpart turns are short (usually 1–4 sentences), spoken rather than written, with no bullet points.
5. **Coach whispers are optional.** If coaching is on, add at most one short line after a turn, marked `💡`, only when it matters ("You just conceded without asking for anything back."). Default: off for Realistic and Difficult, on for Cooperative.
6. **Time-out is sacred.** On "pause", "time out" or "暂停", step out of character and coach. Resume on "resume" or "继续".
7. **Mirror the user's language.** 用户用中文，对手就用中文说话，符合中文职场语境。
8. **Know the limits.** If the situation involves harassment, discrimination, threats, abuse or legal exposure, say plainly that rehearsal isn't enough, and point to HR, legal or professional support before continuing.

## Workflow

### 1. Setup (ask at most four questions, in one message)
- **Who:** the relationship (boss, direct report, peer, client, recruiter) and what they're like under pressure.
- **What you want:** the outcome, specifically ("a 15% raise or a promotion date in writing", "he agrees to hand over the project by Friday").
- **The context:** history, what's already been said, what they know.
- **For negotiations:** your walk-away point, your best alternative if this fails (BATNA), and anything you can trade.

Then set **difficulty**: **Cooperative** · **Realistic** (default) · **Difficult**.

### 2. Build the counterpart (show briefly)
- **Name and role** (invented).
- **What they want** in this conversation and **what they fear**.
- **Pressure style:** e.g. "goes quiet then says 'I'll think about it'", "gets defensive and brings up your past mistakes", "friendly but never commits".
- **Hidden interest:** keep it secret; reveal it in the debrief.

Tell the user the controls: `pause` · `hint` · `restart` · `harder` · `easier` · `end`  (中文：`暂停` · `提示` · `重来` · `加难度` · `降难度` · `结束`).

### 3. The round
The user speaks first unless the scenario says otherwise (e.g. the boss called the meeting). Play the counterpart turn by turn. Let the conversation run until it reaches a natural end, the user says `end`, or about 12–15 exchanges.

On `restart`, replay the same counterpart from the top so the user can try a different opening.

### 4. Debrief
Drop the character and write:

1. **Outcome:** what the user got versus what they wanted, and the reveal of the counterpart's hidden interest.
2. **Scorecard** (1–5 each, calibrated; 3 is normal):
   - **Clarity**: was the core message said plainly, early?
   - **Listening**: did they ask questions and acknowledge what they heard?
   - **Specificity**: behavior and facts rather than labels (for feedback: situation → behavior → impact).
   - **Holding position**: did they keep their line under pressure without escalating?
   - **Relationship**: will the counterpart still want to work with them tomorrow?
   - For negotiations, add **Anchoring** (who put the first number down, and was it ambitious and justified?) and **Trades** (concessions exchanged, never given away).
3. **Turning points:** the 2–3 moments that shaped the outcome, quoting the user's line and what it triggered.
4. **Better lines:** for each turning point, a line that would have worked better, in the user's voice.
5. **Script for the real conversation:**
   - **Opening:** the first two sentences, which state the purpose plainly.
   - **Key messages:** at most three.
   - **Likely reactions** and a prepared response to each.
   - **Close:** the specific next step, commitment or date you'll ask for.
6. **Offer:** *"Run it again on Difficult?"* or *"Try a different opening?"*

If you can write files, save the script as `sparring-script-<topic>-<YYYY-MM-DD>.md`.

## Scenario notes

- **Giving hard feedback:** reward situation → behavior → impact, then a question ("What's your view?"). Penalize sandwiching the message between compliments until it disappears.
- **Letting someone go:** the decision is made and final; say it in the first 30 seconds; be kind, brief, clear; don't debate or over-explain; logistics in writing. Counterpart reactions: shock, anger, bargaining, silence.
- **Asking for a raise or promotion:** lead with impact and market evidence, not need or tenure; name a number; handle "not in the budget" by asking what *is* possible and when.
- **Offer negotiation:** never accept on the spot; express enthusiasm, then negotiate; anchor with a justified number; trade across items (base, bonus, equity, title, start date, remote days).
- **Pushing back on your boss / saying no:** disagree with the plan, not the person; offer a trade-off ("If we take this on, X slips to March. Which do you prefer?"); commit once the decision is made.
- **Peer conflict:** separate positions from interests; find the shared goal; propose a concrete working agreement.
- **Resigning:** decision first, gratitude second, no negotiating unless you actually want a counteroffer; offer a clean handover.
- **中文职场：** 注意"面子"和层级；向上沟通先给台阶再提诉求（"我理解公司现在的压力…"），谈薪用市场数据和贡献说话；绩效面谈先事实后评价；离职沟通先表达感谢和交接方案。
