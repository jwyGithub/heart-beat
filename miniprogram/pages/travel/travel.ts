// pages/travel/travel.ts
import { ServeRecord, TravelDateRecord } from "../../global.config";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        journeys: [
            {
                name: "一起去樱花节",
                coverImage: ServeRecord.TRAVEL_SERVE + "/yh.jpeg",
                date: TravelDateRecord.YING_HUA,
                dateRange: "2023年03月18日 ~ 2023年03月19日",
            },
            {
                name: "一起去宏村",
                coverImage: ServeRecord.TRAVEL_SERVE + "/hc.jpeg",
                date: TravelDateRecord.HONG_CUN,
                dateRange: "2023年05月01日 ~ 2023年05月03日",
            },
            {
                name: "一起去西溪南",
                coverImage: ServeRecord.TRAVEL_SERVE + "/xxn.jpeg",
                date: TravelDateRecord.XI_XI_NAN,
                dateRange: "2023年05月01日 ~ 2023年05月03日",
            },
            {
                name: "一起去黄山",
                coverImage: ServeRecord.TRAVEL_SERVE + "/hs.jpeg",
                date: TravelDateRecord.HUANG_SHAN,
                dateRange: "2023年06月21日 ~ 2023年06月23日",
            },
            {
                name: "一起去西湖",
                coverImage: ServeRecord.TRAVEL_SERVE + "/xh.jpeg",
                date: TravelDateRecord.XI_HU,
                dateRange: "2023年06月23日 ~ 2023年06月23日",
            },
        ],
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
