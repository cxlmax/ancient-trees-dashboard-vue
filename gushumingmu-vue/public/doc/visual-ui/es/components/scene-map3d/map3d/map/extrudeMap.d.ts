import { Group, LineLoop, BufferGeometry } from 'three';
export declare class ExtrudeMap {
    coordinates: any;
    config: any;
    mapGroup: Group;
    assets: any;
    depth: any;
    time: any;
    constructor({ assets, time, depth }: {
        assets: any;
        time: any;
        depth: any;
    }, config?: {});
    create(mapData: any): void;
    createLine(points: any): LineLoop<BufferGeometry, any>;
    geoProjection: (args: any) => any;
    getCoordinates(): any;
    setParent(parent: any): void;
}
