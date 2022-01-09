---
title: "自動化翻譯工具"
category: Tools
layout: post
tags: ["DeepL", "Google Translate", "Automation"]
---

眾所周知，目前中文圈（不論繁體、簡體）均處於世界資訊流的窪地；大部分的最新知識和訊息（特別是經濟、科技、政治及其評論）都是英文為主，少部分則是文明國家的語言例如日文、法文、德文等，但都需要一段時間才匯流到中文圈內。如果想要了解目前最新趨勢，則需要強大的外語能力來閱讀，不過外語閱讀再怎樣也無法匹敵母語閱讀速度。我是一個喜歡積極接觸新概念的人，所以大量、快速的閱讀是生活樂趣之一。目前主要的外文閱讀輔助是強大的 DeepL。然而，台灣區無法購買能無限翻譯的 DeepL Pro，只能計算每 5000 個字貼上去 app 翻譯。最近有感浪費了甚多時間在剪貼，所以打算做一套自動翻譯工具。

此概念的出處來自於惡名昭彰的割韭強者 Xdite。她有篇 [如何拿到最新國外翻譯書的中文稿](http://xdite-goodie.logdown.com/posts/7858181-how-to-get-the-chinese-translation)，裡面提到的工作流程蠻吸引我的。另外是訂閱的 WSJ+ 裡面會推薦不少十分有趣的新書，<del>可以從創世圖書館找到盜版</del>，也是我想要積極涉獵的內容。

## Xdite 的步驟

- 從 Amazon 買書。
- 用 Epubor Ultimate 清除 DRM，然後以 pandocc 轉換 epub 為 markdown。
- 用 Xdite 自寫的 `tx_translate` Ruby Gem 通過騰訊的 API 翻譯。
- 極速閱讀法完食之。

## 核心功能

核心功能其實只是復刻網頁版翻譯服務的 HTTP post。在技術上並沒有什麼特別的地方，屬於初級爬蟲。要注意的是計算字數的部分。由於字數計算涉及到眾多 NLP 領域的知識，所以我單純利用換段落符號 `\n\n` 去切分，並且根據字數進行組合，盡可能讓每次請求都接近字數上限來降低請求數量。上限有參數可以調整，目前設定在 2500 左右（DeepL JSON-RPC 的 URL 傳輸上限）。如果是用 Google Translate 應該可以更高。另外由於翻譯服務還是有存取次數限制（用了一陣子就會跳 code 429），我另外也有個間隔參數可以調整。預設是 5 秒，最短是每個 chunk 間「暫停」一秒。考慮到翻譯服務的多樣性及備案，因此做了一些嘗試：

- 原本的 DeepL wrapper
- 韓國人寫的 [Google Translate 近乎無限的調用工具](https://pypi.org/project/googletrans/)，速度極快
- 中國眾翻譯服務的 [wrapper](https://pypi.org/project/translators/)，也有包入 DeepL 跟 Google Translate。

## 翻譯檔案

主要目標是翻譯文字檔及 epub。首先根據副檔名，使用 pandoc 將檔案轉為 txt，然後使用前述的核心翻譯函數切 chunk 然後逐批處理。下面是 pandoc 轉換器指令碼生成器：

```python
# f = source filename, with extension
command = "pandoc --wrap=none -f {} -t plain -o {} {}".format(
      extension, f.replace(extension, "txt"), f
)
os.system(command)
```

目前通過 `--wrap=non` 保留換行，然而必須要提到的是，epub、mobi 等本身帶有圖片或排版的檔案，其格式會全部被「消除」，變成分段落的巨大文字塊。目前還在想辦法處理。簡單來說，必須根據其各自的 HTML、XML 結構去寫 parser，再一段一段的翻譯並填充回原本的文件，工程巨大。因為不少要「細看」的書都是 epub 格式，所以我應該會針對 epub 再寫一個複雜的解析器，其他的則通過線上轉檔為 epub 再來處理。

## 轉換網頁

用 [ReadabiliPy](https://github.com/alan-turing-institute/ReadabiliPy) 這套工具來捕獲網頁內容。不過其實 Safari 也有內建網頁翻譯功能，直接使用即可，速度更快；網頁翻譯功能是附加的，未來計畫是將待看網址存成列表，例如存在某個 Obsidian 頁面，然後半夜的時候這個程式自行讀取該列表，並將翻譯好的 markdown 存入 Obsidian 資料夾。隔天早上再來檢視。

```python
from readabilipy import simple_json_from_html_string as html2json
import requests

def translate_URL(u, o):
    headers = {} # macOS Safari
    r = requests.get(u, headers=headers)
    content = html2json(r.text, use_readability=True)["plain_text"]
    content = "\n\n".join([t["text"] for t in content])
    output = translate(content, sleep_time=s, engine=e, limit=l)
    export(output, o)
```

## `click` 入口

以前寫 terminal app 大部分是用 `argparse`。這次寫 terminal app 則打算來學習並使用能處理更複雜業務需求的 `click`。設計了入口如下；考慮到還是以檔案翻譯為主要需求（畢竟網頁我直接用 Safari 或 Edge 內建的翻譯就得了，雖然準確度不比 DeepL 但是速度還挺快。

## 輸出函數

輸出函數可以指向幾個地方 - 存成單獨的 txt、直接輸出到 stdout。輸出到 stdout 的好處是，可以用 macOS 自帶的語音朗讀程式 `say` 播放。

```python
def export(output, save_path):
    if save_path:
        with open(save_path, "w") as f:
            f.write(output)
    else:
        print(output)
```

目前是希望也能輸出到 Bear，這樣可以作為稍後閱讀的管理平台。不過，Bear 並沒有 Python API，X-callback-url 也挺複雜的，不太確定怎樣接上一大段文字。

## Single Page App

用 PyWebIO 簡單搭建了個網頁介面。很醜，但可以工作。拿來當 DeepL 網頁本體的替代方案。

```python
from pywebio.input import textarea
from pywebio.output import put_html, clear, use_scope
from pywebio import start_server
from translate import translate

def main():  # PyWebIO application function
    with use_scope("textarea"):
        while True:
            text = textarea("Translation")
            clear("textarea")
            put_html(translate(text))

start_server(main, port=8080, debug=True)
```

## 目前計畫

### epub 及網頁的結構化解析器

如同前述，其實網頁或電子書會有很多大小標題、圖片，附註等，但是在翻譯器中，這些會全部丟失。正在設計解析器，能够保留原本的結構，不丟失。按段落及標題翻譯完成後，再填充回原本的架構中。

### 斷點續翻

如果遇到網頁端阻斷，可能需要另外用 proxy pool 來繼續翻譯服務。需要一個能够「斷點續翻」的功能，來確保已經翻譯完成的段落不要浪費。

## 實做順序

- 0.1 版
  - DeepL 翻譯 txt 功能
  - Pandoc 指令模板可轉 epub 為 txt
- 0.2
  - 改善 split to chunk 函數
  - Pandoc 指令模板進化為生成器，能處理其他類型檔案
- 0.3 版
  - 直接取的網頁內容及併用 ReadabiliPy
  - 新增時間間隔設定參數
  - 網頁介面（使用 PyWebIO）
- 0.4 版
  - 除 DeepL 外新增 Google Translate
  - 新增 chunk 大小設定參數
- 0.5 版 - 開發中
  - epub 及網頁的結構化解析器（不丟失原本結構）
  - 斷點續翻功能
