---
title: Rust 寫的 Leetcode-cli 工具
layout: post
category: Tools
---

其實比較熱門的是 NodeJS 寫的同名工具，也有豐富的插件，但是不知爲何我總是無法登入，所以改用 Rust 寫成的 [Leetcode-cli](https://github.com/clearloop/leetcode-cli)。注意：具體如何存取 Cookie 請參考官方頁面的介紹。

- `search` 搭配參數（例如 easy）搜尋問題列表。通過 `pick` 觀看問題敘述。
- `edit` 來編輯問題。可以設定要用什麼編輯軟體。我是會開啓一個 Emacs 作爲編輯。（本來想用 Emacsclient 但是不知道爲何一直失敗）
- `test` 以官方案例測試（不計入記錄）
- `submit` 提交（會列入提交記錄）。最後會返回成績；如果失敗的話也會返回失敗的其中一個結果。

整體來說，我覺得這個工具很棒！分幾個面向：

1. 程式碼統一保存，可以在其他筆記中引入這些程式碼。我是把 leetcode-cli 的 code 移到 Dropbox 然後通過 soft-link 放回去原本的 `.leetcode`。
2. 可通過其他測試工具添加其他測試條件（例如：第 7 題需要檢測 int32 轉換的 overflow，但是官方的測試案例並沒有包含這一塊）。
3. 版本管理。

## 使用 `unittest`

補充上述第二點。將 `.leetcode/leetcode.toml` 中檔案名字改成單純的 `${slug}`，除去檔案開頭的 ID 以及分格檔名用的 `.`。之後使用下列的格式匯入（有點醜陋，但是這是檔名中有 dash 的[解法](https://stackoverflow.com/questions/761519/is-it-ok-to-use-dashes-in-python-files-when-trying-to-import-them)）（以第 7 題 reverse-integer 舉例）：

```python
import unittest
Solution = __import__("reverse-integer").Solution()

class SolutionTestCase(unittest.TestCase):
    def test_official(self): # 用來測試官方結果
        self.assertEqual(21, Solution.reverse(120))

    def test_personal(self): # 測試自己添加的案例
        self.assertEqual(0, Solution.reverse(2**31))
```

然後可以通過執行器 `TextTestRunner` 執行測試，例如：

```python
suite = (unittest.TestLoader()
                 .loadTestsFromTestCase(SolutionTestCase))
unittest.TextTestRunner(verbosity=2).run(suite)
```
