/*!
 * jQuery ClassySlider
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.3.0
 *
 */
(function(b) {
  function d() {
    return new Date().getTime();
  }
  b.fn.ClassySlider = function(a) {
    return this.each(function() {
      var c = b(this);
      if (c.data("classyslider")) return c.data("classyslider");
      var d = new e(this, a);
      c.data("classyslider", d);
    });
  };
  b.fn.ClassySlider.defaults = {
    autoplay: !0,
    pause: !0,
    duration: 3e3,
    distance: 82
  };
  var e = function(a, c) {
    return e.fn.create(a, c);
  };
  e.fn = e.prototype = {
    version: "1.3.0",
    create: function(a, c) {
      this.options = b.extend(!0, b.fn.ClassySlider.defaults, c);
      this.vars = { sC: 0, lS: 0, cS: 0, r: 0, t: !1 };
      this.panel = { timer: null };
      this.panel.showScreen = b(a);
      b(a).addClass("classyslider classyslider-vertical-slider");
      b(a).wrap('<div class="classyslider-wrapper" />');
      this.slider = b(a).parent();
      this.items = b(a).children();
      this.slideSize();
      this.options.pause && this.setPauseOnHover();
      this.panel.timer = new f({
        duration: this.options.duration,
        oncomplete: b.proxy(function() {
          this.vars.r = 0;
          this.vars.lS = this.vars.cS;
          this.vars.cS++;
          this.transit();
          this.panel.timer.start();
        }, this)
      });
      this.setHoverNavigation();
      this.options.autoplay &&
        1 < this.items.length &&
        this.panel.timer.start();
    },
    slideSize: function() {
      this.items.each(
        b.proxy(function(a, d) {
          this.vars.sC++;
          b(d).css({ zIndex: a + 5, left: a * this.options.distance + "px" });
          b(d).attr("rel", a);
        }, this)
      );
      if (0 !== this.vars.sC) {
        0 <= this.vars.cS &&
          this.vars.cS < this.items.length &&
          (this.items.eq(parseInt(this.vars.cS)).children("img")[0].complete
            ? this.afterLoadImage()
            : this.items
                .eq(parseInt(this.vars.cS))
                .children("img")
                .load(b.proxy(this.afterLoadImage, this)));
        for (var a = 0; a < this.items.length; a++)
          a !== this.vars.cS &&
            (this.items.eq(a).children("img")[0].complete
              ? this.items
                  .eq(a)
                  .children("img")
                  .siblings()
                  .width(
                    this.items
                      .eq(a)
                      .children("img")
                      .width() + "px"
                  )
              : this.items
                  .eq(parseInt(a))
                  .children("img")
                  .load(function() {
                    b(this)
                      .siblings()
                      .width(b(this).width() + "px");
                  }));
      }
    },
    afterLoadImage: function() {
      var a = b("img", this.items.eq(this.vars.cS)).width(),
        c = b("img", this.items.eq(this.vars.cS)).height();
      this.slider.width(
        parseInt(a + this.options.distance * (this.items.length - 1)) + "px"
      );
      this.slider.height(c + "px");
      this.items
        .eq(this.vars.cS)
        .children("img")
        .siblings()
        .width(a + "px");
      for (c = this.vars.cS + 1; c < this.items.length; c++)
        this.items
          .eq(c)
          .css({ left: parseInt((c - 1) * this.options.distance + a) + "px" });
    },
    setClickSelector: function() {
      var a = this;
      this.items.click(function() {
        a.vars.t ||
          (a.stopProgress(),
          (a.vars.lS = a.vars.cS),
          (a.vars.cS = b(this).attr("rel")),
          a.transit());
      });
    },
    setHoverNavigation: function() {
      var a = this;
      this.items.bind("mouseenter", function() {
        a.stopProgress();
        a.vars.lS = a.vars.cS;
        a.vars.cS = b(this).attr("rel");
        a.transit();
      });
    },
    setPauseOnHover: function() {
      this.slider.hover(
        b.proxy(function() {
          this.vars.paused = !0;
          this.pauseProgress();
        }, this),
        b.proxy(function() {
          this.vars.paused = !1;
          this.vars.running = !1;
          this.options.pause && this.startProgress();
        }, this)
      );
    },
    stopProgress: function() {
      this.panel.timer.stop();
    },
    pauseProgress: function() {
      this.panel.timer.pause();
    },
    startProgress: function() {
      this.panel.timer.start();
    },
    transit: function() {
      this.vars.cS === this.vars.sC
        ? ((this.vars.cS = 0),
          this.options.slideshowEnd && this.options.slideshowEnd.call(this))
        : 0 > this.vars.cS && (this.vars.cS = this.vars.sC - 1);
      this.items.removeClass("current-slide");
      this.items.stop();
      this.vars.t = !0;
      this.items.eq(this.vars.cS).animate(
        { left: this.vars.cS * this.options.distance + "px" },
        b.proxy(function() {
          this.vars.t = !1;
        }, this)
      );
      for (
        var a = this.items
            .eq(this.vars.cS)
            .children("img")
            .width(),
          c = 0;
        c < this.vars.cS;
        c++
      )
        this.items.eq(c).animate({ left: c * this.options.distance + "px" });
      for (c = parseInt(this.vars.cS) + 1; c < this.items.length; c++)
        this.items
          .eq(c)
          .animate({ left: (c - 1) * this.options.distance + a + "px" });
    }
  };
  var f = function(a) {
      return f.fn.create(a);
    },
    g = d();
  f.fn = f.prototype = {
    create: function(a) {
      this.options = b.extend(!0, { duration: 3e3, oncomplete: null }, a);
      this.vars = { startTime: 0, lastPauseResidue: 0, pause: !0 };
      this.timer = null;
      g = this.vars.startTime = d();
      setInterval(b.proxy(this.reset, this), 16);
      setInterval(b.proxy(this.reset, this), 30);
    },
    stop: function() {
      this.vars.lastPauseResidue = 0;
      this.vars.pause = !0;
    },
    pause: function() {
      this.vars.lastPauseResidue =
        d() - this.vars.startTime + this.vars.lastPauseResidue;
      this.vars.pause = !0;
    },
    start: function() {
      this.vars.startTime = d();
      this.vars.pause = !1;
    },
    reset: function() {
      var a = d();
      if (30 <= a - g) {
        if (
          !1 === this.vars.pause &&
          a - this.vars.startTime + this.vars.lastPauseResidue >=
            this.options.duration &&
          ((this.vars.lastPauseResidue = 0),
          (this.vars.pause = !0),
          this.options.oncomplete)
        )
          this.options.oncomplete();
        g = a;
      }
    }
  };
})(jQuery);
