---
layout: page
title: "ActivityPub feed"
permalink: /gts/
---

> This page converts my ActivityPub [feed](https://yfwu.org/@yfwu/feed.rss) from my microblog at [yfwu.org](https://yfwu.org/@yfwu) to a static page locally.

<div id="content">
</div>

<script>
(function () {
  const RSS_URL = "https://yfwu.org/@yfwu/feed.rss";
  const CONTENT_NS = "http://purl.org/rss/1.0/modules/content/";
  const container = document.getElementById("content");

  function encodedContent(item) {
    const el =
      item.getElementsByTagNameNS(CONTENT_NS, "encoded")[0] ||
      item.getElementsByTagName("content:encoded")[0];
    return el ? el.textContent : "";
  }

  fetch(RSS_URL, { headers: { Accept: "application/rss+xml" } })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    })
    .then(function (text) {
      const xml = new DOMParser().parseFromString(text, "application/xml");
      Array.prototype.forEach.call(xml.getElementsByTagName("item"), function (item) {
        let content = encodedContent(item)
          .replace(/<br>/g, " ")
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "");

        const urlMatch = content.match(/(https?:\/\/[^\s"<]*)/);
        const url = urlMatch ? urlMatch[0] : undefined;

        content = content.replace(
          /<a href="([^"]*)".*>([^<]*)<\/a>/g,
          `<a href="${url}">Link</a>`
        );

        const pubDate = item.getElementsByTagName("pubDate")[0];
        const date = new Date(pubDate ? pubDate.textContent : "");
        const dateStr = date
          .toLocaleString("zh", { hour12: false })
          .replaceAll("/", "-");

        container.insertAdjacentHTML("beforeend", `<p>${dateStr}<br>${content}</p>`);
      });
    })
    .catch(function () {
      container.textContent = "無法載入 feed。";
    });
})();
</script>
