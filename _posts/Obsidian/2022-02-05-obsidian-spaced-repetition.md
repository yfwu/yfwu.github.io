---
title: "從 Mochi 轉移回 Obsidian"
category: Obsidian
layout: post
image: /assets/img/collections.png
---

一直尋找一個能把閃卡跟筆記軟體整合的工具。之前使用 Mochi，不過 Mochi 還是有一個主要的問題，那就是萬物皆閃卡，導致我很難將同一個主題的多張不同類型卡片（同一個疾病或症候群）並覽。除此之外，也缺乏表格自動化重整的功能。不過自從發現了 Obsidian spaced repetition 這個模組能夠將需求整合，遂轉移回 Obsidian。

## Spaced Repetition

使用 [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) 模組，通過簡單的語法即可將卡片轉化為 flashcard，操作直覺。根據最新建立的 Dataview 工作流，我可以輕易的：

- 根據 [三張卡總結一種疾病](https://yfwu.github.io/ideas/2022/01/02/three-cards.html) 的工作流程創建知識閃卡。
- 使用 Dataview 根據「出題年份」以及「次專科」標籤，將考題進行分類，變成一個大表！

## 通過 Dataview 觀看每日新增筆記

一重要事情是記錄、量化每日學習量。Dataview 能夠完美達成此目標！在 daily notes 的模板中添加

```sql
TABLE category
FROM "Radiology"
WHERE file.cday=date("{%raw%}{{date}}{%endraw%}")
```

![Daily](/assets/img/daily.png)

在創建 daily notes 的時候，便會添加一個 dataview 模板；`{%raw%}{{date}}{%endraw%}` 會自動填充對應日期，能顯示當天新增了哪些筆記；它們同時也是 spaced repetition 的來源。

## 創建季考題卡片

所有的考題均根據年月份通過名為諸如 `CE 2021-11 01` 記錄；在 front-matter 的地方則記錄解答。而一年 200 題、六年 1200 題目，即是 1200 個檔案。我總不可能一個個手動創建，所以寫了個程式幫忙：

```python
import os

y_m = []
for y in range(2016, 2022):
    for m in [2, 5, 8, 11]:
        y_m.append(str(y) + "-" + str(m).zfill(2))

for j in y_m:
    for i in range(1, 51):
        os.system("touch CE\ {}\ {}.md".format(j, str(i).zfill(2)))
```

一次性的創建完畢！之後在各年月的總結檔案，當名為 `Collection 2021-11` 中自動的將檔案列表取出。

```sql
TABLE category as Category, answer as Answer
FROM "Radiology"
WHERE contains(file.name, "2021-11")
```

![Collections](/assets/img/collections.png)
