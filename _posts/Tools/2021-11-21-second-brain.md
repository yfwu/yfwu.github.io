---
title: "網路文摘與第二大腦"
layout: post
category: Tools
---

本文摘錄並補充自 Twitter 用戶 [wastemobile](https://twitter.com/wastemobile) 的系列推文，並補充我自己的工作流程。不少人將筆記軟體作為第二大腦般使用：歸檔所見所聞的所有資訊。台灣有著名筆記愛好者「異塵行者」，中國也有不少網路作者是相關人士。我自己喜歡看的 YouTuber [Ali Abdaal](https://www.youtube.com/user/Sepharoth64) 也常常介紹他如何通過 Notion 和 Roam Research 搜集創作靈感。

## 2018 年的第二大腦

系列推文提到一篇文章 [How I export, analyze, and resurface my Kindle highlights](https://sawyerh.medium.com/how-i-export-process-and-resurface-my-kindle-highlights-addc9de9af1a)；文中，作者 Sawyer Hollenshead 開發了一套工作流程，把他在 Kindle 及 iBooks 中的筆記匯出到他的個人資料庫，並且通過 Google NLP 相關功能，進行關鍵字提取以及自動連結到 Wikipedia。

我覺得比較有趣的有兩塊

- 分類關鍵字領域：作者建構的私人服務能展示同個領域的 highlight（例如：show me all highlights related to Geography.）。當摘錄的觀點一多，預先分類也許能挖掘出比手動連結更有意思的內容：可以通過[群眾智慧](https://en.wikipedia.org/wiki/The_Wisdom_of_Crowds)尋找內部連結。
- 隨機推送服務：每天通過 SMS 隨機推送一個 highlight 給自己。不少筆記軟體也有個 random note 功能，用來獲取新的靈感（前提是筆記內容要豐富...）。

## 提到的工具們

- [Readwise](https://readwise.io) - Kindle 及 iBook 筆記同步
- [Quotebacks](https://quotebacks.net) / [Liner](https://getliner.com/en) - 網頁文摘服務，略談
- [Hypothesis](https://hypothes.is) - 網頁文摘，提供 API 供同步內容
  - [Outline](https://outline.com) - Hypothesis 提供的頁面可讀性擴增服務
- [Obsidian](https://obsidian.md) - 具備 backlink 功能的筆記軟體
- [Obsidian-hypothesis](https://github.com/weichenw/obsidian-hypothesis-plugin)
  - [Obsidian-kindle](https://github.com/hadynz/obsidian-kindle-plugin)

推友描述他通過 Hypothesis 及 Outline，將 highlight 的網頁內容保存到 Obsidian 內，並且可以通過 Obsidian 的內容連結功能，與其他筆記進行串聯。

## Outline.com

由 hypothesis 提供的可讀性擴增服務，可以把文章內文提取出來方便閱讀。一般瀏覽器附的閱讀模式無法外接 hypothesis 做筆記而 outline.com 沒有問題。在瀏覽器書籤添加 js 程式碼就可以製作一個 outline.com 的 bookmarklet。進入 outline 模式後續點右上角的 hypothesis 按鈕，開始 highlight 網頁內文。

## Obsidian-hypothesis

關於 Obsidian 的文章很多，本文不提。而前述提到的 plugin 則只需要提供 hypothesis 的私人 token 就能同步。不過我還沒試過本地修改過再同步會如何。現在比較困擾的是：幾百個網頁會變為本地的幾百個檔案，如果缺乏一個有效的連結機制，無疑只是變成資訊松鼠。這部分還需要仔細思量。

## Obsidian & Kobo

Kobo 有個第三方的匯出網站叫 [Kobonotes](https://thekobonotes.com)，只要上傳 SQLite 檔案，就可以解析出其中的筆記。不過，沒有繼續匯入 Obsidian 的方案。我自己也沒有開發能力，只好需等有力人士開發了。

## 其他的筆記軟體

目前手頭有好幾個：FSNotes、Bear、Apple 自家的備忘錄、Obsidian。其他沒在用的有 Logseq 以及模組豐富的 Joplin。目前主力是深度結合 Apple 生態系的 Bear。FSNotes 能渲染 TeX 數學式以及自定義 CSS，目前是部落格草稿暫存區。永久的資料存放區是 Obsidian。醫學筆記則是另外使用 Mochi，不跟這些混淆。

## 註

本想用 Threaded Reader App 將推文合併，不過據說 Threaded Reader App 只能讀取最近幾千則，超過則無法顯示，所以可以預見在作者推文超過幾千則之後，連接大機率失效，所以乾脆不貼，直接將重點<del>搬運</del>消化到我自己的文章中。