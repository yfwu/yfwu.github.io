---
title: 實作 IFTTT webhook
layout: post
category: Tools
---

IFTTT 是一個好用的自動化工具，用來串連各種網路服務（例如：我在臉書上傳新相片，便自動更新到 Dropbox）。但是網路的服務多少都有局限。例如，我希望能够儲存我在 Twitter retweet 的內容的網址部分，然而 IFTTT 並沒有過濾器（filter）可以套用，因此我必須自己來。

在 IFTTT 中，有一個特別的服務類型，即使用者可以添加自己的 webhook 來作為終點。所謂的 webhook，是伺服器主動向客戶端推送內容。因此，相對於 RSS/Atom 採用被動方法獲取內容，使用起來需要更多的先備知識及設備：

1. 一台主機（及域名，或者是固定的 IP）
2. 了解 HTTP request
3. 伺服器框架（我用的 Flask，其他的如 Django / Rails 等）

```python
from flask import Flask, request, abort
app = Flask(__name__)

@app.route('/twitter', methods=['POST'])
def webhook():
    print(request.data)

@app.route('/')
def init():
    pass

if __name__ == '__main__':
    app.run(host = '0.0.0.0')
```

這是我的簡易的測試機。我的目標還抱括

1. 通過正則表達式（regular expression）過濾出網址
2. 利用爬蟲獲取該網址資訊
3. 存放在資料庫（目前計畫用 MongoDB）
4. 推送資訊到 Slack
5. 以及最重要的，驗證 POST 以及設 IFTTT recipe 為 private 以避免惡意人士在伺服器內部灌入拉圾資訊！

設定 IFTTT，THIS 的部分是觸發 Twitter new post 事件。THAT 的部分則是傳遞一個 JSON 及驗證碼給我的 webhook server。
