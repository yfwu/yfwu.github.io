---
title: "論文工具鏈"
category: Tools
layout: post
---

我現在的論文閱讀工具鏈：

- 搜集：瀏覽器的 Readcube plugin 可以添加當前頁面到其資料庫
- 閱讀：使用 Readcube 閱讀並管理文獻列表
- 離線：
  - 下載列表為 BibTex 檔案
  - 若列表檔案已存在，則使用 Emacs 添加新增內容
- 摘要及整合
  - 使用 Obsidian citation plugin 將論文條目加入筆記中

## Readcube

[Readcube](http://readcube.com) 是一套論文管理軟體，其競爭對手包含知名的 Endnote 以及其他如 [Mendeley](https://www.mendeley.com) 或 Zotero 等。我大約是自 intern 起便開始使用，不過所管理的論文經過很多次的清理。幾個特性，安利如下：

- 身兼「管理」和「筆記」兩大功能；在自動更新 metadata 方面應該是業界最強。
- Enhanced PDF 模式非常好用，可以在本文跟 references 之間跳躍。
- Metrics 功能，可以看這篇論文引用了哪些文章，以及哪些文章引用了本文。這是我覺得最實用的功能。
- 跨平台同步：有網頁版跟單機版（應該使用了 Electron app），也支援行動平台。需要點擊同步來進行註解的更新。
- 支援共享論文列表（需要對方也用 Readcube）；或者匯出成 BibTex。

## BibTeX

BibTeX 是一個與 LaTeX 同樣古老的學術格式，用來記錄多種文檔（書籍、論文等）的基本資料，並讓 LaTeX 論文可以直接通過簡單的引用符號來加入 TeX 檔案中。現在的編輯軟體也都支援呼叫 BibTeX 檔案。BibTeX 就像是一個資料庫，規定了各種類型的文件及其基本資料欄位（名稱、年份等），可以通過一份 BibTeX 檔案搭配格式設定生成不同學會跟期刊要求的 references 格式（此種設定即稱為 style，BibTeX 一開始預設了幾種理工相關的）。

在 LaTeX 文件裡面用下列的敘述啓用，指定格式 IEEEtran：

```latex
\begin{document}
\bibliographystyle{IEEEtran}
\bibliography{reference}
\end{document}
```

## Citation Style Language

[Citation Style Language](https://citationstyles.org) 引用文獻樣式語言是 Bruce D’Arcus 在 OpenOffice.org 的 CiteProc 子專案，主要結構是一種 XML。CSL 可以視為現代化的 BibTeX 替代方案。在文書軟體中（特別是 Word 跟 OpenOffice），論文管理軟體通過 CSL 指定的格式，插入論文文件連結，使用者不再需要手動生成、編輯 BibTeX 及其 style 文件。大部分主流的書目文獻管理軟體都有支援。可以[搜尋](https://editor.citationstyles.org/searchByExample/)主流格式（例如醫學常用的 AMA），而如果是小眾期刊，則可以直接[線上編輯](https://editor.citationstyles.org/visualEditor/)看效果。

不過為了能與筆記軟體 Obsidian 整合，我會續用 BibTeX 工具。

## Emacs BibTeX-mode

Emacs 是萬能編輯器（操作系統）；裡面有個歷史悠久的 BibTeX 編輯模式，可以用來生成、編輯 BibTeX 文件。主要用途是整理已經下載好的 BibTeX 供 Obsidian plugin 使用。常用的指令例如

| Shortcut    | Function             | Description          |
| :---------- | :------------------- | :------------------- |
| `C-c C-e a` | `bibtex-article`     | add an article entry |
| `C-<down>`  | `bibtex-next-entry`  | jump to next entry   |
| `C-c C-c`   | `bibtex-clean-entry` | clean the entry      |

## Obsidian BibTex plugin

[Citation plugin](https://github.com/hans/obsidian-citation-plugin) 用來讀取 BibTeX 格式文件，並產生「接口」供 Obsidian 讀取。

幾個目前提供的功能：

- 使用模板為單一論文創建筆記（literature note）（快捷鍵：`C-S-o`）
- 插入論文作為 reference（快捷鍵：`C-S-e`）
  - 也可以插入為 markdown 形式的 citation

其中，literature note 可以設定模板，為每篇論文單獨產生已經填充了預設資料的筆記，大幅節省剪貼時間。
