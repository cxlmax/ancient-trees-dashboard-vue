import { Resource } from '../mini3d/index.js';
export declare class Assets {
    private res;
    instance: Resource;
    onLoadCallback: any;
    constructor(onLoadCallback: any, res: any);
    init(): void;
}
