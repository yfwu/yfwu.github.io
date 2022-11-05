---
title: "聚合多列"
category: Python
layout: post
---

當需要將多個具有相近欄內容，按照某個規律排列的多列聚合在一起時，可以使用 `unstack()` 函數來進行。首先生成範例資料：

```python
import pandas as pd
df = pd.DataFrame({"ID":["A","A","A","A","A","A","B","B","B"],
                   "date":["2021-04-25","2021-04-25","2021-04-25",
                           "2021-04-26","2021-04-26","2021-04-26",
                           "2021-04-25","2021-04-25","2021-04-25"],
                   "EVM":[4,5,6,4,5,6,4,5,6]})
```

首先拆分並生成新欄位，接著，使用 `unstack()`，就可以將原本同個欄位的 EVM 拆開，放入各自的欄位：

```python
df["EVM name"] = ["E","V","M"]*int(len(df)/3)
df.set_index(["ID", "date", "EVM name"]).unstack()
```
