---
title: "macOS 螢幕錄影"
category: Tools
layout: post
image: /assets/img/midi.png
---

最近因為上國外課程，但是白天又沒空聽課，所以採用螢幕錄影手段側錄 Zoom（不使用內建功能，免得官方來找麻煩）。使用的是 QuickTime Player 的螢幕錄影功能（file - new screen recording）。那麼，要怎麼同時錄影聲音呢？需要使用一個叫 [Soundflower](https://github.com/mattingalls/Soundflower) 的工具。它會產生一組聲音輸出及輸入設備，可以直接把輸出當成輸入。

## 安裝 Soundflower

按照 Github 頁面安裝即可，一路點擊 Next。可能需要同意使用某些系統權限。安裝好後會發現麥克風及喇叭各多了 soundflower 2ch 及 64ch。

## 聲音聚合器

從選單中開啟 Audio MIDI setup，從左下角的 + 中，分別建立

- Aggregate Device：勾選 soundflower 2ch 及內建麥克風
- Multi-Output Device：勾選 soundflower 2ch 及內建喇叭

![Midi](/assets/img/midi.png)

內建麥克風及喇叭也可以替換成是其他音訊設備，端看需求。Aggregate Device 的功用在於整合系統麥克風及軟體產生的聲音為一組音訊輸入。而 Multi-Output Device 則用於將輸出音訊同步播放到喇叭。

## 使用

指定欲錄影軟體的音效輸出為 Multi-Output Device（例如 Zoom 左下角可以指定），然後再 QuickTime Player 的錄製選項中指定麥克風為 Aggregate Device，即可達成目標。如果不需要錄製麥克風，直接指定 QuickTime Player 音效輸入為 soundflower 2ch 也可以。
