---
title: "Obsidian 模組 - Kanban 看板"
category: Obsidian
layout: post
---

看板（kanban、かんばん）源自工業界，後來也有很多軟體工程引入作為團隊任務管理與追蹤的一環。看板結合軟體工程是一個巨大的題目，包含了切割任務（顆粒度）以及文件、團隊劃分等任務，不是本文重點，不提。筆記軟體 Notion 及個人用戶免費的 Trello 的普及化使得「個人看板」（personal kanban）變的普遍；著名的個人看板教學書籍有《精實開發看板方法》等。

看板的奧義是：自我約束。通過管控手上的任務（doing），來實際推動任務進行，以免開了很多任務卻都沒有達成；只有達成了任務（done）才能領取新的任務（to-do）。這是經典的任務生命週期三欄看板。

個人看板控制能力（來自 David J. Anderson）：

- 視覺化（visualize）
- 限制 WIP （limit work in progress）
- 管理工作流（manage flow）
- 管理例外（make policies explicit）
- 反省機制（implement feedback loops）
- 合作與設計新的實驗機制（improve collaboratively, evolve experimentally）

另外可以額外新增「等待中」與「準備中」兩個欄位作為與他人協作時的暫存區域。

## 論文工具鏈缺乏任務管理機制

我的話，重要的事情主要切成三塊：

- 臨床：這部分沒有什麼可納入看板的，就是按照輕重緩急的優先順序發報告（例如：住院急做、健檢報告等優先於門診報告）。可能將來需要搭配精力記錄來確保自己在精神好的時候打複雜性高的報告。
- 研究：將來可能會參與多個研究計畫（目前手頭有三個進行中、兩個構想中），同時需要應付很多不同截止期的論文、申請書或報表，這是需要管控的。
- 學習：做為將來進修以及研究所需的根基，必須每週撥出時間進行學習。

其中研究這一塊需要進行筆記、整合文獻等工作。前述文章 [論文工具鏈](https://yfwu.github.io/tools/2021/12/26/articles-reading-workflow.html) 提過論文工作流，節錄如下：

- 搜集：瀏覽器的 Readcube plugin 可以添加當前頁面到其資料庫
- 閱讀：使用 Readcube 閱讀並管理文獻列表
- 離線：
  - 下載列表為 BibTex 檔案
  - 若列表檔案已存在，則使用 Emacs 添加新增內容
- 摘要及整合
  - 使用 Obsidian citation plugin 將論文條目加入筆記中

其中沒有提到的是關於任務的分級。例如：

- 要提交給老闆（們）的實驗室週報彙整了沒？
- 重要文獻讀完了嗎？次要文獻讀完了嗎？文獻也需要交叉比較
- 計畫書草稿進度如何？

因此，有必要引入一個可以跟目前的筆記工具深度結合的任務管理機制；當然，也可以用其他 GTD 工具或線上看板，不過，若要善用 backlink 機制，最好的還是能直接跟筆記工具結合的 Obsidian Kanban。

## Obsidian Kanban

[Obsidian Kanban](https://github.com/mgmeyers/obsidian-kanban) 是一個「渲染器」，用來把符合其要求的、帶有特殊 YAML head formatter 的 markdown 文件轉換成看板。Obsidian Kanban 可以很好的運作於 iPhone 及 iPad 版的 Obsidian app 上。

基本使用：

1. 通過點擊資料夾右鍵建立新看板
2. 添加新欄位、添加新卡片
3. 新卡片可直接使用 `[[]]` 建立新筆記或關聯舊筆記。
4. 卡片可以增加時間、日期及 tag。（預設的日期快捷鍵 `@` 被 switcher++ 佔用了，所以不會自動跳出日期選擇框，不過我一般都是手打日期，不影響）

### 額外設定

可以考慮打開下述設定：

- Add date and time to archive cards
- Hide tags in card titles
- Link dates to daily notes

### 進階

Trello / Notion 卡片都會有其他的 metadata 欄位；Kanban plugin 也有設定自己的額外欄位的機制，即最下方的「linked page metadata」。設定好後，會自動顯示卡片中第一個筆記連結的 front-matter 中的同名區域。

舉個例子：我在 citation tool 中，設定論文摘要的「檔名」是 `citekey` （DOI 去掉 `doi://`），front matter 則有 title，便可以讓 kanban 的卡片顯示這項資訊。
