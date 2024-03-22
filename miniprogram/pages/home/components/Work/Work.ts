import { request, getHeader } from "../../../../apis/index";
const GET_JESSIONID_URL = (token: string) =>
    `https://crm.51lx.com/system/security/noLogin?token=${token}&redirect=${encodeURIComponent(
        "/brand/alliance/list"
    )}`;

const GET_DUPLICATE_CHECK_URL = () =>
    `https://crm.51lx.com/brand/alliance/recheckingPhone?97`;

const WECHAT_SEARCH = () => `https://crm.51lx.com/custom/searchWechat?74`;

const isPhone = (phone: string) => /^1[3-9]\d{9}$/.test(phone);
export interface IDuplicateCheckBody {
    sso_token: string;
    telephone: string;
}

export interface IGetTokenResult {
    code: number;
    message: string;
    result: string;
    total?: number;
}

async function getToken(sso_token: IDuplicateCheckBody["sso_token"]) {
    return await request<IGetTokenResult>({
        url:
            "https://server-erp.51lx.com/fornow/system/redirect/record/getToken",
        header: {
            "Fornow-Sso-Token": sso_token,
        },
    });
}

async function getJeessionId(token: string) {
    const jsessionidReg = /JSESSIONID=([^;]+)/;

    const header = await getHeader({ url: GET_JESSIONID_URL(token) });
    const cookie = header.get("Set-Cookie");
    if (!cookie) {
        throw new Error("cookie is null");
    }
    const jsessionid = cookie.match(jsessionidReg)?.[1] ?? null;
    if (!jsessionid) {
        throw new Error("jsessionid is null");
    }
    return jsessionid;
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {},

    pageLifetimes: {
        async show() {
            const sso_token =
                "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImJmMDc2OWNlLWViNjEtNDgyNi1hOTEzLTM0YzU4ZDAyYTM2NCJ9.l5E_ifxeGxXwaw7MN_geUafvUppNMXFRtO6-30hZNETd7Nj6UELfV53IXJCvgXvTbRrEo8rRDyFUrNbXDtQvYA";

            const telephone = "15252866412";

            const resultToken = await getToken(sso_token);
            const jsessionid = await getJeessionId(resultToken.result);
            const url = isPhone(telephone)
                ? GET_DUPLICATE_CHECK_URL()
                : WECHAT_SEARCH();
            const body = isPhone(telephone)
                ? { telephone }
                : { searchWechat: telephone };

            // 3. duplicate check
            const result = await request({
                url,
                method: "POST",
                data: body,
                header: {
                    Cookie: `JSESSIONID=${jsessionid}`,
                    "Connext-Type": "application/json;charset=UTF-8",
                },
            });

            console.log(result);
        },
    },
});
