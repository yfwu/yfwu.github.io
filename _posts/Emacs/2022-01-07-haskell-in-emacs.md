---
title: "Haskell in Emacs"
category: Emacs
tags: []
layout: post
---

學習 Haskell 是 2022 自我技能提升的一塊拼圖。趁著週末來推進學習進度。教材部分計畫先看完 [Haskell Programming from First Principles](https://haskellbook.com)，再來找更進階的書籍閱讀。

## Haskell 安裝

我用來自官方的[安裝腳本](https://www.haskell.org/ghcup/)，它會並把環境變數寫到 shell 設定，並安裝下面幾個工具：

- `ghcup` - 工具鏈管理器
- `ghc` - The Glasgow Haskell Compiler
- `cabal` / `stack` - 專案建構與第三方套件管理工具
- `hls` - Language server；用來對編輯器及 IDE 提供補全支持

## Haskell in Emacs

我是 Emacs 愛好者。雖然現在寫學術用程式碼（Python）主要是用 VS Code，不過其他的程式（R、Racket、Haskell、OCaml）還是希望能用 Emacs 來進行。

- 主工具是 `haskell-mode` 和 Haskell LSP（與 `ghcup` 一併裝了）。
- 安裝 major-mode 和 LSP（我用 el-get）。關於 LSP-mode 的設定及安裝後配置，參考 [LSP-mode installation instruction](https://emacs-lsp.github.io/lsp-mode/page/installation/)
- 載入，添加 hook，如下。

```lisp
(el-get-bundle `(haskell-mode lsp-mode))
(add-hook 'haskell-mode-hook #'lsp)
```
