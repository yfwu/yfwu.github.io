---
title: "Dataframe Interoperability"
category: Python
layout: post
tags: ["Julia", "R", "Python"]
---

Interoperability = the ability of computer systems or software to exchange and make use of information.

最近在寫資料清理和相關的程式碼時，都會想到資料科學三大語言： R / Python / Julia （Jupyter 名稱的由來）。關於三語言的比較網路一搜一大把。我自己的話：

### R-lang

- 我喜歡 R 的類 C 語法和函數式的運作模型。
- R 在統計推論（一個我很感興趣的領域）很強，例如 [RStan](https://mc-stan.org/users/interfaces/rstan)；貝葉斯統計的相關工具也是 R 一枝獨秀。
- 相當不滿意 R 的速度，不過如果熟悉 Rcpp 的話也許可以大幅改善改善很多操作，「接上 R 的腿」。`data.table` 的[運作速度其實非常快](https://h2oai.github.io/db-benchmark)，出乎我的意料之外。
- 題外話：我不喜歡自己搞了個 DSL 宇宙的 tinyverse，不過 RStudio 真的做了很多很酷的東西，不愧是 R 中的領頭羊。相比之下，被微軟收購的 Revolution 似乎沒什麼更多的發展。

### Python

我不喜歡 Python 但因為生態系不得不用。其機器學習工具（scikit-learn）跟其他神經網路模型膠水層幾乎都是 Python 為主。至少未來幾年還很難匹敵。在做其他任務（例如：爬蟲、伺服器如果 Flask 等）也有很多好的模組可用。

### Julia

- 我看好 Julia，也對 Julia 將來的潛力有興趣。
- [Flux](https://fluxml.ai/Flux.jl/stable/) 有潛力挑戰 PyTorch 跟 TensorFlow。
- Julia 對標的應該是 Matlab（從 Julia 的設計可以看出，例如是從 1 開始算列表下標等諸多偏數學家而非電腦工程師的習慣）。

三語言如果要併用或著接力，主要的交會點應是 Dataframe，也是本文的重點所在。本來想要介紹 PyCall 之類的交互呼叫，不過據說相當不穩定，也不確定當資料結構超過某個大小會有額外的錯誤發生，所以選擇了比較「老套」的作法，即先存下來，再讀取。這個作法會用到一個叫「Feather」的函式庫。

## Feather

[Feather](https://github.com/wesm/feather) 是基於 [Apache Arrow](https://arrow.apache.org) 所開發。Apache Arrow 是一種跨平台、跨語言的特定格式及工具，用來減少資料在傳輸和存貯之間反覆的序列化（serialization）和反序列化。常見的序列化方式如將資料、物件變為 JSON 字串，傳輸完後再由 JSON 解析器還原回原始結構，然而這很消耗資源。R / Python / Julia 都支援通過 Feather 的方式存取資料。Python 使用者可以想像成 Feather 資料格式是一種 Pickle。格式是通用的，讀取和寫入則仰賴各語言自己的實作。

```R
install.packages("feather")

library(feather)
write_feather(mtcars, "mtcars.feather")
mtcars2 <- read_feather("mtcars.feather")
```

類似的，Google 有推出一個對標 JSON，類似於 Apache Arrow 的結構體存貯格式及其工具 [Protobuf](https://yami.io/protobuf/)。

## Polars

基於 Apache Arrow 的資料存貯格式，採用 Rust 所設計的 Python / Rust 和 NodeJS 通用套件；且由於是符合 Arrow 規範，可以跟其他工具直接對接。主功能是如同 Pandas 那樣對 dataframe 的操作，速度極快。跟據對比的 [Database-like ops benchmark](https://h2oai.github.io/db-benchmark/)，性能位居 dataframe libs 前段班（是說我很震驚 R 的 data.table 竟然效能更為強大）。

```Python
import polars as pl

from .dataset import dataset

q = (
    dataset.lazy()
    .groupby("first_name")
    .agg(
        [
            pl.count("party"),
            pl.col("gender").list(),
            pl.first("last_name"),
        ]
    )
    .sort("party_count", reverse=True)
    .limit(5)
)

df = q.collect()
```

語法上有蠻多操作習慣跟 Pandas 不一樣，等實務上熟悉之後另外寫文章介紹。
