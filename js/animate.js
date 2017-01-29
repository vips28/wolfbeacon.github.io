! function(a) {
    a.fn.animatedModal = function(o) {
        function n() {
            l.css({
                "z-index": i.zIndexOut
            }), i.afterClose()
        }

        function t() {
            i.afterOpen()
        }
        var e = a(this),
            i = a.extend({
                modalTarget: "animatedModal",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndexIn: "9999",
                zIndexOut: "-9999",
                color: "#fff",
                opacityIn: "0.9",
                opacityOut: "0",
                animatedIn: "fadeIn",
                animatedOut: "fadeOut",
                animationDuration: ".3s",
                overflow: "auto",
                beforeOpen: function() {},
                afterOpen: function() {},
                beforeClose: function() {},
                afterClose: function() {}
            }, o),
            d = a(".close-" + i.modalTarget),
            s = a(e).attr("href"),
            l = a("body").find("#" + i.modalTarget),
            m = "#" + l.attr("id");
        l.addClass("animated"), l.addClass(i.modalTarget + "-off");
        var r = {
            position: i.position,
            width: i.width,
            height: i.height,
            top: i.top,
            left: i.left,
            "background-color": i.color,
            "overflow-y": i.overflow,
            "z-index": i.zIndexOut,
            opacity: i.opacityOut,
            "-webkit-animation-duration": i.animationDuration
        };
        l.css(r), e.click(function(o) {
            o.preventDefault(), a("body, html").css({
                overflow: "hidden"
            }), s == m && (l.hasClass(i.modalTarget + "-off") && (l.removeClass(i.animatedOut), l.removeClass(i.modalTarget + "-off"), l.addClass(i.modalTarget + "-on")), l.hasClass(i.modalTarget + "-on") && (i.beforeOpen(), l.css({
                opacity: i.opacityIn,
                "z-index": i.zIndexIn
            }), l.addClass(i.animatedIn), l.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", t)))
        }), d.click(function(o) {
            o.preventDefault(), a("body, html").css({
                overflow: "auto"
            }), i.beforeClose(), l.hasClass(i.modalTarget + "-on") && (l.removeClass(i.modalTarget + "-on"), l.addClass(i.modalTarget + "-off")), l.hasClass(i.modalTarget + "-off") && (l.removeClass(i.animatedIn), l.addClass(i.animatedOut), l.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
        })
    }
}(jQuery);