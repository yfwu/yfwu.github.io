---
title: Emacs 筆記：Shell 輸出為 Buffer
category: Emacs
layout: post
---

發現了一個有趣的 [Emacs Wiki 頁面](https://www.emacswiki.org/emacs/EmacsPipe)，討論如何輸出 stdin 到 emacsclient 的 buffer 供後續應用。整體來說蠻複雜的，有點接近於 - 先寫入某個檔案，再用 Emacsclient 打開。

不過，底下一個用 `Eshell` 來開啓的，倒是十分簡單，我覺得這也是 Emacs 的強大之處。例如 VS Code，要怎麼把下方 shell 的輸出開成一個新的頁簽呢？

```Shell
cat myfile | grep "keyword" > (switch-to-buffer "*my-buf*")
```
