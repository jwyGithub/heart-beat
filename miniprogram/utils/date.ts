import calendar from './lunarDay';

export type FORMAT =
    | 'yyyy-MM-dd hh:mm:ss'
    | 'yyyy年MM月dd日'
    | 'yyyy-MM-dd'
    | 'yyyy/MM/dd'
    | 'hh:mm:ss'
    | 'hh:mm'
    | 'mm:ss'
    | 'yyyy-MM'
    | 'yyyy'
    | 'MM'
    | 'dd'
    | 'd'
    | 'hh'
    | 'mm'
    | 'ss'
    | 'S';

/**
 * @description: 格式化时间
 * @param {Date} date
 * @param {FORMAT} fmt
 * @return {string}
 * @example formatTime(new Date(), 'yyyy-MM-dd hh:mm:ss')
 * @example formatTime(new Date(), 'yyyy-MM-dd')
 * @example formatTime(new Date(), 'hh:mm:ss')
 */
export const parseTime = (date: Date, fmt: FORMAT = 'yyyy-MM-dd hh:mm:ss'): string => {
    if (!(date instanceof Date)) return date;
    const o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    } as { [key: string]: any };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) as FORMAT;
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)) as FORMAT;
        }
    }
    return fmt;
};

export interface IDiffTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type DiffTime = (startTime: Date, endTime: Date) => IDiffTime;

/**
 * @description: 获取时间差
 * @param startTime  开始时间
 * @param endTime  结束时间
 * @returns  { days, hours, minutes, seconds }
 */
export const diffTime: DiffTime = (startTime, endTime): IDiffTime => {
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

/**
 * @description 格式化时间差
 * @param options DiffTime
 * @returns
 */
export const prettierTime = (options: ReturnType<DiffTime>) => {
    return `${options.days}天${options.hours}时${options.minutes}分${options.seconds}秒`;
};

export const weekFormat = (value: string) => {
    const weekMap = new Map();
    weekMap.set('0', '周日');
    weekMap.set('1', '周一');
    weekMap.set('2', '周二');
    weekMap.set('3', '周三');
    weekMap.set('4', '周四');
    weekMap.set('5', '周五');
    weekMap.set('6', '周六');
    return weekMap.get(value);
};

export const lunarDay = (solarYear: number, solarMonth: number, solarDay: number) => {
    solarYear = solarYear || new Date().getFullYear();
    solarMonth = solarMonth || new Date().getMonth() + 1;
    solarDay = solarDay || new Date().getDate();
    const result = calendar.solar2lunar(solarYear, solarMonth, solarDay);
    // @ts-ignore
    return result.IDayCn;
};

