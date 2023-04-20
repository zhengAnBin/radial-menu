import React from "react";
import RadialMenu from "rc-radial-menu";

import "./style.css";

export default function () {
    // content 可以放置如何你想要的组件，它是 ReactNode 类型的
    const onClick = (data) => {
        console.log(data);
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <RadialMenu.Item
                classNames="my-radial-menu-root"
                isRoot
                content={
                    <button>
                        A
                    </button>
                }
                onClick={onClick}
            >
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<button>A</button>}
                ></RadialMenu.Item>
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<button>B</button>}
                ></RadialMenu.Item>
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<button>C</button>}
                ></RadialMenu.Item>
            </RadialMenu.Item>
        </div>
    );
}
