---
title: Mount Linux Server File System on macOS Finder
layout: post
category: Linux
---

> 2021/09/15 補充說明：現在從 brew 安裝會提示說依賴閉源 macFUSE 所以不再列於列表中。我還沒有特別找解決方法。

最近在做 semantic segmentation，第一步主要還是復現別人的模型，才能追求改造。因此，我的第一步是瞭解說，別人的訓練資料集的資料是怎麼排列。我的 Linux 主機主要是 Ubuntu server。爲了穩定，我沒有安裝任何的 X-server 以及 display manager 相關的軟體，全部都是從我的 macOS 端通過 LAN 去連線。

需要安裝這兩個軟體；兩個都可以通過 brew 安裝。

- `sshfs`
- `osxfuse`

## SSHFS

> SSHFS allows you to mount a remote filesystem using SFTP. Most SSH servers support and enable this SFTP access by default, so SSHFS is very simple to use - there's nothing to do on the server-side.

連接的語法如下：

```bash
sshfs [user@]hostname:[directory] mountpoint
```

- 最好使用一般用戶而非 root 來進行連接
- 如果沒有提供用戶名，則使用本地用戶名
- 如果沒有預設資料夾，則會掛載用戶的 `$HOME`

停止掛載的語法如下：

```bash
fusermount -u mountpoint
```

## osxfuse

> FUSE for macOS allows you to extend macOS's native file handling capabilities via third-party file systems. It is a successor to MacFUSE, which has been used as a software building block by dozens of products, but is no longer being maintained.

是與 `libfuse` 對應的 macOS 軟體。`osxfuse` 的具體功能是將外部檔案系統（third-party file system）掛載到 macOS 系統中的工具；掛載完畢後，可以從 Finder 進行操作。安裝的時候從 cask 選擇 `osxfuse`。不要選到沒在更新的原版 macfuse / fuse。安裝完後，需要重新啟動。

## 具體使用注意事項

`sshfs` 可以想象成是一個 `sftp` 的包裝。直接在 Server 端進行操作，`sshfs` 並不會得到通知。因此，官方建議說，如果有這樣的需求，第一可以使用其他檔案分享協議例如 samba，另外就是開啟 `-o auto_cache` 選項，讓 `sshfs` 定時自動更新檔案列表。
