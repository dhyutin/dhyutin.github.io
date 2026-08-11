/* Sree Dhyuti Nimmagadda — academic profile interactions (vanilla JS) */
(function () {
  "use strict";

  /* Light / dark theme toggle (light is default; choice persists) */
  const themeBtn = document.querySelector(".theme-toggle");
  function syncThemeIcon() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.innerHTML = dark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
  themeBtn.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    syncThemeIcon();
  });
  syncThemeIcon();

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
