---
title: "Obsidian 模組 - Dataview 視圖"
category: Tools
layout: post
tags: ["Obsidian"]
---

繼續深入研究，我發現 Obsidian 將 front-matter meta-data 這一功能運用的爐火純青。不管是 Kanban 還是內建的 tags，都能從 front-matter 中讀取資料。最近我學習了一套筆記框架 LYT（linking your thinking），在我閱讀相關文章的時候，意外發現有人使用一個叫 Dataview 的模組進行筆記聚合，效果非常驚人。

## 筆記聚合

目前最知名的應該是 Notion 的筆記視圖，他們通過筆記上方的 meta-data 區塊，實作能對筆記進行聚合的功能。例如，meta-data 若是有「日期」，則可顯示在日曆（calendar）視圖。如果有狀態標籤，則可以顯示在看板（kanban）視圖；最一般的來說，則有表格（或稱資料庫）視圖，可以總覽所有位列其下的筆記。然而 Notion 的最大缺點也是如此，即其筆記階層有明確的樹狀繼承關係。所有衍生自視圖的筆記都屬於其下，一旦剝離該視圖就不再可見。

## Obsidian Dataview

早期有 Obsidian Query Language ，爾後有了 [Dataview](https://github.com/blacksmithgu/obsidian-dataview)。它提供了一個類似於 SQL 的語法。底下是我的例子。例如，我的資料庫中有一筆記錄 Cyberpunk 2077 的文件，在 front-matter 填入如下資料：

```YAML
---
platform: ["PC", "PlayStation", "Xbox"]
category: ["RPG", "FPS"]
multiplayer: False
---
```

依此類推，可以為很多遊戲建立很多這樣的資料。假設說有朋友想請我推薦「在 PlayStation 上面的單人射擊角色扮演遊戲」，我可以通過如下指令搜尋（註：使用 code block 將 dataview 框起來）：

```SQL
TABLE
  platform as Platform,
  join(category, ", ") as Category,
  multiplayer as Multiplayer
FROM "Otaku/Games"
WHERE
  contains(platform, "PlayStation") AND
  contains(category, "FPS") AND
  contains(category, "RPG")
```

除了 SQL like 語法外，也有類似 chain method 的 dataviewjs 可供進行更複雜的操作，這裡就不介紹了。

### Small Tips

- 可以在 `TABLE` / `LIST` 這幾個 view 選項後面使用 `WITHOUT ID` 讓其不顯示 ID，在我下述要介紹的結合 citation plugin 的步驟上非常關鍵！
- 用來確認 YAML front-matter 是否包含某個關鍵字可用 `contains`

## 搭配 Citation plugin

在之前的文章 [論文工具鏈](https://yfwu.github.io/tools/2021/12/26/articles-reading-workflow.html) 中提過 citation plugin 及其模板。通過設計如下的模板：

```YAML
---
title: {%raw%}"{{title}}"{%endraw%}
year: {%raw%}{{year}}{%endraw%}
category:
---
```

其中，`{%raw%}{{title}}{%endraw%}` 跟 `{%raw%}{{year}}{%endraw%}` 都是 citation plugin 自動填入的，`category` 則需要使用者自行決定。這樣，就可以做出一個方便 Dataview 篩選論文年份、類型和閱讀進度的總覽。例如，要「按年排序尚未閱讀的主動脈相關論文」，如下：

```SQL
LIST title AS Title
FROM "Papers"
WHERE contains(category, "Aorta")
SORT year DESC
```

搭配其他模組也能有許多有趣的應用，之後再一一介紹。
