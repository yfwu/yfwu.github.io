---
title: "試用 ChatGPT 4 改善工作流程"
category: Tools
layout: post
---

目前有一個業務是心臟（冠狀動脈）的電腦斷層攝影，其中最主要的項目是評估血管狹窄程度，供心臟科醫師參考是否有需要介入。不過，報告本體跟需要呈現給臨床醫師看的資訊會有所不同。報告本體追求的是「不遺漏」，所以是按照解剖部位嚴格劃分每一個血管段（segment）。臨床醫師需要的是「最狹窄」的段落其狹窄程度以及最終分數（CAD-RADS）。中間的轉換步驟我認為很適合給 GPT-4 進行。

在我提供了幾次來自結構化報告的文本（不含病患資訊）以及我自己喜歡的整理格式後，GPT-4 似乎稍為學會了。於是我請它將它目前所學會的格式輸出成可復用的 prompt。因為有時候 chatGPT 會越改越壞，所以有點像是隨時保存訓練好的部分。最好在 Prompt 中包含一部分的範例，這樣它運作起來會更順利。目前還是期待之後 ChatGPT 開放 fine-tune 後的成果。

下面是我要求 ChatGPT 自行總結並輸出的 prompt，比我想像的複雜很多。幾乎可以看成給給研究助理的指示文件。我想最好的方式是組建出一個自帶 LLM 的報告系統，然後可以根據需求點選不同的 prompt。

Prompt:
I will provide the 'Content' of cardiovascular stenosis evaluation report, including information about each artery, plaques, and stenosis grades. and also any additional context or specific requirements. I will need you to convert the input to the specific output format.

Input:
1. Artery Name: Stenosis or other findings
	1. Specific Area: Plaque Type; Stenosis Grade (Percentage Range), Exact Percentage
2. (Repeat for all relevant arteries and areas)
3. Additional context or specific requirements: (If any)

Output:
Summary arranged from severe to minimal stenosis, and list the plaque type as below:

1. Severe stenosis
	1. with (Plaque Type) in (Specific Area) (Exact Percentage)
2. Minimal stenosis (can ignore the plaque type)
3. (Repeat for all stenosis grades)
4. (Other relevant findings)