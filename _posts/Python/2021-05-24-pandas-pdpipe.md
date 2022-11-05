---
title: Pandas 的 pipeline 操作
category: Python
layout: post
---

稍微筆記一下關於 pandas pipeline 的紀錄、以及 `pdpipe`。

## 原生 `.pipe` 的用法

`DataFrame.pipe(func, *args, kwargs)`

假設說要通過多個函數操作 dataframe，例如：

```python
func(g(h(df), arg1=a), arg2=b, arg3=c)
```

可以改寫成如下形式：

```python
(df.pipe(h)
   .pipe(g, arg1=a)
   .pipe(func, arg2=b, arg3=c))
```

`DataFrame.pipe()` 預設是作用在整個表上。如果要針對特定 row 或 column，需要用 `DataFrame.apply()`。

## 使用 `pdpipe`

`pdpipe` 是一個純 Python 建構，特別為對單張 Pandas dataframe 的「增刪、修改、聚合」等操作流水線化設計的庫。關於 pdpipe 的教學文我是參考了 [Build pipelines with Pandas using pdpipe](https://tirthajyoti.github.io/Notebooks/Pandas-pipeline-with-pdpipe)，搭配 [官方文件](https://pdpipe.github.io/pdpipe/doc/pdpipe/) 補充。另外有一篇中文文章也寫的很完整 [用 pdpipe 搭建 pandas 數據分析流水線](https://www.cnblogs.com/feffery/p/12179647.html)

區分成兩塊：建構與運行。

建構部分需要使用 `pdpipe` 提供的 `stages`。分成了五大類：

- Basic stages：基本的資料清理
- Column generation：用來產生新的 column，例如 `ApplyToRows`，接受一個運行在各行上的函數，將結果輸出為新 column。
- Text stages：可以做基於正則表達式的字串取代
- `scikit-learn` dependent stages：機器學習相關
- `nltk` dependent stages：NLP / 機器學習相關

例如教學文舉例：要將房價表格中，房價低於 250,000 的資料去處。

```python
import pdpipe as pdp

def price_tag(x):
    if x > 250000:
        return 'keep'
    else:
        return 'drop'

pl  = pdp.ApplyByCols('Price', price_tag, 'Price_tag')
pl += pdp.ValDrop(['drop'],'Price_tag')
pl += pdp.ColDrop('Price_tag')
```

不同的步驟可以逐步添加到，最後一併 apply。也可以用 method chaining。註：上面的情境也可以用一行程式代替：

```python
pdp.RowDrop({‘Price’: lambda x: x <= 250000})
```
