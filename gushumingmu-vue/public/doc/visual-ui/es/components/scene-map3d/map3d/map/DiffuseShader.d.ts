export declare class DiffuseShader {
    pointShader: any;
    time: any;
    options: {
        size: number;
        diffuseSpeed: number;
        diffuseColor: number;
        diffuseWidth: number;
        diffuseDir: number;
    } & {
        material: any;
        size: any;
        diffuseColor: any;
        diffuseSpeed: any;
        diffuseWidth: any;
        diffuseDir: any;
    };
    constructor({ material, time, size, diffuseColor, diffuseSpeed, diffuseWidth, diffuseDir }: {
        material: any;
        time: any;
        size: any;
        diffuseColor: any;
        diffuseSpeed: any;
        diffuseWidth: any;
        diffuseDir: any;
    });
    init(): void;
}
