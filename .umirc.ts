export default {
    title: "εΎεθε",
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
