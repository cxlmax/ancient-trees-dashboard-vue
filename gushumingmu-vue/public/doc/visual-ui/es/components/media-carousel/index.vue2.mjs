import { defineComponent as p, ref as O, watch as f, resolveComponent as s, createBlock as a, openBlock as o, withCtx as t, createElementBlock as g, Fragment as w, renderList as y, createElementVNode as v } from "vue";
import { register as h } from "swiper/element/bundle";
import { nanoid as r } from "nanoid";
import { cloneDeep as k, isEqual as B } from "lodash";
const C = ["src"], E = p({ name: "zv-media-carousel" }), q = /* @__PURE__ */ p({
  ...E,
  props: {
    basicOption: {}
  },
  setup(l) {
    h();
    const c = l, i = O(r());
    return f(() => k(c.basicOption), (e, n) => {
      B(e, n) || (i.value = r());
    }, {
      deep: !0
    }), (e, n) => {
      const d = s("swiper-slide"), u = s("swiper-container");
      return o(), a(u, {
        key: i.value,
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
        default: t(() => [
          (o(!0), g(w, null, y(e.basicOption.photoGallery, (b, m) => (o(), a(d, { key: m }, {
            default: t(() => [
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
