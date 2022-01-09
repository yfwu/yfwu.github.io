---
title: Matlab in Emacs
layout: post
category: Emacs
---

![Matlab in Emacs](/assets/img/matlabemacs.png)

安裝 matlab-mode 後能於 Emacs 中執行 Matlab 交互介面(簡稱為 matlab-shell，也就是一般常見一進入 Matlab 那個 >> 提示符號的視窗)，以及開啟副檔名為 .m 的 Matlab 程序存檔(一個 major-mode：matlab-mode )。

## 安裝 Matlab

1. 首先掛載 iso 檔案，並且執行腳本 install.sh (若無法執行，請 `chmod +x install.sh`，會需要輸入驗證伺服器文件(license.dat)以及鑰匙(key)，一般可在光碟內其他資料夾找到。
2. 會出現 java 寫成的安裝程式，安裝到指定的位置(沒記錯的話他的目標是 `/usr/local/MATLAB/R2013a`，你可以自己更改成喜歡的沒差)
3. **(此步驟重要)** 將 `/usr/local/MATLAB/R2013a/bin/matlab` 建立 symlink 到 `/usr/bin`，不然會出現 Searching for program: no such file or directory, matlab
4. 之後 Emacs 的 mode 會從這個 symlink 連到 Matlab 解釋器。
5. 需要注意的是：可能是官方支援度不好？我的 Matlab 的 java 介面主程式啟動之後會自己關掉，然而 emacs 裏面用 matlab-shell 倒是非常穩定。

**補充**

Matlab 吃舊版本的 libncurses，需要設定

```shell
sudo ln -s /usr/lib/libncursesw.so.6 /usr/lib/libncursesw.so.5
```

## 安裝 matlab-mode

1. 直接使用 el-get 安裝！
2. 重新啟動或者 eval-current-bufffer 之後，開啟一般的檔案如：function.m，會進入 matlab-mode 可以編輯。
3. 以 `M-x matlab-shell` 可以啟動交互畫面，就跟主程式一樣沒有差別！
4. 補充說明：shell-command 設定下去之後，`C-c C-c` 可以把整個 buffer 送進去執行，而 `C-c C-r` 則是將選定的區域送入執行
5. 需要確定 Matlab 啓動腳本存在於 `$PATH` 內.
