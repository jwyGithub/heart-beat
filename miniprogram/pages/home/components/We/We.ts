import { DateRecord } from "../../../../global.config";
import { parseTime, diffTime } from "../../../../utils/date";
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
        be_together_date: parseTime(
            new Date(DateRecord.LOVE_DATE),
            "yyyy年MM月dd日"
        ),
        be_together: { day: 0, hour: 0, min: 0, sec: 0 },

        tools: [
            {
                toolName: "恋爱旅程",
                icon: "../../../../assets/images/we/travel-transparent.png",
                toPage: "../../pages/travel/travel",
            },
            {
                toolName: "恋爱清单",
                icon: "../../../../assets/images/we/note-transparent.jpg",
                toPage: "",
            },
            {
                toolName: "合照大头",
                icon: "../../../../assets/images/we/photo-transparent.png",
                toPage: "",
            },
        ],
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

    /**
     * 组件的方法列表
     */
    methods: {
        updateDate() {
            const nowDate = new Date();
            const withDate = new Date(DateRecord.LOVE_DATE);
            const withDay = diffTime(withDate, nowDate);

            this.setData({
                be_together: {
                    day: withDay.days,
                    hour: withDay.hours,
                    min: withDay.minutes,
                    sec: withDay.seconds,
                },
            });
        },

        onClickTool(event: WechatMiniprogram.TouchEvent) {
            const toPage = event.currentTarget.dataset.item.toPage;
            if (toPage) {
                wx.navigateTo({
                    url: toPage,
                });
            }
        },
    },
});
