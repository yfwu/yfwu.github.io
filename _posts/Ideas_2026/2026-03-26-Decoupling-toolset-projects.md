---
title: 放射科研究自動化初探：資料、工具包、專案
category: Ideas
layout: post
date: 2026-03-26
tags: []
---
最近兩個月使用 Codex 5.3 及 5.4 來處理研究任務，越發地得心應手。不過我覺得模型能力大抵堪用，反而是工程的問題局限了更快的產出成果。底下記錄一下目前的心得 - 解耦合 - 的重要性。

早期做研究的時候（特別是去年中）開始大規模應用 totalsegmentator 來處理。那時候是每個專案各自有自己呼叫命令行 `totalseg` 工具的腳本（由 claude code 創建）。接著有 radiomics 的需求就必須考慮 QC 以及對位。考慮到這些上游任務其實用的是同一套工具，嘗試整合。過程中遇到最大的問題就是新工具嘗試把不同時期的工作流「硬編碼」進去。例如最早期的對位（alignment）工具，有一個無中生有的旋轉設定（因為處理肺臟的時候，沒有處理好 DICOM → NifTi 的座標轉換及 metadata 遷移。但是後來做肝臟有），結果導致整套工作流一直互相衝突。大部分補丁或 dirty hack 都應該儘可能予以去除。wrapper 部分能少就少。

隨著工具鏈整合，下一階段就是剝離資料、腳本、結果。我的話是把多個專案變成一個巨大的 meta-project。資料部分放在 `data`，腳本放在 `projects`，QC 資料放在 `output`，而要寫論文的資料則推送到我的 macbook。這樣的好處是我們可以嘗試不同的任務。例如我們的卵巢癌資料集，可以測試不同的模型、或者不同的任務（腫瘤分割 segmentation、分類器、預後機率評估等等）。

最近兩個月 Codex 實裝了（1）計畫模式（plan mode）（2）子代理（subagent）模式。這兩個新功能使得 content window 的管理更加的高效率。不過，核心是「如何讓 Codex 成為近似人類的助理？」來節約工作？我目前用的 prompt 是「Spawn subagents to check data manually while keep content window manageable」，並給出具體案例數。這樣的話，就會確實一個個看過去，甚至會啟用 view image 來幫忙看看 QC 流程產生的圖片有沒有大問題。

總結幾個原則：

1. 必須明確的列出資料轉換的步驟，然後確認沒有混入之前流程的 dirty hack
2. 隱私無關的部分（例如把各式各樣的病理全名歸類為項目）交給 codex subagent
3. 涉及病歷部分調用強力本地模型如 OSS-120B 做處理
4. 若要把 GPT API 當作函數用來處理資料，則要設定 prompt cache
![Plan mode](/assets/img/blog-Codex-app-plan-mode.png)

目前我可以構造很複雜的 prompt，讓它檢查資料結構、已有的工具包等，然後我可以調整目標，設定邊界條件等框架，之後就可以去睡覺，讓codex 據此計畫搗鼓；目前觀察到已經可以連續工作四五個小時（會有 auto-compact 跟更新日誌等動作），起來就可以收很不錯的結果。也可以把想到的論文草稿，Codex 半成品及輸出丟給 extended pro，讓它給出建議 - 實務上，Codex 比較像極聰明的助手，ChatGPT 才有顧問的感覺。

我個人認為：不能讓 agent 連續工作好幾個小時的人，AI 操作能力恐怕還停留在 2024。

最近跟我弟說我們阿吉主任單純靠 ChatGPT plus，不用 agentic tool （例如 Cowork）就已經生產力大幅提升，兼顧這麼多研究專案並瘋狂產出結果，如果用了豈不是要飛天？我弟說：「你就是你們老闆的 agent」，我竟一時無法反駁 😂


