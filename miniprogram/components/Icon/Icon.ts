Component({
    // 此设置使外部样式可以影响组件样式
    options: {
        addGlobalClass: true,
    },

    properties: {
        // 字体图标名称
        name: {
            type: String,
        },
        size: {
            type: String,
            value: "14",
        },
        color: {
            type: String,
            value: "#fff",
        },
    },
});
