---
title: RE：訊息流
category: Ideas
layout: post
---

去年的一月份我寫了一篇《訊息流》，描述我打算怎樣去處理資訊過載的情況。一年過去了，打算檢討一下這一年來有甚麼工具使用上的感想。

## 檢討

- 訂閱的主題太多，絕大部分文章沒有立即閱讀的急迫性：在主要的研究方面，我的工具是 R，對應的領域是醫學研究相關的統計，比方說 survival analysis 以及 time series analysis。在視覺化及機器學習上其實目前還不是很需要。因此，訂閱諸如 [R blogger](https://www.r-bloggers.com/) 這樣的匯集網站因為資訊的破碎，其實幫助不大。如果我真的要學，其實 R 有不少挺完整的技術書，比方說《Learn Statistics with R》，從一般性主題到特定領域的程式，我應該節約看這些網路文章的精力，多花時間先把基礎功打好。
- Digg deeper 會從我的推特中找出多數對象推的主題。因為我關注了不少 radiology、 neurology 以及 neuroscience 的帳號，所以我的 digg deeper 會不停的把被 retweet 多次的文章寄到信箱。可以註冊一個 digg 帳號協助過濾出 twitter 有價值的內容。
- 綁訂了不少 RSS/Atom feed，利用 IFTTT 灌水到 Pocket 中。我的 Pocket 文章一直增多，然而都沒時間看，大部分看的都是收自瀏覽器（比方說部落格、遊戲評論，政治文等）。我的 Slack 也有不少通知，甚至頻道擠爆了。沿著第一點講，其實這些訊息都不是很重要。

## 改變

- 取消了多數 IFTTT 的 feed 轉發。大多數討論都是可有可無的，比方說我的 [List of John D. Cook](https://twitter.com/zaticwu/lists/john-d-cook) 轉 Slack，以及訂閱諸如 [PythonRR](https://twitter.com/@PythonRR) 等。我其實也都沒在看。
- 其實看看零散的部落文也不是甚麼壞事，但是要節省切換人力，並由程式替我篩選出最重要的內容。所以，我開發了一個 feed parser bot，主要的工作是每天產生一份各頻道的匯報，有點類似 [Clojure-TW Weekly](https://clojure.tw/weekly/)，讓我不用花時間從數個頻道切換來看內容。另外，我有幾個 Slack 頻道已經超過免費上限而變得不可用。這讓我驚覺商業服務畢竟不是一個適合長期建設資訊中轉站的地方。而在過去一年中企圖把 Slack 建設為個人秘書也沒有太大的進展。決定從 Slack 撤離。
- 資訊重複，清除非必要資訊源。例如我 IFTTT 有一個 Clojure Reddit 轉寄，而我也在 Clojure-TW 的 Telegram 頻道開了一個 Reddit 轉播器。因此，Clojure Reddit 轉信箱就顯得相當雞肋，塞爆信箱而已，目前已經抓這些重複性高的來源予以關閉。
- 目前留下來在 RSS/Atom 轉 Pocket 的有
  - Connectome 社群的 Wordpress：他們的文章我本來就會每篇看。
  - Stockfeel：增進我對各產業的認知，比較像是當成百科在閱讀。
  - Planet Emacs：純粹信仰，天天看 :D
