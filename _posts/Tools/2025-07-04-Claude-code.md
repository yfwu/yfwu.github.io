---
title: 從 ChatGPT Pro 改訂閱 Claude Max
category: Tools
layout: post
date: 2025-07-04
tags:
  - ChatGPT
  - Claude
---

記得我曾經發過一文 [退訂 Claude](https://yfwu.dev/ideas/2024/11/09/Claude-unsubscription.html)，不過經過了大半年的變化，如今 Claude 今非昔比，已經具備了執行簡單程式、上網搜尋以及「Deep Research」的功能。來美國後因 ChatGPT o3 需求大增，加上想無限使用新功能，所以升級 Pro。但後來 Claude Code 崛起，過去兩個月也測試了 agentic editing，深感舒爽。然而 Codex 畢竟跑在雲端，無法接觸本地資料，來來回回貼錯誤修改始終搔不到癢處，遂在 Pro 本月續費前重啟 Claude 付費方案 Max 5x 看看。

結果一用驚為天人！我知道 Claude code 不但能讀本地資料（圖片、PDF），還可以「先規劃後行動」，如同其他的 agentic editing 一樣，但是他的上下文工程（context engineering）做的甚好，同時也不像 Junie 只能用 Sonnet 4 並且無法「一個問題接著一個問題」的構建下去，Claude code 可以獨立運行一段很長時間、留下筆記並根據輸出修改程式，直到完成最初 TODO 設定的目標。

![Claude code](/assets/img/blog-Claude-code.png)

目前的工作流程大概是這樣：

- 有個想法 - Deep Research 釐清目前科研進度
- 在同一個對話串要求給出 CLAUDE.md 文件，設定好項目架構、可行目標等細節
- 我存下來後仔細閱讀並根據需求進行修改
- 讓 Claude code 根據這份文件開始自主工作，並留下筆記供我即時查閱
	- 在 Claude 運行的時候，通過 Zed 或 Emacs 觀看筆記文件
- 視覺化運行成果

Max 5x（100 美元/月）的時段限額很快就碰到了，立刻補差價升級到 Max 20x（200 美元/月），同時降級 ChatGPT Pro 回 Plus。目前 ChatGPT 還是會繼續用，主要是節約 Claude Opus 4 的使用額度。Github Copilot 跟 Jetbrain Junie 因為是年費制，所以下次收費應該只會保留一個續訂。作為非工程專業的放射科醫師，接下來我會自己寫程式，大概是學新語言（Rust、OCaml、Haskell）或是練習解 LeetCode；大型的科研項目還是交給代理進行更為迅速。