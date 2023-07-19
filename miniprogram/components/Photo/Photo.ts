const photos = [];

for (let i = 1; i <= 38; i++) {
    photos.push({
        src: `https://cdn.jsdelivr.net/gh/jwyGithub/images-github/heartbeat/${i}.jpeg`,
        content: "",
        date: "2023-06-21",
        show: false,
    });
}

let _observer: WechatMiniprogram.IntersectionObserver;
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        list: photos,
        crossAxisCount: 2,
        crossAxisGap: 8,
        mainAxisGap: 8,
        _observer: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {},

    lifetimes: {
        attached() {
            _observer = wx.createIntersectionObserver(this, {
                observeAll: true,
            });
            _observer.relativeToViewport().observe(".grid-box", (res) => {
                const index = res.dataset.index;
                let list = this.data.list;
                if (res.intersectionRatio > 0) {
                    list[index].show = true;
                }

                this.setData({
                    list,
                });
            });
        },
        detached() {
            _observer.disconnect();
        },
    },
});
