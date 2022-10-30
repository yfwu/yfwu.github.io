---
title: "Obsidian Callouts 及最近試玩的新模組"
layout: post
category: Tools
tags: ["Obsidian"]
---

介紹這兩個月學到的新功能以及新模組。

## Callout

之前介紹過使用方框來強調定理、重點、異常處等（參考： [文字外框](https://yfwu.dev/tools/2021/11/17/border-example.html) ）。在 Obsidian 也有個工具叫 Ambition 能够達成類似的效果。最近，官方引入了原生方案叫 callout。

```
> [!INFO]
> This is a callout block. It supports internal link and LaTeX
> $$ e^{i \pi} + 1 = 0. $$
```

![blog-obsidian-callout.png](/assets/img/blog-obsidian-callout.png)

- 有 12 種風格（顏色）
- 在 `[!INFO]` 後添加句子可以修改標題
- 在 `[!INFO]` 添加 `-` 變成 `[!INFO]-` 可讓 callout 變成可折疊形式（預設折疊）

## Notion like table

[Notion-like table](https://github.com/trey-wallis/obsidian-notion-like-tables) 搭配另一個著名的模組 Advanced Table，可讓 Obsidian 上的表格編輯和瀏覽體驗變的很好。兩者目前操作上並沒有看到特別衝突的地方。合併使用後，在表內容的排序（sorting）和過濾（filtering）上更加的方便。除了一般性的文字、數字儲存格（number cell）外，還有渲染標籤儲存格（tag cell）、查核表以及 back-link 的能力。目前版本是 4.2 版。目前開發者正在著力讓 live preview mode 下更好用，以及支援一筆記多表格（目前只支援一個表格。

## Omnisearch

系統自帶的搜尋結果不是很好用。能夠用來排序的只有「最近修改」和「按名稱」。但是我所需要的結果通常都不是此兩種排序下的結果。 [Omnisearch](https://github.com/scambier/obsidian-omnisearch) 背後的引擎是基於 BM25 演算法的 Minisearch。BM25 通過計算關鍵字在文檔內出現的頻率來給文件排序；當文件很長、包含了太多關鍵字的時候就容易出錯，所以 Omnisearch 有針對檔案名稱（file name）和段落標題（heading）額外加權。另外提供模糊比對（fuzzy matching）所以不用怕打錯字。

我把全域搜尋綁在（cmd + s）上，方便快速跳躍。原本綁定的功能是儲存，然而由於 Obsidian 是自動儲存，因此這個快捷鍵有點多餘。另外有看到 Dataview JS 也可以調用 Omnisearch API，不過這個玩法實在太高端，對我來說毫無用武之地。
