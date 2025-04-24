import { TextureLoader as d, Loader as h } from "three";
import { GLTFLoader as c } from "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { EventEmitter as l } from "./EventEmitter.mjs";
const n = {
  GLTFLoader: "GLTF",
  TextureLoader: "Texture",
  FontLoader: "Font",
  MMDLoader: "MMD",
  MTLLoader: "MTL",
  OBJLoader: "OBJ",
  PCDLoader: "PCD",
  FileLoader: "File",
  ImageLoader: "Image",
  ObjectLoader: "Object",
  MaterialLoader: "Material",
  CubeTextureLoader: "CubeTexture",
  RGBELoader: "RGBELoader",
  FBXLoader: "FBX"
}, u = Object.values(n);
class y extends l {
  constructor({ dracoPath: e } = {}) {
    super(), this.itemsLoaded = 0, this.itemsTotal = 0, this.assets = [], this.loaders = {}, this.initDefaultLoader();
  }
  /**
  * 默认加载GLTFLoader, TextureLoader
  */
  initDefaultLoader() {
    [
      { loader: c, name: "GLTFLoader" },
      { loader: d, name: "TextureLoader" }
    ].map((e) => this.addLoader(e.loader, e.name));
  }
  addLoader(e, t = "") {
    if (e.name && n[t]) {
      if (!this.loaders[t]) {
        const o = new e(this.manager), a = t;
        o instanceof h && (this.loaders[n[a]] = o);
      }
    } else
      throw new Error("请配置正确的加载器");
  }
  loadItem(e) {
    return new Promise((t, r) => {
      if (!this.loaders[e.type])
        throw new Error(`资源${e.path}没有配置加载器`);
      this.loaders[e.type].load(
        e.path,
        (o) => {
          this.itemsLoaded++, this.emit("onProgress", e.path, this.itemsLoaded, this.itemsTotal), t({ ...e, data: o });
        },
        null,
        (o) => {
          this.emit("onError", o), t({ ...e, data: null });
        }
      );
    });
  }
  loadAll(e) {
    return this.itemsLoaded = 0, this.itemsTotal = 0, new Promise((t, r) => {
      const o = this.matchType(e), a = [];
      this.itemsTotal = o.length, o.map((s) => {
        try {
          const i = this.loadItem(s);
          a.push(i);
        } catch {
        }
      }), Promise.all(a).then((s) => {
        this.assets = s, this.emit("onLoad"), t(s);
      }).catch((s) => {
        this.emit("onError", s), r(s);
      });
    });
  }
  matchType(e) {
    return this.assets = e.map((t) => ({
      type: u.includes(t.type) ? t.type : "",
      path: t.path,
      name: t.name,
      data: null
    })).filter((t) => {
      if (!t.type)
        throw new Error(`资源${t.path},type不正确`);
      return t.type;
    }), this.assets;
  }
  getResource(e) {
    const t = this.assets.find((r) => r.name === e);
    if (!t)
      throw new Error(`资源${e}不存在`);
    return t.data;
  }
  getResource3(e) {
    const t = this.assets.find((r) => r.name === e);
    if (!t)
      throw new Error(`资源${e}不存在`);
    return t;
  }
  getResource2(e, t) {
    const r = this.assets.find((o) => o.name === e);
    if (!r)
      throw new Error(`资源${e}不存在`);
    return t !== void 0 && r.path !== t && this.loadItem({ type: r.type, name: r.name, path: t }).then((o) => {
      r.data = o;
    }), r.data;
  }
  destroy() {
    this.off("onProgress"), this.off("onLoad"), this.off("onError"), this.assets = [];
  }
}
export {
  y as Resource
};
