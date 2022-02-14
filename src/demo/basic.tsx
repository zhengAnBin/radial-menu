import React from "react";
import RadialMenu, { radialMenuDataType } from "rc-radial-menu";

const radialData: radialMenuDataType = {
    content: 1,
    // 通过调整 angleExtent 和 radius 的大小来控制布局
    angleExtent: 100,
    radius: 100,
    id: 1,
    key: "1-1",
    children: [
        { content: 2, id: 2, key: "1-2" },
        { content: 3, id: 3, key: "1-3" },
        {
            content: 4,
            id: 4,
            key: "1-4",
        },
    ],
};

export default function () {
    const onClick = (data, e) => {
        console.log(data, e);
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <RadialMenu radialMenuData={radialData} onClick={onClick} />
        </div>
    );
}
