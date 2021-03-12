---
title: "使用 BiblioShiny 探索特定學術領域"
category: Research
layout: post
---

以前提過一個叫「構想追追追」的企劃，當時還想用自己的力量寫爬蟲。不過後來發現不管是資料還是工具都已經有人造好，所以最好還是不要浪費時間重新造輪子。今天在知乎看到一篇 [《如何用 R 快速了解科研领域？》](https://zhuanlan.zhihu.com/p/45262484) 以及這個作者的其他文章，非常有意思。主要還是老問題 - **注意力是重要的稀缺資源** - 因此必須集中力量考察最重要的論文。作者使用的工具是 [bibliometrix](https://www.bibliometrix.org) 以及隨附的 biblioshiny。

## 核心概念

作者提到，對於一個研究領域，有三個最重要的問題要釐清：

- 高貢獻的研究者
- 核心文獻
- 前沿主題

## Web of Science

我自己感興趣的領域是血流動力學模擬。使用了 vascular fluid dynamics 這個關鍵字組合去搜尋。從 Web of Science 上面搜出來的文獻達 1860 篇。具體到底搜尋品質如何，有沒有有所遺漏可能需要人手校正。我覺得用 vessel / hemodynamics / aortic 應該也會有不同的結果，需要整合。這裏暫且按下不提。

WoS 一次只接受匯出 500 筆，所以會有很零散的巨量 bibTex。將數個 bibTex 壓縮成一個 zip，讓 bibliometrix 讀入即可。最後可整合出最關鍵的文獻。

## 數據分析選項

- Descriptive analysis:
  - 簡單觀察出高產作者及其文獻，並獲得相關引用量
  - 文字雲
- Intellectual Structure: 找出 GCS 及 LCS 分數高的文章
- Conceptual Structure:
  - Correspondence Analysis：瞭解文獻與關鍵字的關係
  - Thematic Map：可以尋找領域中重要但尚未被深入研究的主題
