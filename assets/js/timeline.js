// Timeline como usar
// --------------------------------
!(function () {
  "use strict";
  var e = document.querySelectorAll(".timeline li");
  function t() {
    for (var t = 0; t < e.length; t++)
      (n = e[t]),
        (i = void 0),
        (i = n.getBoundingClientRect()).top >= 0 &&
          i.left >= 0 &&
          i.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          i.right <=
            (window.innerWidth || document.documentElement.clientWidth) &&
          e[t].classList.add("in-view");
    var n, i;
  }
  window.addEventListener("load", t),
    window.addEventListener("resize", t),
    window.addEventListener("scroll", t);
})();
