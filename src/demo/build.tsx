import React from "react";
import RadialMenu from "rc-radial-menu";
import { Button } from "antd";
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
                    <Button shape="circle" type="primary">
                        A
                    </Button>
                }
                onClick={onClick}
            >
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<Button shape="circle">A</Button>}
                ></RadialMenu.Item>
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<Button shape="circle">B</Button>}
                ></RadialMenu.Item>
                <RadialMenu.Item
                    classNames="my-radial-menu-item"
                    content={<Button shape="circle">C</Button>}
                ></RadialMenu.Item>
            </RadialMenu.Item>
        </div>
    );
}
