import type { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare type RestResult<T> = {
    code: number;
    msg: string;
    data?: T;
};
export declare enum IContentType {
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded; charset=UTF-8",
    Json = "application/json; charset=UTF-8",
    Raw = "raw"
}
export declare class HttpRequest {
    instance: AxiosInstance;
    constructor();
    /**
     * GET 请求
     * @param url
     * @param config
     * @returns
     */
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<RestResult<T>>;
    /**
     * POST 请求
     * @param url 请求的URL
     * @param data 发送的数据
     * @param contentType 数据的内容类型
     * @param config 额外的Axios配置
     * @returns
     */
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig, contentType?: IContentType): Promise<RestResult<T>>;
    /**
     * PUT 请求
     * @param url
     * @param data
     * @param config
     * @returns
     */
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig, contentType?: IContentType): Promise<RestResult<T>>;
    /**
     * DELETE 请求
     * @param url
     * @param config
     * @returns
     */
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<RestResult<T>>;
    /**
     * 文件上传
     * @param url
     * @param params
     * @param config
     * @returns
     */
    upload<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<RestResult<T>>;
    /**
     * blob文件下载
     * @param url
     * @param params
     * @param config
     * @returns
     */
    download<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<RestResult<T>>;
    /**
     * Custom 请求
     * @param url
     * @param config
     * @returns
     */
    custom<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
