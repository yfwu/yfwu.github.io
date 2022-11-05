---
title: "在 Windows 上安裝多個 Python"
category: Python
layout: post
---

今天幫學長在 Windows 上裝一套叫 ASReview 的軟體，而這個軟體不曉得為什麼特別指定，需要 Python 3.8.1 版本。學長弄了半天還是沒搞定，所以來著找我幫忙看看。我自己 Windows 基本只用於打電玩；主機另外有一套 Arch Linux，而同為 Unix 衍生的 macOS 配置多版本 Python 也不是什麼困難事情，花了一點時間才搞懂如何在 Windows 上面設定。本來想說建議學長乾脆直接用 Conda，不過看學長已經很忙了，還是用比較簡單的方案。整個步驟如下：

- 電腦裡面原本裝了 Python 3.10.0 在家目錄下，有設定 PATH
- 可以在 CMD 下面呼叫到 `pip`，於是安裝 virtualenvwrapper-win。需要注意的是，virtualenvwrapper 其實是一套 shell script，不適用於 Windows 環境，需要裝 -win 版本。
- 接著安裝所依賴的 Python 版本，同樣是裝在家目錄，不過要取消所有預設項目（例如：關聯副檔名為 `.py`、創建環境變數）
- 最後，使用 virtualenvwrapper-win 的指令（如同 virtualenvwrapper），新建環境，並通過 p 參數指定 Python 解釋器的位置。接著就可以切換進去並通過 pip 安裝需要的軟體了。
