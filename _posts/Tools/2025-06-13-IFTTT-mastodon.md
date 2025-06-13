---
title: 自動發文到 GoToSocial
category: Tools
layout: post
date: 2025-06-13
tags:
---
最近搭上 n8n 代理熱潮，著手研究。第一個可以用上的便是自動化填充內容到私人聯邦宇宙上某個自言自語用的帳號，方便我在發廢文的同時還可以從同一個地方監看各種訊息。我的實例其實運行的是名為 GoToSocial 的相容服務。

1. 首先需要按照 [Authentication with the API](https://docs.gotosocial.org/en/latest/api/authentication/) 取得授權碼。需要反覆多次，最終獲得 `token_type` 為 Bearer 的一串 `access_token`。
2. 可以用 `curl` 呼叫進行測試
3. 最後在 n8n 的 HTTP request 元件中，選擇並填入 `curl` 指令，它會補入對應欄位
4. 之後牽引對應項目（trigger）即可

``` shell
curl -X POST 'https://<url>/api/v1/statuses' \
 -H 'Authorization: Bearer <access_token>' \
 -H 'Content-Type: application/json' \
 -d '{ "status": "Hello World!", "visibility": "public" }'
```

目前在考慮是否額外創建一個帳號，抑或共用目前的發文用帳號。我個人很喜歡《The Social Network》開頭 Zuckerberg 一邊做事一邊發文到 LiveJournal 那種感覺。在世界邊緣公開做事，等待有緣人發現？