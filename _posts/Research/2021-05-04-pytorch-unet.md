---
title: "運行 PyTorch-UNet"
category: Research
layout: post
tags: ["PyTorch"]
---

本來計畫是運行專門為醫學影像特化的 [nnUNet](https://github.com/MIC-DKFZ/nnUNet#dataset-conversion) ，不過因為不知道怎麼將二維的 mask 轉換成三維結構並正確轉換為 NifTi 格式，所以只好先用一般性的 [UNet](https://github.com/milesial/Pytorch-UNet) 來試做。目前遇到的兩個主要問題：資料結構轉換時的資訊損失、3D UNet 碾壓性的醫學影像判讀優勢。

CT 影像 HU 值存儲範圍是 -2048 ～ 2048，差不多是 12 bits。一般的 PNG 檔案是以所謂的全彩 RGB 存放資料，也就是所謂的「三通道」「8 bits」。如果要把醫學影像轉換成三通道 8 bits，勢必要損失部分資訊。雖然我們日常判讀 CT 也是依靠設定 window 把 12 bits 壓縮到差不多 8 bits 的情況下判讀（人眼只能辨識兩百多階的灰階差異）。目前只能通過調整 window center 跟 window width 嘗試去提高不同軟組織間的對比來達成更好的辨認效果。或者，修改 UNet 內的資料結構，使其可以讀取 16 bits 的 PNG 檔案。

另外一個迫切需要改用 nnUNet 的原因是，一般性的 UNet 是 2D 讀取，意思是每次被模型吃入的是單張圖片。nnUNet 則是一次吃進整個 3D 結構。因此也就比去年預計的「2.5 D mask」來的更強大。這是這個月必須！而且一定得完成的項目。

## 基本的 nnUNet 運行指令

- 首先需要把資料整理成要求的格式，放在 `imagesTr` 跟 `labelsTr` 並在 `dataset.json` 指定其名稱。
- 操作指令如下，之後就可以訓練了：

```bash
nnUNet_plan_and_preprocess -t 201
nnUNet_train 3d_fullres nnUNetTrainerV2 Task201_Aorta 4
```
