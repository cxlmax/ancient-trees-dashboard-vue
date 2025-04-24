import { defineComponent as a, resolveComponent as o, createBlock as n, openBlock as i, withCtx as s, createElementBlock as c, Fragment as d, renderList as u, createElementVNode as b } from "vue";
import { register as m } from "swiper/element/bundle";
const f = ["src"], O = a({ name: "zv-media-iframe-carousel" }), h = /* @__PURE__ */ a({
  ...O,
  props: {
    basicOption: {}
  },
  setup(w) {
    return m(), (e, g) => {
      const r = o("swiper-slide"), t = o("swiper-container");
      return i(), n(t, {
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
        default: s(() => [
          (i(!0), c(d, null, u(e.basicOption.iframes, (p, l) => (i(), n(r, { key: l }, {
            default: s(() => [
              b("iframe", {
                src: p.url,
                class: "iframe-slide",
                sandbox: "allow-scripts allow-same-origin"
              }, null, 8, f)
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
  h as default
};
