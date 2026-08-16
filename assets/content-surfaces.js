(function () {
  "use strict";

  var contentSelector = ".article-content, .post_content";
  var trackedTables = [];

  var titlesZh = {
    note: "備註",
    abstract: "摘要",
    summary: "摘要",
    tldr: "摘要",
    info: "資訊",
    todo: "待辦",
    tip: "提示",
    hint: "提示",
    important: "重要",
    success: "完成",
    check: "完成",
    done: "完成",
    question: "問題",
    help: "說明",
    faq: "常見問題",
    warning: "注意",
    caution: "注意",
    attention: "注意",
    failure: "失敗",
    fail: "失敗",
    missing: "缺漏",
    danger: "警告",
    error: "錯誤",
    bug: "錯誤",
    example: "範例",
    quote: "引用",
    cite: "引用"
  };

  var titlesEn = {
    tldr: "Summary",
    todo: "To do",
    faq: "FAQ"
  };

  function isChinesePage() {
    return (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;
  }

  function defaultTitle(type) {
    if (isChinesePage() && titlesZh[type]) {
      return titlesZh[type];
    }
    if (titlesEn[type]) {
      return titlesEn[type];
    }
    return type.charAt(0).toUpperCase() + type.slice(1).replace(/-/g, " ");
  }

  function enhanceCallouts(root) {
    var blockquotes = root.querySelectorAll("blockquote");
    for (var i = 0; i < blockquotes.length; i += 1) {
      var blockquote = blockquotes[i];
      var lead = blockquote.firstElementChild;
      if (!lead || lead.tagName !== "P") {
        continue;
      }

      var match = lead.textContent.trim().match(/^\[!([A-Za-z0-9_-]+)\]([+-])?(?:\s+(.*))?$/);
      if (!match) {
        continue;
      }

      var type = match[1].toLowerCase().replace(/_/g, "-");
      var fold = match[2] || "";
      var titleText = (match[3] || "").trim() || defaultTitle(type);
      var callout = document.createElement(fold ? "details" : "aside");
      var title = document.createElement(fold ? "summary" : "div");
      var content = document.createElement("div");

      callout.className = "callout callout--" + type;
      callout.setAttribute("data-callout", type);
      if (!fold) {
        callout.setAttribute("role", "note");
      } else if (fold === "+") {
        callout.open = true;
      }

      title.className = "callout__title";
      title.textContent = titleText;
      content.className = "callout__content";

      var node = lead.nextSibling;
      while (node) {
        var next = node.nextSibling;
        content.appendChild(node);
        node = next;
      }

      callout.appendChild(title);
      if (content.childNodes.length) {
        callout.appendChild(content);
      }
      blockquote.parentNode.replaceChild(callout, blockquote);
    }
  }

  function tableLabel(table) {
    var caption = table.querySelector("caption");
    if (caption && caption.textContent.trim()) {
      return caption.textContent.trim();
    }
    return isChinesePage() ? "可橫向捲動的資料表" : "Scrollable data table";
  }

  function enhanceTables(root) {
    var tables = root.querySelectorAll("table");
    for (var i = 0; i < tables.length; i += 1) {
      var table = tables[i];
      if (table.closest(".table-scroll, .archive_list")) {
        continue;
      }

      var firstRow = table.rows.length ? table.rows[0] : null;
      if (firstRow && firstRow.cells.length >= 4) {
        table.classList.add("table--wide");
      }

      var region = document.createElement("div");
      var hint = document.createElement("div");
      var scroller = document.createElement("div");
      region.className = "table-region";
      hint.className = "table-scroll__hint";
      hint.textContent = isChinesePage() ? "可左右滑動查看" : "Scroll horizontally to view";
      hint.hidden = true;
      hint.setAttribute("aria-hidden", "true");
      scroller.className = "table-scroll";
      scroller.setAttribute("data-table-label", tableLabel(table));

      table.parentNode.insertBefore(region, table);
      region.appendChild(hint);
      region.appendChild(scroller);
      scroller.appendChild(table);
      trackedTables.push({ scroller: scroller, hint: hint });
    }
  }

  function refreshTableOverflow() {
    for (var i = 0; i < trackedTables.length; i += 1) {
      var item = trackedTables[i];
      var overflowing = item.scroller.scrollWidth > item.scroller.clientWidth + 1;
      item.hint.hidden = !overflowing;
      if (overflowing) {
        item.scroller.tabIndex = 0;
        item.scroller.setAttribute("role", "region");
        item.scroller.setAttribute("aria-label", item.scroller.getAttribute("data-table-label"));
      } else {
        item.scroller.removeAttribute("tabindex");
        item.scroller.removeAttribute("role");
        item.scroller.removeAttribute("aria-label");
      }
    }
  }

  function enhanceContentSurfaces() {
    var roots = document.querySelectorAll(contentSelector);
    for (var i = 0; i < roots.length; i += 1) {
      enhanceCallouts(roots[i]);
      enhanceTables(roots[i]);
    }
    window.requestAnimationFrame(refreshTableOverflow);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceContentSurfaces);
  } else {
    enhanceContentSurfaces();
  }

  window.addEventListener("load", refreshTableOverflow);
  window.addEventListener("resize", refreshTableOverflow);
  document.addEventListener("toggle", refreshTableOverflow, true);
}());
