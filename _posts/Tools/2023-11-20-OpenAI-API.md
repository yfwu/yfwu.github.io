---
title: "試玩 OpenAI 的 API"
layout: post
category: Tools
---

隨著 GPT-3.5-turbo-1106 模型的推出，使用 GPT 直接取代繁複的 NLP 工具變得越來越容易。最主要是現在可以通過設定，使模型回傳特定的 JSON。不過，模型本身還是常常做出超過指示的動作，例如自顧自的折疊結果，或只輸出一半。

以下是我最近在進行的一個項目的呼叫程式碼。

``` python
class Client:
    def __init__(self, model):
        self.client = openai.ChatCompletion.create()
          # Assuming openai is already imported and configured
        self.model = model

    def send_request(self, messages, response_format):
        completion = self.client.completions.create(
            model=self.model,
            messages=messages,
            response_format=response_format
        )
        return completion

    def parse_response(self, completion):
        return completion.choices[0].message.content

    def analyze_text(self, prompt, additional_questions):
        messages = [
            {
                "role": "system",
                "content": "You are a helpful assistant.",
            },
            {
                "role": "user",
                "content": f"{prompt}\n{additional_questions}",
            },
        ]
        completion = self.send_request(messages, {"type": "json_object"})
        return self.parse_response(completion)
```

通過額外的工具，可以設定出不同形式的 Client 做實驗，例如比較同一筆資料在不同的 prompt 下會有什麼變化，以及客製化額外的 prompt。環繞著我這個簡易的 framework 建構新的研究範式是十分有趣的事情；我也得看看網路上有沒有更多已經成熟的類似工具。
