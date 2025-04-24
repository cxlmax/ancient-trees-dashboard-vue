import { cloneDeep as c, isEqual as o } from "lodash";
import { Color as d } from "three";
import { watch as n } from "vue";
import { createFloorRotateBorder as M } from "./map3d/module/FloorRotateBorder.mjs";
import { createFloorGridRipple as k } from "./map3d/module/FloorGridRipple.mjs";
import { createParticles as I } from "./map3d/module/Particles.mjs";
import { createAmbientLight as B, createDirectionalLight as x, createPointLight1 as z, createPointLight2 as w, createEnvironment as L } from "./map3d/module/Environment.mjs";
const C = (a, t, P, y, v) => {
  n(() => c(a.basicOption.map.depth), (e, i) => {
    try {
      !o(e, i) && t.value && v();
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.defaultMapAdcode), (e, i) => {
    try {
      !o(e, i) && t.value && v();
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.translateX), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        const r = a.basicOption.scene.translateX || 0, u = a.basicOption.scene.translateY || 0, l = a.basicOption.scene.translateZ || 0, g = a.basicOption.camera.position.x + r, m = a.basicOption.camera.position.y + u, b = a.basicOption.camera.position.z + l;
        t.value.camera.instance.position.set(g, m, b);
        const s = a.basicOption.camera.target;
        if (s) {
          const h = s[0] + r, f = s[1] + u, O = s[2] + l;
          t.value.camera.controls.target.set(h, f, O);
        }
      }
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.translateY), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        const r = a.basicOption.scene.translateX || 0, u = a.basicOption.scene.translateY || 0, l = a.basicOption.scene.translateZ || 0, g = a.basicOption.camera.position.x + r, m = a.basicOption.camera.position.y + u, b = a.basicOption.camera.position.z + l;
        t.value.camera.instance.position.set(g, m, b);
        const s = a.basicOption.camera.target;
        if (s) {
          const h = s[0] + r, f = s[1] + u, O = s[2] + l;
          t.value.camera.controls.target.set(h, f, O);
        }
      }
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.translateZ), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        const r = a.basicOption.scene.translateX || 0, u = a.basicOption.scene.translateY || 0, l = a.basicOption.scene.translateZ || 0, g = a.basicOption.camera.position.x + r, m = a.basicOption.camera.position.y + u, b = a.basicOption.camera.position.z + l;
        t.value.camera.instance.position.set(g, m, b);
        const s = a.basicOption.camera.target;
        if (s) {
          const h = s[0] + r, f = s[1] + u, O = s[2] + l;
          t.value.camera.controls.target.set(h, f, O);
        }
      }
    } catch {
    }
  }, {
    deep: !0
  }), a.basicOption.orbitControls && n(() => c(a.basicOption.orbitControls), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.camera.setControls(e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.z), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.scene.position.z = e);
    } catch {
    }
  }, {
    deep: !0
  }), a.basicOption.map.backgroundImg && (n(() => c(a.basicOption.map.backgroundImg.show), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.createMapBackgroundImg(!1);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.src), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMaterial && t.value.createMapBackgroundImg(!1);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.alphaMap), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMaterial && t.value.createMapBackgroundImg(!1);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.color), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMaterial && (t.value.mapBackgroundImgMaterial.color = new d(e));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.opacity), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMaterial && (t.value.mapBackgroundImgMaterial.opacity = e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.rotation), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMesh && (t.value.mapBackgroundImgMesh.rotation.x = e[0] * (Math.PI / 180), t.value.mapBackgroundImgMesh.rotation.y = e[1] * (Math.PI / 180), t.value.mapBackgroundImgMesh.rotation.z = e[2] * (Math.PI / 180));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.position), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMesh && (t.value.mapBackgroundImgMesh.position.x = e[0], t.value.mapBackgroundImgMesh.position.y = e[1], t.value.mapBackgroundImgMesh.position.z = e[2]);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.backgroundImg.scale), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.mapBackgroundImgMesh && (t.value.mapBackgroundImgMesh.scale.x = e[0], t.value.mapBackgroundImgMesh.scale.y = e[1], t.value.mapBackgroundImgMesh.scale.z = e[2]);
    } catch {
    }
  }, {
    deep: !0
  })), n(() => c(a.basicOption.scene.background), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.scene.background = new d(e));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.scene.isBackground), (e, i) => {
    try {
      !o(e, i) && t.value && (e ? t.value.scene.background = new d(a.basicOption.scene.background) : t.value.scene.background = null);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.lineColor), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.provinceLineMaterial.color = new d(e));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.mirrorShow), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.groundMirror.visible = e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.arealabel), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.setAreaLabelStyle(e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.titleLabel), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.setMapTitleLabelStyle(e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.topMaterial), async (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        let [r, u] = t.value.createProvinceMaterial(a.basicOption.map.topMaterial, a.basicOption.map.sideMaterial);
        t.value.areaMapTopMaterial = r, t.value.areaMapSideMaterial = u, t.value.provinceMesh.mapGroup.traverse((l) => {
          l.isMesh && (l.material[0] = r, l.material[1] = u);
        });
      }
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.sideMaterial), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        let [r, u] = t.value.createProvinceMaterial(a.basicOption.map.topMaterial, a.basicOption.map.sideMaterial);
        t.value.areaMapTopMaterial = r, t.value.areaMapSideMaterial = u, t.value.provinceMesh.mapGroup.traverse((l) => {
          l.isMesh && (l.material[0] = r, l.material[1] = u);
        });
      }
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.map.storkeAnimation), (e, i) => {
    try {
      !o(e, i) && t.value && t.value.createAreaMapStorke(e, !1);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.particle), (e, i) => {
    try {
      !o(e, i) && t.value && I(t.value, e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.floor.gaoguang), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.gaoguangMesh.visible = e.show, t.value.gaoguangMesh.material.color = new d(e.color));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.floor.quan), (e, i) => {
    try {
      !o(e, i) && t.value && (t.value.quan.visible = e.show, t.value.quan.material.color = new d(e.color));
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.floor.gridRipple), (e, i) => {
    try {
      !o(e, i) && t.value && k(t.value, e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.floor.rotateBorder), (e, i) => {
    try {
      !o(e, i) && t.value && M(t.value, e, !1);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.light.ambientLight), (e, i) => {
    try {
      !o(e, i) && t.value && B(t.value, e);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.light.directionalLight), (e, i) => {
    try {
      !o(e, i) && t.value && x(t.value, e, a.basicOption.debugger);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.light.pointLight1), (e, i) => {
    try {
      !o(e, i) && t.value && z(t.value, e, a.basicOption.debugger);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.light.pointLight2), (e, i) => {
    try {
      !o(e, i) && t.value && w(t.value, e, a.basicOption.debugger);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.debugger), (e, i) => {
    try {
      !o(e, i) && t.value && (L(t.value, a.basicOption.light, a.basicOption.debugger), t.value.mapBoxHelper.visible = a.basicOption.debugger, t.value.axesHelper.visible = a.basicOption.debugger);
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.camera.position), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        const r = a.basicOption.scene.translateX || 0, u = a.basicOption.scene.translateY || 0, l = a.basicOption.scene.translateZ || 0, g = a.basicOption.camera.position.x + r, m = a.basicOption.camera.position.y + u, b = a.basicOption.camera.position.z + l;
        t.value.camera.instance.position.set(g, m, b);
      }
    } catch {
    }
  }, {
    deep: !0
  }), a.basicOption.camera.target && n(() => c(a.basicOption.camera.target), (e, i) => {
    try {
      if (!o(e, i) && t.value) {
        const r = a.basicOption.scene.translateX || 0, u = a.basicOption.scene.translateY || 0, l = a.basicOption.scene.translateZ || 0, g = a.basicOption.camera.target;
        if (g) {
          const m = g[0] + r, b = g[1] + u, s = g[2] + l;
          t.value.camera.controls.target.set(m, b, s);
        }
      }
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.widgets.filter((e) => e.type === "bar")), (e, i) => {
    try {
      !o(e, i) && t.value && e.length === i.length && e.forEach((r) => {
        t.value.createBar(r, void 0, !1);
      });
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.widgets.filter((e) => e.type === "scatter")), (e, i) => {
    try {
      !o(e, i) && t.value && e.length === i.length && e.forEach((r) => {
        t.value.createScatter(r, void 0, !1);
      });
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.widgets.filter((e) => e.type === "flyline")), (e, i) => {
    try {
      !o(e, i) && t.value && e.length === i.length && e.forEach((r) => {
        t.value.createFlyLine(r, void 0, !1);
      });
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.basicOption.widgets.filter((e) => e.type === "regionalLevel")), (e, i) => {
    try {
      !o(e, i) && t.value && e.length === i.length && e.forEach((r) => {
        t.value.createRegionalLevel(r, void 0, !1);
      });
    } catch {
    }
  }, {
    deep: !0
  }), n(() => c(a.sources), (e, i) => {
    try {
      !o(e, i) && t.value && y(!1);
    } catch {
    }
  }, {
    deep: !0
  });
};
export {
  C as initWatch
};
