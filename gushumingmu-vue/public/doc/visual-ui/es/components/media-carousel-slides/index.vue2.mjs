import { defineComponent as l, ref as O, watch as f, resolveComponent as t, createBlock as a, openBlock as i, withCtx as r, createElementBlock as g, Fragment as w, renderList as y, createElementVNode as v } from "vue";
import { register as h } from "swiper/element/bundle";
import { cloneDeep as k, isEqual as B } from "lodash";
import { nanoid as p } from "nanoid";
const C = ["src"], E = l({ name: "zv-media-carousel-slides" }), q = /* @__PURE__ */ l({
  ...E,
  props: {
    basicOption: {}
  },
  setup(c) {
    h();
    const o = c, n = O(p());
    return f(() => k(o.basicOption), (e, s) => {
      B(e, s) || (n.value = p());
    }, {
      deep: !0
    }), (e, s) => {
      const d = t("swiper-slide"), u = t("swiper-container");
      return i(), a(u, {
        key: n.value,
        class: "carousel",
        direction: e.basicOption.direction,
        speed: e.basicOption.speed,
        "round-lengths": e.basicOption.roundLengths,
        "grab-cursor": e.basicOption.grabCursor,
        rewind: e.basicOption.rewind,
        loop: e.basicOption.loop,
        "slides-per-view": e.basicOption.slidesPerView,
        "space-between": e.basicOption.spaceBetween,
        autoplay: e.basicOption.autoplay,
        delay: e.basicOption.delay,
        "stop-on-last-slide": e.basicOption.stopOnLastSlide,
        "reverse-direction": e.basicOption.reverseDirection,
        "pause-on-mouse-enter": e.basicOption.pauseOnMouseEnter,
        "free-mode": e.basicOption.freeMode,
        effect: e.basicOption.effect,
        pagination: e.basicOption.pagination,
        "pagination-type": e.basicOption.paginationType
      }, {
        default: r(() => [
          (i(!0), g(w, null, y(o.basicOption.photoGallery, (b, m) => (i(), a(d, { key: m }, {
            default: r(() => [
              v("img", {
                class: "image",
                src: b.url,
                alt: ""
              }, null, 8, C)
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["direction", "speed", "round-lengths", "grab-cursor", "rewind", "loop", "slides-per-view", "space-between", "autoplay", "delay", "stop-on-last-slide", "reverse-direction", "pause-on-mouse-enter", "free-mode", "effect", "pagination", "pagination-type"]);
    };
  }
});
export {
  q as default
};
