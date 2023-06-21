---
title: "Reticulate"
category: R
layout: post
---

[Reticulate](https://github.com/rstudio/reticulate) 是 Rstudio 推出的一個項目，旨在從 R 程式碼中，以 R 的語法呼叫 Python 物件和函數。

``` R
install.packages('reticulate')
```

``` R
library('reticulate')

os <- import('os')
os$listdir(".")

numpy <- import('numpy')
y <- array(1:4, c(2,2))
x <- numpy$array(y)

numpy$transpose(x)
numpy$linalg$eig(x)
```

