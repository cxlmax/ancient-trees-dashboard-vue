declare class WebSocketManager {
    private static instance;
    private connections;
    static getInstance(): WebSocketManager;
    add(ws: WebSocket, componentId: string): void;
    closeByComponentIds(componentIds: string | string[]): void;
    private removeAllListeners;
    closeAll(): void;
    private setupAutoRemove;
    getConnectionsInfo(): {
        componentId: string;
        readyState: number;
    }[];
}
export declare const wsManager: WebSocketManager;
export {};
