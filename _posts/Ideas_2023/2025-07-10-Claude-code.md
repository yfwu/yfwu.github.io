---
title: Vibe Coding 兩週
category: Tools
layout: post
date: 2025-07-10
tags:
---

說起來開通 Claude Code 才兩週，但有種當初學用 ChatGPT 的感覺。最近新學了：

1. 記錄重複使用的命令 [Slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
	1. 命令文本以 markdown 形式存在 `~/.claude/commands`
	2. 可以用 `$ARGUMENTS` 佔位符來設置參數
2. 設置新推出的 hook 功能讓它說話（macOS say）
3. 搭配 `git worktree` 來併行進行項目
4. 讓 subagent 去閱讀程式碼獲取細節，這樣可以節約上下文空間
5. TDD（test-driven development）的工作流程（測試、確認失敗、實作、驗證）

## 官方教學

第一篇要閱讀的是 [官方實踐指南](https://www.anthropic.com/engineering/claude-code-best-practices)，再來是特定的細節文檔，例如 [Common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)。目前大部分環繞專案項目的生命週期 - 了解新項目、添加測試等等。一些有趣的小訣竅，讓工具可以用在更多不同的場域：
- 使用 `#` 來添加細節到 `CLAUDE.md`
- 使用 `@` 來直接提示某個特定目錄或檔案，甚至可以要求使用 MCP
- 使用 `think` 關鍵字來增強計劃性能 [Extended thinking tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips)
- 使用非交互模式 `--print` 搭配結構化輸出 `--output-format` 變成 CI/CD 工具

## 快速專案

例如說我一直想在我的筆記網站列出我的藏書，但是一個個打字顯然不太現實；恰好 Kobo 提供了一個列表，上有書名跟購書日期，玩美滿足了我的需要。我把網頁 archive 下來，讓 Claude 寫個程式去讀取裡面的內容、整理成 markdown、放到我的 Obsidian 對應資料夾、設置 human-in-the-loop 斷點來檢查。整件事情大約花了五分鐘。

![Claude works on Kobo book list](/assets/img/blog-vibe-2-weeks.png)