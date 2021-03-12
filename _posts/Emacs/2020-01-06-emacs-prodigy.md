---
title: Emacs 筆記：Prodigy
category: Emacs
layout: post
hidden: true
---

[Prodigy](https://github.com/rejeep/prodigy.el) - Manage external services from within Emacs。

說到 Prodigy 就讓我想到一個 Minecraft 的模組叫 [Mobycraft](https://github.com/AdityaGupta1/mobycraft) - Mobycraft 讓使用者可以從 Minecraft 內操作各種 Docker container，玩家不需要離開 Minecraft 的環境。

Prodigy 作爲一個控制界面，它可以協助我們迅速的啓動特定的服務。以我來說，例如 hexo server，特定資料夾的 Jupyter notebook server 都可以通過 Prodigy 快速啓動。所以我再也不需要在 iTerm2 切換到當前資料夾並輸入特定指令。

安裝方式請參考各自的 package manager。

## macOS 額外設定

主要是軟體在 macOS 上面會進入 nap mode。

```bash
defaults write org.gnu.Emacs NSAppSleepDisabled -bool YES
```

## 定義服務

有相當多參數可以選擇。文檔在 `M-x describe-variable <RET> prodigy-services`。完整的定義如下：

```lisp
(setq prodigy-services
  '((:prop value ...)
    (:prop value ...)))
```

服務啓動後，會以一個 buffer 的形式來表示，major mode 是 prodigy-viewer-mode，關掉這個 buffer 會連帶的使進程關閉。在 prodigy 的控制面板中，可以控制這些進程。

## 控制面板，標籤與過濾器

控制面板的操作模式類似 Dired，不過需要使用前綴 `c`（不是 control）。另外，可以定義標籤及過濾器，方便一次性的啓動服務。

```lisp
;; (prodigy-define-tag &rest args)
(setq prodigy-tags
 '((:prop value ...)
   (:prop value ...)))

;; (prodigy-add filter &rest args)
(setq prodigy-filters
  '((:tag foo)
    (:name "bar")))
```

## 我的使用場景

主要是用來啓動研究專題資料夾的 Jupyter notebook 以及部落格 Hexo server。底下是我一個範例：

```lisp
(prodigy-define-service
  :name "Research"
  :command "jupyter"
  :args '("lab")
  :cwd "~/Projects/research"
  :tags '(jupyter research)
  :stop-signal 'sigkill
  :kill-process-buffer-on-stop t)
```

Hexo 的部分有兩個 - 一般性的 localhost server 跟 deploy。

```lisp
(prodigy-define-service
 :name "Hexo Server"
 :command "hexo"
 :args '("server")
 :cwd "~/Dropbox/Blog"
 :tags '(hexo)
 :kill-signal 'sigkill
 :kill-process-buffer-on-stop t)

(prodigy-define-service
 :name "Hexo Deploy"
 :command "hexo"
 :args '("deploy" "--generate")
 :cwd "~/Dropbox/Blog"
 :tags '(hexo)
 :kill-signal 'sigkill
 :kill-process-buffer-on-stop t)
```

另外像 Jekyll 也可以定義；我以前會使用 Jekyll 不過現在改用 Hexo 了。

```lisp
;; You should add env varible when defining a tag.
(prodigy-define-tag
    :name 'jekyll
    :env '(("LANG" "en_US.UTF-8")
           ("LC_ALL" "en_US.UTF-8")))

(prodigy-define-service
    :name "Jekyll server"
    :command "jekyll"
    :args '("serve" "-w")
    :cwd "~/Dropbox/Blog"
    :tags '(jekyll)
    :kill-signal 'sigkill)
```
