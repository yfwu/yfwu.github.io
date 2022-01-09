---
title: "2021-12-29 雙月會筆記"
category: Radiology
layout: post
image: /assets/img/model.png
tags: ["Resident", "ML"]
---

放射醫學會每兩個月會有個雙月會，由輪値醫院的放射科報告，本質上是一個分散型的年會。這次輪到台大醫院，台大影像科決定報告他們科關於 AI 方面的進展。底下是筆記和感想。

## 筆記部分

- 創業（TFDA 的 SaMD 審核介紹）
  - 講師非來自台大，而是任職於雲象科技的林佩蓁醫師
  - 基於機器學習的醫療器材術語上稱為 SaMD，software as a medical device，歸於 TFDA 管轄。官方文件是《醫療器材分類分級管理辦法》。講者據此介紹一二級軟體與三四級軟體的差別及申請 TFDA 審核所需要文件。
  - 所謂四級 SaMD，即提供危急情況的治療或診斷且直接 bypass 醫師；如果不 bypass 醫師，只是單純輔助就是一二級
- 確效機制
  - 討論醫院對於橋接商業軟體到院內系統的審核機制。其中，醫院若要採用未經 FDA / TFDA 許可的三四軟體，需要申請臨床試驗。
  - 確效機制是確保軟體在本地環境下（病人族群、軟體系統、放射機器）是否能按照廠商所宣稱的運作。另外也有資安及病安的議題。
  - 確效機制包含哪些項目？例如：資料傳輸過程是否保留、資料 ground truth 最終由誰判定、系統資訊安全維護。
- 案例分享
  - COVID-19 detection based on chest radiography
  - CV calcium score auto-calculation based on HeaortaNet
  - Integration of LunitAI（chest radiography、mammography）
  - ICH detection

## COVID-19 detection based on chest radiography

台大的 COVID-19 偵測模型使用了 3‑step hierarchical CNN。

- 先取出 lung field
- 判斷是否異常
- 再判斷異常是否為 COVID-19

![Model](/assets/img/model.png)

不過其實模型讀取的是壓縮過的 512 x 512 影像。究竟機器對這樣的影像其判別能力為何？如果用其他 atypical pneumonia 的影像做測試，表現能力如何？似乎沒有特別提到。報告者用幾個範例介紹過去這個項目。

## 感想

隔天我們科的 AI 負責人阿吉主任也有來跟我聊感想。

- 整合與確效：這部分我們科也有出台自己的一套方案，跟台大的差不多，包括資料管理以及旁路安全性測試等。在整合部分，目前確定接入的是 ClearRead 這套去除 CT 血管的演算法，可以一鍵讀取，很方便。相較之下，台大的 Lunit 接口似乎是下載再上傳（？），沒有那麼方便。
- 硬體資源：完全不輸 XD 我覺得台大額外的強項是來自大學方面的軟體技術支援，比我們強很多。
- 住院醫師參與：台大這次雙月會出動了多名住院醫師報告。我很好奇他們的 R 對 AI 的感興趣程度。基本上，不做介入就一定得做 AI，這是放射科未來的宿命。不過，這些題目似乎都是是由其他科大佬所推動（例如以 HeaortaNet 為例，它是 TWCVAI 計畫所衍生的產物）。當然，我們小團隊無法跟醫學中心聯盟其幾百萬張的標註影像和來自大學資工科系的博士生們抗衡，所以必須尋找較冷門的題目發展一整套環環相扣的研究題目，才是生存之道（例如我選擇主動脈疾病、支架放置到血流動力學模擬等）。
