---
title: 使用代理寫程式一個月
category: Ideas
layout: post
date: 2025-06-25
tags:
  - ChatGPT
  - Claude
  - Agent
---
最近提升各種代理工具的使用量。約在一、兩個月前，Github Copilot 與 JetBrains 加入了此類功能，但完整度仍不及較早推出的 Cursor 及 Windsurf。不過上述軟體需額外訂閱，而我已購買多項 AI 服務，實在無力負擔更多。Github Copilot 的代理屬輕量級，可自行選擇模型，例如 Claude Sonnet 4。JetBrains 則由雲端任務分派器自動挑選最合適的模型。

兩套工具我都在使用：本機開發時我偏好 JetBrains，因其在程式碼分析與型別錯誤偵測上提供較多提示；VS Code 搭配 Copilot 的組合則適合連線遠端伺服器。目前最常利用代理的功能，是將原先寫在 Jupyter Notebook 的實驗腳本重構為較具結構的專案，建立 test、src、script、data、config 等資料夾與 requirements 檔案。這些工作並不複雜，但若由我手動處理耗時甚多且容易出錯，交給 LLM 則可多工、快速完成。其他常用功能還包括自動補上型別註解、撰寫說明文件，以及檢查潛在錯誤並優化部分程式碼。

目前正在考慮是否購買 Claude Pro 來試試 Claude Code；但是非 Max 只能使用 Sonnet 3.7，這樣我還不如用 GitHub Copilot。直接運行於終端機（CLI）的代理，好處是不需要處理編輯器資訊及頁籤上下文，但是使用者要知道如何檢視返回的成果。

而在雲端部分，因為我是 ChatGPT Pro 訂閱，所以有 Codex 可以用。Codex 內部的模型是 o3 特化版本，具備設置環境及上網安裝模組的功能，但模型本身不能連網。目前就是用來在移動中即可實現靈感、或要求整合性的除錯、文檔編寫。

整體來說，我覺得與代理一起寫程式的好處很多，使用者必須：

- 構思清楚再開工，包含完整的 spec 文檔、限定活動範圍的 `AGENTS.md` 檔案等
- 正確拆分需求，使得代理能夠順暢的完成多個小任務及拼接
- 建立清楚的 Git flow 工作流，避免各 branch 互相干擾

目前在代理部分還有很多需要掌握的知識，遑論引入 MCP 到我的日常工作。感覺這些工具改朝換代的速度極快，一般人如果不每月花個把小時學習，很快就會被拋下（雖然是這樣，但拋下了又如何呢？）

附上一個我的代理使用畫面截圖：
![Junie & Pycharm](/assets/img/blog-Junie.png)
原本只有兩個寫的很鳥的 Jupyter notebook，通過 Junie 跟 Codex 運行了超過 35 個任務，彙整了我自己的醫院以及進修醫院的資料集，包含了處理、測試、檢視、文檔的完整專案。

## Context engineering

另一個最近接觸的概念。隨著具備思考能力的大窗口模型日益普及（例如 GPT-o3），短而急促、密集的交互已經被證實是低效的操作模式，那種「你是個放射科專家」的奇異 prompt engineering 也早已不再需要。實務上，需要學習的是如何一次性的把足夠的資訊、預期的後續動作及關聯文檔提供給思考模型以獲得最大效益。

> Context engineering is the delicate art and science of filling the context window with just the right information for the next step. (Twitter user @Karpathy)

LangChain 也有一篇文章 [The rise of "context engineering"](https://blog.langchain.com/the-rise-of-context-engineering/) 討論。動態情境未必要要由 AI 工具來控制；它更像是工程師精心設計的操作台，一如冷氣遙控器 - 常用按鈕要單純，但能快速啟用複雜功能。

> Most of the time when an agent is not performing reliably the underlying cause is that the appropriate context, instructions and tools have not been communicated to the model.

而除了合適的資訊，還需要提供工具讓 function call 能夠調用。這屬於 agentic system 的範疇了。由於 Codex / Junie 都具備自動夾帶程式碼的功能，所以我的目標是讓 LLM 知道它需要專注在那個程式碼上，避免它改動或錯誤讀取。我目前啟動 agent 的模板如下：

```
Goal:
一句話摘要本次代理預期達成的目標

Modification:
- → 要更改的檔案（new or update)

Instruction:
想要模型做的細節、error / log messages
```
