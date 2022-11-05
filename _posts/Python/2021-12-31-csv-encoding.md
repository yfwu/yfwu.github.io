---
title: "處理 CSV 文件編碼"
category: Python
layout: post
---

先讀篇關於[編碼歷史的優秀文章](https://www.csie.ntu.edu.tw/~p92005/Joel/Unicode.html)。現代化的系統多使用 UTF-8，不過，偶爾還是會遇到解碼錯誤的 CSV。

```python
import pandas as pd
file_path = "../sample.csv"
df = pd.read_csv(file_path, endocing="utf-8")
```

運行後可能會報錯：

```
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte
```

`0xff` 其實是文件頭部的字節碼。通過這個字符的數字，可以猜測文件編碼類型，例如：`0xff` `0xfe` 是 UTF-16。不過在台灣，舊系統編碼大概就是 `big5` 或是其擴充 `cp950`，試著用這兩個去解通常可以搞定。
