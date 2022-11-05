---
title: Org-mode 動態表格過濾
category: Emacs
layout: post
hidden: true
---

主要是我有管理書籍的需求，但是我又不想使用 Notion 來管理；而其他有表格的筆記服務，例如 Evernote 都沒有針對表格內容的互動功能（例如排序、篩選）。我遂想到，是否可以利用 Emacs 來達成這個功能。

參考來源是 [How can I filter table in org mode](https://emacs.stackexchange.com/questions/20129/how-can-i-filter-table-in-org-mode)，摘錄如下：

首先有個表格 - 例如這是一段我的書架：

```
#+NAME: bookshelf
| Name                    | Type   | Classification | Blog post |
|-------------------------|--------|----------------|-----------|
| Poor Charlie's Almanack | Kobo   | investing      | N         |
| The Index Revolution    | Kobo   | investing      | N         |
| The 4-Hour Body         | p-book | health         | Y         |
| The Foundation          | p-book | SF             | N         |
```

接着，使用 org-babel 功能，插入一段程式碼（我好奇不曉得有沒有 Elisp 的 SQL 方言可以拿來改造 XD）

```lisp
#+NAME: my-filter
#+BEGIN_SRC elisp :var tbl=bookshelf val="investing" :colnames y
(cl-loop for row in tbl
         if (equal (nth 3 row) val)
         collect row into newtbl
         finally return newtbl)
#+END_SRC
```

- `:var` 是傳入參數的列表。
- `:colnames` 則是告訴 org 說，傳入的表格是有 headline 的，要去除。

這裏用的是 Common Lisp Extensions - 這語法醜陋的一批。cl-loop 是個 macro，語法形式是：

```lisp
(loop name-clause
      var-clauses
      action-clauses)
```

`cl-loop` 預設是沒有返回值的，不過可以使用 `collect` 來蒐集，並且在最後使用 `finally` 搭配 `return` 來返回值；這也是這一段程式碼的作用，蠻好理解的。

使用 `C-c C-c` 執行這一段程式碼，會把結果輸出在下一段落，相當方便。執行完的結果會如下：

```
#+RESULTS: my-filter
| Poor Charlie's Almanack        | Kobo   | investing | N |
| The Index Revolution           | Kobo   | investing | N |
```

主要是想來管理我的藏書 XD 因爲我分散成實體書跟 Kobo 上的電子書；爲了避免我買到重複的，以及方便之後撰寫讀書心得來 <del>亂竽充數</del> 充實部落格，所以有這個計劃。org-table 還是比純 CSV 在這方面強大不少啊！

## 匯入 CSV 爲 Org-Table

有個小技巧來把 CSV 檔案轉換爲 Org-Table - 快捷鍵 `C-u C-c |`。可以成功識別表格內的 `"`。例如如下表格：

```
a,b,c,d
1,2,3,"4,5"
```

全選後按 `C-u C-c |` 可以變成：

```
| a | b | c | d   |
| 1 | 2 | 3 | 4,5 |
```
