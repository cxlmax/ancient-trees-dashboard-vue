import { defineComponent as I, watch as u, createElementBlock as ee, openBlock as ae, normalizeClass as te, unref as se, shallowRef as M, ref as h, onMounted as le, onUnmounted as re, createElementVNode as ne, pushScopeId as oe, popScopeId as ie } from "vue";
import ce from "@amap/amap-jsapi-loader";
import de from "axios";
import { nanoid as ue } from "nanoid";
import { debounce as w } from "lodash";
import { SHJDatasourceV2 as ye } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as y } from "../../commons/plugins/event/index.mjs";
const ge = (p) => (oe("data-v-49f67c20"), p = p(), ie(), p), me = /* @__PURE__ */ ge(() => /* @__PURE__ */ ne("div", {
  id: "zerov-amap-3d",
  class: "zerov-amap-container"
}, null, -1)), fe = [
  me
], ve = I({ name: "zv-scene-amap3d" }), Se = /* @__PURE__ */ I({
  ...ve,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: [
    "amap3d-scene-success",
    "amap3d-scene-zoomstart",
    "amap3d-scene-zoomend",
    "amap3d-scene-mapclick",
    "amap3d-scene-dragstart",
    "amap3d-scene-dragging",
    "amap3d-scene-dragend",
    "amap3d-scene-pulseLinkLayer"
  ],
  setup(p, { expose: A, emit: B }) {
    const l = p, g = B;
    y.parseEvents(l.useEvents, "on-page-loaded", null);
    const W = () => {
      const n = M(), c = M(), S = h(!1), b = h(), k = h(), z = h(), d = h(), C = (a) => {
        E(), window._AMapSecurityConfig = {
          securityJsCode: a.basic.securityJsCode
        }, ce.load({
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
          n.value = new e.Map("zerov-amap-3d", {
            rotateEnable: a.config.rotateEnable,
            // 是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标画圈移动
            pitchEnable: a.config.pitchEnable,
            // 是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标上下移动
            resizeEnable: a.config.resizeEnable,
            zoomEnable: a.config.zoomEnable,
            dragEnable: a.config.dragEnable,
            zoom: a.config.zoom,
            // 初始化地图层级
            viewMode: "3D",
            // 开启3D视图,默认为关闭
            zooms: a.config.zooms,
            // 地图显示的缩放级别范围
            center: a.config.center,
            // 初始地图中心经纬度
            mapStyle: a.config.mapStyle,
            features: a.config.features,
            pitch: a.config.pitch,
            // 0-83
            rotation: a.config.rotation,
            // 0-360
            wallColor: a.config.floors.wallColor,
            roofColor: a.config.floors.roofColor,
            skyColor: a.config.skyColor,
            layers: [s]
          }), c.value = new window.Loca.Container({
            map: n.value
          }), z.value = new d.value.Scale({
            visible: a.config.plugin.scale.visible,
            position: {
              left: a.config.plugin.scale.position.left + "px",
              bottom: a.config.plugin.scale.position.bottom + "px"
            }
          }), n.value.addControl(z.value), b.value = new e.ControlBar({
            visible: a.config.plugin.controlBar.visible,
            showControlButton: a.config.plugin.controlBar.showControlButton,
            position: {
              right: a.config.plugin.controlBar.position.right + "px",
              top: a.config.plugin.controlBar.position.top + "px"
            }
          }), n.value.addControl(b.value), k.value = new e.ToolBar({
            visible: a.config.plugin.toolBar.visible,
            position: {
              left: a.config.plugin.toolBar.position.left + "px",
              top: a.config.plugin.toolBar.position.top + "px"
            }
          }), n.value.addControl(k.value), L(e), n.value.on("complete", () => {
            setTimeout(() => {
              S.value = !0, g("amap3d-scene-success"), y.parseEvents(l.useEvents, "amap3d-scene-success", null);
            }, 666);
          }), n.value.on("zoomstart", () => {
            g("amap3d-scene-zoomstart"), y.parseEvents(l.useEvents, "amap3d-scene-zoomstart", null);
          }), n.value.on("zoomend", () => {
            g("amap3d-scene-zoomend"), y.parseEvents(l.useEvents, "amap3d-scene-zoomend", null);
          }), n.value.on("click", (t) => {
            g("amap3d-scene-mapclick", t.lnglat), y.parseEvents(l.useEvents, "amap3d-scene-mapclick", t.lnglat);
          }), n.value.on("dragstart", (t) => {
            g("amap3d-scene-dragstart", t.lnglat), y.parseEvents(l.useEvents, "amap3d-scene-dragstart", t.lnglat);
          }), n.value.on("dragend", (t) => {
            g("amap3d-scene-dragend", t.lnglat), y.parseEvents(l.useEvents, "amap3d-scene-dragend", t.lnglat);
          });
        }).catch((e) => {
        });
      }, L = w((a) => {
        l.sources && l.sources.length > 0 ? ye.parse({
          tId: l.uuid,
          sources: l.sources,
          callback: (s) => {
            try {
              const t = l.basicOption.widgets.find((r) => r._sourceId === s.id);
              t && t.type === "heatmap" && G(window.Loca, t, v(s.data[0].data, "Point")), t && t.type === "dotlayers" && H(window.Loca, t, v(s.data[0].data, "Point")), t && t.type === "scatter" && Z(window.Loca, t, v(s.data[0].data, "Point")), t && t.type === "labelsLayer" && R(window.Loca, t, v(s.data[0].data, "Point")), t && t.type === "signagePoints" && j(window.Loca, t, v(s.data[0].data, "Point")), t && t.type === "pulseLinkLayer" && V(window.Loca, t, v(s.data[0].data, "LineString"));
            } catch {
            }
            l.basicOption.widgets.filter((t) => t.type === "boundary").forEach((t) => {
              O(a, t);
            });
          }
        }) : l.basicOption.widgets.filter((s) => s.type === "boundary").forEach((s) => {
          O(a, s);
        });
        const e = n.value.getLayers();
        for (let s = 0; s < e.length; s++)
          (e[s].type === "sketchTileLayer" || e[s]._opts.type === "sketchImageLayer") && n.value.removeLayer(e[s]);
        l.basicOption.widgets.filter((s) => s.type === "sketchTile").forEach((s) => {
          const t = F(s);
          t && n.value.addLayer(t);
        }), l.basicOption.widgets.filter((s) => s.type === "sketchImage").forEach((s) => {
          const t = N(s);
          n.value.addLayer(t);
        });
      }, 200), T = (a) => {
        const s = a.slice(a.indexOf("(") + 1, a.lastIndexOf(")")).split(",").map((r) => r.trim()), t = {};
        for (let r = 1; r < s.length; r++) {
          const i = s[r].split(" "), o = i[0], m = parseFloat(i[1]) / 100, Y = Math.round(m * 100) / 100;
          t[Y] = o;
        }
        return t;
      }, F = (a) => {
        try {
          return new d.value.TileLayer({
            bounds: new d.value.Bounds(
              a.bounds[0],
              a.bounds[1]
            ),
            getTileUrl: function(s, t, r) {
              try {
                return a.url.replace("{z}", r).replace("{x}", s).replace("{y}", t);
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
      }, N = (a) => {
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
          const t = new a.HeatMapLayer({
            zIndex: 10,
            opacity: e.opacity,
            visible: !0,
            zooms: [2, 22]
          }), r = new a.GeoJSONSource({
            data: s
          });
          t.setSource(r, {
            radius: e.style.radius,
            unit: e.style.unit,
            height: e.style.height,
            opacity: e.style.opacity,
            gradient: T(e.style.gradient),
            value: function(i, o) {
              return o.coordinates[2] || 0;
            },
            min: e.style.min,
            max: e.style.max,
            // 4.6
            heightBezier: [0, 0.53, 0.37, 0.98]
          }), c.value.add(t);
        } catch {
        }
      }, O = async (a, e) => {
        try {
          const s = await de.get(e.geojson);
          if (s.status === 200) {
            const t = new a.GeoJSON({
              geoJSON: s.data,
              getPolygon: function(r, i) {
                const o = new a.Polygon({
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
                return o.on("mouseover", () => {
                  o.setOptions({
                    fillOpacity: e.mouseover.fillOpacity,
                    fillColor: e.mouseover.fillColor,
                    strokeOpacity: e.mouseover.strokeOpacity,
                    strokeColor: e.mouseover.strokeColor,
                    strokeStyle: e.mouseover.strokeStyle,
                    strokeWeight: e.mouseover.strokeWeight
                  });
                }), o.on("mouseout", () => {
                  o.setOptions({
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
                }), o;
              }
            });
            n.value.add(t);
          }
        } catch {
        }
      }, H = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), r = new a.PointLayer({
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
          r.setSource(t), r.setStyle(i), c.value.add(r), r.addAnimate({
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
          }), r = new a.ScatterLayer({
            loca: c.value,
            zIndex: e.zIndex,
            opacity: e.opacity,
            visible: e.visible,
            zooms: e.zooms
          });
          r.setSource(t), r.setStyle({
            unit: e.style.unit,
            size: e.style.size,
            borderWidth: e.style.borderWidth,
            texture: e.style.texture,
            duration: e.style.duration,
            animate: e.style.animate
          }), c.value.animate.start();
        } catch {
        }
      }, R = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), r = new a.LabelsLayer({
            eventSupport: !0,
            visible: e.visible,
            zooms: e.zooms,
            opacity: e.opacity,
            collision: e.collision,
            allowCollision: e.allowCollision,
            zIndex: e.zIndex
          });
          r.setSource(t), r.setStyle({
            icon: {
              image: e.icon.image,
              size: e.icon.size,
              clipOrigin: e.icon.clipOrigin,
              offset: e.icon.offset,
              anchor: e.icon.anchor
            },
            text: {
              // 每项配置都可使用回调函数来动态配置
              content: (i, o) => o.properties[e.text.content],
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
          }), r.on("complete", () => {
            const i = r.getLabelsLayer().getAllOverlays();
            for (const o of i)
              o.on("click", (m) => {
              }), o.on("mouseover", (m) => {
              }), o.on("mouseout", (m) => {
              });
          }), c.value.add(r);
        } catch {
        }
      }, j = (a, e, s) => {
        try {
          const t = new a.GeoJSONSource({
            data: s
          }), r = new a.ZMarkerLayer({
            zIndex: e.signs.zIndex,
            visible: e.signs.visible,
            zooms: e.signs.zooms,
            opacity: e.signs.opacity,
            depth: !1
          });
          r.setSource(t), r.setStyle({
            content: (o, m) => `<div style="
                                width: ${e.signs.style.width}px; 
                                height: ${e.signs.style.height + 148}px;
                            ">
                            <p style="
                                display: block;
                                height:${e.signs.style.height}px;
                                background-image:${e.signs.style.background};
                                border:${e.signs.style.borderWidth}px ${e.signs.style.borderStyle} ${e.signs.style.borderColor};
                                border-radius: ${e.signs.style.borderRadius}px;
                                line-height:${e.signs.style.lineHeight}px;
                                text-align:${e.signs.style.textAlign};
                                font-size:${e.signs.style.fontSize}px;
                                color:${e.signs.style.fillColor};
                                margin:0;
                            ">
                                ${m.properties.name}
                            </p>
                        </div>`,
            unit: e.signs.style.unit,
            rotation: e.signs.style.rotation,
            alwaysFront: e.signs.style.alwaysFront,
            size: [e.signs.style.width, e.signs.style.height + 148],
            altitude: e.signs.style.altitude
          }), c.value.add(r);
          const i = new a.ZMarkerLayer({
            zIndex: e.landmark.zIndex,
            visible: e.landmark.visible,
            zooms: e.landmark.zooms,
            opacity: e.landmark.opacity,
            depth: !1
          });
          i.setSource(t), i.setStyle({
            content: (o, m) => `<div style="
                            width: ${e.landmark.style.size[0]}px;
                            height: ${e.landmark.style.size[1]}px;
                            background: url(${e.landmark.style.image});
                            background-size:contain;
                        ">
                        </div>`,
            unit: e.landmark.style.unit,
            rotation: e.landmark.style.rotation,
            alwaysFront: e.landmark.style.alwaysFront,
            size: e.landmark.style.size,
            altitude: e.landmark.style.altitude
          }), i.addAnimate({
            key: "altitude",
            value: [0, 1],
            random: e.landmark.animate.random,
            duration: e.landmark.animate.duration,
            transform: e.landmark.animate.transform,
            delay: e.landmark.animate.delay,
            yoyo: e.landmark.animate.yoyo,
            repeat: e.landmark.animate.repeat
          }), c.value.add(i), c.value.animate.start();
        } catch {
        }
      }, V = (a, e, s) => {
        const t = new a.PulseLinkLayer({
          zIndex: e.zIndex,
          opacity: e.opacity,
          visible: e.visible,
          zooms: e.zooms,
          depth: e.depth
        }), r = new a.GeoJSONSource({
          data: s
        });
        t.setSource(r), t.setStyle({
          unit: e.style.unit,
          dash: [4e4, 0, 4e4, 0],
          lineWidth: e.style.lineWidth,
          height: function(i, o) {
            return o.distance / 3 + e.style.height;
          },
          // altitude: 1000,
          smoothSteps: 30,
          speed: function(i, o) {
            return 1e5 + Math.random() * e.style.speed;
          },
          flowLength: e.style.flowLength,
          lineColors: e.style.lineColors,
          maxHeightScale: e.style.maxHeightScale,
          // 弧顶位置比例
          headColor: e.style.headColor,
          trailColor: e.style.trailColor
        }), n.value.on("click", (i) => {
          const o = t.queryFeature(i.pixel.toArray());
          o && (g("amap3d-scene-pulseLinkLayer", o), y.parseEvents(l.useEvents, "amap3d-scene-pulseLinkLayer", o));
        }), c.value.add(t), c.value.animate.start();
      }, v = (a, e) => {
        const s = {
          type: "FeatureCollection",
          features: []
        };
        return a.forEach((t, r) => {
          const i = {
            type: "Feature",
            id: ue(),
            properties: {
              type: e === "Point" ? e : 0,
              ...t
            },
            geometry: {
              type: e,
              coordinates: t.value
            }
          };
          s.features.push(i);
        }), s;
      }, U = (a) => {
        n.value.setFeatures(a.config.features), n.value.setPitch(a.config.pitch), n.value.setRotation(a.config.rotation), n.value.setStatus({
          dragEnable: a.config.dragEnable,
          zoomEnable: a.config.zoomEnable,
          rotateEnable: a.config.rotateEnable,
          pitchEnable: a.config.pitchEnable
        }), a.config.plugin.scale.visible ? z.value.show() : z.value.hide(), a.config.plugin.toolBar.visible ? k.value.show() : k.value.hide(), a.config.plugin.controlBar.visible ? b.value.show() : b.value.hide();
      }, q = () => {
        n.value.clearMap(), c.value.clear(), L(d.value);
      }, K = (a) => {
        n.value.setMapStyle(a.config.mapStyle);
      }, Q = (a) => {
        n.value.setZoom(a.config.zoom, !1, 200);
      }, X = (a) => {
        n.value.setCenter(a.config.center, !1, 200);
      }, E = () => {
        n.value && (n.value.clearMap(), n.value.destroy(), n.value = null, c.value && (c.value.clear(), c.value.destroy(), c.value = null));
      };
      return le(() => {
        setTimeout(() => {
          C(l.basicOption);
        }, 0);
      }), re(() => E()), {
        initAMap3d: C,
        updateAMapStyle: K,
        updateAMapConfig: U,
        updateAMapComponents: q,
        updateAMapZoom: Q,
        updateAMapCenter: X,
        amap3d: n,
        loading: S,
        AMapPrototype: d
      };
    }, {
      initAMap3d: f,
      updateAMapStyle: P,
      updateAMapConfig: x,
      updateAMapComponents: _,
      updateAMapZoom: $,
      updateAMapCenter: J,
      loading: D
    } = W();
    return u(() => l.basicOption.config, () => {
      x(l.basicOption);
    }, { deep: !0 }), u(() => l.basicOption.config.zoom, () => {
      $(l.basicOption);
    }, { deep: !0 }), u(() => l.basicOption.config.center, () => {
      J(l.basicOption);
    }, { deep: !0 }), u(() => l.basicOption.config.floors, w(() => {
      f(l.basicOption);
    }, 300), { deep: !0 }), u(() => l.basicOption.config.skyColor, w(() => {
      f(l.basicOption);
    }, 300), { deep: !0 }), u(() => l.basicOption.widgets, () => {
      _();
    }, { deep: !0 }), u(() => l.basicOption.config.mapStyle, () => {
      P(l.basicOption);
    }, { deep: !0 }), u(() => l.basicOption.basic, () => {
      f(l.basicOption);
    }, { deep: !0 }), u(() => l.sources, () => {
      f(l.basicOption);
    }, { deep: !0 }), A({
      refresh: () => f(l.basicOption),
      refreshView: () => x(l.basicOption),
      refreshData: () => f(l.basicOption)
    }), (n, c) => (ae(), ee("div", {
      class: te(["amap-3d-wrap", { show: se(D) }])
    }, fe, 2));
  }
});
export {
  Se as default
};
