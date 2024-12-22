---
title: "文字外框"
layout: post
category: Tools
---

<style>
.border {
  margin: 1.5rem 0.5rem;
  border: 1px solid;
  display: block;
  padding: 1rem 1rem;
}
.border p:last-child {
  margin-bottom: 0;
}
.border ul {
  margin-bottom: 0;
}
</style>

本文實驗在內文中為文字加入外框。目的是為之後各種讀書及技術筆記時候，可以卡片化呈現各個段落。

添加 CSS 於文件內；與 code block 風格類似，只是底色與字體大小不一樣。

```css
<style>
.border {
  margin: 1.5rem 0.5rem;
  border: 1px solid;
  display: block;
  padding: 1rem 1rem;
}
.border p:last-child {
  margin-bottom: 0; /* Remove margin at the bottom of the last paragraph */
}
.border ul {
  margin-bottom: 0; /* Remove margin at the bottom of the last paragraph */
}
</style>
```

使用 `<p class="border"></p>` 來包圍文字段落。舉個例子（使用《黑天鵝》）

<div class="border"><b>金句卡</b><br>
你不知道的事比你知道的事情更加有意義。
</div>

## 額外的用途

之前看一篇講使用 Vim 以及各種 LaTeX snippets 做數學筆記的文章 [How I'm able to take notes in mathematics lectures using LaTeX and Vim](https://castel.dev/post/lecture-notes-1/) 覺得很 geek，一直都想模仿他的設計：使用了方形區塊，來強調重要的公理或數學式。下面的示範抄自作 Gilles Castel 的筆記頁面截圖。本次新設計的方框應該也可以有同樣地效果。本部落格使用的是 KaTeX 模組。

<div class="border"><b>Theorem 16</b>
<p>Let \( \Omega \subset \mathbb{C} \) be a region, \( f(z) \) a holomorphic function. Let \( \{w_k\} \) a sequence of points in \( \Omega \) such that</p>
<ul>
<li>\( \{w_k\} \) are distinct</li>
<li>\( w_k \to z^* \in \Omega \)</li>
<li>\( f(w_k) = 0 \) for all \( k \)</li>
</ul>
<p>Then \( f(z) = 0 \) for all \( z \in \Omega \)</p>
</div>