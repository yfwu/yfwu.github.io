---
title: "虛擬區域網路神器：Tailscale"
category: Tools
layout: post
---

Tailscale 通過 NAT 穿透（NAT traversal），讓在防火牆及路由器後的多部設備之間形成直連網路，打到虛擬區網的效果。

用一句話摘錄基本的技術概念，有點類似雙方互相預先「知道」進出端口資料然後穿過防火牆：

> So, to traverse these multiple stateful firewalls, we need to share some information to get underway: the peers have to know in advance the `ip:port` their counterpart is using.

![Tailscale NAT](/assets/img/blog-Tailscale-NAT.png)
當然，還有更多細節的技術問題，例如 STUN 協議等，可以參閱 [How NAT traversal works](https://tailscale.com/blog/how-nat-traversal-works/)。看完後學到不少網路基礎協議的知識。

個人用戶目前免費，最多可以連結 20 部設備。最近公布的新方案還把原本屬於付費專業用戶的 subdomain 等功能給了個人用戶。安裝很容易，幾乎是零設定：

1. 主流 Linux 發行版及 Synology 作業系統都可以從官方來源安裝。
2. macOS 及 iOS 可以從商店安裝

需要綁定商業服務做 SSO。我是使用 Github 來登入。目前我在我的工作站、常駐迷你主機及 NAS 都配置了 Tailscale。可以很方便的從院內公共無線網路安全訪問。醫院的公共 Wi-Fi 不知為何會鎖 SSH 連線，導致我每次要連回家裡的工作站都要開 Proton VPN，十分卡頓。
