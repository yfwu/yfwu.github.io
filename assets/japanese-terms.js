(function () {
  var terms = ["新サクラ大戦", "サクラ大戦"];
  var selector = ".article-content, .artilce_title, .post_title, .post-list";
  var skipTags = /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA|SELECT|OPTION)$/;

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  var pattern = new RegExp("(" + terms.map(escapeRegExp).join("|") + ")", "g");

  function isAlreadyJapanese(node) {
    for (var parent = node.parentElement; parent; parent = parent.parentElement) {
      if (parent.getAttribute("lang") === "ja" || parent.classList.contains("jp") || parent.classList.contains("ja")) {
        return true;
      }
    }
    return false;
  }

  function wrapTextNode(textNode) {
    var text = textNode.nodeValue;
    if (!pattern.test(text)) {
      return;
    }
    pattern.lastIndex = 0;

    var fragment = document.createDocumentFragment();
    var lastIndex = 0;
    text.replace(pattern, function (match, _term, offset) {
      if (offset > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
      }

      var span = document.createElement("span");
      span.setAttribute("lang", "ja");
      span.className = "jp-term";
      span.textContent = match;
      fragment.appendChild(span);
      lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    textNode.parentNode.replaceChild(fragment, textNode);
  }

  function markJapaneseTerms(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !pattern.test(node.nodeValue)) {
          pattern.lastIndex = 0;
          return NodeFilter.FILTER_REJECT;
        }
        pattern.lastIndex = 0;
        if (!node.parentElement || skipTags.test(node.parentElement.tagName) || isAlreadyJapanese(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach(wrapTextNode);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(selector).forEach(markJapaneseTerms);
  });
})();
