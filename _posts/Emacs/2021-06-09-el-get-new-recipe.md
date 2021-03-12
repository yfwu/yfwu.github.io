---
title: 給 el-get 提交新 recipe
category: Emacs
layout: post
---
作為一個八年的 Emacs 用戶，我自己已經有一套習慣的設定檔框架。我自己是不喜歡從某個中央伺服器拉 Lisp 檔案下來，所以我自己沒有使用 `package-install` 從 MELPA 裝，而是用 [el-get](https://github.com/dimitri/el-get) 來做設定。這套軟體的大概念是：所有的套件都有一個對應的安裝腳本（或稱為 recipe），其中指定了源位置（例如來自 Github、emacswiki 或者是其他的程式碼託管服務）。當然，el-get 也可以使用本地端（用戶自己提交的）設定檔；例如，我可以把某個套件 fork 到自己名下，再使用 el-get 自訂安裝腳本的功能，來確保某天 Github 大當機依然在別的設備安裝使用套件。

我自己也會挖掘一些有趣的套件，把設定檔提交給 Dimitri 大神審核，讓其他使用者使用。這篇文章要介紹我是如何提交一個新的主題的設定檔。本次要提交的是 [Nord 主題](https://www.nordtheme.com/ports) 的 [Emacs 設定](https://www.nordtheme.com/docs/ports/emacs/installation)。

``` lisp
(:name nord-theme
       :type github
       :description "Nord theme for Emacs"
       :pkgname "arcticicestudio/nord-emacs"
       :prepare (add-to-list 'custom-theme-load-path
                             default-directory))
```

## Fork and fetch from upstream
我在我自己的 Github 有一個已經 fork 的 el-get。然而，要提交的話首先得先更新到最新的版本。Git 相關的程式碼操作如下；

``` shell
git clone git@github.com:yfwu/el-get.git
cd el-get
git remote add upstream https://github.com/dimitri/el-get
git fetch upstream
git rebase upstream/master
git push origin master --force
```

主要就是下載最新的版本並覆蓋掉自己的 Git 歷史紀錄。

## 提交貢獻
接下來的事情比較簡單：

1. 開新的 branch
2. 修改或新增異動檔案（如我這次要添加新的 recipe）
3. 把分支上傳 Github（a.k.a. origin）
4. 提交 pull request 等待 merge

``` shell
git checkout -b nord
find-file recipes/nord-theme.rcp # editing
git add recipes/nord-theme.rcp
git commit -m "nord-theme"
git push -u origin nord
```

最後就完工了。我的提交的 pull request 頁面在[這裡](https://github.com/dimitri/el-get/pull/2834)。