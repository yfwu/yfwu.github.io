---
title: 台灣資料科學年會主議程：筆記與感想
category: Ideas
layout: post
---

## A Culture of Big Data: Case Studies from Google

紀懷新：Google Research Scientist

- Data Science = Measurement + Impact
- Case 1: Wikipedia's Growth
  - 例如：怎麼量測維基百科的「整體性」的成長呢？將文章數量的成長繪圖出來，發現圖形是 exponential growth 的 pattern。能夠以社會科學已知的 exponential growth 的機轉來解釋嗎？如果改以活躍的編輯者的數量來評估呢？
  - [Preferential attachment: edits beget edits](https://en.wikipedia.org/wiki/Preferential_attachment)
    - 但這情境只有在無限環境才有...
    - 現實情境是 [logistic growth model](https://services.math.duke.edu/education/ccp/materials/diffeq/logistic/logi1.html) = 資源到頂時，競爭最激烈；而擁有較多資源的個體，對於資源較少的個體競爭優勢更明顯，從而導致分布不均！
  - 用 「new articles per unit time」 來測量維基百科，發現發展大不如前。這樣的結論，對嗎？
  - 其實人類的整體知識是增長的：「carrying capacity as a function of time」！但，如何評估上述的議題呢？目前這還沒有答案，值得去研究依然持續增長的 logistic growth model。
  - 但是就算知道問題，維基基金會卻說「That's interesting」 XD 沒辦法造成 impact。
- Case 2: Google+ Communities
  - 最難評估的是一開始增長時的模型
  - 問卷：「_What do people get out of online communities?_」有人說，參加社群的目的是為了得到「資訊 information consumption」，有人要得到的是「連結 social ties」。這是兩種不同的假說。怎麼驗證呢？
  - 引入 Triangle closure counting 的概念：不單純用「圖形的邊 edge」來評估，而用 triangle closure 可以用來計算 social network graphing analysis 有多密集。
  - 計算「社群成員大小」與「社群成員社交網路的 triangle closure」，區分出兩類社群模式
    - Photographers 同好 _plazas_
    - Meeting places 資訊分享 _topic boards_
    - [Third places](https://en.wikipedia.org/wiki/Third_place)
    - Communites with fewer edge and posts more than comments，就可以歸類為 topic boards，否則比較像 plazas
  - 最後，以問卷來驗證 hypothesis（mix method - 量化數據與質化問卷）
- Case 3: Google Translate
  - 要真正造成 impact，還是得真正去做。
  - How to reduce isolation of culture group - through Google translate?
    - G+ 相比於 Twitter，更加的 lumpy cluster，群組之間的 gap 更大！
    - 於是，有了一個將 Google translate 結合入 G+ 的計畫
  - 將功能加入後，進行 7-day holdback experiment，發現很多有趣的 behavior
    - 例如：封鎖增加了！因為現在看得懂那些廣告訊息
- Q: 學術界進入商業公司，如何爭取到公司內的影響力？A：不要界定自己只負責某個領域（例如：只做統計，不碰機器學習），而是盡量拓展，嘗試學習各種面向的解決方式及團隊合作。

感想：很有趣的演講！用一句話總結主題，就是「如何測量模式未知的資料，並理解資料來源的內在變化」。例如，怎麼樣測量維基百科現在的增長？怎麼樣測量 G+ 社群的增長機制？不過在前兩個案例裡面，對於如何將測量過的結果去製造 impact 或者改變公司經營策略則沒著墨。第三個案例則是討論將 Google translate 加入 G+ 的整個故事，從事前測量到加入後的評估、後續研究等。

## 善用資料改善線上教務:誠致教育

呂冠緯、蘇倚恩：誠致基金會

- 均一教育平台
  - 學生端：因材施教的教學系統
  - 老師端：提供學生學習數據的「診斷」及個別化的分析
- 怎麼衡量均一教育平台真的有幫助到使用者？講者總結了四個指標：
  - Input：投入的人力財力資源
  - Ouput：影片、習題、講座、工作坊。有 KPI，就停止分析了嗎？
  - Outcome：學生：註冊數、內容使用數；老師：參與度
  - Impact：是否有改善學生學習動機、自我效能感是否有進步？
- CEO 自己跳下去跑流程才能發現整個生產機制的斷點！包括影片錄製與材料準備的空缺、分工協調及指派任務機制的優劣評估。
- 資料決策流程的建立（本次重點）
  - 怎麼樣收集、管理、處理這些資料？
    - 來源：
      - 網站內部資料
      - Parse 其他網站或其他組織整理的資料
      - [DauGA](https://github.com/junyiacademy/dauGA)，利用 GA report API 來輸出資料進行自動化分析
  - 如何用資料來幫助我們做決策？
    - 使用者行為觀察
      - problem-log / video-log 系統存取紀錄
      - ga_page_view / ga_user_event 頁面停留與行為紀錄；這些是需要付費給 GA 的！所以要思考：為什麼需要購買這些數據呢？
    - 失敗的案例：noise：雖然知道了那些影片被多看，但是並沒有辦法造成行動
    - 工程師根據資料形成假設、非技術人員根據領域經驗產生行動！促進不同類型人員的交流，例如：基金會建立了撈資料的 trello kanban

感想：提出「社福組織、基金會等不能只看到有 output、outcome 就滿意，一定要評估是否有造成正向 impact」的這概念，覺得不錯。不過，對於 impact 怎麼評估我覺得還是不太點到重點。像 Coursera 提出，如果某個影片的討論或重播率增加，可能是解釋的不好需要改進等。以「指派任務機制」的設立及「界面改善」使得「使用者使用率提升」並促成「段考分數增加」的關聯性作為結論似乎怪怪的；很多 cofunding factor 沒有處理好。

## 隨機對照實驗在公共領域的應用

謝宗震：DSP 智庫驅動 [PPT](http://www.slideshare.net/tw_dsconf/ss-64076745)

- 前測
  - 前測的概念跟 baseline demographic 的概念有點像 XD 了解到分組之間並沒有差異，之後再隨機分派
  - 醫學研究上市是要先分組才了解沒有差異？
- 三個案例
  - 如何消滅貧窮
    - 假說：接種疫苗提升孩童免疫力（然後能夠增加生產力？）
    - 分組：疫苗注射站、疫苗注射站與獎勵、無疫苗注射站
    - 時間長度：教育宣導後一年半
    - 統計顯著：注射率增加了
    - 商業顯著：有獎勵組因為發放時間限制，反而成本效益更好
  - 如何幫助法院討債
    - 假說：寫一封有效果的討債簡訊（而不要寫存證信函）
    - 分組：平信、名字、欠款數、名字 + 欠款數
    - 統計顯駔：只寫名字的還款最多。為什麼呢？
  - 如何提升慈善捐款
    - 假說：標語：今生捐款一次，從此不再打擾
    - 分組：控制組與「今生只捐一次 once and done」對照組
    - 備註 checkbox：你願意自願再收到信嗎？
    - 統計顯住： once and done 的組別捐款收入、數量也較高。同時，扣除 dont' mail again 的人後，表明願意再捐款的比例也不輸控制組。
- 四個挑戰
  - 規劃面
    - 從定義目標開始：把真實問題限縮到能夠被量化驗證的程度
      - 例如：捐款金額倍增（business goals） => 優化勸募涵的轉換率（marketing gaoals） => 利用 once and done 來提升（conversion goals） => 今年度應該有多少用戶呢？（KPI）（transform goals）。在這四個 goals 中，每個都有多種選項，這些都得執行過才知道答案！
      - 好的 KPI - 容易驗證、能解決原問題、能獲得洞見
    - 從發現問題開始
      - 例如：線上捐款的放棄率太高了 => 主頁的點擊率、放棄率高 => 推測是欄位太多 => 改善建議：簡化捐款頁面！
  - 工程面
    - 測試目標太多怎麼辦
      - 項目決定考量：PIE = potential + importance + ease
    - 例如：改變註冊率：方案一：重新設計網站；方案二：改變色調。
    - 重點：考慮到能夠證明有顯著差異的樣本數（檢力），實際上需要蒐集到足夠證明有差異的時間，改變色調的方案反而需要比較久！才知道到底有沒有差！但是這件事情很容易被業主忽略
    - 多重測試 multivariate testing
      - 對重要的方案進行測試即可，不需要每種都交叉配對組合到
      - 方案之間的測試獨立性
  - 分析面
  - 真實面
    - 實驗限制：隨機抽樣、隨機實驗、成本
    - 組織架構：其他組織的平行試驗、誰買單、能夠造成 impact 嗎？、辦公室政治

感想：我覺得在很多層次上，公共領域的隨機對照實驗都有隨機是否足夠隨機的問題！後面的四個挑戰收穫頗多！平常看 A/B test 的範例時，我都忘記要注意檢力的數量其實也是要考慮的重點。三個案例部分都是網路上大概比較有名的案例，覺得普普。

## 一個賭徒的告白二：交易策略建構與分析

吳牧恩：東吳大學 [PPT](http://www.slideshare.net/tw_dsconf/2-64076950)

- 2014 年的講題：資金管理才是交易的王道
- 資料哪裡來？R 的回測模組 `quantmod::getSymbols()` from Yahoo Finance
- 建構策略
  - 濾網
    - 買一張 + 輸了才買一張 = 連輸就進場
    - 馬丁格爾策略：贏了買一張，輸了加倍買
    - 類馬丁格爾策略：贏了只買一張，輸了加買一張 = 買一張 + 輸了多買一張
    - 回測發現：都有賺錢
  - 停損與停利
    - 逆勢：均值回歸；順勢：買低賣高
    - 提出「隨機交易」的概念，以提高勝率。
    - `Momentum` vs `Mean Reverse`
  - 加碼
    - 加碼是放大器，同時放大風險與利潤，如果風險 > 利潤，那賠錢的速度更快！
- 資金管理
- 博弈理論與交易
  - 實際上，因為交易次數遠小於收斂到平均值需要的次數，所以交易結果受隨機影響的機率影響極大。
- 槓桿空間模型（Leverage space model）：睹小賭分散，報酬提升

感想：這種策略交易比較少接觸，挺有趣的。不考慮回測結果能不能代表未來數據，單純從資料科學的角度來說，這樣的推論也是很有邏輯性 XD 回家再來好好研究這份講義跟 2014 年的那一篇。結論：多玩幾場，每場派出少一些的資金，讓報酬率可以配上最佳化後的數學

## 銀行資料這樣玩

洪采襄：玉山銀行襄理

- 銀行資料倉儲（供分析）的建設重點
  - 格式統一化
  - 資料正確性與 index 的唯一性（例如：身分證字號，夠唯一嗎）
- 資料餵入 logistic model 中來判斷用戶喜歡哪一種通路！
  - 理財會員使用「分行」over「行動銀行」的機率較大，之類的
  - 根據這個模型，來轉換行銷模式，把優惠模式跟方案廣告根據使用者族群，放到對應平台以增加暴露機會
- 怎樣取代傳統表示法來展現更多的資訊
- 分行地理位置優勢
  - 原始資料做回歸、做分群
- 結合開放資料
  - 先根據邊界計算分行潛在服務範圍
    - Voronoi diagram
  - 人口：潛在服務範圍服務了多少人？客戶轉換率為？
  - 金額：潛在服務範圍年收入為多少？分行佔有了多少？
- 衍生性金融商品的推薦？

感想：發現沒甚麼特別的內容 XD

## How to Approach Data Science Problems from Start to End

林伯龍：IBM

- 網路資源介紹
  - [Big Data Uni](http://bigdatauniversity.com/)
  - [Data Scientist Work Bench](https://datascientistworkbench.com/)
- Case: flight delayed
- 建議：盡早開始練習專案，並挑選一個生活相關的題目，例如以 opendata 形式開放的健康、交通、污染資料等。
- Case: food
  - Where dose this cousine come from?
  - 思考方向：decision trees、K-means clustering
  - 資料清理：轉換大小寫、同義詞取代，並建構出文字雲
  - 根據所選擇的食譜種類即時形成新的分類樹！這是怎麼做到的呢？

感想：英語演講！首要重點還是了解領域知識（domain knowledge）或者是商業模式（business model），才有可能問出正確的問題及分析出正確的資料。案例分析的部分比較像是新手教學（笑）第二個 case 展現了一些 R 程式碼還蠻好玩的，可以具體看到他的操作細節。大致上是一個新手導向的演講 orz

## 心理與行為資料中的因與果

黃從仁：台大心理系（數學系學士 - 物理學碩士 - 心理學博士）

- 共整合（cointegration）
  - 指隨機事件有真實的相關
  - 非穩定態的時間序列有機會產生正相關
  - R: `egcm {egcm}`、`ca.jo {urca}`
- 如何判定是真相關或假相關呢？可以進行：多元回歸（多維度空間）或進行真實驗
- 相關不能推論因果（潛台詞：但可以暗示因果？）
  - 這樣純粹從統計、資料科學來看，極限在何處？
  - 看起來也是相關性足以壓過因果派。不過，如果這些相關性必須被 applied，
- 因果推論的陷阱與方法
  - Inus 條件：非必要但充分的條件中，不充分但非多餘的部分
    - 不能夠壓倒性的主導因果，但是有機會是造成結果的條件之一
    - 註解：就好像 DM 是 retinopathy 的大風險因子之一，然而並不是壓倒性的 risk factor
    - 其他：時序 + 共變 + 能合理解釋
  - 非隨機分派實驗
    - 改以共變數分析（ANCOVA）來控制！
  - immortal time bias
- 資料科學中的困境與解決的技術
  - 同時性的機率因果規則之購物籃分析。R: `apriori {arules}`
  - 用非有向循環圖表是因果。R: `ida {pcalg}`
  - 利用集群演算法來重新分類疾病。R: `infomap.community {igraph}`
  - 檢驗先發生的 X 能否預測後發生的 Y。R: `grangertest {lmtest}`
  - 系統動力學：不要做了相反的措施！
