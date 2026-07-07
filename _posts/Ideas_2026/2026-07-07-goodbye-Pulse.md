---
title: 再別 ChatGPT Pulse
category: Ideas
layout: post
date: 2026-07-07
tags:
  - ChatGPT
---
ChatGPT Pulse 是一個自動化的給 Pro 用戶的資訊推播服務，會根據使用者近期的聊天內容給予新資訊的建議，也會整合 scheduled task 在裡面。不過可能是因為用的是 instant 模型，實際上品質參差不齊，而且很容易重複。最近它終於走入歷史。官方建議用良好設定的複雜 task 取而代之。於是我設定了一個如下的每日新知服務，用來讓我能跟頂級影像學實驗室的研究動態保持進度。

任務：每週工作天（週一到週六）中午推播
名稱：**Three Deep Reads**。
規則
- 每天只給 **3 個深讀建議**，不再分九大項。
- 每個項目都要值得花 **30–60 分鐘深讀或實作測試**。
- 期刊論文原則上只收 **相關領域 Q1 journal**，例如 Radiology、Lancet Digital Health 之類的。
- arXiv / preprint 必須確認：是否有 **OpenReview** 記錄，或是否投稿／接受於重要會議，例如 NeurIPS、ICML、ICLR、CVPR、MICCAI、ACL、EMNLP、MIDL、AAAI 等國際頂會。
    - 排除：OpenReview 找不到、沒有重要會議脈絡、疑似撤稿。
- 每篇會討論：
    - 為什麼值得你看
    - 技術細節及可能實作、reproducibility
    - OpenReview / reviewer criticism

離開 UCSF 之後，周圍的人大部分都是埋首於日常工作。在這種情況下，很容易跟世界的脈絡脫節。畢竟，其他人一直在前進，而我們如果只能數結節，很快就會被淘汰。然而，新資訊的數量極為龐大。依靠 ChatGPT 的知識儲備來協助工作似乎是唯一的解方。我個人覺得如果可以，應該是既有研究的發展方向跟新主題、跨界合作的比例應該各為一半。