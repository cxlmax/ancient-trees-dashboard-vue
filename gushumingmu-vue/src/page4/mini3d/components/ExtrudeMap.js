import {
  Mesh,
  Vector2,
  Vector3,
  Color,
  Group,
  Object3D,
  BufferAttribute,
  RepeatWrapping,
  Shape,
  ExtrudeGeometry,
  MeshBasicMaterial,
  DoubleSide,
  MeshLambertMaterial,
  AdditiveBlending,
  MultiplyBlending,
  MeshStandardMaterial,
} from "three";
import { transfromMapGeoJSON } from "@/page4/mini3d";
import { geoMercator } from "d3-geo";
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils'
export class ExtrudeMap {
  constructor({ assets, time }, config = {}) {
    this.mapGroup = new Group();
    this.assets = assets;
    this.time = time;
    this.coordinates = [];
    this.config = Object.assign(
      {
        position: new Vector3(0, 0, 0),
        geoProjectionCenter: new Vector2(0, 0),
        geoProjectionScale: 120,
        data: "",
        renderOrder: 1,
        merge:false,
        topFaceMaterial: new MeshBasicMaterial({
          color: 0x18263b,
          transparent: true,
          opacity: 1,
        }),
        sideMaterial: new MeshBasicMaterial({
          color: 0x07152b,
          transparent: true,
          opacity: 1,
        }),
        depth: 0.1,
      },
      config
    );
    this.mapGroup.position.copy(this.config.position);

    let mapData = transfromMapGeoJSON(this.config.data);
    this.create(mapData);
  }
  geoProjection(args) {
    return geoMercator()
      .center(this.config.geoProjectionCenter)
      .scale(this.config.geoProjectionScale)
      .translate([0, 0])(args);
  }
  create(mapData) {
    let geometries = []
    mapData.features.forEach((feature) => {
      const group = new Object3D();

      let { name, center = [], centroid = [] } = feature.properties;
      this.coordinates.push({ name, center, centroid });

      const extrudeSettings = {
        depth: this.config.depth,
        bevelEnabled: true,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let materials = [this.config.topFaceMaterial, this.config.sideMaterial];
      feature.geometry.coordinates.forEach((multiPolygon) => {
        multiPolygon.forEach((polygon, index) => {
          const shape = new Shape();
          for (let i = 0; i < polygon.length; i++) {
            if (!polygon[i][0] || !polygon[i][1]) {
              return false;
            }
            const [x, y] = this.geoProjection(polygon[i]);
            if (i === 0) {
              shape.moveTo(x, -y);
            }
            shape.lineTo(x, -y);
          }
          const geometry = new ExtrudeGeometry(shape, extrudeSettings);
          if(this.config.merge){
            geometries.push(geometry)
          }else{
            const mesh = new Mesh(geometry, materials);
            group.add(mesh);
          }
        });
      });
      if(!this.config.merge){
        this.mapGroup.add(group);
      }
      
    });
    if(this.config.merge){
      const mergedGeometry= mergeGeometries(geometries, true)
      this.config.sideMaterial.onBeforeCompile = shader=>{
        shader.uniforms = {
          ...shader.uniforms,
          topColor:{
            value:new Color(0x2bc4dc)
          }
        }
        shader.vertexShader = shader.vertexShader.replace(
          "void main() {",
          `
                  varying vec3 vPosition;
                  void main() {
                    vPosition = position;
                `
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          "void main() {",
          `
                  varying vec3 vPosition;
                  uniform vec3 topColor;
                  void main() {
                `
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <opaque_fragment>",
          /* glsl */ `
                diffuseColor.a = 1.0;
                
                if(vPosition.z>${this.config.depth+0.1-0.01}){
                  outgoingLight = topColor;
                }
                gl_FragColor = vec4( outgoingLight, diffuseColor.a);
                `
        )
      }
      const mesh = new Mesh(mergedGeometry, this.config.sideMaterial)
      this.mapGroup.add(mesh);
    }
   
    
    // console.log(JSON.stringify(this.coordinates));
  }

  getCoordinates() {
    return this.coordinates;
  }
  setParent(parent) {
    parent.add(this.mapGroup);
  }
}
