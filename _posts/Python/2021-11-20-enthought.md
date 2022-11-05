---
title: "Enthought 生態系"
category: Python
layout: post
---

最近回老家，發現了一本 2013 年買的《用 Python 做科學計算》（現在有 [Gitbook 的版本](https://wizardforcel.gitbooks.io/hyry-studio-scipy/content/) 。這本書其實是一個大自然的搬運工，因為看起來是翻譯或改寫工具的介紹文件）。前半段介紹的是 Python 科學計算的底層 - NumPy 和 SciPy，以及重要的兩個核心工具 - SymPy（符號運算）和 Matplotlib（繪圖）。

書中後半部分則介紹了很多庫（lib） ... 仔細一看，它們其實都來自於 [Enthought](https://www.enthought.com) 這間公司。他們著名的產品是 Python(X,Y)（現在改名 Enthought Tool Suite），這是一套類似 Conda + Spyder 的環境，給他們的客戶一個架構好的資料處理環境而不用去煩惱相依性或是功能的問題，本質上是 Matlab 和 Rstudio 的競爭對手。

作者介紹了如下的幾個由 Enthought 開發的庫：

- Python 類型工具 - [Traits](https://github.com/enthought/traits)
- 使用者介面 - [TraitsUI](https://docs.enthought.com/traitsui/)
- 互動式資料呈現 - [Chaco](https://docs.enthought.com/chaco/)
- 3D 資料呈現 - [Mayavi](https://docs.enthought.com/mayavi/mayavi/)
- VTK 包裝 - [Traited VTK](https://docs.enthought.com/mayavi/tvtk/)

不過，其實我自己現在做的也不是科學計算：以後若開始接觸流體相關的才是。總之，這篇文章就權充記錄。Enthought 的這些工具看起來都是開源，商業模式應該是仿照紅帽，即：開源以擴大使用群眾、然而優先滿足付費使用者的環境建構及開發需求。
