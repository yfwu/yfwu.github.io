---
title: Obsidian 週記功能
category: Obsidian
layout: post
date: 2024-02-10
tags:
---
在 Obsidian 中有一個功能叫做間隔筆記（periodic notes），搭配日曆模組用起來很方便。其中有提供了週記的功能。我改動了如下設定，來搭配原本的部落格設置：

- 檔案名稱：不論是部落格還是「筆記花園」，格式都是 yyyy-MM-DD 後接關鍵字。在 `momentjs` 設定中，使用方括號來跳脫（escape）匹配。
- 模板：模板統一放置於 Templates 資料夾
- 檔案資料夾：放置於部落格 Weekly 資料夾中

![Setting](/assets/img/blog-weekly.png)

像上面這樣設好後，即可獲得如下的好處：

- 撰寫週記不再需要額外手動創建檔案、填寫 metadata，只需要去日曆點選當週的週數即可。
- 因為檔名具備一致性，可以匹配到舊的週記。

今年的目標是要多多地寫週記。