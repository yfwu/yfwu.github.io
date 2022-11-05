---
title: "回顧 Hazalyst"
category: Hazalyst
layout: post
tags: ["Statistics"]
---

前篇週記有提到 automatic retrospective Cohort study algorithm。我後來想一想，其實這也是拼湊出來的產物，可以寫個短文紀錄一下，並闡述如果繼續發展下去會有什麼方向的題目可以做。

> _Hazalyst_ was originally a research project for creating an automatic algorithm that generates retrospective cohort studies from the National Health Insurance Research Database (NHIRD).

## 健保資料庫的論文典型架構

論文一言以蔽之是所謂的「retrospective Cohort」，翻譯成中文叫做「回溯型世代研究」。就是搜集一批病人的資料來進行分類比較。例如要了解「糖尿病 - 中風」的疾病關係，做法是：

- 從健保資料庫的資料中切分成三個時間區塊
  - 背景疾病排除期：用來將已經知道有糖尿病的病患 ID 排除
  - 收案：新發病病患 ID 納入
  - 追蹤：追蹤後續中風診斷碼出現情況
- 將有糖尿病病患及無糖尿病病患資料做存活分析（survival analysis）

類似這樣的方法有很多可以調整的參數。除了最簡單的疾病關聯性，藥物的使用、多重疾病等都是可以列為分群的依據，端看操作者的選擇。網路上也有不少如何組合診斷碼及其他關聯性資料（例如：納保時間點）來做推測的教學。

## 核心算法

核心算法是計算兩個疾病之間的盛行率（incident ratio）的比値。

$$ \hat{IR}=\frac{A_1/T_1}{A_0/T_0} $$

下標 1 表示實驗組，即有暴露背景疾病，而下標 0 則是控制組，無暴露對應疾病。而給予疾病盛行率計算其信賴區間的算法則是：

$$ \hat{SD}[ln(\hat{IR})] = (\frac{1}{A_0} + \frac{1}{A_1})\times0.5  $$

$$ \underline{IR}.\overline{IR}=exp{\{ln{(\hat{IR})}± Zγ\hat{SD}[ln{(\hat{IR})}]\}} $$

這邊按 p < 0.05 設 Zγ 為 1.96。

## 比値的功能

盛行率的比値就是所謂的風險比（hazard ratio）（也是我們公司當初名稱的由來）。通過風險比可以大致評估疾病關係。如果偏離 1 超過某個標準差，就可以考慮是否疾病有某種程度的關聯性（不一定是因果關係）。

## 我們的構思

通過兩個大迴圈就可以很暴力的將所有的疾病的 hazard ratio 做成一個巨大的熱點圖。我們的目標其實是通過 hazard ratio 建構出的矩陣，產生一個疾病群的網路，進行 network analysis。

- 針對網路去排除共病造成的情況（例如肺囊蟲肺炎 PJP、卡波西氏肉瘤 Kaposi sarcoma，其實都是愛滋病的病發表現）。
- 通過網路對具有某些背景疾病的病患推估其之後另外其他疾病發生的機會

第二項是我們當時的創業構想，也就是通過模型建構一個可以為保險公司服務的 API，可以通過被保險人的疾病資料對網路進行加權，來估算其各種疾病發生機會進而進行保費精算。另外一個我們當時想做的主題是建構藥物併發症及新療效網路。也就是觀察某些藥物的使用者其後續某些其他疾病的發生率是否比較低（例如 Metformin 被發現可能有延長壽命的效果）。不過後續因為技術力不够、加上我們都即將大學畢業，沒有繼續玩。
