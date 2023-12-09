---
title: 網頁對照翻譯書籤工具
category: Tools
layout: post
---

出處我找不到了（汗）總之是個神奇工具。它允許用戶透過點擊書籤啟動一段 JavaScript 腳本，快速複製網頁上的特定元素（如段落、列表項目、標題），並將複製的內容插入原文上面，然後，使用者可以使用瀏覽器的內建翻譯功能，會有原文不動的效果，從而實現對照翻譯的目的。

## 如何使用

1. 將程式碼保存為書籤。
2. 在需要翻譯的網頁上點擊書籤。
3. 使用瀏覽器內建的翻譯功能對頁面進行翻譯。

## 程式碼重新整理（排版）

以下是重新排版後的程式碼，以提高可讀性：

``` javascript
javascript:(function() {
    for (var node of document.querySelectorAll('p, li, h1, h2, h3, h4')) {
        var copy = document.createElement(node.nodeName);
        copy.textContent = node.textContent;
        node.parentElement.insertBefore(copy, node.nextElementSibling);
        node.setAttribute('translate', 'no');
        node.setAttribute('class', 'notranslate');
    } 
})();
```

這段程式碼會遍歷頁面上的段落、列表項目和標題元素，創建它們的複製版本，然後將這些複製版本插入到原始元素旁邊。同時，它會修改原始元素的屬性，以防止它們被翻譯，從而實現原文和譯文的並排顯示。

## 替代方案

有個「[沈浸式翻譯](https://immersivetranslate.com/zh-TW/)」的 Chrome 插件也能達到類似的效果，免費用戶可以自訂 OpenAI 的 GPT 模型 API，或付費使用它提供的 DeepL 額度。它同時也提供了 Epub 及 PDF 的對照翻譯功能，比前述的書籤工具用途更大。免費用戶則可以通過它來薅 Google Translate 的羊毛。