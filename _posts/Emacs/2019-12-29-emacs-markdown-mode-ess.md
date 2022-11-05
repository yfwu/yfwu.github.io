---
title: Emacs 筆記：Markdown Mode / ESS
layout: post
category: Emacs
hidden: true
---

重返 Emacs，未來計劃也會把舊文章（套件介紹以及 emacs-lisp）更新回來。

## Markdown mode 的一個使用知識

Markdown 是一個輕量級標記語言，而其中比較多人使用的就是 GFM = Github flavored markdown，裏面標記程式碼區塊的語法相比原本的 Markdown 以及早期的擴展版本非常的簡潔有力。在 Emacs 中，markdown-mode 安裝好後預設是沒有啟用 code block syntax highlight 的。早期主要是搭配 mmm-mode 還是 poly-mode，不過後來作者把功能融入 markdown-mode 了！參考下列鏈接：[Feature request: syntax highlighting of fenced code blocks](https://github.com/jrblevin/markdown-mode/issues/372)。

```lisp
(setq markdown-fontify-code-blocks-natively t)
```

即可啟用。Emacs 會調用對應語言的 major mode 來上色。

## ESS

ESS 全名 [Emacs Speaks Statistics](https://ess.r-project.org)，是一個以統計爲主的 Emacs 套件，主要的語言支援 SAS 以及 R。我的筆記中有不少 R 的文件，需要 R-mode 來上色。我是用 el-get 安裝及管理我的套件。在 macOS 中，需要安裝 texinfo 並且加入 PATH 中，編譯套件的過程才不會報錯。
