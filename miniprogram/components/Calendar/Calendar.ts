// @ts-nocheck
import { parseTime, weekFormat, lunarDay } from '../../utils/date';

Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        _weeks: ['日', '一', '二', '三', '四', '五', '六'],
        _days: [],
        nowYear: '',
        nowMonth: '',
        nowDay: '',
        headerDate: ''
    },
    lifetimes: {
        attached() {
            this.setData({
                nowYear: parseTime(new Date(), 'yyyy'),
                nowMonth: parseTime(new Date(), 'MM'),
                nowDay: parseTime(new Date(), 'yyyy-MM-d'),
                headerDate: parseTime(new Date(), 'yyyy/MM/dd'),
                headerDay: parseTime(new Date(), 'd'),
                headerWeek: weekFormat(parseTime(new Date(), 'w')),
                _days: this.getDaysForMonth()
            });
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 获取当月所有日期
        getDaysForMonth(year, month) {
            year = year || new Date().getFullYear();
            month = month || new Date().getMonth() + 1;
            let days = [];
            const _count = this.calcWeekCount(this.getWeekForDay(year + '-' + month + '-' + 1));

            for (let i = 0; i < _count; i++) {
                days.push({
                    date: '',
                    week: '',
                    index: '',
                    isWeek: false
                });
            }
            for (let j = 1; j <= new Date(year, month, 0).getDate(); j++) {
                days.push({
                    date: j,
                    week: this.getWeekForDay(year + '-' + month + '-' + j),
                    lunarday: lunarDay(year, month, j),
                    index: j,
                    isWeek: this.isWeek(year + '-' + month + '-' + j)
                });
            }
            return days;
        },
        // 根据日获取所属星期
        getWeekForDay(dateString) {
            var dateArray = dateString.split('-');
            var date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
            return '周' + '日一二三四五六'.charAt(date.getDay());
        },
        isWeek(str) {
            return this.getWeekForDay(str) === '周六' || this.getWeekForDay(str) === '周日' ? '#ff9c9b' : '';
        },
        // 切换日期
        changeDate(e) {
            if (e.currentTarget.dataset.date) {
                this.setData({
                    nowDay: parseTime(new Date(`${this.data.nowYear}-${this.data.nowMonth}-${e.currentTarget.dataset.date}`), 'yyyy-MM-d')
                });
            }
            this.triggerEvent('changeDate', this.data.nowDay);
        },
        // 切换月
        preMonth(e) {
            if (this.data.nowMonth === '01') {
                this.setData({
                    nowYear: this.data.nowYear - 1,
                    nowMonth: '12',
                    _days: this.getDaysForMonth(this.data.nowYear - 1, 12)
                });
            } else {
                this.setData({
                    nowMonth: this.addZero(this.data.nowMonth - 1),
                    _days: this.getDaysForMonth(this.data.nowYear, this.data.nowMonth - 1)
                });
            }
        },
        nextMonth() {
            if (this.data.nowMonth === 12) {
                this.setData({
                    nowYear: Number(this.data.nowYear) + 1,
                    nowMonth: '01',
                    _days: this.getDaysForMonth(Number(this.data.nowYear) + 1, 1)
                });
            } else {
                this.setData({
                    nowMonth: this.addZero(Number(this.data.nowMonth) + 1),
                    _days: this.getDaysForMonth(this.data.nowYear, Number(this.data.nowMonth) + 1)
                });
            }
        },
        addZero(value) {
            return value <= 9 ? '0' + value : value;
        },
        calcWeekCount(str) {
            switch (str) {
                case '周一':
                    return 1;
                case '周二':
                    return 2;
                case '周三':
                    return 3;
                case '周四':
                    return 4;
                case '周五':
                    return 5;
                case '周六':
                    return 6;
                case '周日':
                    return 0;
                default:
                    break;
            }
        }
    }
});

