<div align="center">

<img src="assets/banner.svg" alt="Murder Board：在老板拷问你之前，先让 AI 灵魂拷问你" width="100%">

[English](README.md) · **简体中文** · [网页版（免安装）](https://mbappewu.github.io/murder-board/)

[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-5-d7263d?style=flat-square)](skills)
[![支持](https://img.shields.io/badge/支持-Claude%20Code%20·%20Codex%20·%20Cursor%20·%20DeepSeek%20·%20Kimi%20·%20豆包-24292f?style=flat-square)](#安装)
[![License: MIT](https://img.shields.io/badge/license-MIT-24292f?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/MbappeWU/murder-board?style=flat-square&color=d7263d)](https://github.com/MbappeWU/murder-board/stargazers)

# 灵魂拷问（Murder Board）

**在老板拷问你之前，先让 AI 灵魂拷问你。**

</div>

美军将领去国会听证之前，都要先过一轮 **Murder Board**：一个专门挑刺的评审团，把最狠、最刁钻的问题提前问一遍。NASA 飞行评审之前要过，博士答辩之前也要过。

**现在，你下周一的汇报之前也可以过一遍。** 它会读你的 PPT 和材料，找出最可能让你翻车的问题，一次一题地追问，每个回答都打分，最后给你一页备答清单（答疑口径）。

<div align="center">
<img src="assets/demo-zh.svg" alt="演示：AI 读完立项材料，组建评审团，一把手提出最致命的问题，并给回答打分、给出更好的说法" width="100%">
</div>

## 适合这些时刻

- **向上汇报**：方案汇报、项目进展、专项汇报，领导两分钟听不到结论就会打断
- **述职 / 年终述职 / 竞聘答辩**：“如果没有你，这件事会不会发生？”
- **立项评审 / 预算和编制申请**：“投入多少？什么时候回本？悲观情况下呢？”
- **效能质询**：领导认为团队效能下降，你要用数据说清楚
- **面试 / 结构化面试 / 考研复试 / 论文答辩 / 投资人路演**

## 安装

**Claude Code、Codex、Cursor、Gemini CLI、Copilot、OpenCode、OpenClaw 等 40 多种 Agent：**

```bash
npx skills add MbappeWU/murder-board
```

或者直接把这句话发给你的 Agent：

```text
帮我安装这个仓库里的 Skills：https://github.com/MbappeWU/murder-board（按 INSTALL.md 操作）
```

**Claude Code 插件市场：**

```text
/plugin marketplace add MbappeWU/murder-board
/plugin install murder-board@murder-board
```

**DeepSeek、Kimi、豆包、通义千问、元宝、ChatGPT 等任意 AI 对话框（免安装）：**
打开[网页版](https://mbappewu.github.io/murder-board/)一键复制，或直接复制中文提示词：
[灵魂拷问](portable/zh-CN/murder-board.md) · [事前验尸](portable/zh-CN/pre-mortem.md) · [私董会](portable/zh-CN/boardroom.md) · [说人话](portable/zh-CN/so-what.md) · [高难度对话陪练](portable/zh-CN/sparring.md)

装好之后，直接说：

```text
灵魂拷问：下周三我要向一把手做立项汇报，材料在 ./立项汇报.pptx，我最怕被问去年的项目。
```

> 💡 用手机的**语音模式**来练（豆包、ChatGPT、Claude 都支持），体验最接近真实会场。

## 它怎么拷问你

| | 步骤 | 做什么 |
|---|---|---|
| 🔎 | **侦察** | 像对手一样读你的材料：你要什么、哪些数字前后对不上、藏了哪些假设、缺了什么、听众心里已经认定了什么。 |
| 🪑 | **组建评审团** | 3–5 个真正会坐在台下的人：一把手、财务、技术专家、兄弟部门。描述一下你领导的风格，他也会入席。 |
| 🎯 | **必死题清单** | 15–25 道题，按**致命度 = 被问到的可能性 × 答砸的伤害**排序。和真实场景一样，结束前不剧透。 |
| 🔥 | **逐题拷问** | 一次只问一题，全程角色扮演。你回避，它追问：“我问的不是这个。”在魔鬼难度下，你说太长，它会直接打断。 |
| 📋 | **评分卡** | 每个回答按**直接性 · 证据 · 诚实 · 简洁 · 镇定**打分，再附一句“你应该这么说”。 |
| 🧾 | **备答清单** | 准备度评分、3 个地雷、10 个必须答好的问题、要带的数据、材料要改哪几页、开场 30 秒怎么说，还有你的坏习惯。 |

三档难度：**友好 · 真实 · 魔鬼**。随时说“暂停”跳出角色，听教练讲解。时间紧就用**快速模式**：一次性给出前 10 道必死题和参考答法。

它还会**审材料本身**：数字前后矛盾、定义了指标却没给数据、脚注里的免责声明一条条拆掉自己的论点，这些比答不好问题更容易翻车。

📖 **[看一个完整的英文示例 →](examples/exec-review.md)**

## 另外 4 个 Skill

同一个理念：**现在对方案狠一点，现实就会对你温柔一点。**

| Skill | 什么时候用 | 你会得到 |
|---|---|---|
| [**事前验尸**（pre-mortem）](skills/pre-mortem/SKILL.md) | 要拍板一个计划之前 | “假设半年后它失败了，为什么？”多个角度的失败故事、预警信号、止损线、本周就该验证的假设，还有带团队开事前验尸会的主持脚本。 |
| [**私董会**（boardroom）](skills/boardroom/SKILL.md) | 纠结一个重大决定 | 五位立场不同的董事，先独立写意见，再互相质询、投票（保留反对意见），最后由主席给出建议和 72 小时行动。专治 AI 顺着你说。 |
| [**说人话**（so-what）](skills/so-what/SKILL.md) | 写汇报、周报、邮件、请示 | 结论先行（金字塔原理），给出一句话版、三行版和完整版，外加红笔修改说明。“赋能、抓手、闭环”会被一一揪出来，换成具体数字。 |
| [**高难度对话陪练**（sparring）](skills/sparring/SKILL.md) | 要谈加薪、绩效面谈、裁员沟通、拒绝领导、提离职 | AI 扮演对方，情绪和隐藏诉求都很真实；练完给你打分、复盘关键转折，并给出真实对话的脚本。 |

## 为什么有用

- **它不拍马屁。** AI 天生爱顺着你说，评审会上的人可不会。这套 Skill 的设计目标就是先唱反调。
- **狠在具体，不在语气。** 它会引用你的原话和数字：“第 7 页毛利 40%，第 12 页算出来是 22%，哪个是真的？”
- **不编造你的事实。** 参考答法里缺的数据一律用 `[占位符]`，提醒你汇报前去补。
- **全程中文。** 你用中文说，整个评审团就用中文；内置述职、竞聘、立项评审、结构化面试、考研复试等中文场景。
- **纯文本。** 没有服务器，不需要 API Key，不上传任何数据，在你自己的 AI 里运行。

## 常见问题

<details><summary><b>国产模型能用吗？</b></summary>

能。DeepSeek、Kimi、豆包、通义千问、元宝都可以直接粘贴[中文提示词](portable/zh-CN)使用。在 Claude Code、Codex 等 Agent 里接国产模型也可以正常加载 Skill。
</details>

<details><summary><b>会不会太狠了？</b></summary>

第一次练建议选**友好**。规则禁止人身攻击：压力只给你的论点，不给你本人。随时说“暂停”就能跳出角色。
</details>

<details><summary><b>我的材料会被上传吗？</b></summary>

本仓库不会上传任何东西。Skill 只是文本文件，在你自己使用的 AI 工具里运行，隐私以该工具的条款为准。公司内部材料请遵守所在单位的保密规定。
</details>

## 参与贡献

最欢迎两类贡献：**场景预设**（你所在行业的关键场合里，台下坐着谁、会问什么）和**必死题**（真正让人翻过车的问题）。用 Issue 模板提交或直接发 PR，详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## Star 趋势

<a href="https://star-history.com/#MbappeWU/murder-board&Date">
  <img src="https://api.star-history.com/svg?repos=MbappeWU/murder-board&type=Date" alt="Star 趋势图" width="600">
</a>

**如果它帮你躲过了一次翻车，点个 ⭐，让下一个人也能找到它。**

## 联系与支持

- 作者：[@MbappeWU](https://github.com/MbappeWU)
- 邮箱 / 支付宝赞赏：820029364@qq.com

## 许可证

[MIT](LICENSE) © MbappeWU
