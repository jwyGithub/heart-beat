// pages/home/home.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        activeTabIndex: 0,
        tabs: [
            {
                name: "我们",
                icon: "../../assets/images/home/we-transformed.png",
                type: "we",
                component: "We",
            },
        ],
    },

    onClickTab(event: any) {
        const dataIndex = event.currentTarget.dataset.index;
        this.setData({
            activeTabIndex: dataIndex,
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
});
