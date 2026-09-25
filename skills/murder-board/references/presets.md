# Presets

Each preset gives default seats (archetypes from [panel.md](panel.md)), what the room is *really* deciding, the questions that usually decide it, and any special rules. Adapt freely: presets are starting points, not scripts. Always rewrite questions around the user's material.

If the user names a situation that isn't here, pick the closest preset and adjust the seats.

---

## exec-review: plan, proposal or project update to leadership
- **Seats:** The Boss · CFO · Operator · Skeptic (+ Peer stakeholder if other teams are affected)
- **Really deciding:** do we trust this person's judgment enough to say yes, and what's the risk to *us*?
- **Decisive questions:**
  - "What do you need from us today, in one sentence?"
  - "What did you consider instead, and why is this better?"
  - "What's the track record behind this estimate?"
  - "What gets dropped to make room for this?"
  - "What would make you stop?"
- **Rules:** penalize any answer that doesn't lead with the conclusion. The Boss interrupts after 30 seconds of context.

## budget-ask: budget or headcount request
- **Seats:** CFO · The Boss · Operator · Peer stakeholder
- **Really deciding:** is this the best use of this money compared with everything else asking for it?
- **Decisive questions:**
  - "What's the return, and when?"
  - "What happens if we fund half?"
  - "Why can't the current team absorb this?"
  - "How will we know in 90 days that this was a mistake?"
- **Rules:** every number must reconcile. Ask for the cost of *not* doing it.

## board-meeting: company board, QBR, steering committee
- **Seats:** Investor (board member) · Independent director (Skeptic) · CFO · Operator
- **Really deciding:** is management telling us the truth about the state of the business?
- **Decisive questions:**
  - "You missed the plan by 18%. What did you learn about your forecasting?"
  - "What's the one thing that keeps you up at night that isn't on these slides?"
  - "How many months of runway at the current burn, and at the downside case?"
- **Rules:** bad news buried after slide 5 costs heavy points on Honesty.

## investor-pitch: seed to Series B (路演)
- **Seats:** Lead partner (Investor) · Skeptical partner (Skeptic) · Operator partner · (Customer, if B2B)
- **Really deciding:** can this become very large, and is this the team to do it?
- **Decisive questions:**
  - "Why now? What changed in the last 24 months?"
  - "What's your wedge, and how does it expand?"
  - "Walk me through a cohort. What does retention look like at month 6?"
  - "Who's the competitor you actually lose deals to?"
  - "How much are you raising, and what milestones does it buy?"
- **Rules:** penalize top-down TAM, "no competition" and vanity metrics. Push on the least-proven step of the growth story.

## job-interview: behavioral / final round
- **Seats:** Hiring Manager · Bar Raiser · a future Peer · (Exec for senior roles)
- **Really deciding:** will this person do the job at the level, and are they someone we trust?
- **Decisive questions:**
  - "Tell me about a project that failed because of you."
  - "Give me an example where you disagreed with your manager. What happened?"
  - "What's the most impact you've had, in numbers? What was *your* part?"
  - "Why this company, and why now?"
- **Rules:** drill every story three levels deep with STAR follow-ups. Penalize "we" without "I" and results without numbers. For **system design**, add The Technical Expert: press on requirements, scale estimates, trade-offs and failure modes. For **product sense / case**, press on the user, the metric and the prioritization logic.

## promo-committee: promotion case
- **Seats:** Committee chair (senior leader) · Skip-level manager · Skeptic from another org · HR partner
- **Really deciding:** is this person *already* operating at the next level, with evidence?
- **Decisive questions:**
  - "What did you do this cycle that someone at your current level wouldn't have done?"
  - "Where's the scope expansion? Name the decision you owned."
  - "Who would disagree that you're ready, and what would they say?"
- **Rules:** effort and hours don't count, only impact and scope. Push for evidence behind every claim.

## thesis-defense: PhD or master's defense, quals, paper review (论文答辩)
- **Seats:** Committee Chair · Methods expert (Technical Expert) · Outside member (Skeptic) · Domain expert
- **Really deciding:** is the contribution real, new and rigorously supported?
- **Decisive questions:**
  - "State your contribution in one sentence."
  - "What's the strongest alternative explanation for your main result?"
  - "Why this method? What would a different method have shown?"
  - "What are the limitations you'd attack if this were someone else's thesis?"
- **Rules:** overclaiming is the worst sin. Reward "that's outside what my data can show."

## design-review: architecture or design doc, RFC
- **Seats:** Technical Expert (principal engineer) · Operator (on-call owner) · Security/Risk · Peer team lead
- **Really deciding:** will this work, can we run it, and did they consider the alternatives?
- **Decisive questions:**
  - "What alternatives did you reject, and why?"
  - "What's the failure mode that pages someone at 3 a.m.?"
  - "How do we roll this back?"
  - "What's the migration plan for existing data and clients?"
- **Rules:** unexplained choices and missing non-goals are fair game.

## product-review: PRD, launch or roadmap review
- **Seats:** The Boss (product leader) · Customer · Operator (engineering) · CFO or data lead
- **Really deciding:** is this the most important problem, and will this solve it?
- **Decisive questions:**
  - "What evidence says users have this problem? How many, how badly?"
  - "What metric moves, by how much, by when?"
  - "What's the smallest version that tests the riskiest assumption?"
  - "What are you saying no to?"

## efficiency-review: justifying a team's efficiency or performance to a skeptical executive (效能质询)
- **Seats:** The Boss (already believes efficiency fell) · HR / People partner (owns the headcount model) · CFO · Technical Expert
- **Really deciding:** is the extra headcount or cost justified by extra output, and should we keep funding this team?
- **Decisive questions:**
  - "Headcount is up X% and output is flat. Isn't efficiency down? One sentence."
  - "What does the extra headcount do that wasn't being done before?"
  - "That's activity (lines of code, commits, tickets). What actually shipped, per person?"
  - "This ratio uses a different headcount from your people slide. Which one is right?"
  - "Is this saving real, and is it in this year's numbers?"
  - "Should we keep hiring? On what criterion?"
- **Rules:** activity metrics are not accepted as proof of efficiency. Demand output per unit of input, with one consistent denominator, measured the same way in both periods. Reward answers that first acknowledge the metric the executive is using, then show what it misses. Penalize every hedge.

## sales-pitch: customer pitch and objection handling
- **Seats:** Economic buyer (CFO) · Champion's skeptical boss · End user · Procurement
- **Really deciding:** is this worth the money and the switching pain, and is this vendor safe?
- **Decisive questions:** price vs. competitor, implementation time, references, security review, "what if you go under?"

## all-hands: tough employee Q&A (reorg, layoffs, strategy change)
- **Seats:** The Employee ×2 (a long-tenured one and a new hire) · HR partner · Journalist-style skeptic
- **Really deciding:** is leadership being straight with us?
- **Decisive questions:** "Are more cuts coming?", "Why should we believe this plan when the last one changed?", "What does this mean for my team specifically?"
- **Rules:** euphemisms get called out on the spot. Reward direct "I don't know yet, and here's when I will."

## press: media interview or crisis statement
- **Seats:** Journalist · Skeptic · Risk & Legal
- **Rules:** friendly opener, then the contradiction. Penalize "no comment", speculation and anything unquotable-then-quoted.

---

## 中文场景 (Chinese workplace and exams)

Run these entirely in Chinese.

## 述职 / 年终述职
- **席位：** 一把手 · 直属上级 · 人力 · 兄弟部门负责人
- **真正在判断：** 这一年你到底创造了什么价值？明年值不值得给你更大的盘子？
- **决定性问题：**
  - "今年最大的成绩是什么？如果没有你，这件事会不会发生？"
  - "年初定的目标完成了多少？没完成的原因是什么？"
  - "明年的目标比今年高多少？凭什么能做到？"
  - "你团队里谁最值得提拔？谁需要改进？"
- **规则：** 只讲过程不讲结果、只讲"我们"不讲"我"，重点扣分。

## 竞聘答辩
- **席位：** 一把手 · 分管领导 · 人力 · 专家评委
- **真正在判断：** 你是否已经具备新岗位的能力？和其他候选人比你强在哪？
- **决定性问题：**
  - "如果你上任，前 90 天做哪三件事？"
  - "这个岗位最大的挑战是什么？你的短板在哪？"
  - "原来的团队里，有人不服你，你怎么办？"

## 立项评审 / 项目评审 (含产品战略委员会类评审)
- **席位：** 一把手 · 财务负责人 · 专家评委 · 兄弟部门负责人
- **真正在判断：** 这个项目值不值得投、能不能做成、风险谁来担？
- **决定性问题：**
  - "市场空间怎么测算的？对标的是谁？"
  - "投入多少，什么时候回本？悲观情况下呢？"
  - "为什么是现在做，晚一年会怎样？"
  - "关键资源和依赖是什么？哪一个不在你控制范围内？"
  - "这个项目失败了，最可能的原因是什么？"
- **规则：** 数据口径不一致、只有乐观情形、没有对标，都是重点攻击对象。

## 汇报 (向上汇报 / 周报 / 专项汇报)
- **席位：** 一把手 · 直属上级 · 财务负责人
- **规则：** 两分钟内说不出结论，直接打断。追问"需要领导决策/协调什么"。

## 投资人路演
- 同 `investor-pitch`，全程中文；增加"退出路径是什么""估值依据是什么"。

## 论文答辩 / 开题答辩
- 同 `thesis-defense`，全程中文；增加"创新点到底是什么""和已有工作相比提升了多少"。

## 结构化面试 (考公、事业单位、国企)
- **席位：** 主考官 · 副考官 ×2
- **题型轮转：** 综合分析 · 组织管理 · 应急应变 · 人际关系 · 自我认知
- **规则：** 每题给思考时间提示（"请思考 1 分钟后作答"），答题建议 2–3 分钟。评分侧重观点是否明确、逻辑层次、措施是否具体可行、语言是否流畅。可在"降难度"时给出答题框架提示。

## 考研复试 / 保研面试
- **席位：** 导师组组长 · 专业课老师 · 英语老师
- **决定性问题：** "为什么报我们学校这个方向？""介绍一下你的毕设/科研经历，你具体做了什么？""这个方向最近有什么进展？"，以及一道英文自我介绍后的追问。

## 求职面试 (校招 / 社招)
- 同 `job-interview`，全程中文；社招增加"为什么离职""期望薪资依据是什么"。
