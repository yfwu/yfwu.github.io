---
layout: page
title: "ActivityPub feed"
permalink: /gts/
---

> This page converts my ActivityPub [feed](https://yfwu.org/@yfwu/feed.rss) from [yfwu.org](https://yfwu.org/@yfwu) to a static page using jQuery.

<div id="content">
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js">
</script>
<script>
const RSS_URL = `https://yfwu.org/@yfwu/feed.rss`;

$.ajax(RSS_URL, {
accepts: {
    xml: "application/rss+xml",
},

dataType: "xml",

success: function (data) {
    $(data)
    .find("item")
    .each(function () {
        const el = $(this);

        var content = el.find("content\\:encoded").text();
        content = content.replace(/<br>/g, " ");
        content = content.replace(/<p>/g, "");
        content = content.replace(/<\/p>/g, "");

        try {
        var url = content.match(/(https?:\/\/[^ ]*)/)[0];
        } catch (e) {
        /* empty */
        }

        content = content.replace(
        /<a href="([^"]*)".*>([^<]*)<\/a>/g,
        `<a href="${url}">Link</a>`
        );

        const pubdate = el.find("pubDate").text();
        const date = new Date(pubdate);
        const dateStr = date
        .toLocaleString("zh", { hour12: false })
        .replaceAll("/", "-");

        const template = `<p>${dateStr}</br>${content}</p>`;
        $(template).appendTo("#content");
    });
},
});
</script>
