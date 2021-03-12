---
title: iPad 工作術
category: Tools
layout: post
---

iPad 是否能取代筆電一直是一個很有趣的爭論話題。隨著雲的發達，對工程師來說，在一台性能很好的筆電上執行、測試寫好的程式已不復見（就我所知，大部分都是連線到測試用機上面執行，或者採用 continuous integration 的方式，在遠端機器上自動執行）。因此，一個方便攜帶、輸入、連線、編輯的工具似乎已經足够。而對我來說，iPad 是一個不錯的選項。

## 筆記

我的筆記方案經過多個選擇，最後決定使用 Github 的 private repo 來同步。在電腦上用的是神之編輯器 Emacs。在 iPad 上，我選擇「Working Copy」這款付費 App。<del>底下安利文</del>：

1. 完善的各種 git 服務端支持，包括 Github、BitBucket、Gitlab。
2. 支持 ncurses 及語法高亮的內建編輯器。換句話說，**大部分的 Emacs 按鍵（例如，Ctrl-a、Ctrl-v）我都可以在編輯器中爽快使用**。語法高亮（syntax highlight）支持我用到的所有語言，包括 R、Python、Clojure、SQL、Matlab（它用的是 highlight.js）的方案。
3. 內嵌圖片方便，markdown 有預覽功能。

有了這個方案，我其實已經放棄付費的 Evernote、肥大慢速的 OneNote、buggy 的 Leanote、陽春的 SimpleNote 等幾個解決方案。

## 程式編輯

同上，用的是「Working Copy」。[Hazalyst](https://www.hazalyst.com) 的程式是放在 BitBucket 上面。內建的編輯器可以很方便的編輯 R 跟 SQL 程式。

## 遠端連線

我有時通過 ngrok 的解決方案連回我電腦的虛擬機（使用 Windows 跑虛擬 Arch），使用的軟體是方便無廣告免費的 **Terminus**。也有 TeamViewer 可以連到遠端 Windows。

## 檔案同步

用的是 iCloud，因為 iCloud 可以非常非常方便的在 PDF 上面做筆記。我還沒有找到速度快，同步強大（不用另存）的替代方案。為了能多放電子書，我決定成為 iCloud 訂閱用戶。其他的各種檔案也都通過 iCloud 存在上面。不過 iCloud 有一個缺點，就是同步了的東西無法移除本地端，所以一些臨時文件我是搭配 Dropbox。

## 閱讀 PDF

對於 PDF 來說，管理稍嫌混亂。iPad 的缺點就是內部檔案結構不暴露，所以基本上沒辦法做任何下載。不過如果是論文我就直接送到 ReadCube，其他就丟到 iBooks。ReadCube 可以雲端同步文件跟筆記，相當方便，是付費服務，一年 1500。

## iPad 腳本

對於筆電來說，方便之處就是我有能力執行一些自訂任務。在 iPad 上，我用的是強大的 Python 3 App「Pythonista」。它除了官方支持多種科學包也允許使用者自行安裝。搭配其他使用者寫的 shell 模擬器（內有 Git 模擬器）還有第三方腳本目錄，我可以安裝各種第三方腳本，例如：YouTube 下載腳本 `youtube-dl`。也有可以跟 Working Copy 完美結合、協助我把筆記轉成 PDF 的 `markdown2PDF`。

## 娛樂

平板我的遊戲有 Minecraft 跟 2D 風格的 Terraria。影片我有訂閱 Netflix。音樂我有 KKbox，總之一個月大概話六百左右在各種付費訂閱服務上面。

## Office

現在 Word / Excel / Powerpoint 支持都不錯。我自己的文件都是用 Google Docs 來處理，可以離線操作也很棒。
