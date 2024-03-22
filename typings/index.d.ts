/// <reference path="./types/index.d.ts" />

interface IAppOption {
    globalData: {
        userInfo?: WechatMiniprogram.UserInfo;
    };
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

type ObjectKey = {
    [key: string]: any;
};

type IObjectKeys<T extends object = {}> = T extends ObjectKey ? ObjectKey : T;

