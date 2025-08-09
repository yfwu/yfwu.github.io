---
title: "將 tweets 寫入 daily notes"
layout: post
category: Tools
---

> [!NOTE] 更新
> 目前的流程是在自架的 ActivityPub 相容網站，使用 GoToSocial 的 [yfwu.org](https://yfwu.org/@yfwu) 發文，然後通過 IFTTT 將其產生的 RSS 內容轉發到 Twitter；另一方面，我的電腦也有腳本爬取此 RSS，所以基本上不需要第三方服務。不過，我仍然需要處理 Twitter 備份來搞定歷年推文的備份。

自我 2013 年（？）加入 Twitter 以來，在上面有無數的轉發及貼文。有些是很政治性的內容抑或是跟人論戰。不過，蠻多還是有意思的轉推。目前是通過 Day One 在「備份」這些發文和轉推，打算搞一套工具，可以把 Twitter 上面的各種轉推、發文同步到每日筆記內。這樣，就能將這些轉推建構為知識庫的一部分。底下是目前想到的幾個方法：

- 使用名叫 [Tressel](https://tressel.xyz) 的服務，不過它不是備份每個推文，而是通過分享或標註的方式指示它收藏。
- 解析 Day One 的匯出。
- 直接 dump Twitter 的備份，並從其巨大的 `tweets.js` 中取出歷年推文。

之前有人在討論所謂「網路文藝復興四騎士」，其中一個是所謂的 threaded tweets。我覺得通過分段論述的形式發文蠻不錯的，討論者可以針對每一段落進行轉推及回覆。目前的主要閱讀工具並不能很好的展示其他使用者的回覆，稍微可惜。