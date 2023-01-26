---
title: "在 Emacs & Vim 中啟用 Github Copilot"
category: Emacs
layout: post
---

Github Copilot 預設提供 Jetbrain IDE / VS Code / Neovim 這三家官方套件

## Emacs

有人針對 Neovim 套件內的二進位檔案做了再包裝給 Emacs，於是我們有了 [copilot.el](https://github.com/zerolfx/copilot.el)。安裝方式不難；像我是使用 Doom Emacs 框架的用戶，在 `.doom.d/packages.el` 中添加：

```lisp
(package! copilot
  :recipe (:host github :repo "zerolfx/copilot.el" :files ("*.el" "dist")))
```

以及在 `.doom.d/config.el` 中添加 hook 如下：

```lisp
;; accept completion from copilot and fallback to company
(use-package! copilot
  :hook (prog-mode . copilot-mode)
  :bind (("C-TAB" . 'copilot-accept-completion-by-word)
         ("C-<tab>" . 'copilot-accept-completion-by-word)
         :map copilot-completion-map
         ("<tab>" . 'copilot-accept-completion)
         ("TAB" . 'copilot-accept-completion)))
```

啟動 `.doom.d/init.el` 中的 `company-mode` 為 `(company-mode +childframe)`，就算是初步設定完畢。用 `doom sync` 同步後重啟即可。由於 Github Copilot 現在是付費服務，需用 `M-x copilot-login` 通過瀏覽器來連結帳戶。這個過程會自動跳轉，所以按照指示很滑順就完成了。

## Neovim

Doom Nvim 的設定方式沒有單獨分一個資料夾，而是通過切分 my-config branch 放在一起。在 `config.lua` 中填入：

```lua
doom.use_package("github/copilot.vim")
```

然後重啟、輸入 `:PackerSync` 即可完成安裝。輸入 `:copilot setup` 完成設定。似乎是通過呼叫某個 npm package 來調度 API？我發現我設定好了 Emacs 的之後，Nvim 的自動也可以使用了。