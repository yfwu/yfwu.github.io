---
title: "Obsidian 模組"
category: Tools
layout: post
tags: ["Obsidian"]
---

Obsidian 是目前最火熱的 markdown 筆記軟體。今年初使用過一陣子，不過最近發現變的比以前更方便使用，例如：

- YAML header 支援，能讀取 tags 行。
- 主題安裝「商店化」，但是又可以客製化 CSS 細節
- 超豐富的第三方插件 - 也是本文主題
- iOS / Android app
  - 不過目前只支持 iCloud 跟 Obsidian sync，不知道將來會不會開放其他雲端硬碟做為同步選擇（OneDrive 不錯）

## 官方

- 預設的 Quick Switcher 啓動快捷鍵是「Ctrl / Command + O」，有第三方插件增強此選擇器，可以安裝。
- Backlink：一定啓動，雙向連結本軟體的最大特色。
- Daily notes：每日筆記，不少人都是通過每日記錄做為入口。
- Templates：以放置在指定資料夾內的筆記為模板，填充到其他筆記內。

## 使用中的第三方套件

- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
  - 在側邊欄生成一個日曆畫面。
  - 可通過點日期連至每日筆記；若不存在則創建之。很適合創建未來或過去的每日筆記。
  - 每日筆記字數記錄（用點點表示，可以改成 0 來取消此功能）。
  - 顯示週數：這個可以跟另一個功能 [periodic notes](https://github.com/liamcain/obsidian-periodic-notes) 連動，創建每週筆記。
- [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)
  - 強化內建的 markdown 表格功能，可以即時 re-format、行排序、簡易的函數功能、匯出 CSV。
  - 快捷鍵 tab 現在可以在表格內移動、enter 則可以創建新行
- [Editor syntax highlight](https://github.com/deathau/cm-editor-syntax-highlight-obsidian)
  - 提供 code block 的程式碼上色，可以自選調色盤。
- [Outliner](https://github.com/vslinko/obsidian-outliner)
  - 提供如同 outline note app（例如：Roam Research / Logseq / Dynalist / Workflowy）一樣的列表操作體驗：整批縮進、在列表間跳躍、移動順序
  - 快捷鍵似乎跟不少系統軟體有所衝突，目前使用 tab 跟 shift-tab 而已。移動順序似乎很少用到。
  - 按下 home 鍵是回到項目文字開頭（例如本行：回到「按」），而非符號開頭（`-`）之前。對於編輯列表來說，十分好用。
- [Auto-link title](https://github.com/zolrath/obsidian-auto-link-title)
  - 貼上網址，自動生成 markdown 格式超連結
- 與電子書筆記同步
  - [Hypothesis](https://github.com/weichenw/obsidian-hypothesis-plugin)
  - [Readwise](https://github.com/renehernandez/obsidian-readwise)
  - 請參見另篇討論第二大腦的文章

## 探索中的第三方套件

這些是還在研究怎麼用的套件。它們相對沒那麼「剛需」。

- [Spaced repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition)
  - 把筆記轉換成 flashcard。需要注意的是：卡片的記憶狀態是寫在筆記內的，所以筆記會多很多給程式讀的日期條，不太美觀。
  - 我應該會繼續用 Mochi，因為這個插件不支援多面卡
- [Citation](https://github.com/hans/obsidian-citation-plugin)：與 BibTeX 檔案結合使用，參考我另一篇論文工作流。
- [Admonition](https://github.com/valentine195/obsidian-admonition)：以 code block 的語法在文中插入彩色的框作為重點提示。
- [Text Transporter](https://github.com/TfTHacker/obsidian42-text-transporter)：強化文字選取跟剪貼的功能
- [Quick Switcher++](https://github.com/darlal/obsidian-switcher-plus)
