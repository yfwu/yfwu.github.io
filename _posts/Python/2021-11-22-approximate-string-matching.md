---
title: "模糊字串比對"
layout: post
category: Python
tags: ["RegExp", "pandas"]
---

小學妹的研究中有個要從病歷中獲取關鍵字的需求。例如：pneumonia，不過考慮到我們的病歷都是疲累的住院醫師打出來的，所以有不少的錯字（例如：多了一個字 pneumoniaa / 字序有誤 peunomonia），需要模糊比對。稍微研究了一下，了解到這個區塊的正式知識叫做 [approximate string matching](https://en.wikipedia.org/wiki/Approximate_string_matching)

字符串匹配是很著名的經典計算機科學主題。例如 Knuth-Morris-Pratt 算法、Trie 字典樹、編輯距離後綴自動機（Suffix Levenshtein automata）、Soundex。在 bioinformatics 也有很多特化演算法。我這次簡單使用了 Classical Levenshtein distance 和 Damerau–Levenshtein distance 來解決這個題目。

預計步驟：

- 資料清理：去除空格、小寫化
  - 使用正則 `\[A-Za-z]+` 撈出單字
- 使用 Levenshtein distance 的算法來篩選

```python
import pandas as pd
import re

notes = pd.read_excel("notes.xlsx",
                      index_col=0,
                      engine='openpyxl')

pattern = r'[A-Za-z]'
texts = [[t.lower() for t in re.findall(pattern, p)]
         for p in list(notes['diagnosis'])]
```

上面程式碼將每個病人的診斷從 Excel 中讀出，通過巢狀的 list comprehension 轉換成單字列表。

```python
from Levenshtein import distance
Text = list[str]

def compare(word: str, texts: Text, n: int):
    for text in texts:
        result = distance(text, word)
        if result <= n:
            return(result, text)
    return None
```

- 上面程式碼通過 `Levenshtein.distance()` 這個函數來比對每個單字與目標字的距離，小於閾値 n 的單字則返回。
- 由於目標是「偵測」，所以用的是非貪婪搜尋模式（也就是找到第一個即返回，剩下的字忽略）。
- 另用 type hint 標明型別。
- 如果改用 Damerau-Levenshtein distance 的話，則可以如下改寫 `compare`（把 `import` 部分替換掉即可）。使用的是叫 `fastDamerauLevenshtein` 的模組 [link](https://pypi.org/project/fastDamerauLevenshtein/)

```python
from fastDamerauLevenshtein import damerauLevenshtein as distance
```

最後就是比較每個病人的診斷資料所構築的字串列表與關鍵字群。當然，這操作也可以簡化成 list comprehension，方便將資料寫回 Pandas dataframe。

```python
keywords = {"pneumonia": 3,
            "dyspnea": 3}

for index, text in enumerate(texts):
    for keyword in keywords.keys():
        result = compare(text, keyword, keywords[keyword])
        if result is not None:
            print(index, result)
```
