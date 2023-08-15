/**
 * @description 日期记录
 * @export
 * @class DateRecord
 * @description 2023-03-18 相识
 * @description 2023-06-11 相恋
 */
export class DateRecord {
    /**
     * @description 相识
     * @type {string}
     * @memberof DateRecord
     */
    static KNOW_DATE: string = "2023-03-18";

    /**
     * @description 相恋
     * @type {string}
     * @memberof DateRecord
     */
    static LOVE_DATE: string = "2023-06-11";
}

/**
 * @description 旅程记录
 * @export
 * @class TravelRecord
 * @description 2023-03-18 樱花
 * @description 2023-05-01 宏村
 * @description 2023-05-03 西溪南
 * @description 2023-06-21 黄山
 */
export class TravelDateRecord {
    /**
     * @description 樱花
     * @type {string}
     * @memberof TravelRecord
     */
    static YING_HUA: string = "2023-03-18";

    /**
     * @description 宏村
     * @type {string}
     * @memberof TravelRecord
     */
    static HONG_CUN: string = "2023-05-01";

    /**
     * @description 西溪南
     * @type {string}
     * @memberof TravelRecord
     */
    static XI_XI_NAN: string = "2023-05-03";

    /**
     * @description  黄山
     * @type {string}
     * @memberof TravelRecord
     */
    static HUANG_SHAN: string = "2023-06-21";

    /**
     * @description  西湖
     * @type {string}
     * @memberof TravelRecord
     */
    static XI_HU: string = "2023-06-23";
}

/**
 * @description 服务记录
 * @export
 * @class ServeRecord
 * @description https://xui.vpsdomain.tk:20228/heartBeat
 * @description https://xui.vpsdomain.tk:20228/heartBeat/images
 * @description https://xui.vpsdomain.tk:20228/heartBeat/travel
 */
export class ServeRecord {
    /**
     * @description 基础服务路径
     * @type {string}
     * @memberof ServeRecord
     * @description https://xui.vpsdomain.tk:20228/heartBeat
     */
    static BASE_SERVE: string = "https://xui.vpsdomain.tk:20228/heartBeat";

    /**
     * @description 旅程图片服务路径
     * @type {string}
     * @memberof ServeRecord
     * @description https://xui.vpsdomain.tk:20228/heartBeat/travel
     */
    static TRAVEL_SERVE: string = ServeRecord.BASE_SERVE + "/travel";
}
