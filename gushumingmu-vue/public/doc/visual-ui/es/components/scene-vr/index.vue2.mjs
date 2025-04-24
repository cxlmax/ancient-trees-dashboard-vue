import { defineComponent as B, ref as d, computed as P, watch as te, onMounted as ne, resolveComponent as A, createElementBlock as i, openBlock as a, createCommentVNode as l, createElementVNode as c, Fragment as L, withDirectives as I, vShow as D, normalizeStyle as E, createVNode as j, withCtx as z, renderList as se, toDisplayString as ie, createStaticVNode as ae, nextTick as ce, pushScopeId as re, popScopeId as le } from "vue";
import de from "./resources/zv-vr-select.svg.mjs";
import O from "./resources/zv-return.svg.mjs";
import ue from "./resources/zv-add.svg.mjs";
import pe from "./resources/zv-reduce.svg.mjs";
import ve from "./resources/zv-play.svg.mjs";
import we from "./resources/zv-pause.svg.mjs";
import fe from "./resources/zv-refresh.svg.mjs";
import T from "hls.js";
import { isArray as me, debounce as Se, cloneDeep as M } from "lodash";
import { SHJParseEvent as S } from "../../commons/plugins/event/index.mjs";
const u = (V) => (re("data-v-d1dd2ed8"), V = V(), le(), V), Ve = { class: "vr-scene-wrap" }, be = {
  id: "panorama",
  class: "vr-scene"
}, he = {
  id: "panorama-video-wrap",
  class: "vr-scene-main"
}, _e = {
  key: 1,
  class: "vr-scene-controls"
}, ye = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: de,
  alt: ""
}, null, -1)), ge = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: O,
  alt: ""
}, null, -1)), Oe = [
  ge
], He = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: O,
  alt: ""
}, null, -1)), ke = [
  He
], Je = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: O,
  alt: ""
}, null, -1)), Ee = [
  Je
], Te = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: O,
  alt: ""
}, null, -1)), Ce = [
  Te
], Re = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: ue,
  alt: ""
}, null, -1)), Pe = [
  Re
], Ae = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: pe,
  alt: ""
}, null, -1)), Le = [
  Ae
], Ie = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: ve,
  alt: ""
}, null, -1)), De = [
  Ie
], je = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: we,
  alt: ""
}, null, -1)), ze = [
  je
], Me = /* @__PURE__ */ u(() => /* @__PURE__ */ c("img", {
  src: fe,
  alt: ""
}, null, -1)), Be = [
  Me
], Ne = { class: "scene-list" }, Ge = ["onClick"], We = ["src"], Ye = { class: "label" }, Ue = ["autoplay", "loop", "volume"], $e = ["src"], Fe = {
  key: 3,
  class: "mouse-tip"
}, Ze = /* @__PURE__ */ ae('<div class="icon-wrap" data-v-d1dd2ed8><div class="left" data-v-d1dd2ed8><i class="iconfont zv-drop-down" data-v-d1dd2ed8></i></div><i class="iconfont zv-mouse" data-v-d1dd2ed8></i><div class="right" data-v-d1dd2ed8><i class="iconfont zv-drop-down" data-v-d1dd2ed8></i></div></div><p class="title" data-v-d1dd2ed8>左右拖动   更多精彩</p>', 2), Ke = [
  Ze
], qe = B({ name: "zv-scene-vr" }), lo = /* @__PURE__ */ B({
  ...qe,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {},
    isPreview: { type: Boolean },
    disableDrag: { type: Boolean }
  },
  emits: [
    "on-scene-loaded",
    "on-scene-scenechange",
    "on-scene-zooming",
    "on-scene-hotClick"
  ],
  setup(V, { emit: N }) {
    const o = V, b = N;
    S.parseEvents(o.useEvents, "on-page-loaded", null);
    const p = d(), v = d({ src: "", autoplay: !0, loop: !0, volume: 50 }), f = d(null), G = d(o.basicOption.default.firstScene), m = d(G.value), t = P(() => {
      try {
        return o.basicOption.scenes[m.value];
      } catch {
        return null;
      }
    }), C = {
      bylineLabel: "来自 %s",
      noPanoramaError: "未指定全景图像。",
      fileAccessError: "The file %s could not be accessed.",
      malformedURLError: "全景URL无法访问。",
      iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
      genericWebGLError: "您的浏览器没有显示此全景图所需的WebGL支持。",
      textureSizeError: "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
      unknownError: "未知错误。检查开发人员控制台。"
    }, W = () => {
      const e = o.basicOption;
      window.SHJSceneVrViewer = window.pannellum.viewer("panorama", {
        ...e,
        default: Object.assign(M(e.default), { firstScene: m.value }),
        strings: C
      });
    }, Y = () => {
      const e = () => {
        const r = document.getElementById("panorama-video-wrap");
        r.innerHTML = `
            <video
                id="panorama-video"
                autoplay
                class="video-js vjs-default-skin vr-scene vjs-big-play-centered"
                preload="none"
                style="width:100%;height:100%;"
                crossorigin="anonymous"
            >
            </video>
        `;
      };
      f.value && (f.value.dispose(), f.value = null, e()), f.value || e();
      const n = document.getElementById("panorama-video"), s = o.basicOption;
      if (f.value = window.videojs(n, {
        loop: !0,
        autoplay: !0,
        plugins: {
          pannellum: {
            ...o.basicOption,
            default: Object.assign(M(s.default), { firstScene: m.value }),
            strings: C
          }
        }
      }), window.SHJSceneVrViewer = f.value.pnlmViewer, t.value.sceneType === "video" && (n.src = t.value.panorama), t.value.sceneType === "hls")
        if (T.isSupported()) {
          const r = new T();
          r.loadSource(t.value.panorama), r.attachMedia(n), r.on(T.Events.MANIFEST_PARSED, () => {
            n.play();
          });
        } else n.canPlayType("application/vnd.apple.mpegurl") && (n.src = t.value.panorama);
    }, H = () => {
      if (window.pannellum && o.basicOption) {
        window.SHJSceneVrViewer && (window.SHJSceneVrViewer.destroy(), window.SHJSceneVrViewer = null), t.value.sceneType === "image" ? W() : Y();
        try {
          o.basicOption.scenes[window.SHJSceneVrViewer.getScene()] && (v.value = o.basicOption.default.audio, p.value && v.value && (window.SHJSceneVrViewer.audio = p, p.value.src = v.value.src, setTimeout(() => {
            p.value && (_.value = p.value.paused);
          }, 500)));
        } catch {
        }
        window.SHJSceneVrViewer.on("load", () => {
          b("on-scene-loaded", t.value), S.parseEvents(o.useEvents, "on-scene-loaded", t.value);
        }), !o.isPreview || o.basicOption.default.autoRotate === 0 ? window.SHJSceneVrViewer.stopAutoRotate() : window.SHJSceneVrViewer.startAutoRotate();
        try {
          window.SHJSceneVrViewer && async function() {
            for (const e in o.basicOption.scenes)
              Object.prototype.hasOwnProperty.call(o.basicOption.scenes, e) && o.basicOption.scenes[e].hotSpots.forEach(async (s) => {
                await setTimeout(() => {
                  s.draggable = !o.isPreview && !o.disableDrag, window.SHJSceneVrViewer.removeHotSpot(s.id, e), window.SHJSceneVrViewer.addHotSpot(s, e);
                }, 100);
              });
          }();
        } catch {
        }
        window.SHJSceneVrViewer.on("scenechange", (e) => {
          const n = document.getElementsByTagName("video");
          if (me(n) && n.length > 0 && n.forEach((s) => {
            s && s.pause();
          }), t.value) {
            const s = t.value.sceneType;
            m.value = e;
            const r = t.value.sceneType;
            setTimeout(() => {
              (r !== "image" || s !== "image" && r === "image") && H(), y.value = m.value, b("on-scene-scenechange", t.value), S.parseEvents(o.useEvents, "on-scene-scenechange", t.value);
            }), o.isPreview ? window.SHJSceneVrViewer.startAutoRotate() : window.SHJSceneVrViewer.stopAutoRotate();
          } else
            m.value = o.basicOption.default.firstScene, ce(() => {
              H(), b("on-scene-scenechange", t.value), S.parseEvents(o.useEvents, "on-scene-scenechange", t.value);
            });
        }), window.SHJSceneVrViewer.on("zoomchange", Se((e) => {
          b("on-scene-zooming", t.value), S.parseEvents(o.useEvents, "on-scene-zooming", t.value);
        }, 300)), window.SHJSceneVrViewer.on("hot-click", (e) => {
          b("on-scene-hotClick", e), S.parseEvents(o.useEvents, "on-scene-hotClick", e);
        });
      }
    }, y = d(o.basicOption.default.firstScene), U = P(() => {
      const e = [];
      if (o.basicOption) {
        const n = o.basicOption.scenes;
        for (const s in n)
          if (Object.prototype.hasOwnProperty.call(n, s)) {
            const r = n[s];
            e.push({ label: r.label, value: s, thumbnail: r.cover });
          }
      }
      return e.sort((n, s) => {
        const r = parseInt(n.value.replace("scene", "")), w = parseInt(s.value.replace("scene", ""));
        return r - w;
      });
    });
    te(() => o.basicOption.default, () => {
      o.isPreview ? window.SHJSceneVrViewer.startAutoRotate() : window.SHJSceneVrViewer.stopAutoRotate();
    }, { deep: !0 });
    const $ = (e) => {
      window.SHJSceneVrViewer && y.value !== e && (y.value = e, window.SHJSceneVrViewer.isLoaded() && (window.SHJSceneVrViewer.loadScene(e), o.isPreview ? window.SHJSceneVrViewer.startAutoRotate() : window.SHJSceneVrViewer.stopAutoRotate()));
    }, k = d(), h = d(!0), F = () => {
      h.value ? k.value.style.bottom = "-999px" : k.value.style.bottom = "80px", h.value = !h.value;
    };
    ne(() => {
      o.basicOption && (o.basicOption.default.controls === void 0 && (o.basicOption.default.controls = t.value.controls), o.basicOption.default.audio === void 0 && (o.basicOption.default.audio = t.value.audio)), H(), oe();
    });
    const Z = () => {
      window.SHJSceneVrViewer.setPitch(window.SHJSceneVrViewer.getPitch() + 10);
    }, K = () => {
      window.SHJSceneVrViewer.setPitch(window.SHJSceneVrViewer.getPitch() - 10);
    }, q = () => {
      window.SHJSceneVrViewer.setYaw(window.SHJSceneVrViewer.getYaw() - 10);
    }, Q = () => {
      window.SHJSceneVrViewer.setYaw(window.SHJSceneVrViewer.getYaw() + 10);
    }, X = () => {
      window.SHJSceneVrViewer.setHfov(window.SHJSceneVrViewer.getHfov() - 10);
    }, x = () => {
      window.SHJSceneVrViewer.setHfov(window.SHJSceneVrViewer.getHfov() + 10);
    }, _ = d(!1), R = (e) => {
      p.value && (e === "play" ? (p.value.play(), _.value = !1) : (p.value.pause(), _.value = !0));
    }, ee = () => {
      window.SHJSceneVrViewer.startAutoRotate();
    };
    let J;
    const g = d(!1), oe = () => {
      o.basicOption.default.controls ? g.value = o.basicOption.default.controls.mouseTipShow : g.value = !0, J && clearTimeout(J), J = setTimeout(() => {
        g.value = !1;
      }, 3500);
    };
    return (e, n) => {
      const s = A("el-tooltip"), r = A("el-scrollbar");
      return a(), i("div", Ve, [
        t.value ? (a(), i(L, { key: 0 }, [
          I(c("div", be, null, 512), [
            [D, t.value.sceneType === "image"]
          ]),
          I(c("div", he, null, 512), [
            [D, t.value.sceneType !== "image"]
          ])
        ], 64)) : l("", !0),
        e.basicOption.default.controls ? (a(), i("div", _e, [
          e.basicOption.default.controls.scene ? (a(), i("div", {
            key: 0,
            class: "btn-icon left",
            style: E({ borderColor: h.value ? "#ff7d00" : "#ffffff3d" }),
            onClick: F
          }, [
            j(s, { content: "场景选择" }, {
              default: z(() => [
                ye
              ]),
              _: 1
            })
          ], 4)) : l("", !0),
          e.basicOption.default.controls.left ? (a(), i("div", {
            key: 1,
            class: "btn-icon left",
            onClick: q
          }, Oe)) : l("", !0),
          e.basicOption.default.controls.right ? (a(), i("div", {
            key: 2,
            class: "btn-icon right",
            onClick: Q
          }, ke)) : l("", !0),
          e.basicOption.default.controls.top ? (a(), i("div", {
            key: 3,
            class: "btn-icon up",
            onClick: Z
          }, Ee)) : l("", !0),
          e.basicOption.default.controls.bottom ? (a(), i("div", {
            key: 4,
            class: "btn-icon down",
            onClick: K
          }, Ce)) : l("", !0),
          e.basicOption.default.controls.magnify ? (a(), i("div", {
            key: 5,
            class: "btn-icon",
            onClick: X
          }, Pe)) : l("", !0),
          e.basicOption.default.controls.shrink ? (a(), i("div", {
            key: 6,
            class: "btn-icon",
            onClick: x
          }, Le)) : l("", !0),
          _.value && v.value.src && e.basicOption.default.audio ? (a(), i("div", {
            key: 7,
            class: "btn-icon",
            onClick: n[0] || (n[0] = (w) => R("play"))
          }, De)) : l("", !0),
          !_.value && v.value.src && e.basicOption.default.audio ? (a(), i("div", {
            key: 8,
            class: "btn-icon",
            onClick: n[1] || (n[1] = (w) => R("pause"))
          }, ze)) : l("", !0),
          e.basicOption.default.controls.rotate ? (a(), i("div", {
            key: 9,
            class: "btn-icon",
            onClick: ee
          }, Be)) : l("", !0)
        ])) : l("", !0),
        e.basicOption.default.controls ? (a(), i("div", {
          key: 2,
          ref_key: "sceneMenuRef",
          ref: k,
          class: "scene-menu",
          style: E({ bottom: h.value && e.basicOption.default.controls.scene ? "80px" : "-9999999999999px" })
        }, [
          j(r, null, {
            default: z(() => [
              c("div", Ne, [
                (a(!0), i(L, null, se(U.value, (w) => (a(), i("div", {
                  key: w.value,
                  class: "scene-item",
                  style: E({ borderColor: y.value === w.value ? "#ff7d00" : "#fff" }),
                  onClick: (Qe) => $(w.value)
                }, [
                  c("img", {
                    class: "thumbnail",
                    src: w.thumbnail
                  }, null, 8, We),
                  c("p", Ye, ie(w.label), 1)
                ], 12, Ge))), 128))
              ])
            ]),
            _: 1
          })
        ], 4)) : l("", !0),
        c("audio", {
          ref_key: "audioRef",
          ref: p,
          autoplay: v.value.autoplay,
          loop: v.value.loop,
          volume: v.value.volume
        }, [
          c("source", {
            src: v.value.src
          }, null, 8, $e)
        ], 8, Ue),
        g.value ? (a(), i("div", Fe, Ke)) : l("", !0)
      ]);
    };
  }
});
export {
  lo as default
};
