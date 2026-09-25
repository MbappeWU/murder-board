# Example session: headcount ask at an exec review

> Illustrative. The company, the deck and the people are fictional. Shortened where marked `[…]`.
> Skill: `murder-board` · Mode: Drill · Difficulty: Realistic

---

**You:** murder-board: prep me for Thursday's exec review. I'm asking for 4 engineers to rewrite our payments service. Deck is `./payments-rewrite.pdf`. I'm dreading the question about last quarter.

**Murder Board:** Read the deck (12 slides). Here's what the panel sees:

- **The ask:** 4 engineers for 2 quarters to rewrite payments. About $450K fully loaded, a number the deck never states.
- ⚠ Slide 4 claims a **3-month payback**; the savings on slide 9 ($40K/month) imply **about 11 months**.
- ⚠ No alternatives slide: patching the current service, buying a vendor, or rewriting only the ledger.
- ⚠ Last quarter the team shipped **2 of 5** commitments (slide 2). You flagged this yourself.
- ⚠ Soft spots: "significant reliability gains", "modern architecture", "future-proof".

| Panelist | Cares about | Signature move |
|---|---|---|
| **Priya Raman, CEO** | Whether to trust your judgment | Cuts to the decision |
| **Dana Whitfield, CFO** | Payback, and what else the money could buy | The number behind the number |
| **Marcus Lee, VP Engineering** | Who does it and what they stop doing | Walks the plan week by week |
| **Tom Becker, Head of Product** (peer) | His roadmap losing two engineers | "Why am I hearing this now?" |

Controls: `hint` · `skip` · `harder` · `easier` · `score` · `pause` · `end`. Starting.

---

**Dana Whitfield, CFO:** Slide 4 says this pays back in three months. Slide 9 says it saves forty thousand a month. Four engineers for two quarters is about four hundred and fifty thousand. Walk me from those numbers to three months.

**You:** The three months is more about the incident costs. We had four payment outages last quarter, and each one costs us in refunds and support time, so if you add that in it's much faster.

**Dana Whitfield, CFO:** How much did the four outages cost, in total?

**You:** I'd have to check the exact number. Roughly a hundred thousand?

```
Directness ●●○○○  Evidence ●○○○○  Honesty ●●○○○  Brevity ●●●○○  Composure ●●●○○
Diagnosis: Your own slides contradict each other, and you estimated a number under pressure.
           She now doubts every number in the deck.
Say this instead: "You're right, slide 4 is wrong. On direct savings alone it's about
11 months. The case rests on outages: four last quarter cost [$X] in refunds and support.
Include those and payback is [N] months. I'll fix the slide and send the math today."
```

---

**Priya Raman, CEO:** You're asking for four engineers. Last quarter your team committed to five things and shipped two. Why should I believe this plan?

**You:** Last quarter was unusual. The migration turned out much bigger than anyone expected, priorities changed halfway through, and we lost a senior engineer in week six, so…

```
Directness ●○○○○  Evidence ●○○○○  Honesty ●●●○○  Brevity ●●○○○  Composure ●●●○○
Diagnosis: You opened with reasons. She asked "why believe you", not "what went wrong".
           This was the question you feared, and it's the highest Kill Score on the list.
Say this instead: "Fair. We shipped 2 of 5 because I underestimated the migration by six
weeks. This plan is different in two ways: a 3-week buffer, and a checkpoint. Give me
two engineers now, and the other two only if we hit [milestone] by [date]."
```

---

**Tom Becker, Head of Product:** Two of these four engineers are on my roadmap for Q1. When were you planning to tell me?

**You:** Fair point. I should have come to you first. We haven't agreed which two engineers yet. I'd rather sort that out with you this week than here.

```
Directness ●●●●○  Evidence ●●●○○  Honesty ●●●●●  Brevity ●●●●○  Composure ●●●●●
Diagnosis: Owned the miss and moved the fight out of the room. Good. Next time, add
           the one fact he needs: which Q1 item slips, and by how long.
```

[… 7 more questions, including "What if we buy instead of build?", "What would make you stop halfway?" and a curveball: "If this were your money, would you spend it?"]

---

## Prep sheet: Payments rewrite · exec review · Thursday

**Readiness: 48/100. Not ready.** The ask is sound, but the deck contradicts itself on payback, and your answer to the track-record question is the one that sinks it.

**The 3 landmines**
1. *"Why should I believe this plan?"* Fix: own the 2-of-5, then offer the staged ask (2 engineers now, 2 at the checkpoint).
2. *"Walk me from those numbers to three months."* Fix: correct slide 4 before the meeting and bring the outage-cost math.
3. *"What else did you consider?"* Fix: add one slide comparing patch, buy and rewrite on cost, time and risk.

**10 must-nail answers** [… question → two-line answer → proof point, for each]

**Bring this**
- Outage cost last quarter: refunds, credits and support hours
- The vendor quote you got in May
- Named engineers, and what each one stops doing

**Fix the deck**
- Slide 4: replace "3-month payback" with the real number and its basis.
- Add an alternatives slide after slide 3.
- Slide 7: cut "future-proof" and "modern". Say which failure modes go away.

**First 30 seconds**
> "I'm asking for two engineers now and two more in March if we hit the checkpoint. Payments caused four outages last quarter that cost us [$X]. This fixes the cause, not the symptoms. Here's why a staged rewrite beats patching or buying."

**When you don't know**
- "I don't have that number with me. You'll have it by 5 pm, and here's what I do know: …"

**Your patterns**
- Context before the answer in 6 of 10 answers.
- Estimated numbers under pressure twice. Say "I'll get it to you" instead.
- Strongest when you owned a mistake (Q3). Do more of that.

Saved to `./murder-board-prep-payments-rewrite-2026-09-24.md`. Run it again on **Brutal**, or drill only the landmines?
