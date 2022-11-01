---
title: "部落格功能測試與修改方向"
layout: post
category: Ideas
---

這幾天在看一個部落格 [swyx.io](https://www.swyx.io/)，裡面有兩篇文章引起我相當的興趣，姑且記錄。

## Smart Indexes

[Smart Indexes](https://www.swyx.io/smart-indexes/) 指的是不按時間序排列，而是隨時更新、按照讀者反饋而排列文章權重的首頁。作者 Swyx 有展示了一個雛形頁面 [Ideas](https://www.swyx.io/ideas/)，裡面聚合了他的 Github 動態、各種網路內容的閱覽記錄和心得、部落格文等。這似乎很適合像[阮一峰](http://ruanyifeng.com/blog)這樣自帶評論的大自然搬運工。

我知道有些人實現了在靜態網站執行搜尋的工具。不知道若否能實現一個靜態頁面過濾器？

## 現代部落格背後的技術細節

[The Surprisingly High Table Stakes of Modern Blogs](https://www.swyx.io/the-surprisingly-high-table-stakes-of-modern-blogs/) 這篇中介紹了現在部落格都不能缺少的項目。不過看完後我的感想是 - 不如說是任一現代化網頁都不能缺少的。例如好的字體、好的排版跟字號（Obsidian 有個 [contextual typography](https://github.com/mgmeyers/obsidian-contextual-typography) 模組可以調整標題佈局，必裝）等。我試著檢查一下我的部落格：

- 腳註功能[^1]：可以用來在不延長本體的情形下加入一堆需要跳來跳去才好閱讀的註解（我自己是喜歡用括號寫在後面）。
- 添加評論區：我不喜歡評論區，理由跟王垠一樣 - 不喜歡也不覺得別人的批評有道理。不過我確實是有考慮在一些比較有趣的文章後面加入由 [Utterances](https://github.com/utterance/utterances) 支持的評論區。
- 部落格索引功能：上個段落有提到；其實我也有想做個搜尋功能，這樣我就能盡情的堆疊我的內容。
- Webmentions 及其他 indieweb 的功能
- 安全性：靜態部落格應該沒有這個問題

[^1]: 有人說腳註需要要求 Jekyll 使用 Kramdown 渲染。另外有人表示 Redcarpet 渲染器也可以通過額外的插件達成。