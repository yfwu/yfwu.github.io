---
title: "用 Obsidian 撰寫及管理部落格文章"
layout: post
category: Obsidian
image: /assets/img/blog-obsidian-as-cms.png
---

前置要求是有個配置好的 GitHub Pages 搭配 Jekyll 的部落格，這部分網路上教學資源極多，這裡不贅述。

## 發布流程

大概念如下：
  
  1. 假設部落格的文章放在 `/_posts` 而圖片放在 `/assets/img`
  2. 在 Obsidian 中建立映射的資料夾
  3. 使用 Rsync 同步 markdown 文件及圖片

這有個點就是：如何只同步部落格用到的圖片而不同步其他無關圖片？我用的方法是把所有計畫發布到部落格的圖片都以 blog 作為檔名開頭。

```shell
#!/bin/zsh

rsync -avu --delete ~/Obsidian/Blog/* ~/blog/_posts/
rsync -avu --delete ~/Obsidian/assets/img/blog* ~/blog/assets/img
```

後面則是接到自動發 git add、commit 及 push 的程式碼。如果有些文章還沒有要發布，可以通過以下方式處理：

1. 檔案開頭註記 draft
2. Rsync exclude 含有 draft 開頭的檔案

## CMS 部分

開一頁面，填入如下 Dataview 程式碼：

```SQL
TABLE
  title as Title,
  category as Category, 
  join(tags) as Tags
FROM "Blog"
SORT file.name DESC
```

就可以獲得如下的頁面啦！

![CMS](/assets/img/blog-obsidian-as-cms.png)