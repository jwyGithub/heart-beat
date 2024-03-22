export type Method = WechatMiniprogram.RequestOption["method"];

/**
 * @description 格式化
 * @param params 请求参数
 * @returns
 */
export function parseQuery(params: IObjectKeys): string {
    return Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join("&");
}

export interface IRequetOption {
    url: string;
    method?: Method;
    header?: WechatMiniprogram.RequestOption["header"];
    params?: IObjectKeys;
    data?: IObjectKeys;
}

export function request<
    Response extends string | WechatMiniprogram.IAnyObject | ArrayBuffer
>(options: IRequetOption) {
    const { url, params = {}, data = {}, header, method = "GET" } = options;
    return new Promise<Response>((resolve, reject) => {
        wx.request<Response>({
            url: `${url}?${parseQuery(params)}`,
            method,
            data,
            header,
            success: (res) => resolve(res.data),
            fail: (err) => reject(err),
        });
    });
}

export function getHeader(options: IRequetOption) {
    const { url, params = {}, data = {}, header, method = "GET" } = options;
    const headerMap = new Map<string, string>();
    return new Promise<Map<string, string>>((resolve, reject) => {
        wx.request({
            url: `${url}?${parseQuery(params)}`,
            method,
            data,
            header,
            success: (res) => {
                const header = res.header;
                Object.keys(header).forEach((key: string) => {
                    headerMap.set(key, header[key]);
                });
                resolve(headerMap);
            },
            fail: (err) => reject(err),
        });
    });
}
