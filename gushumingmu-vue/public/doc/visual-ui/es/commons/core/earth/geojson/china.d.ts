declare const _default: {
    type: string;
    name: string;
    features: ({
        type: string;
        properties: {
            adcode: string;
            name: string;
            center: number[];
            centroid: number[];
            childrenNum: number;
            level: string;
            parent: {
                adcode: number;
            };
            subFeatureIndex: number;
            acroutes: number[];
            adchar?: undefined;
        };
        geometry: {
            type: string;
            coordinates: number[][][][];
        };
    } | {
        type: string;
        properties: {
            adcode: string;
            name: string;
            center: number[];
            childrenNum: number;
            level: string;
            parent: {
                adcode: number;
            };
            subFeatureIndex: number;
            acroutes: number[];
            centroid?: undefined;
            adchar?: undefined;
        };
        geometry: {
            type: string;
            coordinates: number[][][][];
        };
    } | {
        type: string;
        properties: {
            adcode: string;
            name: string;
            center: number[];
            centroid: number[];
            childrenNum: number;
            level: string;
            parent: {
                adcode: number;
            };
            subFeatureIndex: number;
            acroutes: number[];
            adchar?: undefined;
        };
        geometry: {
            type: string;
            coordinates: number[][][];
        };
    } | {
        type: string;
        properties: {
            adcode: string;
            name: string;
            adchar: string;
            center?: undefined;
            centroid?: undefined;
            childrenNum?: undefined;
            level?: undefined;
            parent?: undefined;
            subFeatureIndex?: undefined;
            acroutes?: undefined;
        };
        geometry: {
            type: string;
            coordinates: number[][][][];
        };
    })[];
};
export default _default;
