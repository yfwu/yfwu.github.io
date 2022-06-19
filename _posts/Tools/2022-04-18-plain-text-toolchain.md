---
title: "純文字工具鏈"
layout: post
category: Tools
---

前幾天閱讀了 [Write Plain Text Files](https://sive.rs/plaintext) 一文，與我這兩年來的工作流建設的想法一致。主要是介紹檔案格式應該保持純文字（然而內文可以是 Markdown、org-mode、LaTeX 等）。作者提到的幾個考量如下：

- Portable 可攜性：不受作業系統限制
- Non-commercial 非商業化：不會被產品生命週期綁架
- Offline 可離線使用
- No dependencies 不依賴特定軟體
- Easiest to convert 容易轉換

在我的工作流中，相關的軟體如下：

- Obsidian：Markdown 檔案的一站式工作區，寫了很多文章介紹了
- Pandoc：可將 Markdown 檔案搭配 CSS 文件，轉換為各種格式（例如 PDF、LaTeX）
- Static site generator：我用 Jekyll（Github 支持在線轉換符合此格式的資料夾結構在線生成 HTML，其他例如 Hugo、Hexo 則需要線下先轉好再上傳）

不過我的工作中也會遇到很多圖片，圖片的管理是比較麻煩的部分。目前是想當依賴 Obsidian 內的圖片 backlink，不是傳統的 Markdown 圖片連結語法（`![]()`）造成轉換上的一些麻煩。又因為我使用 Obsidian 管理部落格文章，所以特別設計了一套工具管理。後續會有文章介紹。