---
title: "用 Racket 刷題"
layout: post
category: Functional
---

在 online judge 領域中，大家最熟悉的就是 [LeetCode](http://leetcode.com) 刷題 - 把上面的題目做懂是進 FLAG 的一個必要條件。我其實一直想做些演算法的題目來增進實力；不過，在本機寫完，貼上去跑測試、再回頭修 code 其實不是很方便，我希望有一套工具可以快速搞定驗證、上傳的部分，我只要在本機端按下幾個按鈕就好。LeetCode 支持的程式語言種類不是很多 - 只有主流的幾種，例如 Python / C++ 等。如果想用小語種，例如我最近在深入的 Racket 跟 Julia，則要考慮另一個刷題選擇 - [HackerRank](https://hackerrank.com)。

其他幾個刷題平臺包括：[UVa](https://onlinejudge.org)、[Project Euler](https://projecteuler.net)。我自己覺得 OJ 最重要的點在於檢討，並學習其他人的解法。

## HackerRank 介紹

HackerRank 這一類型的刷題網站都是由題目、未公開的題目與答案資料集組成。程式有一個既定的讀寫框架，解題者主要是在題目與答案之間構建一個函數來解決問題。主要的題目類別包含「Algorithm」，以及「Distributed system」「Security」「Functional programming」等幾種。

## Racket 介紹

[Racket](https://racket-lang.org) 是一個以 S-expression 爲語法的 Scheme 衍生語言。前身是教學用語言 PLT-Scheme。後來則衍生爲泛用語言，並且擁有強大的 macro / pattern matching 以及出色的運行速度。根據 [The Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/racket-java.html) 中，在某些特別的演算法上，Racket 的速度可以在 Java 的兩倍時間內達成！而在與 Python 的對比上，更是幾乎大勝。

另外，[Racket on Chez](https://blog.racket-lang.org/2019/01/racket-on-chez-status.html) 也在緊鑼密鼓的開發中。Chez 是一款能將 Scheme 編譯成乾淨且高效，速度不亞於 C 的強力工具（參考王垠的文章 [《Chez Scheme 的傳說》](http://www.yinwang.org/blog-cn/2013/03/28/chez-scheme)）

我自己對 S-expression (a.k.a. Lisp 家族) 都很喜歡，例如 R7Rs Scheme / Clojure / Common Lisp / Emacs Lisp 以及類 Lisp 語言像 Julia 跟 R。

## Emacs 介紹

我的主力編輯器是 Emacs。相關的設定很多，而 Racket 相關的主要就是 Racket-mode 跟 Paredit。目前正在測試 [Geiser](https://www.nongnu.org/geiser/geiser_3.html) 實際上，如果只是要寫 Racket，我覺得 DrRacket 也不錯，不過我已經習慣 Emacs 了。有關 Emacs 的入門，可以參考臺灣 Emacs 社羣的 [《Emacs 101 新手求生指南》](https://github.com/emacs-tw/emacs-101-beginner-survival-guide)。然後可以參考王垠關於 [Scheme 編輯環境的設定](https://www.yinwang.org/blog-cn/2013/04/11/scheme-setup)。

## 解題框架

在 HackerRank，官方沒有辦法直接對函數推參數，所有的東西都必須通過 stdin / stdout。在某些題目 - 例如讓我卡關在讀寫的 List Replication - 明明解答非常容易搞定（如果用 threading macro 會很漂亮），然而如何把輸入讀進去 list 卻成了一大問題！最後保留了我的主體函數，抄襲了別人的框架才搞定 XD （然後我發現別人用遞迴跟 cond 做出了很漂亮的結果，我自己用 threading 反而不是很好看，有好幾個醜陋的 lambda）。

以前期簡單的題目 filter 舉例， 用 `for/list`，就可以建構出一個基本的 filter 函數出來。

```scheme
;; the algorithm
(define (filter l n condition)
  (for/list ([i l]
             #:when (condition i n))
    i))

;; the I/O framework
(define s (read))
(define l (sequence->list (in-port)))
(define (show ans) (for ([i ans]) (println i)))

;; the output
(show (filter l s <))
```

需要修改的地方就是開頭的函數，以及最後顯示解答的部分。當然，還是要根據題目的要求進行調整。這裏的框架就是一個前期題目通用的解決方案。注意不要把 list 直接輸出，這樣是沒有分數的！（我犯了好幾次，直到框架穩定下來 XD）
