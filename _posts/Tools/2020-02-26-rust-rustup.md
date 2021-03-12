---
title: Rustup 筆記
layout: post
category: Rust
---

其實我本來只是想裝個 Rust 寫成的 [leetcode-cli](https://github.com/clearloop/leetcode-cli)，但是用 cargo 安裝過程中報錯，所以只好一路 trace，順便理解一下正確配置 Rust toolchain 的姿勢爲何。

本來我是用 brew 裝。裝完之後嘗試 `cargo install leetcode-cli` 結果跟我報錯說需要 beta 或者 nightly 版本。所以只好使用 [Rustup](https://rustup.rs)（好像 Ruby 跟 NodeJS 也有類似的版本管理器）

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

然後切換到 nightly，並安裝 src 跟 doc 這兩個 component。更新安裝的 Rust 可以通過 `rustup update` 進行。

```bash
rustup component add rust-src
rustup component add rust-docs
rustup update
rustup toolchain install nightly
```

其他 Rust 開發環境可能用到的工具；參考這篇 [Setting up a Rust development environment](https://hoverbear.org/blog/setting-up-a-rust-devenv/) 中摘錄的：

- `rust-clippy`：更嚴格
- `rustfmt`：格式化
- `racer` 跟 `rls`：程式碼補全

目前要學習的語言還是優先 C++ 啦，暫時也沒力氣學其他的。
