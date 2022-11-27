---
title: "測試 Zotero"
layout: post
category: Tools
---

之前有用過 Citation plugin 搭配 Obsidian，不過依然是太過繁瑣。加上我計畫把自己的研究筆記從 Readcube 雲端轉移到 Zotero，所以移除掉需要使用 BiB 文件的 Citation，改用基於 Zotero Better BibTex 的 Integration 工具。不過，要真的完整整個工作流程，還需要底下幾個步驟。

## 安裝 Zotero 以及 Better BibTeX

- [Zotero](https://www.zotero.org)
- [Better BibTeX](https://retorque.re/zotero-better-bibtex/): makes it easier to manage bibliographic data

Zotero 的介面跟舊版 Firefox 有一樣的風格，不知道是不是用了同樣的 UI SDK？令我驚奇的是 Zotero 也能夠自動識別拖入的 PDF 並上網補全其 metadata。當然，作為免費軟體，短板還是有的，例如相關論文推薦、一鍵直達引用、被引用論文；這些功能目前看來只有 Readcube 做到。Endnote 曾經背靠 Thomson Reuters Web of Science 但也沒做出什麼比較好的競品。

## Obsidian 插件選擇

兩個的功能不太一樣，也都只適合在桌面端使用。基本上都是單向同步。我個人是覺得 citation 的用法比較合理，然而必須不停的輸出 BiBTeX 是最大的弱點。

- Citations
  - 麻煩點：需要不停的把 Zotero 匯出成 BiBTeX 檔案；這個 plugin 並不能直接跟 Zotero 通訊。另外這個插件目前不支持移動端。
  - 可以基於 citekey 產出對應的筆記，並可以在任何文章插入對應此筆記的連結。
  - 參考我之前的文章 - [論文工具鏈](https://yfwu.dev/tools/2021/12/26/articles-reading-workflow.html) & [合併 BiB 檔案](https://yfwu.dev/tools/2022/01/16/merge-bib.html)，有關於此插件用法的詳細介紹。
- Zotero integration
  - 直接呼叫 Zotero BBT 模組給出所需要的論文資訊。
  - 能夠單向把論文筆記同步到 Obsidian