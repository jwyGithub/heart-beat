export type FORMAT =
    | "yyyy-MM-dd hh:mm:ss"
    | "yyyy-MM-dd"
    | "hh:mm:ss"
    | "hh:mm"
    | "mm:ss"
    | "yyyy-MM"
    | "yyyy"
    | "MM"
    | "dd"
    | "hh"
    | "mm"
    | "ss"
    | "S";

/**
 * @description: 格式化时间
 * @param {Date} date
 * @param {FORMAT} fmt
 * @return {string}
 * @example formatTime(new Date(), 'yyyy-MM-dd hh:mm:ss')
 * @example formatTime(new Date(), 'yyyy-MM-dd')
 * @example formatTime(new Date(), 'hh:mm:ss')
 */
export const parseTime = (
    date: Date,
    fmt: FORMAT = "yyyy-MM-dd hh:mm:ss"
): string => {
    if (!(date instanceof Date)) return date;
    const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    } as { [key: string]: any };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        ) as FORMAT;
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length)
            ) as FORMAT;
        }
    }
    return fmt;
};

/**
 * @description: 获取时间差
 * @param startTime  开始时间
 * @param endTime  结束时间
 * @returns  { days, hours, minutes, seconds }
 */
export const diffTime = (
    startTime: Date,
    endTime: Date
): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
} => {
    const diff = endTime.getTime() - startTime.getTime();
    const days = Math.floor(diff / (24 * 3600 * 1000));
    const leave1 = diff % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));
    const leave2 = leave1 % (3600 * 1000);
    const minutes = Math.floor(leave2 / (60 * 1000));
    const leave3 = leave2 % (60 * 1000);
    const seconds = Math.round(leave3 / 1000);
    return { days, hours, minutes, seconds };
};
