---
title: 在 Jekyll 貼文中嵌入 MermaidJS
category: Tools
layout: post
---

有時候需要畫流程圖，又需要能適應各種不同的瀏覽器。這時候，Mermaid JS 就能派上用場了。首先用 `div` tag 以及特定的 class 名稱，將 Mermaid JS 的渲染部分包起來；然後在文章任意處添加 Mermaid JS 的 CDN 連結即可！

```html
<div class="mermaid">graph LR; A-->B;</div>
```

```html
<script
  async
  src="https://unpkg.com/mermaid@8.2.3/dist/mermaid.min.js"
></script>
```

下面的圖片是我的研究計畫的整體框架概念圖，作為示範。

<div class="mermaid" align="center">
graph TD
  ROI[ROI in OsiriX] -->|extract.py| ROId(ROI data)
  ROId --> |roi2mask.py| DL[DL tasks]
  ROId --> |convert.py| HUm(HU matrices)
  DICOM[DICOM] --> |dicom2png16.py| PNG(16-bits PNG images)
  PNG --> DL
  DL --> Seg[Segmentation]
  DL --> Det[Detection]
  HUm --> Omics[Radiomics]
  HUm --> Dynamic[Dynamics]
</div>

<script async src="https://unpkg.com/mermaid@8.2.3/dist/mermaid.min.js"></script>
