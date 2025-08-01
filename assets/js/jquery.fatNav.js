!(function (t, i, o) {
  var a = "fatNav",
    n = {};
  function e(i) {
    (this.settings = t.extend({}, n, i)),
      (this._defaults = n),
      (this._name = a),
      this.init();
  }
  t.extend(e.prototype, {
    init: function () {
      var i = this,
        o = (this.$nav = t(".fat-nav")),
        a = (this.$hamburger = t(
          '<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>'
        ));
      (this._bodyOverflow = t("body").css("overflow")),
        navigator.userAgent.match(/(iPad|iPhone|iPod)/g) &&
          o.children().css({ height: "110%", transform: "translateY(-5%)" }),
        t("body").append(a),
        t()
          .add(a)
          .add(o.find("a"))
          .on("click", function (t) {
            i.toggleNav();
          });
    },
    toggleNav: function () {
      this.$nav.fadeToggle(400),
        this.toggleBodyOverflow(),
        t().add(this.$hamburger).add(this.$nav).toggleClass("active");
    },
    toggleBodyOverflow: function () {
      var i = t("body");
      i.toggleClass("no-scroll");
      var o = i.hasClass("no-scroll");
      i.width(i.width()), i.css("overflow", o ? "hidden" : this._bodyOverflow);
    },
  }),
    void 0 === t[a] &&
      (t[a] = function (t) {
        return new e(this, t);
      });
})(jQuery, window, document);
