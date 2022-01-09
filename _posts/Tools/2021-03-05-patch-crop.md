---
title: "批量裁切圖片"
category: Tools
layout: post
---

週二去外科聯合晨會報告，不過這其實比較像報告給 clerk 聽，講的案例是個罕見的 basaloid squamous cell carcinoma at esophagus。影像部分其實沒什麼可以報的，因為我們最多就是診斷有腫瘤，具體的組織病理還是要通過病理科。

做報告的時候嘗試批次處理（主要是裁切 crop）病人的 CT 影像。我們的 PACS 輸出的時候會在影像加一個不必要的警告標語。使用 convert 清除之：

```bash
convert origin.png -crop <a>x<b>+<c>+<d> cropped.png
```

其中：

- a = 裁切區域，橫向像素大小
- b = 裁切區域，直向像素大小
- c = 裁切起點，左上角開始的橫向移動距離
- d = 裁切起點，左上角開始的直向移動距離

本院目前輸出的圖片，用來裁切的參數是：`460x360+24+148`
