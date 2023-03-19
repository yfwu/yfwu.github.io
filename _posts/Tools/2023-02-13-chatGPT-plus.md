---
title: "升級 ChatGPT Plus"
layout: post
category: Tools
---

ChatGPT 使用了兩個月，是非常不錯的私人顧問兼助手。我拿它來：

- 修改文章（改的更通順）並微調詞彙
- 從關鍵字筆記產出文本
- 摘要論文內容，或是逆向出論文程式碼
- 詢問各種程式、機器學習問題
- 翻譯（這部分和 DeepL 各有千秋）

目前看來要問數學問題可能比較困難。最近看另名網友[評論 ChatGPT](http://manateelazycat.github.io/think/2023/02/14/chatgpt.html)，覺得很不錯，節錄一段如下：

> 因為搜索引擎是基於統計的反向鏈接而並不是基於知識的關聯來整理數據庫的，你用搜索引擎，每次搜索都是在龐大數據中淺淺的搜索一次，前後問題之間沒有關聯。ChatGPT 其實是一個知識漏斗模型。所以，搜索引擎往往耗費精力卻找不到知識，而 ChatGPT 可以很快找到知識。

最近看到不少人跟風用上了 ChatGPT，但是顯然過度高估語言模型的能力了。直接丟一個空泛的問題，要求 ChatGPT 給出詳細論述，這不是正確的用法。我最近測試了他的基本推理及結構化文本能力，效果很兩極：

- 從不同醫師的報告中還原出 JSON 格式的結構化數據：很不錯
- 從 LDCT 的報告中推估 Lung-RADS 分數：很糟糕

所以跟我想的一樣：做文字的處理非常強大（擴充、摘錄、風格改寫），然而要進行推論還是非常困難。不過最近 bingGPT 似乎展現了部分的推論能力，拭目以待其表現。

## MathJax 渲染

目前數學部分是會返回 LaTeX 程式碼，且以 `$$` 符號包圍。因此，只需要通過 UserScript 注入 MathJax 程式碼就能讓其渲染數學式了。這對我在詢問基本的數學原理的時候十分有幫助。相關工具網址是：[ChatGPT LaTeX auto-render](https://greasyfork.org/en/scripts/456049-chatgpt-latex-auto-render-openai-you-bing-etc)，需要使用者對這些工具有基本的認識。

Grammerly-like 英文修訂

主要是閱讀了這篇文章 [ChatGPT v.s. Grammarly: Which does a better job?](https://www.editgpt.app/chatgpt-v-grammarly)，裡面比較了各種修正，並介紹了一個能使用 ChatGPT 做修正的工具 EditGPT 以及 prompt。EditGPT 是一個前端外掛（現在有很多 ChatGPT UI 外掛），能夠一鍵開啟修訂前後的比較。我一看到這東西就立刻刪除、退訂 Grammarly 了！