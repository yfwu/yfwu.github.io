---
title: "使用 Doom Emacs 配置 Emacs"
layout: post
category: Emacs
---

就目前的使用體驗來說，VS code 唯一的重要性就是橋接 Github Copilot。除此之外的大部分工作和運行狀況都只是編輯用於機器學習或圖片處理的 Python script，因此一直有重返 Emacs 的念頭。不過我自己的套件體系已經很難維護，我也打算找一套別人架構好的直接使用開工。目前兩套主流的分別是 Spacemacs 跟 Doom Emacs。

安裝 Doom 仰賴諸多腳本協同運行，且需要安裝額外的工具。

```bash
brew install git ripgrep coreutils fd 
git clone https://github.com/hlissner/doom-emacs ~/.emacs.d
~/.emacs.d/bin/doom install
```

安裝後需要將 Doom 的腳本加入 `$PATH`，另外也啟用 emacsclient：

```
export PATH="$HOME/.emacs.d/bin:$PATH"
alias emacs="emacsclient -t -a ''"
```

一些注意事項包括：

- 修改了 `.doom.d` 中的設定後要執行 `doom sync`
- 出問題時使用 `doom doctor` 協助診斷問題點
- 用 `doom upgrade` 升級 Doom
- 文件參考 `SPC h d h` 或是 `M-x doom/help`

所有文字編輯與模式切換部分同 Vim 包括 insert-mode 和 visual-mode 等。除了最基本的 evil-mode 外，也有採用 Spacemacs 方案的 SPC 開頭的功能選取：常見的 SPC 操作包含文件操作（`SPC f`）、緩衝區 buffer 操作（`SPC b`）和窗口操作（`SPC w`）。跟我的 plain-film auto-hot-key 快捷編碼很像？

## 啟用 `init.el` 中的套件

反白註解即可。官方預設了一大堆已經配置好的功能。也可以通過 `+` 的方式引入選項，例如 `(python +lsp +pyright)` 來啟用對應的服務。我看了下，大部分都是老朋友，例如 parinfer、projectile 及 lispy，也有很多新的工具，例如 treemacs。

## 安裝 Emacs-plus

專門為 macOS 編譯的、功能更多的 Emacs。需要通過 tap 安裝。

```
brew tap d12frosted/emacs-plus
brew install emacs-plus
```