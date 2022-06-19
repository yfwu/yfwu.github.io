---
title: Matlab 中的函數與檔案管理
layout: post
category: Matlab
---

說到 Matlab 專案的資料夾結構，不少程式語言都是把類似用途的函數放在同一個檔案內，然後通過 TDD（test-driven development）的流程來控管，並且在檔案互相呼叫下，可以有效以 namespace 的特性避免衝突。但是，Matlab 似乎沒有這種特性？於是使得目錄下面有數十個 Matlab 的 `.m` 檔案。這篇嘗試深入瞭解一下這個問題及是否有 namespace 的替代方案。

## Local Functions

以官方指引 [local functions](http://www.mathworks.com/help/matlab/matlab_prog/local-functions.html) 爲例，文章舉了下面的例子：

```matlab
function [avg, med] = mystats(x)
  n = length(x);
  avg = mymean(x,n);
  med = mymedian(x,n);
end

function a = mymean(v,n)
  % MYMEAN Example of a local function.
  a = sum(v)/n;
end

function m = mymedian(v,n)
  % MYMEDIAN Another example of a local function.
  w = sort(v);
  if rem(n,2) == 1
    m = w((n + 1)/2);
  else
    m = (w(n/2) + w(n/2 + 1))/2;
  end
end
```

在上面的例子中，三個函數均存在於 `mystats.m` 這個檔案內。其他檔案想使用的話，不需要有 `import` / `using` / `include` 等動作，只需要直接呼叫 `mystats` 即可！加上說明，可知道：

1. Matlab 會將每個 `.m` 檔案讀入
2. 只有其中第一個會被讀取，剩下來的都是供第一個函數使用的 local functions

## Nested Functions

接著我注意到 Matlab 的另外一個特性：nested functions （說明見官方文件 [nested functions](http://www.mathworks.com/help/matlab/matlab_prog/nested-functions.html)）。

```matlab
function parent
  disp('This is the parent function')
  nestedfx

  function nestedfx
    disp('This is the nested function')
  end
end
```

其實只是複雜函數內部的程式碼重複使用的一些注意事項。對於解決我的問題其實幫助不大。官方文件後面則是討論作用域（稱爲 workspace）的問題 XD

## Namespace 的替代方案

其實 Matlab 的設計上沒有 namespace。不過，還是有很不錯的解決方案。參考來源是 [What is the closest thing Matlab has to namespaces?](http://stackoverflow.com/questions/2748302/what-is-the-closest-thing-matlab-has-to-namespaces)

步驟如下：

1. 創建資料夾，這個資料夾需要有 `+` 在最前面，例如 `+mypkg`
2. 接着，所有在這個資料夾內的函數，在母目錄的資料夾內將需要以 `mypkg.calculate` 的形式被呼叫
3. 需要使用 `import` 引入

```
namespace_matlab
├── main.m
└── +mypkg
    └── calculate.m
```

這是資料夾結構如上，注意 `+` 一定要存在！

```matlab
import mypkg.*
% main.m

mypkg.calculate('yfwu')
```

```matlab
function result = calculate(name)
 % calculate,m
 disp(sprintf('hello %s', name))
end
```

這樣，就可以把東西歸類在一起了。但是，原本的 local function 的問題，其實沒有解決啦 XD 這個方法只是一個利用 `package` 的方式來讓大量程式碼更好管理罷了。
