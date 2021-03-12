---
title: 文字外框
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
</style>
```

使用 `<p class="border"></p>` 來包圍文字段落。舉個例子（使用《黑天鵝》）

<div class="border"><b>金句卡</b><br>
你不知道的事比你知道的事情更加有意義。
</div>

## 額外的用途

之前看一篇講使用 Vim 以及各種 LaTeX snippets 做數學筆記的文章 [How I'm able to take notes in mathematics lectures using LaTeX and Vim](https://castel.dev/post/lecture-notes-1/) 覺得很 geek，一直都想模仿他的設計：使用了方形區塊，來強調重要的公理或數學式。下面的示範抄自作 Gilles Castel 的筆記頁面截圖。本次新設計的方框應該也可以有同樣地效果。本部落格使用的是 KaTeX 模組。

<div class="border"><b>Theorem 16</b><br>
Let \(\Omega \subset C\) be a region, \(f(z)\) a holomorphic function. Let \(\left\{w_{k}\right\}\) a sequence of points in \(\Omega\) such that

<ul>
<li> \(\left\{w\_{k}\right\}\) are distinct
<li> \(w*{k} \rightarrow z*{0} \in \Omega\)
<li> \(f\left(w\_{k}\right)=0\) for all \(k\)
</ul>

Then \(f(z)=0\) for all \(z \in \Omega\).</div>
