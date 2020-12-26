!function() {
    for (var e, t = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], o = i.length, n = window.console = window.console || {}; o--; )
        n[e = i[o]] || (n[e] = t)
}(),
function(a, e, c) {
    function d(e, t, i) {
        var o = JSON.stringify({
            event: "command",
            func: t,
            args: i || []
        });
        -1 !== e.src.indexOf("youtube.com/embed") && e.contentWindow.postMessage(o, "*")
    }
    function o(n, t, e) {
        function i() {
            d(s[0], "playVideo"),
            o.stop().fadeIn("fast"),
            l.stop().fadeIn("fast")
        }
        var l = a(c.createElement("DIV")).addClass(n.cssClass).css(y)
          , o = a(c.createElement("DIV")).addClass(n.cssClass + n.overlayCssClass).css(g)
          , r = a(c.createElement("BUTTON")).addClass(n.cssClass + n.closeCssClass).html(n.closeText)
          , s = a(c.createElement("IFRAME")).addClass(n.cssClass + n.iframeCssClass).attr({
            src: u + e + h
        }).css(f);
        l.append(s).append(r),
        a("body").append(o).append(l),
        n.open && s.on("load", function() {
            i()
        }),
        null !== t && t.on("click", function(e) {
            e.preventDefault(),
            i()
        }),
        r.add(o).on("click", function(e) {
            e.preventDefault(),
            d(s[0], "pauseVideo"),
            o.stop().fadeOut("fast"),
            l.stop().fadeOut("fast", function() {
                null === t && n.open && (o.remove(),
                l.remove())
            })
        }),
        p.on("resize", function() {
            var e = p.width() - n.minPaddingX
              , t = p.height() - n.minPaddingY
              , i = e / t
              , o = n.ratio;
            o < i ? (l.height(t),
            l.width(t * o)) : (l.width(e),
            l.height(e / o)),
            l.css("left", (p.width() - l.width()) / 2),
            l.css("top", (p.height() - l.height()) / 2)
        }).trigger("resize")
    }
    var p = a(e)
      , u = "https://www.youtube.com/embed/"
      , h = "?enablejsapi=1"
      , y = {
        display: "none",
        position: "fixed"
    }
      , f = {
        width: "100%",
        height: "100%"
    }
      , g = {
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
      , n = {
        minPaddingX: 50,
        minPaddingY: 50,
        ratio: 16 / 9,
        cssClass: "yu2fvl",
        overlayCssClass: "-overlay",
        iframeCssClass: "-iframe",
        closeCssClass: "-close",
        closeText: "X",
        open: !1,
        vid: !1
    };
    a.yu2fvl = function(e) {
        var t = a.extend({}, n, e);
        if (!1 === t.vid)
            throw "YOU MUST SET THE 'vid' option";
        o(t, null, t.vid)
    }
    ,
    a.fn.yu2fvl = function(e) {
        var i = a.extend({}, n, e);
        return !1 !== i.vid ? (o(i, this, i.vid),
        this) : this.each(function() {
            var e = a(this)
              , t = function(e) {
                return /youtu\.be/.test(e) ? e.split("youtu.be/")[1].split("?")[0].split("&")[0].split("#")[0] : /youtube\.com\/v\//.test(e) ? e.split("youtube.com/v/")[1].split("?")[0].split("&")[0].split("#")[0] : /youtube\.com\/embed\//.test(e) ? e.split("youtube.com/embed/")[1].split("?")[0].split("&")[0].split("#")[0] : !!/youtube.com|youtuberepeater.com|listenonrepeat.com/.test(e) && e.split("v=")[1].split("&")[0].split("#")[0]
            }(e.attr("href"));
            o(i, e, t)
        })
    }
}(jQuery, window, document),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var n, r = window.Slick || {};
    n = 0,
    (r = function(e, t) {
        var i, o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        c.extend(o, o.initials),
        o.activeBreakpoint = null,
        o.animType = null,
        o.animProp = null,
        o.breakpoints = [],
        o.breakpointSettings = [],
        o.cssTransitions = !1,
        o.focussed = !1,
        o.interrupted = !1,
        o.hidden = "hidden",
        o.paused = !0,
        o.positionProp = null,
        o.respondTo = null,
        o.rowCount = 1,
        o.shouldClick = !0,
        o.$slider = c(e),
        o.$slidesCache = null,
        o.transformType = null,
        o.transitionType = null,
        o.visibilityChange = "visibilitychange",
        o.windowWidth = 0,
        o.windowTimer = null,
        i = c(e).data("slick") || {},
        o.options = c.extend({}, o.defaults, t, i),
        o.currentSlide = o.options.initialSlide,
        o.originalSettings = o.options,
        void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
        o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
        o.visibilityChange = "webkitvisibilitychange"),
        o.autoPlay = c.proxy(o.autoPlay, o),
        o.autoPlayClear = c.proxy(o.autoPlayClear, o),
        o.autoPlayIterator = c.proxy(o.autoPlayIterator, o),
        o.changeSlide = c.proxy(o.changeSlide, o),
        o.clickHandler = c.proxy(o.clickHandler, o),
        o.selectHandler = c.proxy(o.selectHandler, o),
        o.setPosition = c.proxy(o.setPosition, o),
        o.swipeHandler = c.proxy(o.swipeHandler, o),
        o.dragHandler = c.proxy(o.dragHandler, o),
        o.keyHandler = c.proxy(o.keyHandler, o),
        o.instanceUid = n++,
        o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        o.registerBreakpoints(),
        o.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var o = this;
        if ("boolean" == typeof t)
            i = t,
            t = null;
        else if (t < 0 || t >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof t ? 0 === t && 0 === o.$slides.length ? c(e).appendTo(o.$slideTrack) : i ? c(e).insertBefore(o.$slides.eq(t)) : c(e).insertAfter(o.$slides.eq(t)) : !0 === i ? c(e).prependTo(o.$slideTrack) : c(e).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    r.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    r.prototype.animateSlide = function(e, t) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        c({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === o.options.vertical ? i[o.animType] = "translate(" + e + "px, 0px)" : i[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(i),
        t && setTimeout(function() {
            o.disableTransition(),
            t.call()
        }, o.options.speed))
    }
    ,
    r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)),
        e
    }
    ,
    r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    r.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    r.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            t = c("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    r.prototype.buildRows = function() {
        var e, t, i, o, n, l, r, s = this;
        if (o = document.createDocumentFragment(),
        l = s.$slider.children(),
        0 < s.options.rows) {
            for (r = s.options.slidesPerRow * s.options.rows,
            n = Math.ceil(l.length / r),
            e = 0; e < n; e++) {
                var a = document.createElement("div");
                for (t = 0; t < s.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < s.options.slidesPerRow; i++) {
                        var d = e * r + (t * s.options.slidesPerRow + i);
                        l.get(d) && c.appendChild(l.get(d))
                    }
                    a.appendChild(c)
                }
                o.appendChild(a)
            }
            s.$slider.empty().append(o),
            s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    r.prototype.checkResponsive = function(e, t) {
        var i, o, n, l = this, r = !1, s = l.$slider.width(), a = window.innerWidth || c(window).width();
        if ("window" === l.respondTo ? n = a : "slider" === l.respondTo ? n = s : "min" === l.respondTo && (n = Math.min(a, s)),
        l.options.responsive && l.options.responsive.length && null !== l.options.responsive) {
            for (i in o = null,
            l.breakpoints)
                l.breakpoints.hasOwnProperty(i) && (!1 === l.originalSettings.mobileFirst ? n < l.breakpoints[i] && (o = l.breakpoints[i]) : n > l.breakpoints[i] && (o = l.breakpoints[i]));
            null !== o ? null !== l.activeBreakpoint ? (o !== l.activeBreakpoint || t) && (l.activeBreakpoint = o,
            "unslick" === l.breakpointSettings[o] ? l.unslick(o) : (l.options = c.extend({}, l.originalSettings, l.breakpointSettings[o]),
            !0 === e && (l.currentSlide = l.options.initialSlide),
            l.refresh(e)),
            r = o) : (l.activeBreakpoint = o,
            "unslick" === l.breakpointSettings[o] ? l.unslick(o) : (l.options = c.extend({}, l.originalSettings, l.breakpointSettings[o]),
            !0 === e && (l.currentSlide = l.options.initialSlide),
            l.refresh(e)),
            r = o) : null !== l.activeBreakpoint && (l.activeBreakpoint = null,
            l.options = l.originalSettings,
            !0 === e && (l.currentSlide = l.options.initialSlide),
            l.refresh(e),
            r = o),
            e || !1 === r || l.$slider.trigger("breakpoint", [l, r])
        }
    }
    ,
    r.prototype.changeSlide = function(e, t) {
        var i, o, n = this, l = c(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i,
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, t);
            break;
        case "next":
            o = 0 == i ? n.options.slidesToScroll : i,
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, t);
            break;
        case "index":
            var r = 0 === e.data.index ? 0 : e.data.index || l.index() * n.options.slidesToScroll;
            n.slideHandler(n.checkNavigable(r), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    r.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0,
        e > (t = this.getNavigableIndexes())[t.length - 1])
            e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }
    ,
    r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        c(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
        c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.cleanUpRows = function() {
        var e;
        0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(e))
    }
    ,
    r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        c(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }
    ,
    r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(e) {
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && t.is(":focus") && (i.focussed = !0,
                i.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function(e) {
            c(this),
            i.options.pauseOnFocus && (i.focussed = !1,
            i.autoPlay())
        })
    }
    ,
    r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    r.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , o = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++o;
            else
                for (; t < e.slideCount; )
                    ++o,
                    t = i + e.options.slidesToScroll,
                    i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            o = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++o,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }
    ,
    r.prototype.getLeft = function(e) {
        var t, i, o, n, l = this, r = 0;
        return l.slideOffset = 0,
        i = l.$slides.first().outerHeight(!0),
        !0 === l.options.infinite ? (l.slideCount > l.options.slidesToShow && (l.slideOffset = l.slideWidth * l.options.slidesToShow * -1,
        n = -1,
        !0 === l.options.vertical && !0 === l.options.centerMode && (2 === l.options.slidesToShow ? n = -1.5 : 1 === l.options.slidesToShow && (n = -2)),
        r = i * l.options.slidesToShow * n),
        l.slideCount % l.options.slidesToScroll != 0 && e + l.options.slidesToScroll > l.slideCount && l.slideCount > l.options.slidesToShow && (r = e > l.slideCount ? (l.slideOffset = (l.options.slidesToShow - (e - l.slideCount)) * l.slideWidth * -1,
        (l.options.slidesToShow - (e - l.slideCount)) * i * -1) : (l.slideOffset = l.slideCount % l.options.slidesToScroll * l.slideWidth * -1,
        l.slideCount % l.options.slidesToScroll * i * -1))) : e + l.options.slidesToShow > l.slideCount && (l.slideOffset = (e + l.options.slidesToShow - l.slideCount) * l.slideWidth,
        r = (e + l.options.slidesToShow - l.slideCount) * i),
        l.slideCount <= l.options.slidesToShow && (r = l.slideOffset = 0),
        !0 === l.options.centerMode && l.slideCount <= l.options.slidesToShow ? l.slideOffset = l.slideWidth * Math.floor(l.options.slidesToShow) / 2 - l.slideWidth * l.slideCount / 2 : !0 === l.options.centerMode && !0 === l.options.infinite ? l.slideOffset += l.slideWidth * Math.floor(l.options.slidesToShow / 2) - l.slideWidth : !0 === l.options.centerMode && (l.slideOffset = 0,
        l.slideOffset += l.slideWidth * Math.floor(l.options.slidesToShow / 2)),
        t = !1 === l.options.vertical ? e * l.slideWidth * -1 + l.slideOffset : e * i * -1 + r,
        !0 === l.options.variableWidth && (o = l.slideCount <= l.options.slidesToShow || !1 === l.options.infinite ? l.$slideTrack.children(".slick-slide").eq(e) : l.$slideTrack.children(".slick-slide").eq(e + l.options.slidesToShow),
        t = !0 === l.options.rtl ? o[0] ? -1 * (l.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === l.options.centerMode && (o = l.slideCount <= l.options.slidesToShow || !1 === l.options.infinite ? l.$slideTrack.children(".slick-slide").eq(e) : l.$slideTrack.children(".slick-slide").eq(e + l.options.slidesToShow + 1),
        t = !0 === l.options.rtl ? o[0] ? -1 * (l.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        t += (l.$list.width() - o.outerWidth()) / 2)),
        t
    }
    ,
    r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    r.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, o = 0, n = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll,
        o = -1 * t.options.slidesToScroll,
        2 * t.slideCount); i < e; )
            n.push(i),
            i = o + t.options.slidesToScroll,
            o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n
    }
    ,
    r.prototype.getSlick = function() {
        return this
    }
    ,
    r.prototype.getSlideCount = function() {
        var n, l, e, r = this;
        return e = !0 === r.options.centerMode ? Math.floor(r.$list.width() / 2) : 0,
        l = -1 * r.swipeLeft + e,
        !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function(e, t) {
            var i, o;
            if (i = c(t).outerWidth(),
            o = t.offsetLeft,
            !0 !== r.options.centerMode && (o += i / 2),
            l < o + i)
                return n = t,
                !1
        }),
        Math.abs(c(n).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }
    ,
    r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    r.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    r.prototype.initADA = function() {
        var o = this
          , i = Math.ceil(o.slideCount / o.options.slidesToShow)
          , n = o.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < o.slideCount
        });
        o.$slides.add(o.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== o.$dots && (o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = n.indexOf(e);
            if (c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + o.instanceUid + e,
                tabindex: -1
            }),
            -1 !== t) {
                var i = "slick-slide-control" + o.instanceUid + t;
                c("#" + i).length && c(this).attr({
                    "aria-describedby": i
                })
            }
        }),
        o.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = n[e];
            c(this).attr({
                role: "presentation"
            }),
            c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + o.instanceUid + e,
                "aria-controls": "slick-slide" + o.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(o.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = o.currentSlide, t = e + o.options.slidesToShow; e < t; e++)
            o.options.focusOnChange ? o.$slides.eq(e).attr({
                tabindex: "0"
            }) : o.$slides.eq(e).removeAttr("tabindex");
        o.activateADA()
    }
    ,
    r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }
    ,
    r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }
    ,
    r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
        c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
        c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        c(e.setPosition)
    }
    ,
    r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    r.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this)
                  , t = c(this).attr("data-lazy")
                  , i = c(this).attr("data-srcset")
                  , o = c(this).attr("data-sizes") || l.$slider.attr("data-sizes")
                  , n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (e.attr("srcset", i),
                        o && e.attr("sizes", o)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        l.$slider.trigger("lazyLoaded", [l, e, t])
                    })
                }
                ,
                n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    l.$slider.trigger("lazyLoadError", [l, e, t])
                }
                ,
                n.src = t
            })
        }
        var t, i, o, l = this;
        if (!0 === l.options.centerMode ? o = !0 === l.options.infinite ? (i = l.currentSlide + (l.options.slidesToShow / 2 + 1)) + l.options.slidesToShow + 2 : (i = Math.max(0, l.currentSlide - (l.options.slidesToShow / 2 + 1)),
        l.options.slidesToShow / 2 + 1 + 2 + l.currentSlide) : (i = l.options.infinite ? l.options.slidesToShow + l.currentSlide : l.currentSlide,
        o = Math.ceil(i + l.options.slidesToShow),
        !0 === l.options.fade && (0 < i && i--,
        o <= l.slideCount && o++)),
        t = l.$slider.find(".slick-slide").slice(i, o),
        "anticipated" === l.options.lazyLoad)
            for (var n = i - 1, r = o, s = l.$slider.find(".slick-slide"), a = 0; a < l.options.slidesToScroll; a++)
                n < 0 && (n = l.slideCount - 1),
                t = (t = t.add(s.eq(n))).add(s.eq(r)),
                n--,
                r++;
        e(t),
        l.slideCount <= l.options.slidesToShow ? e(l.$slider.find(".slick-slide")) : l.currentSlide >= l.slideCount - l.options.slidesToShow ? e(l.$slider.find(".slick-cloned").slice(0, l.options.slidesToShow)) : 0 === l.currentSlide && e(l.$slider.find(".slick-cloned").slice(-1 * l.options.slidesToShow))
    }
    ,
    r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    r.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    r.prototype.postSlide = function(e) {
        var t = this;
        !t.unslicked && (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange)) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()
    }
    ,
    r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, o, n, l, r = this, s = c("img[data-lazy]", r.$slider);
        s.length ? (t = s.first(),
        i = t.attr("data-lazy"),
        o = t.attr("data-srcset"),
        n = t.attr("data-sizes") || r.$slider.attr("data-sizes"),
        (l = document.createElement("img")).onload = function() {
            o && (t.attr("srcset", o),
            n && t.attr("sizes", n)),
            t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, t, i]),
            r.progressiveLazyLoad()
        }
        ,
        l.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, t, i]),
            r.progressiveLazyLoad())
        }
        ,
        l.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    r.prototype.refresh = function(e) {
        var t, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        t = o.currentSlide,
        o.destroy(!0),
        c.extend(o, o.initials, {
            currentSlide: t
        }),
        o.init(),
        e || o.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    r.prototype.registerBreakpoints = function() {
        var e, t, i, o = this, n = o.options.responsive || null;
        if ("array" === c.type(n) && n.length) {
            for (e in o.respondTo = o.options.respondTo || "window",
            n)
                if (i = o.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; 0 <= i; )
                        o.breakpoints[i] && o.breakpoints[i] === t && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(t),
                    o.breakpointSettings[t] = n[e].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    r.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var o = this;
        return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e,
        !(o.slideCount < 1 || e < 0 || e > o.slideCount - 1) && (o.unload(),
        !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        void o.reinit())
    }
    ,
    r.prototype.setCSS = function(e) {
        var t, i, o = this, n = {};
        !0 === o.options.rtl && (e = -e),
        t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px",
        n[o.positionProp] = e,
        !1 === o.transformsEnabled || (!(n = {}) === o.cssTransitions ? n[o.animType] = "translate(" + t + ", " + i + ")" : n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)"),
        o.$slideTrack.css(n)
    }
    ,
    r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    r.prototype.setFade = function() {
        var i, o = this;
        o.$slides.each(function(e, t) {
            i = o.slideWidth * e * -1,
            !0 === o.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }),
        o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    r.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, o, n, l = this, r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0],
        r = arguments[1],
        n = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        r = arguments[2],
        "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            l.options[i] = o;
        else if ("multiple" === n)
            c.each(i, function(e, t) {
                l.options[e] = t
            });
        else if ("responsive" === n)
            for (t in o)
                if ("array" !== c.type(l.options.responsive))
                    l.options.responsive = [o[t]];
                else {
                    for (e = l.options.responsive.length - 1; 0 <= e; )
                        l.options.responsive[e].breakpoint === o[t].breakpoint && l.options.responsive.splice(e, 1),
                        e--;
                    l.options.responsive.push(o[t])
                }
        r && (l.unload(),
        l.reinit())
    }
    ,
    r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    r.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    r.prototype.setSlideClasses = function(e) {
        var t, i, o, n, l = this;
        if (i = l.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        l.$slides.eq(e).addClass("slick-current"),
        !0 === l.options.centerMode) {
            var r = l.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(l.options.slidesToShow / 2),
            !0 === l.options.infinite && (t <= e && e <= l.slideCount - 1 - t ? l.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = l.options.slidesToShow + e,
            i.slice(o - t + 1 + r, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === e ? i.eq(i.length - 1 - l.options.slidesToShow).addClass("slick-center") : e === l.slideCount - 1 && i.eq(l.options.slidesToShow).addClass("slick-center")),
            l.$slides.eq(e).addClass("slick-center")
        } else
            0 <= e && e <= l.slideCount - l.options.slidesToShow ? l.$slides.slice(e, e + l.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= l.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = l.slideCount % l.options.slidesToShow,
            o = !0 === l.options.infinite ? l.options.slidesToShow + e : e,
            l.options.slidesToShow == l.options.slidesToScroll && l.slideCount - e < l.options.slidesToShow ? i.slice(o - (l.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + l.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== l.options.lazyLoad && "anticipated" !== l.options.lazyLoad || l.lazyLoad()
    }
    ,
    r.prototype.setupInfinite = function() {
        var e, t, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (t = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            e = o.slideCount; e > o.slideCount - i; e -= 1)
                t = e - 1,
                c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + o.slideCount; e += 1)
                t = e,
                c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }
    ,
    r.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    r.prototype.selectHandler = function(e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide")
          , i = parseInt(t.attr("data-slick-index"));
        return i || (i = 0),
        this.slideCount <= this.options.slidesToShow ? void this.slideHandler(i, !1, !0) : void this.slideHandler(i)
    }
    ,
    r.prototype.slideHandler = function(e, t, i) {
        var o, n, l, r, s, a = null, c = this;
        if (t = t || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            return !1 === t && c.asNavFor(e),
            o = e,
            a = c.getLeft(o),
            r = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (o = c.currentSlide,
            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                c.postSlide(o)
            }) : c.postSlide(o))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (o = c.currentSlide,
            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                c.postSlide(o)
            }) : c.postSlide(o))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
            n = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o,
            c.animating = !0,
            c.$slider.trigger("beforeChange", [c, c.currentSlide, n]),
            l = c.currentSlide,
            c.currentSlide = n,
            c.setSlideClasses(c.currentSlide),
            c.options.asNavFor && ((s = (s = c.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide)),
            c.updateDots(),
            c.updateArrows(),
            !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(l),
            c.fadeSlide(n, function() {
                c.postSlide(n)
            })) : c.postSlide(n),
            void c.animateHeight()) : void (!0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function() {
                c.postSlide(n)
            }) : c.postSlide(n)))
    }
    ,
    r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    r.prototype.swipeDirection = function() {
        var e, t, i, o, n = this;
        return e = n.touchObject.startX - n.touchObject.curX,
        t = n.touchObject.startY - n.touchObject.curY,
        i = Math.atan2(t, e),
        (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && 0 <= o ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && 315 <= o ? !1 === n.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    r.prototype.swipeEnd = function(e) {
        var t, i, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1;
        if (o.interrupted = !1,
        o.shouldClick = !(10 < o.touchObject.swipeLength),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
            case "left":
            case "down":
                t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(t),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, i]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    r.prototype.swipeMove = function(e) {
        var t, i, o, n, l, r, s = this;
        return l = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!s.dragging || s.scrolling || l && 1 !== l.length) && (t = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== l ? l[0].pageX : e.clientX,
        s.touchObject.curY = void 0 !== l ? l[0].pageY : e.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))),
        !s.options.verticalSwiping && !s.swiping && 4 < r ? !(s.scrolling = !0) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = r),
        i = s.swipeDirection(),
        void 0 !== e.originalEvent && 4 < s.touchObject.swipeLength && (s.swiping = !0,
        e.preventDefault()),
        n = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        !0 === s.options.verticalSwiping && (n = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        o = s.touchObject.swipeLength,
        (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (o = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        !1 === s.options.vertical ? s.swipeLeft = t + o * n : s.swipeLeft = t + o * (s.$list.height() / s.listWidth) * n,
        !0 === s.options.verticalSwiping && (s.swipeLeft = t + o * n),
        !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))))
    }
    ,
    r.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (i.dragging = !0))
    }
    ,
    r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    r.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    }
    ,
    r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    c.fn.slick = function() {
        var e, t, i = this, o = arguments[0], n = Array.prototype.slice.call(arguments, 1), l = i.length;
        for (e = 0; e < l; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new r(i[e],o) : t = i[e].slick[o].apply(i[e].slick, n),
            void 0 !== t)
                return t;
        return i
    }
}),
function() {
    "use strict";
    function t(e) {
        if (!e)
            throw new Error("No options passed to Waypoint constructor");
        if (!e.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + i,
        this.options = t.Adapter.extend({}, t.defaults, e),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = e.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        l[this.key] = this,
        i += 1
    }
    var i = 0
      , l = {};
    t.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    t.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete l[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(e) {
        var t = [];
        for (var i in l)
            t.push(l[i]);
        for (var o = 0, n = t.length; o < n; o++)
            t[o][e]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        for (var e in t.Context.refreshAll(),
        l)
            l[e].enabled = !0;
        return this
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    function i(e) {
        this.element = e,
        this.Adapter = g.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + o,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        n[e.waypointContextKey] = this,
        o += 1,
        g.windowContext || (g.windowContext = !0,
        g.windowContext = new i(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var o = 0
      , n = {}
      , g = window.Waypoint
      , e = window.onload;
    i.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    i.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , i = this.element == this.element.window;
        e && t && !i && (this.adapter.off(".waypoints"),
        delete n[this.key])
    }
    ,
    i.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(),
            t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0,
            g.requestAnimationFrame(e))
        })
    }
    ,
    i.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(),
            t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            (!t.didScroll || g.isTouch) && (t.didScroll = !0,
            g.requestAnimationFrame(e))
        })
    }
    ,
    i.prototype.handleResize = function() {
        g.Context.refreshAll()
    }
    ,
    i.prototype.handleScroll = function() {
        var e = {}
          , t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in t) {
            var o = t[i]
              , n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var l in this.waypoints[i]) {
                var r = this.waypoints[i][l];
                if (null !== r.triggerPoint) {
                    var s = o.oldScroll < r.triggerPoint
                      , a = o.newScroll >= r.triggerPoint;
                    (s && a || !s && !a) && (r.queueTrigger(n),
                    e[r.group.id] = r.group)
                }
            }
        }
        for (var c in e)
            e[c].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }
    ,
    i.prototype.innerHeight = function() {
        return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    i.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    i.prototype.innerWidth = function() {
        return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    i.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var i in this.waypoints[t])
                e.push(this.waypoints[t][i]);
        for (var o = 0, n = e.length; o < n; o++)
            e[o].destroy()
    }
    ,
    i.prototype.refresh = function() {
        var e, t = this.element == this.element.window, i = t ? void 0 : this.adapter.offset(), o = {};
        for (var n in this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: t ? 0 : i.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : i.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var l = e[n];
            for (var r in this.waypoints[n]) {
                var s, a, c, d, p = this.waypoints[n][r], u = p.options.offset, h = p.triggerPoint, y = 0, f = null == h;
                p.element !== p.element.window && (y = p.adapter.offset()[l.offsetProp]),
                "function" == typeof u ? u = u.apply(p) : "string" == typeof u && (u = parseFloat(u),
                -1 < p.options.offset.indexOf("%") && (u = Math.ceil(l.contextDimension * u / 100))),
                s = l.contextScroll - l.contextOffset,
                p.triggerPoint = Math.floor(y + s - u),
                a = h < l.oldScroll,
                c = p.triggerPoint >= l.oldScroll,
                d = !a && !c,
                !f && (a && c) ? (p.queueTrigger(l.backward),
                o[p.group.id] = p.group) : !f && d ? (p.queueTrigger(l.forward),
                o[p.group.id] = p.group) : f && l.oldScroll >= p.triggerPoint && (p.queueTrigger(l.forward),
                o[p.group.id] = p.group)
            }
        }
        return g.requestAnimationFrame(function() {
            for (var e in o)
                o[e].flushTriggers()
        }),
        this
    }
    ,
    i.findOrCreateByElement = function(e) {
        return i.findByElement(e) || new i(e)
    }
    ,
    i.refreshAll = function() {
        for (var e in n)
            n[e].refresh()
    }
    ,
    i.findByElement = function(e) {
        return n[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        e && e(),
        i.refreshAll()
    }
    ,
    g.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }
    ,
    g.Context = i
}(),
function() {
    "use strict";
    function r(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function s(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    function t(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        i[this.axis][this.name] = this
    }
    var i = {
        vertical: {},
        horizontal: {}
    }
      , o = window.Waypoint;
    t.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    t.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    t.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e]
              , i = "up" === e || "left" === e;
            t.sort(i ? s : r);
            for (var o = 0, n = t.length; o < n; o += 1) {
                var l = t[o];
                (l.options.continuous || o === t.length - 1) && l.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    t.prototype.next = function(e) {
        this.waypoints.sort(r);
        var t = o.Adapter.inArray(e, this.waypoints);
        return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
    }
    ,
    t.prototype.previous = function(e) {
        this.waypoints.sort(r);
        var t = o.Adapter.inArray(e, this.waypoints);
        return t ? this.waypoints[t - 1] : null
    }
    ,
    t.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    t.prototype.remove = function(e) {
        var t = o.Adapter.inArray(e, this.waypoints);
        -1 < t && this.waypoints.splice(t, 1)
    }
    ,
    t.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    t.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    t.findOrCreate = function(e) {
        return i[e.axis][e.name] || new t(e)
    }
    ,
    o.Group = t
}(),
function() {
    "use strict";
    function i(e) {
        this.$element = o(e)
    }
    var o = window.jQuery
      , e = window.Waypoint;
    o.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
        i.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e)
        }
    }),
    o.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
        i[t] = o[t]
    }),
    e.adapters.push({
        name: "jquery",
        Adapter: i
    }),
    e.Adapter = i
}(),
function() {
    "use strict";
    function e(o) {
        return function() {
            var t = []
              , i = arguments[0];
            return o.isFunction(arguments[0]) && ((i = o.extend({}, arguments[1])).handler = arguments[0]),
            this.each(function() {
                var e = o.extend({}, i, {
                    element: this
                });
                "string" == typeof e.context && (e.context = o(this).closest(e.context)[0]),
                t.push(new n(e))
            }),
            t
        }
    }
    var n = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function() {
    var o, t, i, a, n, l = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }, r = [].indexOf || function(e) {
        for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var i, o;
            for (i in t)
                o = t[i],
                null == e[i] && (e[i] = o);
            return e
        }
        ,
        e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        ,
        e.prototype.createEvent = function(e, t, i, o) {
            var n;
            return null == t && (t = !1),
            null == i && (i = !1),
            null == o && (o = null),
            null != document.createEvent ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, o) : null != document.createEventObject ? (n = document.createEventObject()).eventType = e : n.eventName = e,
            n
        }
        ,
        e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }
        ,
        e.prototype.addEvent = function(e, t, i) {
            return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
        }
        ,
        e.prototype.removeEvent = function(e, t, i) {
            return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
        }
        ,
        e.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        e
    }(),
    i = this.WeakMap || this.MozWeakMap || (i = function() {
        function e() {
            this.keys = [],
            this.values = []
        }
        return e.prototype.get = function(e) {
            var t, i, o, n;
            for (t = i = 0,
            o = (n = this.keys).length; i < o; t = ++i)
                if (n[t] === e)
                    return this.values[t]
        }
        ,
        e.prototype.set = function(e, t) {
            var i, o, n, l;
            for (i = o = 0,
            n = (l = this.keys).length; o < n; i = ++o)
                if (l[i] === e)
                    return void (this.values[i] = t);
            return this.keys.push(e),
            this.values.push(t)
        }
        ,
        e
    }()),
    o = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (o = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0,
        e.prototype.observe = function() {}
        ,
        e
    }()),
    a = this.getComputedStyle || function(i, e) {
        return this.getPropertyValue = function(e) {
            var t;
            return "float" === e && (e = "styleFloat"),
            n.test(e) && e.replace(n, function(e, t) {
                return t.toUpperCase()
            }),
            (null != (t = i.currentStyle) ? t[e] : void 0) || null
        }
        ,
        this
    }
    ,
    n = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(e) {
            null == e && (e = {}),
            this.scrollCallback = l(this.scrollCallback, this),
            this.scrollHandler = l(this.scrollHandler, this),
            this.resetAnimation = l(this.resetAnimation, this),
            this.start = l(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new i,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var n, e, t, i, r;
            if (this.stopped = !1,
            this.boxes = function() {
                var e, t, i, o;
                for (o = [],
                e = 0,
                t = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; e < t; e++)
                    n = i[e],
                    o.push(n);
                return o
            }
            .call(this),
            this.all = function() {
                var e, t, i, o;
                for (o = [],
                e = 0,
                t = (i = this.boxes).length; e < t; e++)
                    n = i[e],
                    o.push(n);
                return o
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = 0,
                    t = (i = this.boxes).length; e < t; e++)
                        n = i[e],
                        this.applyStyle(n, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new o((r = this,
            function(e) {
                var t, i, n, l, o;
                for (o = [],
                t = 0,
                i = e.length; t < i; t++)
                    l = e[t],
                    o.push(function() {
                        var e, t, i, o;
                        for (o = [],
                        e = 0,
                        t = (i = l.addedNodes || []).length; e < t; e++)
                            n = i[e],
                            o.push(this.doSync(n));
                        return o
                    }
                    .call(r));
                return o
            }
            )).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(e) {
            return o.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(e) {
            var t, i, o, n, l;
            if (null == e && (e = this.element),
            1 === e.nodeType) {
                for (l = [],
                i = 0,
                o = (n = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; i < o; i++)
                    t = n[i],
                    r.call(this.all, t) < 0 ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                    l.push(this.scrolled = !0)) : l.push(void 0);
                return l
            }
        }
        ,
        e.prototype.show = function(e) {
            return this.applyStyle(e),
            e.className = e.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(e),
            this.util().emitEvent(e, this.wowEvent),
            this.util().addEvent(e, "animationend", this.resetAnimation),
            this.util().addEvent(e, "oanimationend", this.resetAnimation),
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
        }
        ,
        e.prototype.applyStyle = function(e, t) {
            var i, o, n, l;
            return o = e.getAttribute("data-wow-duration"),
            i = e.getAttribute("data-wow-delay"),
            n = e.getAttribute("data-wow-iteration"),
            this.animate((l = this,
            function() {
                return l.customStyle(e, t, o, i, n)
            }
            ))
        }
        ,
        e.prototype.animate = "requestAnimationFrame"in window ? function(e) {
            return window.requestAnimationFrame(e)
        }
        : function(e) {
            return e()
        }
        ,
        e.prototype.resetStyle = function() {
            var e, t, i, o, n;
            for (n = [],
            t = 0,
            i = (o = this.boxes).length; t < i; t++)
                e = o[t],
                n.push(e.style.visibility = "visible");
            return n
        }
        ,
        e.prototype.resetAnimation = function(e) {
            var t;
            return 0 <= e.type.toLowerCase().indexOf("animationend") ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0
        }
        ,
        e.prototype.customStyle = function(e, t, i, o, n) {
            return t && this.cacheAnimationName(e),
            e.style.visibility = t ? "hidden" : "visible",
            i && this.vendorSet(e.style, {
                animationDuration: i
            }),
            o && this.vendorSet(e.style, {
                animationDelay: o
            }),
            n && this.vendorSet(e.style, {
                animationIterationCount: n
            }),
            this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }),
            e
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(n, e) {
            var l, t, r, s;
            for (l in t = [],
            e)
                r = e[l],
                n["" + l] = r,
                t.push(function() {
                    var e, t, i, o;
                    for (o = [],
                    e = 0,
                    t = (i = this.vendors).length; e < t; e++)
                        s = i[e],
                        o.push(n["" + s + l.charAt(0).toUpperCase() + l.substr(1)] = r);
                    return o
                }
                .call(this));
            return t
        }
        ,
        e.prototype.vendorCSS = function(e, t) {
            var i, o, n, l, r, s;
            for (l = (r = a(e)).getPropertyCSSValue(t),
            i = 0,
            o = (n = this.vendors).length; i < o; i++)
                s = n[i],
                l = l || r.getPropertyCSSValue("-" + s + "-" + t);
            return l
        }
        ,
        e.prototype.animationName = function(t) {
            var i;
            try {
                i = this.vendorCSS(t, "animation-name").cssText
            } catch (e) {
                i = a(t).getPropertyValue("animation-name")
            }
            return "none" === i ? "" : i
        }
        ,
        e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }
        ,
        e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var n;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var e, t, i, o;
                for (o = [],
                e = 0,
                t = (i = this.boxes).length; e < t; e++)
                    (n = i[e]) && (this.isVisible(n) ? this.show(n) : o.push(n));
                return o
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop; )
                e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent; )
                t += e.offsetTop;
            return t
        }
        ,
        e.prototype.isVisible = function(e) {
            var t, i, o, n, l;
            return i = e.getAttribute("data-wow-offset") || this.config.offset,
            n = (l = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i,
            t = (o = this.offsetTop(e)) + e.clientHeight,
            o <= n && l <= t
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
.call(this),
function(i) {
    "use strict";
    i.fn.counterUp = function(e) {
        var t = i.extend({
            time: 400,
            delay: 10
        }, e);
        return this.each(function() {
            var a = i(this)
              , c = t;
            a.waypoint(function() {
                var e = []
                  , t = c.time / c.delay
                  , i = a.text()
                  , o = /[0-9]+,[0-9]+/.test(i);
                i = i.replace(/,/g, "");
                for (var n = (/^[0-9]+$/.test(i),
                /^[0-9]+\.[0-9]+$/.test(i)), l = n ? (i.split(".")[1] || []).length : 0, r = t; 1 <= r; r--) {
                    var s = parseInt(i / t * r);
                    if (n && (s = parseFloat(i / t * r).toFixed(l)),
                    o)
                        for (; /(\d+)(\d{3})/.test(s.toString()); )
                            s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    e.unshift(s)
                }
                a.data("counterup-nums", e),
                a.text("0");
                a.data("counterup-func", function() {
                    a.data("counterup-nums") && (a.text(a.data("counterup-nums").shift()),
                    a.data("counterup-nums").length ? setTimeout(a.data("counterup-func"), c.delay) : (a.data("counterup-nums"),
                    a.data("counterup-nums", null),
                    a.data("counterup-func", null)))
                }),
                setTimeout(a.data("counterup-func"), c.delay)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery),
function(r, l, n, s) {
    function a(e, t) {
        var i = this;
        "object" == typeof t && (delete t.refresh,
        delete t.render,
        r.extend(this, t)),
        this.$element = r(e),
        !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var o = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (o.length < 1 && o.push("center"),
        1 == o.length && o.push(o[0]),
        ("top" == o[0] || "bottom" == o[0] || "left" == o[1] || "right" == o[1]) && (o = [o[1], o[0]]),
        this.positionX != s && (o[0] = this.positionX.toLowerCase()),
        this.positionY != s && (o[1] = this.positionY.toLowerCase()),
        i.positionX = o[0],
        i.positionY = o[1],
        "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)),
        "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)),
        this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
            return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        if (navigator.userAgent.match(/(Android)/))
            return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        this.$mirror = r("<div />").prependTo("body");
        var n = this.$element.find(">.parallax-slider")
          , l = !1;
        0 == n.length ? this.$slider = r("<img />").prependTo(this.$mirror) : (this.$slider = n.prependTo(this.$mirror),
        l = !0),
        this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }),
        this.$slider.addClass("parallax-slider").one("load", function() {
            i.naturalHeight && i.naturalWidth || (i.naturalHeight = this.naturalHeight || this.height || 1,
            i.naturalWidth = this.naturalWidth || this.width || 1),
            i.aspectRatio = i.naturalWidth / i.naturalHeight,
            a.isSetup || a.setup(),
            a.sliders.push(i),
            a.isFresh = !1,
            a.requestRender()
        }),
        l || (this.$slider[0].src = this.imageSrc),
        (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < n.length) && this.$slider.trigger("load")
    }
    !function() {
        for (var n = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !l.requestAnimationFrame; ++t)
            l.requestAnimationFrame = l[e[t] + "RequestAnimationFrame"],
            l.cancelAnimationFrame = l[e[t] + "CancelAnimationFrame"] || l[e[t] + "CancelRequestAnimationFrame"];
        l.requestAnimationFrame || (l.requestAnimationFrame = function(e) {
            var t = (new Date).getTime()
              , i = Math.max(0, 16 - (t - n))
              , o = l.setTimeout(function() {
                e(t + i)
            }, i);
            return n = t + i,
            o
        }
        ),
        l.cancelAnimationFrame || (l.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }(),
    r.extend(a.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(),
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed,
            this.boxOffsetTop = this.$element.offset().top - this.bleed,
            this.boxOffsetLeft = this.$element.offset().left,
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var e = a.winHeight
              , t = a.docHeight
              , i = Math.min(this.boxOffsetTop, t - e)
              , o = Math.max(this.boxOffsetTop + this.boxHeight - e, 0)
              , n = this.boxHeight + (i - o) * (1 - this.speed) | 0
              , l = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
            if (n * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = n * this.aspectRatio | 0,
                this.imageHeight = n,
                this.offsetBaseTop = l;
                var r = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -r : isNaN(this.positionX) ? -r / 2 | 0 : Math.max(this.positionX, -r)
            } else {
                this.imageWidth = this.boxWidth,
                this.imageHeight = this.boxWidth / this.aspectRatio | 0,
                this.offsetLeft = 0;
                r = this.imageHeight - n;
                this.offsetBaseTop = "top" == this.positionY ? l : "bottom" == this.positionY ? l - r : isNaN(this.positionY) ? l - r / 2 | 0 : l + Math.max(this.positionY, -r)
            }
        },
        render: function() {
            var e = a.scrollTop
              , t = a.scrollLeft
              , i = this.overScrollFix ? a.overScroll : 0
              , o = e + a.winHeight;
            this.boxOffsetBottom > e && this.boxOffsetTop <= o ? (this.visibility = "visible",
            this.mirrorTop = this.boxOffsetTop - e,
            this.mirrorLeft = this.boxOffsetLeft - t,
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden",
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - i,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }),
            this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }),
    r.extend(a, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var e = r(n)
                  , o = r(l)
                  , t = function() {
                    a.winHeight = o.height(),
                    a.winWidth = o.width(),
                    a.docHeight = e.height(),
                    a.docWidth = e.width()
                }
                  , i = function() {
                    var e = o.scrollTop()
                      , t = a.docHeight - a.winHeight
                      , i = a.docWidth - a.winWidth;
                    a.scrollTop = Math.max(0, Math.min(t, e)),
                    a.scrollLeft = Math.max(0, Math.min(i, o.scrollLeft())),
                    a.overScroll = Math.max(e - t, Math.min(e, 0))
                };
                o.on("resize.px.parallax load.px.parallax", function() {
                    t(),
                    a.isFresh = !1,
                    a.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function() {
                    i(),
                    a.requestRender()
                }),
                t(),
                i(),
                this.isReady = !0
            }
        },
        configure: function(e) {
            "object" == typeof e && (delete e.refresh,
            delete e.render,
            r.extend(this.prototype, e))
        },
        refresh: function() {
            r.each(this.sliders, function() {
                this.refresh()
            }),
            this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(),
            r.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var e = this;
            this.isBusy || (this.isBusy = !0,
            l.requestAnimationFrame(function() {
                e.render(),
                e.isBusy = !1
            }))
        },
        destroy: function(e) {
            var t, i = r(e).data("px.parallax");
            for (i.$mirror.remove(),
            t = 0; t < this.sliders.length; t += 1)
                this.sliders[t] == i && this.sliders.splice(t, 1);
            r(e).data("px.parallax", !1),
            0 === this.sliders.length && (r(l).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            this.isReady = !1,
            a.isSetup = !1)
        }
    });
    var e = r.fn.parallax;
    r.fn.parallax = function(i) {
        return this.each(function() {
            var e = r(this)
              , t = "object" == typeof i && i;
            this == l || this == n || e.is("body") ? a.configure(t) : e.data("px.parallax") ? "object" == typeof i && r.extend(e.data("px.parallax"), t) : (t = r.extend({}, e.data(), t),
            e.data("px.parallax", new a(this,t))),
            "string" == typeof i && ("destroy" == i ? a.destroy(this) : a[i]())
        })
    }
    ,
    r.fn.parallax.Constructor = a,
    r.fn.parallax.noConflict = function() {
        return r.fn.parallax = e,
        this
    }
    ,
    r(n).on("ready.px.parallax.data-api", function() {
        r('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document),
function(c, d, p) {
    "use strict";
    c.fn.scrollUp = function(e) {
        c.data(p.body, "scrollUp") || (c.data(p.body, "scrollUp", !0),
        c.fn.scrollUp.init(e))
    }
    ,
    c.fn.scrollUp.init = function(e) {
        var t, i, o, n, l, r, s = c.fn.scrollUp.settings = c.extend({}, c.fn.scrollUp.defaults, e), a = !1;
        switch (r = s.scrollTrigger ? c(s.scrollTrigger) : c("<a/>", {
            id: s.scrollName,
            href: "#top"
        }),
        s.scrollTitle && r.attr("title", s.scrollTitle),
        r.appendTo("body"),
        s.scrollImg || s.scrollTrigger || r.html(s.scrollText),
        r.css({
            display: "none",
            position: "fixed",
            zIndex: s.zIndex
        }),
        s.activeOverlay && c("<div/>", {
            id: s.scrollName + "-active"
        }).css({
            position: "absolute",
            top: s.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + s.activeOverlay,
            zIndex: s.zIndex
        }).appendTo("body"),
        s.animation) {
        case "fade":
            t = "fadeIn",
            i = "fadeOut",
            o = s.animationSpeed;
            break;
        case "slide":
            t = "slideDown",
            i = "slideUp",
            o = s.animationSpeed;
            break;
        default:
            t = "show",
            i = "hide",
            o = 0
        }
        n = "top" === s.scrollFrom ? s.scrollDistance : c(p).height() - c(d).height() - s.scrollDistance,
        c(d).scroll(function() {
            c(d).scrollTop() > n ? a || (r[t](o),
            a = !0) : a && (r[i](o),
            a = !1)
        }),
        s.scrollTarget ? "number" == typeof s.scrollTarget ? l = s.scrollTarget : "string" == typeof s.scrollTarget && (l = Math.floor(c(s.scrollTarget).offset().top)) : l = 0,
        r.click(function(e) {
            e.preventDefault(),
            c("html, body").animate({
                scrollTop: l
            }, s.scrollSpeed, s.easingType)
        })
    }
    ,
    c.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    },
    c.fn.scrollUp.destroy = function(e) {
        c.removeData(p.body, "scrollUp"),
        c("#" + c.fn.scrollUp.settings.scrollName).remove(),
        c("#" + c.fn.scrollUp.settings.scrollName + "-active").remove(),
        7 <= c.fn.jquery.split(".")[1] ? c(d).off("scroll", e) : c(d).unbind("scroll", e)
    }
    ,
    c.scrollUp = c.fn.scrollUp
}(jQuery, window, document),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Lightgallery = e()
    }
}(function() {
    return function l(r, s, a) {
        function c(i, e) {
            if (!s[i]) {
                if (!r[i]) {
                    var t = "function" == typeof require && require;
                    if (!e && t)
                        return t(i, !0);
                    if (d)
                        return d(i, !0);
                    var o = new Error("Cannot find module '" + i + "'");
                    throw o.code = "MODULE_NOT_FOUND",
                    o
                }
                var n = s[i] = {
                    exports: {}
                };
                r[i][0].call(n.exports, function(e) {
                    var t = r[i][1][e];
                    return c(t || e)
                }, n, n.exports, l, r, s, a)
            }
            return s[i].exports
        }
        for (var d = "function" == typeof require && require, e = 0; e < a.length; e++)
            c(a[e]);
        return c
    }({
        1: [function(e, t, o) {
            !function(e, t) {
                if (void 0 !== o)
                    t(o);
                else {
                    var i = {};
                    t(i),
                    e.lgUtils = i
                }
            }(this, function(e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                window.getAttribute = function(e) {
                    return window[e]
                }
                ,
                window.setAttribute = function(e, t) {
                    window[e] = t
                }
                ,
                document.getAttribute = function(e) {
                    return document[e]
                }
                ,
                document.setAttribute = function(e, t) {
                    document[e] = t
                }
                ;
                var r = {
                    wrap: function(e, t) {
                        if (e) {
                            var i = document.createElement("div");
                            i.className = t,
                            e.parentNode.insertBefore(i, e),
                            e.parentNode.removeChild(e),
                            i.appendChild(e)
                        }
                    },
                    addClass: function(e, t) {
                        e && (e.classList ? e.classList.add(t) : e.className += " " + t)
                    },
                    removeClass: function(e, t) {
                        e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "))
                    },
                    hasClass: function(e, t) {
                        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
                    },
                    setVendor: function(e, t, i) {
                        e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = i,
                        e.style["webkit" + t] = i,
                        e.style["moz" + t] = i,
                        e.style["ms" + t] = i,
                        e.style["o" + t] = i)
                    },
                    trigger: function(e, t) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        if (e) {
                            var o = new CustomEvent(t,{
                                detail: i
                            });
                            e.dispatchEvent(o)
                        }
                    },
                    Listener: {
                        uid: 0
                    },
                    on: function(i, e, o) {
                        i && e.split(" ").forEach(function(e) {
                            var t = i.getAttribute("lg-event-uid") || "";
                            r.Listener.uid++,
                            t += "&" + r.Listener.uid,
                            i.setAttribute("lg-event-uid", t),
                            r.Listener[e + r.Listener.uid] = o,
                            i.addEventListener(e.split(".")[0], o, !1)
                        })
                    },
                    off: function(e, t) {
                        if (e) {
                            var i = e.getAttribute("lg-event-uid");
                            if (i) {
                                i = i.split("&");
                                for (var o = 0; o < i.length; o++)
                                    if (i[o]) {
                                        var n = t + i[o];
                                        if ("." === n.substring(0, 1))
                                            for (var l in r.Listener)
                                                r.Listener.hasOwnProperty(l) && -1 < l.split(".").indexOf(n.split(".")[1]) && (e.removeEventListener(l.split(".")[0], r.Listener[l]),
                                                e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + i[o], "")),
                                                delete r.Listener[l]);
                                        else
                                            e.removeEventListener(n.split(".")[0], r.Listener[n]),
                                            e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + i[o], "")),
                                            delete r.Listener[n]
                                    }
                            }
                        }
                    },
                    param: function(t) {
                        return Object.keys(t).map(function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                        }).join("&")
                    }
                };
                e.default = r
            })
        }
        , {}],
        2: [function(i, e, o) {
            !function(e, t) {
                if (void 0 !== o)
                    t(i("./lg-utils"));
                else {
                    t(e.lgUtils),
                    e.lightgallery = {}
                }
            }(this, function(e) {
                "use strict";
                function o(e, t) {
                    if (this.el = e,
                    this.s = i({}, n, t),
                    this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return this.modules = {},
                    this.lGalleryOn = !1,
                    this.lgBusy = !1,
                    this.hideBartimeout = !1,
                    this.isTouch = "ontouchstart"in document.documentElement,
                    this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                    this.items = [],
                    this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children,
                    this.___slide = "",
                    this.outer = "",
                    this.init(),
                    this
                }
                var t, f = (t = e) && t.__esModule ? t : {
                    default: t
                }, i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var o in i)
                            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
                    }
                    return e
                }
                ;
                !function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var i = document.createEvent("CustomEvent");
                        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        i
                    }
                    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype,
                    window.CustomEvent = e)
                }(),
                window.utils = f.default,
                window.lgData = {
                    uid: 0
                };
                var n = {
                    mode: "lg-slide",
                    cssEasing: "ease",
                    easing: "linear",
                    speed: 600,
                    height: "100%",
                    width: "100%",
                    addClass: "",
                    startClass: "lg-start-zoom",
                    backdropDuration: 150,
                    hideBarsDelay: 6e3,
                    useLeft: !(window.lgModules = {}),
                    closable: !0,
                    loop: !0,
                    escKey: !0,
                    keyPress: !0,
                    controls: !0,
                    slideEndAnimatoin: !0,
                    hideControlOnEnd: !1,
                    mousewheel: !1,
                    getCaptionFromTitleOrAlt: !0,
                    appendSubHtmlTo: ".lg-sub-html",
                    subHtmlSelectorRelative: !1,
                    preload: 1,
                    showAfterLoad: !0,
                    selector: "",
                    selectWithin: "",
                    nextHtml: "",
                    prevHtml: "",
                    index: !1,
                    iframeMaxWidth: "100%",
                    download: !0,
                    counter: !0,
                    appendCounterTo: ".lg-toolbar",
                    swipeThreshold: 50,
                    enableSwipe: !0,
                    enableDrag: !0,
                    dynamic: !1,
                    dynamicEl: [],
                    galleryId: 1
                };
                o.prototype.init = function() {
                    var i = this;
                    i.s.preload > i.items.length && (i.s.preload = i.items.length);
                    var e = window.location.hash;
                    if (0 < e.indexOf("lg=" + this.s.galleryId) && (i.index = parseInt(e.split("&slide=")[1], 10),
                    f.default.addClass(document.body, "lg-from-hash"),
                    f.default.hasClass(document.body, "lg-on") || (f.default.addClass(document.body, "lg-on"),
                    setTimeout(function() {
                        i.build(i.index)
                    }))),
                    i.s.dynamic)
                        f.default.trigger(this.el, "onBeforeOpen"),
                        i.index = i.s.index || 0,
                        f.default.hasClass(document.body, "lg-on") || (f.default.addClass(document.body, "lg-on"),
                        setTimeout(function() {
                            i.build(i.index)
                        }));
                    else
                        for (var t = 0; t < i.items.length; t++)
                            !function(t) {
                                f.default.on(i.items[t], "click.lgcustom", function(e) {
                                    e.preventDefault(),
                                    f.default.trigger(i.el, "onBeforeOpen"),
                                    i.index = i.s.index || t,
                                    f.default.hasClass(document.body, "lg-on") || (i.build(i.index),
                                    f.default.addClass(document.body, "lg-on"))
                                })
                            }(t)
                }
                ,
                o.prototype.build = function(e) {
                    var t = this;
                    for (var i in t.structure(),
                    window.lgModules)
                        t.modules[i] = new window.lgModules[i](t.el);
                    t.slide(e, !1, !1),
                    t.s.keyPress && t.keyPress(),
                    1 < t.items.length && (t.arrow(),
                    setTimeout(function() {
                        t.enableDrag(),
                        t.enableSwipe()
                    }, 50),
                    t.s.mousewheel && t.mousewheel()),
                    t.counter(),
                    t.closeGallery(),
                    f.default.trigger(t.el, "onAfterOpen"),
                    f.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function() {
                        f.default.removeClass(t.outer, "lg-hide-items"),
                        clearTimeout(t.hideBartimeout),
                        t.hideBartimeout = setTimeout(function() {
                            f.default.addClass(t.outer, "lg-hide-items")
                        }, t.s.hideBarsDelay)
                    })
                }
                ,
                o.prototype.structure = function() {
                    var e, t = "", i = "", o = 0, n = "", l = this;
                    for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'),
                    f.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"),
                    o = 0; o < this.items.length; o++)
                        t += '<div class="lg-item"></div>';
                    if (this.s.controls && 1 < this.items.length && (i = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"),
                    ".lg-sub-html" === this.s.appendSubHtmlTo && (n = '<div class="lg-sub-html"></div>'),
                    e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + i + n + "</div></div>",
                    document.body.insertAdjacentHTML("beforeend", e),
                    this.outer = document.querySelector(".lg-outer"),
                    this.___slide = this.outer.querySelectorAll(".lg-item"),
                    this.s.useLeft ? (f.default.addClass(this.outer, "lg-use-left"),
                    this.s.mode = "lg-slide") : f.default.addClass(this.outer, "lg-use-css3"),
                    l.setTop(),
                    f.default.on(window, "resize.lg orientationchange.lg", function() {
                        setTimeout(function() {
                            l.setTop()
                        }, 100)
                    }),
                    f.default.addClass(this.___slide[this.index], "lg-current"),
                    this.doCss() ? f.default.addClass(this.outer, "lg-css3") : (f.default.addClass(this.outer, "lg-css"),
                    this.s.speed = 0),
                    f.default.addClass(this.outer, this.s.mode),
                    this.s.enableDrag && 1 < this.items.length && f.default.addClass(this.outer, "lg-grab"),
                    this.s.showAfterLoad && f.default.addClass(this.outer, "lg-show-after-load"),
                    this.doCss()) {
                        var r = this.outer.querySelector(".lg-inner");
                        f.default.setVendor(r, "TransitionTimingFunction", this.s.cssEasing),
                        f.default.setVendor(r, "TransitionDuration", this.s.speed + "ms")
                    }
                    setTimeout(function() {
                        f.default.addClass(document.querySelector(".lg-backdrop"), "in")
                    }),
                    setTimeout(function() {
                        f.default.addClass(l.outer, "lg-visible")
                    }, this.s.backdropDuration),
                    this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
                    this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                }
                ,
                o.prototype.setTop = function() {
                    if ("100%" !== this.s.height) {
                        var e = window.innerHeight
                          , t = (e - parseInt(this.s.height, 10)) / 2
                          , i = this.outer.querySelector(".lg");
                        e >= parseInt(this.s.height, 10) ? i.style.top = t + "px" : i.style.top = "0px"
                    }
                }
                ,
                o.prototype.doCss = function() {
                    return !!function() {
                        var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
                          , t = document.documentElement
                          , i = 0;
                        for (i = 0; i < e.length; i++)
                            if (e[i]in t.style)
                                return !0
                    }()
                }
                ,
                o.prototype.isVideo = function(e, t) {
                    if (!e)
                        throw new Error("Make sure that slide " + t + " has an image/video src");
                    var i;
                    if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"),
                    !e && i)
                        return {
                            html5: !0
                        };
                    var o = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
                      , n = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i)
                      , l = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i)
                      , r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                    return o ? {
                        youtube: o
                    } : n ? {
                        vimeo: n
                    } : l ? {
                        dailymotion: l
                    } : r ? {
                        vk: r
                    } : void 0
                }
                ,
                o.prototype.counter = function() {
                    this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>")
                }
                ,
                o.prototype.addHtml = function(e) {
                    var t, i = null;
                    if (this.s.dynamic ? i = this.s.dynamicEl[e].subHtml : (i = (t = this.items[e]).getAttribute("data-sub-html"),
                    this.s.getCaptionFromTitleOrAlt && !i && ((i = t.getAttribute("title")) && t.querySelector("img") && (i = t.querySelector("img").getAttribute("alt")))),
                    null != i) {
                        var o = i.substring(0, 1);
                        "." !== o && "#" !== o || (i = this.s.subHtmlSelectorRelative && !this.s.dynamic ? t.querySelector(i).innerHTML : document.querySelector(i).innerHTML)
                    } else
                        i = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = i : this.___slide[e].insertAdjacentHTML("beforeend", i),
                    null != i && ("" === i ? f.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : f.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")),
                    f.default.trigger(this.el, "onAfterAppendSubHtml", {
                        index: e
                    })
                }
                ,
                o.prototype.preload = function(e) {
                    var t = 1
                      , i = 1;
                    for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++)
                        this.loadContent(e + t, !1, 0);
                    for (i = 1; i <= this.s.preload && !(e - i < 0); i++)
                        this.loadContent(e - i, !1, 0)
                }
                ,
                o.prototype.loadContent = function(t, e, i) {
                    var o, s, n, l, r, a, c = this, d = !1, p = function(e) {
                        for (var t = [], i = [], o = 0; o < e.length; o++) {
                            var n = e[o].split(" ");
                            "" === n[0] && n.splice(0, 1),
                            i.push(n[0]),
                            t.push(n[1])
                        }
                        for (var l = window.innerWidth, r = 0; r < t.length; r++)
                            if (parseInt(t[r], 10) > l) {
                                s = i[r];
                                break
                            }
                    };
                    if (c.s.dynamic) {
                        if (c.s.dynamicEl[t].poster && (d = !0,
                        n = c.s.dynamicEl[t].poster),
                        a = c.s.dynamicEl[t].html,
                        s = c.s.dynamicEl[t].src,
                        c.s.dynamicEl[t].responsive)
                            p(c.s.dynamicEl[t].responsive.split(","));
                        l = c.s.dynamicEl[t].srcset,
                        r = c.s.dynamicEl[t].sizes
                    } else {
                        if (c.items[t].getAttribute("data-poster") && (d = !0,
                        n = c.items[t].getAttribute("data-poster")),
                        a = c.items[t].getAttribute("data-html"),
                        s = c.items[t].getAttribute("href") || c.items[t].getAttribute("data-src"),
                        c.items[t].getAttribute("data-responsive"))
                            p(c.items[t].getAttribute("data-responsive").split(","));
                        l = c.items[t].getAttribute("data-srcset"),
                        r = c.items[t].getAttribute("data-sizes")
                    }
                    var u = !1;
                    c.s.dynamic ? c.s.dynamicEl[t].iframe && (u = !0) : "true" === c.items[t].getAttribute("data-iframe") && (u = !0);
                    var h = c.isVideo(s, t);
                    if (!f.default.hasClass(c.___slide[t], "lg-loaded")) {
                        if (u)
                            c.___slide[t].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + s + '"  allowfullscreen="true"></iframe></div></div>');
                        else if (d) {
                            var y;
                            y = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                            c.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + y + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + n + '" /></div></div>')
                        } else
                            h ? (c.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                            f.default.trigger(c.el, "hasVideo", {
                                index: t,
                                src: s,
                                html: a
                            })) : c.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + s + '" /></div>');
                        if (f.default.trigger(c.el, "onAferAppendSlide", {
                            index: t
                        }),
                        o = c.___slide[t].querySelector(".lg-object"),
                        r && o.setAttribute("sizes", r),
                        l) {
                            o.setAttribute("srcset", l);
                            try {
                                picturefill({
                                    elements: [o[0]]
                                })
                            } catch (t) {
                                console.error("Make sure you have included Picturefill version 2")
                            }
                        }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t),
                        f.default.addClass(c.___slide[t], "lg-loaded")
                    }
                    f.default.on(c.___slide[t].querySelector(".lg-object"), "load.lg error.lg", function() {
                        var e = 0;
                        i && !f.default.hasClass(document.body, "lg-from-hash") && (e = i),
                        setTimeout(function() {
                            f.default.addClass(c.___slide[t], "lg-complete"),
                            f.default.trigger(c.el, "onSlideItemLoad", {
                                index: t,
                                delay: i || 0
                            })
                        }, e)
                    }),
                    h && h.html5 && !d && f.default.addClass(c.___slide[t], "lg-complete"),
                    !0 === e && (f.default.hasClass(c.___slide[t], "lg-complete") ? c.preload(t) : f.default.on(c.___slide[t].querySelector(".lg-object"), "load.lg error.lg", function() {
                        c.preload(t)
                    }))
                }
                ,
                o.prototype.slide = function(e, t, i) {
                    for (var o = 0, n = 0; n < this.___slide.length; n++)
                        if (f.default.hasClass(this.___slide[n], "lg-current")) {
                            o = n;
                            break
                        }
                    var l = this;
                    if (!l.lGalleryOn || o !== e) {
                        var r = this.___slide.length
                          , s = l.lGalleryOn ? this.s.speed : 0
                          , a = !1
                          , c = !1;
                        if (!l.lgBusy) {
                            var d;
                            if (this.s.download)
                                (d = l.s.dynamic ? !1 !== l.s.dynamicEl[e].downloadUrl && (l.s.dynamicEl[e].downloadUrl || l.s.dynamicEl[e].src) : "false" !== l.items[e].getAttribute("data-download-url") && (l.items[e].getAttribute("data-download-url") || l.items[e].getAttribute("href") || l.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", d),
                                f.default.removeClass(l.outer, "lg-hide-download")) : f.default.addClass(l.outer, "lg-hide-download");
                            if (f.default.trigger(l.el, "onBeforeSlide", {
                                prevIndex: o,
                                index: e,
                                fromTouch: t,
                                fromThumb: i
                            }),
                            l.lgBusy = !0,
                            clearTimeout(l.hideBartimeout),
                            ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                                l.addHtml(e)
                            }, s),
                            this.arrowDisable(e),
                            t) {
                                var p = e - 1
                                  , u = e + 1;
                                0 === e && o === r - 1 ? (u = 0,
                                p = r - 1) : e === r - 1 && 0 === o && (u = 0,
                                p = r - 1),
                                f.default.removeClass(l.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"),
                                f.default.removeClass(l.outer.querySelector(".lg-current"), "lg-current"),
                                f.default.removeClass(l.outer.querySelector(".lg-next-slide"), "lg-next-slide"),
                                f.default.addClass(l.___slide[p], "lg-prev-slide"),
                                f.default.addClass(l.___slide[u], "lg-next-slide"),
                                f.default.addClass(l.___slide[e], "lg-current")
                            } else {
                                f.default.addClass(l.outer, "lg-no-trans");
                                for (var h = 0; h < this.___slide.length; h++)
                                    f.default.removeClass(this.___slide[h], "lg-prev-slide"),
                                    f.default.removeClass(this.___slide[h], "lg-next-slide");
                                e < o ? (c = !0,
                                0 !== e || o !== r - 1 || i || (a = !(c = !1))) : o < e && (a = !0,
                                e !== r - 1 || 0 !== o || i || (a = !(c = !0))),
                                c ? (f.default.addClass(this.___slide[e], "lg-prev-slide"),
                                f.default.addClass(this.___slide[o], "lg-next-slide")) : a && (f.default.addClass(this.___slide[e], "lg-next-slide"),
                                f.default.addClass(this.___slide[o], "lg-prev-slide")),
                                setTimeout(function() {
                                    f.default.removeClass(l.outer.querySelector(".lg-current"), "lg-current"),
                                    f.default.addClass(l.___slide[e], "lg-current"),
                                    f.default.removeClass(l.outer, "lg-no-trans")
                                }, 50)
                            }
                            l.lGalleryOn ? (setTimeout(function() {
                                l.loadContent(e, !0, 0)
                            }, this.s.speed + 50),
                            setTimeout(function() {
                                l.lgBusy = !1,
                                f.default.trigger(l.el, "onAfterSlide", {
                                    prevIndex: o,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: i
                                })
                            }, this.s.speed)) : (l.loadContent(e, !0, l.s.backdropDuration),
                            l.lgBusy = !1,
                            f.default.trigger(l.el, "onAfterSlide", {
                                prevIndex: o,
                                index: e,
                                fromTouch: t,
                                fromThumb: i
                            })),
                            l.lGalleryOn = !0,
                            this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
                        }
                    }
                }
                ,
                o.prototype.goToNextSlide = function(e) {
                    var t = this;
                    t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++,
                    f.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }),
                    t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0,
                    f.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }),
                    t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (f.default.addClass(t.outer, "lg-right-end"),
                    setTimeout(function() {
                        f.default.removeClass(t.outer, "lg-right-end")
                    }, 400)))
                }
                ,
                o.prototype.goToPrevSlide = function(e) {
                    var t = this;
                    t.lgBusy || (0 < t.index ? (t.index--,
                    f.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }),
                    t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1,
                    f.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }),
                    t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (f.default.addClass(t.outer, "lg-left-end"),
                    setTimeout(function() {
                        f.default.removeClass(t.outer, "lg-left-end")
                    }, 400)))
                }
                ,
                o.prototype.keyPress = function() {
                    var t = this;
                    1 < this.items.length && f.default.on(window, "keyup.lg", function(e) {
                        1 < t.items.length && (37 === e.keyCode && (e.preventDefault(),
                        t.goToPrevSlide()),
                        39 === e.keyCode && (e.preventDefault(),
                        t.goToNextSlide()))
                    }),
                    f.default.on(window, "keydown.lg", function(e) {
                        !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(),
                        f.default.hasClass(t.outer, "lg-thumb-open") ? f.default.removeClass(t.outer, "lg-thumb-open") : t.destroy())
                    })
                }
                ,
                o.prototype.arrow = function() {
                    var e = this;
                    f.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function() {
                        e.goToPrevSlide()
                    }),
                    f.default.on(this.outer.querySelector(".lg-next"), "click.lg", function() {
                        e.goToNextSlide()
                    })
                }
                ,
                o.prototype.arrowDisable = function(e) {
                    if (!this.s.loop && this.s.hideControlOnEnd) {
                        var t = this.outer.querySelector(".lg-next")
                          , i = this.outer.querySelector(".lg-prev");
                        e + 1 < this.___slide.length ? (t.removeAttribute("disabled"),
                        f.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"),
                        f.default.addClass(t, "disabled")),
                        0 < e ? (i.removeAttribute("disabled"),
                        f.default.removeClass(i, "disabled")) : (t.setAttribute("disabled", "disabled"),
                        f.default.addClass(t, "disabled"))
                    }
                }
                ,
                o.prototype.setTranslate = function(e, t, i) {
                    this.s.useLeft ? e.style.left = t : f.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + i + "px, 0px)")
                }
                ,
                o.prototype.touchMove = function(e, t) {
                    var i = t - e;
                    15 < Math.abs(i) && (f.default.addClass(this.outer, "lg-dragging"),
                    this.setTranslate(this.___slide[this.index], i, 0),
                    this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + i, 0),
                    this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + i, 0))
                }
                ,
                o.prototype.touchEnd = function(t) {
                    var i = this;
                    "lg-slide" !== i.s.mode && f.default.addClass(i.outer, "lg-slide");
                    for (var e = 0; e < this.___slide.length; e++)
                        f.default.hasClass(this.___slide[e], "lg-current") || f.default.hasClass(this.___slide[e], "lg-prev-slide") || f.default.hasClass(this.___slide[e], "lg-next-slide") || (this.___slide[e].style.opacity = "0");
                    setTimeout(function() {
                        f.default.removeClass(i.outer, "lg-dragging"),
                        t < 0 && Math.abs(t) > i.s.swipeThreshold ? i.goToNextSlide(!0) : 0 < t && Math.abs(t) > i.s.swipeThreshold ? i.goToPrevSlide(!0) : Math.abs(t) < 5 && f.default.trigger(i.el, "onSlideClick");
                        for (var e = 0; e < i.___slide.length; e++)
                            i.___slide[e].removeAttribute("style")
                    }),
                    setTimeout(function() {
                        f.default.hasClass(i.outer, "lg-dragging") || "lg-slide" === i.s.mode || f.default.removeClass(i.outer, "lg-slide")
                    }, i.s.speed + 100)
                }
                ,
                o.prototype.enableSwipe = function() {
                    var t = this
                      , i = 0
                      , o = 0
                      , n = !1;
                    if (t.s.enableSwipe && t.isTouch && t.doCss()) {
                        for (var e = 0; e < t.___slide.length; e++)
                            f.default.on(t.___slide[e], "touchstart.lg", function(e) {
                                f.default.hasClass(t.outer, "lg-zoomed") || t.lgBusy || (e.preventDefault(),
                                t.manageSwipeClass(),
                                i = e.targetTouches[0].pageX)
                            });
                        for (var l = 0; l < t.___slide.length; l++)
                            f.default.on(t.___slide[l], "touchmove.lg", function(e) {
                                f.default.hasClass(t.outer, "lg-zoomed") || (e.preventDefault(),
                                o = e.targetTouches[0].pageX,
                                t.touchMove(i, o),
                                n = !0)
                            });
                        for (var r = 0; r < t.___slide.length; r++)
                            f.default.on(t.___slide[r], "touchend.lg", function() {
                                f.default.hasClass(t.outer, "lg-zoomed") || (n ? (n = !1,
                                t.touchEnd(o - i)) : f.default.trigger(t.el, "onSlideClick"))
                            })
                    }
                }
                ,
                o.prototype.enableDrag = function() {
                    var t = this
                      , i = 0
                      , o = 0
                      , n = !1
                      , l = !1;
                    if (t.s.enableDrag && !t.isTouch && t.doCss()) {
                        for (var e = 0; e < t.___slide.length; e++)
                            f.default.on(t.___slide[e], "mousedown.lg", function(e) {
                                f.default.hasClass(t.outer, "lg-zoomed") || (f.default.hasClass(e.target, "lg-object") || f.default.hasClass(e.target, "lg-video-play")) && (e.preventDefault(),
                                t.lgBusy || (t.manageSwipeClass(),
                                i = e.pageX,
                                n = !0,
                                t.outer.scrollLeft += 1,
                                t.outer.scrollLeft -= 1,
                                f.default.removeClass(t.outer, "lg-grab"),
                                f.default.addClass(t.outer, "lg-grabbing"),
                                f.default.trigger(t.el, "onDragstart")))
                            });
                        f.default.on(window, "mousemove.lg", function(e) {
                            n && (l = !0,
                            o = e.pageX,
                            t.touchMove(i, o),
                            f.default.trigger(t.el, "onDragmove"))
                        }),
                        f.default.on(window, "mouseup.lg", function(e) {
                            l ? (l = !1,
                            t.touchEnd(o - i),
                            f.default.trigger(t.el, "onDragend")) : (f.default.hasClass(e.target, "lg-object") || f.default.hasClass(e.target, "lg-video-play")) && f.default.trigger(t.el, "onSlideClick"),
                            n && (n = !1,
                            f.default.removeClass(t.outer, "lg-grabbing"),
                            f.default.addClass(t.outer, "lg-grab"))
                        })
                    }
                }
                ,
                o.prototype.manageSwipeClass = function() {
                    var e = this.index + 1
                      , t = this.index - 1
                      , i = this.___slide.length;
                    this.s.loop && (0 === this.index ? t = i - 1 : this.index === i - 1 && (e = 0));
                    for (var o = 0; o < this.___slide.length; o++)
                        f.default.removeClass(this.___slide[o], "lg-next-slide"),
                        f.default.removeClass(this.___slide[o], "lg-prev-slide");
                    -1 < t && f.default.addClass(this.___slide[t], "lg-prev-slide"),
                    f.default.addClass(this.___slide[e], "lg-next-slide")
                }
                ,
                o.prototype.mousewheel = function() {
                    var t = this;
                    f.default.on(t.outer, "mousewheel.lg", function(e) {
                        e.deltaY && (0 < e.deltaY ? t.goToPrevSlide() : t.goToNextSlide(),
                        e.preventDefault())
                    })
                }
                ,
                o.prototype.closeGallery = function() {
                    var t = this
                      , i = !1;
                    f.default.on(this.outer.querySelector(".lg-close"), "click.lg", function() {
                        t.destroy()
                    }),
                    t.s.closable && (f.default.on(t.outer, "mousedown.lg", function(e) {
                        i = !!(f.default.hasClass(e.target, "lg-outer") || f.default.hasClass(e.target, "lg-item") || f.default.hasClass(e.target, "lg-img-wrap"))
                    }),
                    f.default.on(t.outer, "mouseup.lg", function(e) {
                        (f.default.hasClass(e.target, "lg-outer") || f.default.hasClass(e.target, "lg-item") || f.default.hasClass(e.target, "lg-img-wrap") && i) && (f.default.hasClass(t.outer, "lg-dragging") || t.destroy())
                    }))
                }
                ,
                o.prototype.destroy = function(e) {
                    var t = this;
                    if (e || f.default.trigger(t.el, "onBeforeClose"),
                    document.body.scrollTop = t.prevScrollTop,
                    document.documentElement.scrollTop = t.prevScrollTop,
                    e) {
                        if (!t.s.dynamic)
                            for (var i = 0; i < this.items.length; i++)
                                f.default.off(this.items[i], ".lg"),
                                f.default.off(this.items[i], ".lgcustom");
                        var o = t.el.getAttribute("lg-uid");
                        delete window.lgData[o],
                        t.el.removeAttribute("lg-uid")
                    }
                    for (var n in f.default.off(this.el, ".lgtm"),
                    window.lgModules)
                        t.modules[n] && t.modules[n].destroy();
                    this.lGalleryOn = !1,
                    clearTimeout(t.hideBartimeout),
                    this.hideBartimeout = !1,
                    f.default.off(window, ".lg"),
                    f.default.removeClass(document.body, "lg-on"),
                    f.default.removeClass(document.body, "lg-from-hash"),
                    t.outer && f.default.removeClass(t.outer, "lg-visible"),
                    f.default.removeClass(document.querySelector(".lg-backdrop"), "in"),
                    setTimeout(function() {
                        try {
                            t.outer && t.outer.parentNode.removeChild(t.outer),
                            document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),
                            e || f.default.trigger(t.el, "onCloseAfter")
                        } catch (e) {}
                    }, t.s.backdropDuration + 50)
                }
                ,
                window.lightGallery = function(e, t) {
                    if (e)
                        try {
                            if (e.getAttribute("lg-uid"))
                                try {
                                    window.lgData[e.getAttribute("lg-uid")].init()
                                } catch (e) {
                                    console.error("lightGallery has not initiated properly")
                                }
                            else {
                                var i = "lg" + window.lgData.uid++;
                                window.lgData[i] = new o(e,t),
                                e.setAttribute("lg-uid", i)
                            }
                        } catch (e) {
                            console.error("lightGallery has not initiated properly")
                        }
                }
            })
        }
        , {
            "./lg-utils": 1
        }]
    }, {}, [2])(2)
});