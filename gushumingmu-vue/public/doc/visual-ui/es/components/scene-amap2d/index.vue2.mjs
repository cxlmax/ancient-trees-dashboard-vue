import { defineComponent as M, watch as u, createElementBlock as X, openBlock as Y, normalizeClass as $, unref as ee, shallowRef as E, ref as g, onMounted as ae, onUnmounted as te, createElementVNode as se, pushScopeId as oe, popScopeId as re } from "vue";
import le from "@amap/amap-jsapi-loader";
import ne from "axios";
import { nanoid as ce } from "nanoid";
import { SHJDatasourceV2 as ie } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as y } from "../../commons/plugins/event/index.mjs";
const de = (p) => (oe("data-v-1a9e6290"), p = p(), re(), p), ue = /* @__PURE__ */ de(() => /* @__PURE__ */ se("div", {
  id: "zerov-amap-2d",
  class: "zerov-amap-container"
}, null, -1)), ye = [
  ue
], me = M({ name: "zv-scene-amap2d" }), ze = /* @__PURE__ */ M({
  ...me,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: [
    "amap2d-scene-success",
    "amap2d-scene-zoomstart",
    "amap2d-scene-zoomend",
    "amap2d-scene-mapclick",
    "amap2d-scene-dragstart",
    "amap2d-scene-dragging",
    "amap2d-scene-dragend"
  ],
  setup(p, { expose: I, emit: A }) {
    const o = p, m = A;
    y.parseEvents(o.useEvents, "on-page-loaded", null);
    const B = () => {
      const r = E(), c = E(), C = g(!1), v = g(), b = g(), h = g(), d = g(), S = (a) => {
        L(), window._AMapSecurityConfig = {
          securityJsCode: a.basic.securityJsCode
        }, le.load({
          key: a.basic.key,
          // 申请好的Web端开发者Key，首次调用 load 时必填
          version: "2.0",
          // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          Loca: {
            version: "2.0.0"
          },
          plugins: ["AMap.ControlBar", "AMap.ToolBar", "AMap.Scale", "AMap.HeatMap", "AMap.GeoJSON", "AMap.ImageLayer", "AMap.TileLayer"]
        }).then((e) => {
          d.value = e;
          const s = new d.value.createDefaultLayer({
            visible: !0,
            // 是否可见
            opacity: 1,
            // 透明度
            zIndex: 0
            // 叠加层级
          });
          r.value = new e.Map("zerov-amap-2d", {
            rotateEnable: a.config.rotateEnable,
            // 是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标画圈移动
            pitchEnable: a.config.pitchEnable,
            // 是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标上下移动
            zoomEnable: a.config.zoomEnable,
            dragEnable: a.config.dragEnable,
            zoom: a.config.zoom,
            // 初始化地图层级
            viewMode: "2D",
            // 开启3D视图,默认为关闭
            zooms: a.config.zooms,
            // 地图显示的缩放级别范围
            center: a.config.center,
            // 初始地图中心经纬度
            mapStyle: a.config.mapStyle,
            features: a.config.features,
            layers: [s]
          }), c.value = new window.Loca.Container({
            map: r.value
          }), h.value = new d.value.Scale({
            visible: a.config.plugin.scale.visible,
            position: {
              left: a.config.plugin.scale.position.left + "px",
              bottom: a.config.plugin.scale.position.bottom + "px"
            }
          }), r.value.addControl(h.value), v.value = new e.ControlBar({
            visible: a.config.plugin.controlBar.visible,
            showControlButton: a.config.plugin.controlBar.showControlButton,
            position: {
              right: a.config.plugin.controlBar.position.right + "px",
              top: a.config.plugin.controlBar.position.top + "px"
            }
          }), r.value.addControl(v.value), b.value = new e.ToolBar({
            visible: a.config.plugin.toolBar.visible,
            position: {
              left: a.config.plugin.toolBar.position.left + "px",
              top: a.config.plugin.toolBar.position.top + "px"
            }
          }), r.value.addControl(b.value), x(e), r.value.on("complete", () => {
            setTimeout(() => {
              C.value = !0, m("amap2d-scene-success"), y.parseEvents(o.useEvents, "amap2d-scene-success", null);
            }, 666);
          }), r.value.on("zoomstart", () => {
            m("amap2d-scene-zoomstart"), y.parseEvents(o.useEvents, "amap2d-scene-zoomstart", null);
          }), r.value.on("zoomend", () => {
            m("amap2d-scene-zoomend"), y.parseEvents(o.useEvents, "amap2d-scene-zoomend", null);
          }), r.value.on("click", (t) => {
            m("amap2d-scene-mapclick", t.lnglat), y.parseEvents(o.useEvents, "amap2d-scene-mapclick", t.lnglat);
          }), r.value.on("dragstart", (t) => {
            m("amap2d-scene-dragstart", t.lnglat), y.parseEvents(o.useEvents, "amap2d-scene-dragstart", t.lnglat);
          }), r.value.on("dragend", (t) => {
            m("amap2d-scene-dragend", t.lnglat), y.parseEvents(o.useEvents, "amap2d-scene-dragend", t.lnglat);
          });
        }).catch((e) => {
        });
      }, x = (a) => {
        o.sources && o.sources.length > 0 ? ie.parse({
          tId: o.uuid,
          sources: o.sources,
          callback: (s) => {
            try {
              const t = o.basicOption.widgets.find((l) => l._sourceId === s.id);
              t && t.type === "heatmap" && G(a, t, s.data[0].data), t && t.type === "dotlayers" && H(window.Loca, t, k(s.data[0].data)), t && t.type === "scatter" && Z(window.Loca, t, k(s.data[0].data)), t && t.type === "labelsLayer" && j(window.Loca, t, k(s.data[0].data));
            } catch {
            }
            o.basicOption.widgets.filter((t) => t.type === "boundary").forEach((t) => {
              O(a, t);
            });
          }
        }) : o.basicOption.widgets.filter((s) => s.type === "boundary").forEach((s) => {
          O(a, s);
        });
        const e = r.value.getLayers();
        for (let s = 0; s < e.length; s++)
          (e[s].type === "sketchTileLayer" || e[s]._opts.type === "sketchImageLayer") && r.value.removeLayer(e[s]);
        o.basicOption.widgets.filter((s) => s.type === "sketchTile").forEach((s) => {
          const t = N(s);
          t && r.value.addLayer(t);
        }), o.basicOption.widgets.filter((s) => s.type === "sketchImage").forEach((s) => {
          const t = F(s);
          r.value.addLayer(t);
        });
      }, P = (a) => {
        const s = a.slice(a.indexOf("(") + 1, a.lastIndexOf(")")).split(",").map((l) => l.trim()), t = {};
        for (let l = 1; l < s.length; l++) {
          const i = s[l].split(" "), n = i[0], z = parseFloat(i[1]) / 100, Q = Math.round(z * 100) / 100;
          t[Q] = n;
        }
        return t;
      }, N = (a) => {
        try {
          return new d.value.TileLayer({
            bounds: new d.value.Bounds(
              a.bounds[0],
              a.bounds[1]
            ),
            getTileUrl: function(s, t, l) {
              try {
                return a.url.replace("{z}", l).replace("{x}", s).replace("{y}", t);
              } catch {
              }
            },
            type: "sketchTileLayer",
            tileSize: a.tileSize,
            opacity: a.opacity,
            zIndex: a.zIndex,
            zooms: a.zooms
          });
        } catch {
        }
        return null;
      }, F = (a) => {
        try {
          return new d.value.ImageLayer({
            bounds: new d.value.Bounds(
              a.bounds[0],
              // 左下  手绘图左下相对于地图的经纬度
              a.bounds[1]
              // 右上  手绘图右上相对于地图的经纬度
            ),
            type: "sketchImageLayer",
            opacity: a.opacity,
            url: a.url,
            zIndex: a.zIndex,
            zooms: a.zooms
            // 设置可见级别，[最小级别，最大级别]
          });
        } catch {
        }
        return null;
      }, G = (a, e, s) => {
        try {
          const t = new a.HeatMap(r.value, {
            radius: e.radius,
            // 给定半径
            opacity: e.opacity,
            gradient: P(e.gradient)
          });
          setTimeout(() => {
            t.setDataSet({
              data: s,
              max: e.max
            });
          }, 0);
        } catch {
        }
      }, O = async (a, e) => {
        try {
          const s = await ne.get(e.geojson);
          if (s.status === 200) {
            const t = new a.GeoJSON({
              geoJSON: s.data,
              getPolygon: function(l, i) {
                const n = new a.Polygon({
                  path: i,
                  zIndex: e.zIndex,
                  fillColor: e.style.fillColor,
                  // 填充色
                  strokeOpacity: e.style.strokeOpacity,
                  // 轮廓线透明度
                  fillOpacity: e.style.fillOpacity,
                  // 填充色透明度
                  strokeColor: e.style.strokeColor,
                  // 线条颜色
                  strokeWeight: e.style.strokeWeight,
                  // 线条宽度
                  strokeStyle: e.style.strokeStyle
                  // 线条样式
                });
                return n.on("mouseover", () => {
                  n.setOptions({
                    fillOpacity: e.mouseover.fillOpacity,
                    fillColor: e.mouseover.fillColor,
                    strokeOpacity: e.mouseover.strokeOpacity,
                    strokeColor: e.mouseover.strokeColor,
                    strokeStyle: e.mouseover.strokeStyle,
                    strokeWeight: e.mouseover.strokeWeight
                  });
                }), n.on("mouseout", () => {
                  n.setOptions({
                    fillColor: e.style.fillColor,
                    // 填充色
                    strokeOpacity: e.style.strokeOpacity,
                    // 轮廓线透明度
                    fillOpacity: e.style.fillOpacity,
                    // 填充色透明度
                    strokeColor: e.style.strokeColor,
                    // 线条颜色
                    strokeWeight: e.style.strokeWeight,
                    // 线条宽度
                    strokeStyle: e.style.strokeStyle
                    // 线条样式
                  });
                }), n;
              }
            });
            r.value.add(t);
          }
        } catch {
        }
      }, H = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), l = new a.PointLayer({
            zIndex: e.zIndex,
            blend: e.blend,
            visible: e.visible,
            opacity: e.opacity
          }), i = {
            radius: e.style.radius,
            unit: e.style.unit,
            color: e.style.color,
            borderWidth: e.style.borderWidth,
            blurWidth: e.style.blurWidth,
            borderColor: e.style.borderColor
          };
          l.setSource(t), l.setStyle(i), c.value.add(l), l.addAnimate({
            key: e.animate.key,
            value: e.animate.value,
            duration: e.animate.duration,
            easing: e.animate.easing,
            transform: e.animate.transform,
            random: e.animate.random,
            delay: e.animate.delay,
            yoyo: e.animate.yoyo,
            repeat: e.animate.repeat
          });
        } catch {
        }
      }, Z = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), l = new a.ScatterLayer({
            loca: c.value,
            zIndex: e.zIndex,
            opacity: e.opacity,
            visible: e.visible,
            zooms: e.zooms
          });
          l.setSource(t), l.setStyle({
            unit: e.style.unit,
            size: e.style.size,
            borderWidth: e.style.borderWidth,
            texture: e.style.texture,
            duration: e.style.duration,
            animate: e.style.animate
          }), c.value.animate.start();
        } catch {
        }
      }, j = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), l = new a.LabelsLayer({
            eventSupport: !0,
            visible: e.visible,
            zooms: e.zooms,
            opacity: e.opacity,
            collision: e.collision,
            allowCollision: e.allowCollision,
            zIndex: e.zIndex
          });
          l.setSource(t), l.setStyle({
            icon: {
              image: e.icon.image,
              size: e.icon.size,
              clipOrigin: e.icon.clipOrigin,
              offset: e.icon.offset,
              anchor: e.icon.anchor
            },
            text: {
              // 每项配置都可使用回调函数来动态配置
              content: (i, n) => n.properties[e.text.content],
              zooms: e.text.zooms,
              offset: e.text.offset,
              direction: e.text.direction,
              style: {
                fontSize: e.text.style.fontSize,
                fillColor: e.text.style.fillColor,
                strokeColor: e.text.style.strokeColor,
                strokeWidth: e.text.style.strokeWidth,
                padding: e.text.style.padding,
                backgroundColor: e.text.style.backgroundColor,
                borderColor: e.text.style.borderColor,
                borderWidth: e.text.style.borderWidth,
                fold: e.text.style.fold,
                fontWeight: e.text.style.fontWeight
              }
            }
          }), l.on("complete", () => {
            const i = l.getLabelsLayer().getAllOverlays();
            for (const n of i)
              n.on("click", (z) => {
              }), n.on("mouseover", (z) => {
              }), n.on("mouseout", (z) => {
              });
          }), c.value.add(l);
        } catch {
        }
      }, k = (a) => {
        const e = {
          type: "FeatureCollection",
          features: []
        };
        return a.forEach((s, t) => {
          const l = {
            type: "Feature",
            id: ce(),
            properties: {
              name: s.name || "",
              _draw_type: "point"
            },
            geometry: {
              type: "Point",
              coordinates: s.value
            }
          };
          e.features.push(l);
        }), e;
      }, R = (a) => {
        r.value.setFeatures(a.config.features), r.value.setStatus({
          dragEnable: a.config.dragEnable,
          zoomEnable: a.config.zoomEnable,
          rotateEnable: a.config.rotateEnable
        }), a.config.plugin.scale.visible ? h.value.show() : h.value.hide(), a.config.plugin.toolBar.visible ? b.value.show() : b.value.hide(), a.config.plugin.controlBar.visible ? v.value.show() : v.value.hide();
      }, V = () => {
        r.value.clearMap(), c.value.clear(), x(d.value);
      }, U = (a) => {
        r.value.setMapStyle(a.config.mapStyle);
      }, q = (a) => {
        r.value.setZoom(a.config.zoom, !1, 200);
      }, K = (a) => {
        r.value.setCenter(a.config.center, !1, 200);
      }, L = () => {
        r.value && (r.value.clearMap(), r.value.destroy(), r.value = null, c.value && (c.value.clear(), c.value.destroy(), c.value = null));
      };
      return ae(() => {
        setTimeout(() => {
          S(o.basicOption);
        }, 0);
      }), te(() => L()), {
        initAMap2d: S,
        updateAMapStyle: U,
        updateAMapConfig: R,
        updateAMapComponents: V,
        updateAMapZoom: q,
        updateAMapCenter: K,
        amap2d: r,
        loading: C,
        AMapPrototype: d
      };
    }, {
      initAMap2d: f,
      updateAMapStyle: W,
      updateAMapConfig: w,
      updateAMapComponents: _,
      updateAMapZoom: D,
      updateAMapCenter: T,
      loading: J
    } = B();
    return u(() => o.basicOption.config, () => {
      w(o.basicOption);
    }, { deep: !0 }), u(() => o.basicOption.config.zoom, () => {
      D(o.basicOption);
    }, { deep: !0 }), u(() => o.basicOption.config.center, () => {
      T(o.basicOption);
    }, { deep: !0 }), u(() => o.basicOption.widgets, () => {
      _();
    }, { deep: !0 }), u(() => o.basicOption.config.mapStyle, () => {
      W(o.basicOption);
    }, { deep: !0 }), u(() => o.basicOption.basic, () => {
      f(o.basicOption);
    }, { deep: !0 }), u(() => o.sources, () => {
      f(o.basicOption);
    }, { deep: !0 }), I({
      refresh: () => f(o.basicOption),
      refreshView: () => w(o.basicOption),
      refreshData: () => f(o.basicOption)
    }), (r, c) => (Y(), X("div", {
      class: $(["amap-2d-wrap", { show: ee(J) }])
    }, ye, 2));
  }
});
export {
  ze as default
};
