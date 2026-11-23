/**
 * Shared Google Play end-of-page badge.
 * Inserts once after the site footer in normal document flow (not fixed/sticky).
 */
(function () {
  "use strict";

  var BAR_ID = "bottom-download-bar";
  var PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.iown.qrscanner";

  function mount() {
    if (document.getElementById(BAR_ID)) {
      return;
    }

    var section = document.createElement("section");
    section.id = BAR_ID;
    section.className = "bottom-download-bar";
    section.setAttribute("aria-label", "Download app");

    section.innerHTML =
      '<a class="bottom-download-bar__btn"' +
      ' href="' +
      PLAY_URL +
      '"' +
      ' target="_blank"' +
      ' rel="noopener noreferrer"' +
      ' aria-label="Get it on Google Play">' +
      '<svg class="bottom-download-bar__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92Zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635Zm3.199-3.198 2.337 1.349c.8.46.8 1.617 0 2.078l-2.337 1.349L15.206 12l2.492-2.491ZM5.864 2.658 16.8 8.991l-2.302 2.302L5.864 2.658Z"/>' +
      "</svg>" +
      '<span class="bottom-download-bar__text">' +
      '<span class="bottom-download-bar__eyebrow">Get it on</span>' +
      '<span class="bottom-download-bar__brand">Google Play</span>' +
      "</span>" +
      "</a>";

    var footer = document.querySelector(".site-footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer.nextSibling);
    } else {
      document.body.appendChild(section);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
