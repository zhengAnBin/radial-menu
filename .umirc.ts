export default {
    title: "径向菜单",
    base: "/radial-menu",
    publicPath: "/radial-menu/",
    exportStatic: {},
    extraBabelPlugins: [
        [
            "import",
            {
                libraryName: "antd",
                libraryDirectory: "es",
                style: true,
            },
        ],
    ],
    mode: "site",
    resolve: {
        includes: ["docs"],
    },
    menus: {
        "/": [{ title: "Home", path: "index" }],
    },
};
