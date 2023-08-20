---
title: Obsidian Canvas 及 Properties
layout: post
category: Obsidian
---
目前已經拋棄之前的[論文工具鏈](https://yfwu.dev/tools/2021/12/26/articles-reading-workflow.html)，改用 Zotero 做學術文獻的整理，可參考[測試 Zotero](https://yfwu.dev/tools/2022/09/01/from-Readcube-to-Zotero.html) 一文。我個人認為，論文筆記最好跟隨在原文旁。然而又要能方便搜尋。怎麼辦呢？這時候就要使用筆記匯入的功能了。一樣，需要 BBT 和 Obsidian Zotero Integration 模組。一些需要的前置作業如下：

- 設定 BBT 中的 citation key。原本的格式是「姓氏 + 標題前三字 + 年份」可增加唯一度，但是看了礙眼。
- 原本的缺點是搜尋功能只能找檔名，但是 citation key 其實很難搜尋。錄入論文全名又十分冗長。還好最近 Obsidian 開通了 properties 功能，可用 aliases 來記錄論文名稱，而 aliases 中的名稱也可通過搜尋來創造雙向連結。
- 將論文筆記通過 import 功能同步進來。目前唯一的缺點是沒辦法從 Obsidian 跳到 Zotero 的對應論文本體。

我的論文閱讀及與「知識網」Obsidian Canvas 的串連過程如下：

- 閱讀論文，在 Zotero 中做摘要及筆記
	- 記得在筆記中設置 YAML 格式的 aliaese
- 打開要添加論文的 Canvas
	- 使用 import 功能匯入對應論文
	- 在 Canvas 頁面通過搜尋功能即可添加論文筆記。
- 如果需要額外整理論文內容當作卡片，可以從 Canvas 中複製貼上

## Obsidian Canvas

在 Heptabase 掀起一股筆記架構視覺化的潮流後，Obsidian 那中看不中用的知識網路功能被深切的檢討。於是在正式版發布沒多久，Obsidian 就複製出了接近全功能的 [Obsidian Canvas](https://obsidian.md/canvas)。由於前一陣子 Heptabase 有宣佈了月費鎖定方案，所以我就訂購了一個月試用。經過我一個功能一個功能的比對，Canvas 還是有一部分的缺點跟差異，列舉如下：

- 複製部分筆記成為新卡片這個功能在 Heptabase 中做的比 Obsidian 直觀很多。在 Obsidian 中，會需要 refactor 這個模組，設定好後，可以獲得一套快捷鍵，並要求以選取段落的首行作為檔名。
- Obsidian canvas 無法真正地讓兩則筆記關聯起來，所以沒有辦法像 heptabase 那樣回溯筆記創建的場景。
- 操作體驗上，Heptabase 相對滑順。

最多 hepta-cult 詬病的就是 Obsidian 中所有筆記皆是檔案的作法，會讓創建卡片相對麻煩（需要先設計檔名）。Obsidian 的解方除了剛剛提到的 refactor 外，還可以先寫成卡片並調整大小容納長文，待穩定後，可一鍵轉換成 markdown 筆記。到時候再來指定檔名，如此一來比較不會干擾整體性的思考。

## Obsidian Properties

[Properties](https://help.obsidian.md/Editing+and+formatting/Properties) 是以前的 YAML front matter 的大進化版。在不變動文字檔的情形下提供了很多功能：

- 內建的 aliases、tags 支援：
	- 位在 aliases 的內容可以當作檔名搜尋 - 所以我才能維持簡潔的 citation key 檔名同時能快速搜尋我要的文件
	- 位在 tags 內的內容會被視為同本文中的 tag
- 支援下來式選單：可以跨文件的汲取多文件 front matter 內的內容，不擔心搞混，大幅強化了 dataview 的威力
- 支援雙向連結：`[[]]` 現在可以視為文件的一部分

在這個設計下，front matter 的玩法豐富了很多，也規避了命名重複的問題。關於雙向連結的部分，目前還在摸索。