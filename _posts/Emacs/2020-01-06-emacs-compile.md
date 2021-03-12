---
title: Emacs 筆記：編譯 Emacs
category: Emacs
layout: post
hidden: true
---
很多年沒有編譯 Emacs 了。以前會寫一個 crontab 腳本從 GNU Savannah 拉原始碼下來編譯。後來都是用系統版（從 apt / brew / pacman 安裝）。最近在搞我的 PyTorch 機器學習，需要連線到我的 Workstation（安裝了 Ubuntu 18.04.02），但是系統預設的 Emacs 是 25 版；而我用的幾個套件需要 26+ 以上，我又不太想用別人的 PPA，所以只好自己編譯。

幾個注意事項

- GNU 現在從 mercurial 換成 git，方便很多。如果不想要把一大坨的歷史代碼也拉下來，可以只下載 zip 檔案。
- Ubuntu 需要安裝 build-essential 跟 texinfo。
- 需要先執行 ``autogen``。
- `./configure` 有很多 no-x 的選項；我的 workstation 沒有安裝 GUI，所以不需要 X-window 支援，可以去掉；configure 如果發現系統沒有安裝圖片相關的 lib 也會提示是否移除相關的支援。

編譯過程是標準的 GNU GCC / make 工作流，幾乎不需要額外調整：

``` Shell
./autogen.sh
./configure
make
sudo make install
```

其中，make 可以開 ``make -j 4`` 之類的選項開併行編譯，速度會快很多。當我重新開始編譯自己的 Emacs 時，我感到一種久違的、靈魂的復甦。*The fabulous hacker -  Harold Wu - is back!*