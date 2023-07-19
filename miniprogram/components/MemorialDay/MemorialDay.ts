import { KNOW_DATE, LOVE_START } from "../../global.config";
import { parseTime, diffTime } from "../../utils/date";
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        timer: 0,
        cards: {
            know: { title: "已经认识", value: "" },
            with: { title: "在一起", value: "" },
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateDate() {
            const nowDate = new Date();
            const knowDate = new Date(KNOW_DATE);
            const withDate = new Date(LOVE_START);
            const knowValue = diffTime(knowDate, nowDate);
            const withDay = diffTime(withDate, nowDate);

            this.setData({
                cards: {
                    know: {
                        title: "已经认识",
                        value: `${knowValue.days}天${knowValue.hours}时${knowValue.minutes}分${knowValue.seconds}秒`,
                    },
                    with: {
                        title: "在一起",
                        value: `${withDay.days}天${withDay.hours}时${withDay.minutes}分${withDay.seconds}秒`,
                    },
                },
            });
        },
    },

    lifetimes: {
        created() {
            this.updateDate();
            this.data.timer = setInterval(() => {
                this.updateDate();
            }, 1000);
        },

        detached() {
            clearInterval(this.data.timer);
        },
    },
});
