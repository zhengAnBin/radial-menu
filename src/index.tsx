import React from "react";
import cn from "classnames";
import { RadialMenuItem } from "./item";
import type { RadialMenuItemProps } from "./item";
import "./style.css";

export type onClickFn = (
    data: { id: any; type: "parent" | "child"; isRoot: boolean },
    e: React.MouseEvent
) => void;

export type radialMenuDataType = {
    key?: any;
    id?: any;
    children?: radialMenuDataType[];
} & RadialMenuItemProps;

interface RadialMenuProps {
    radialMenuData?: radialMenuDataType;
    onClick?: onClickFn;
    classNames?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    defaultOpenKeys?: any[];
}

class RadialMenu extends React.Component<RadialMenuProps> {
    static Item = RadialMenuItem;

    renderRadialMenuRoot(data): React.ReactNode {
        const { children, ...other } = data;
        return (
            <RadialMenuItem {...other} isRoot onClick={this.props.onClick}>
                {this.renderRadialMenuData(children)}
            </RadialMenuItem>
        );
    }

    renderRadialMenuData(data): React.ReactNode {
        if (Array.isArray(data)) {
            return data.map((child) => {
                let { children, ...other } = child;
                if (Array.isArray(children) && children.length) {
                    return (
                        <RadialMenuItem {...other} key={other.key} onClick={this.props.onClick}>
                            {this.renderRadialMenuData(children)}
                        </RadialMenuItem>
                    );
                } else {
                    return (
                        <RadialMenuItem
                            {...other}
                            key={other.key}
                            onClick={this.props.onClick}
                        ></RadialMenuItem>
                    );
                }
            });
        }
    }

    setDefaultOpenKeys() {
        // 设置默认打开
    }

    render(): React.ReactNode {
        const { classNames, style, radialMenuData } = this.props;

        let children: React.ReactNode;
        // 判断是否使用json数据做为渲染源
        if (radialMenuData) {
            children = this.renderRadialMenuRoot(radialMenuData);
        }

        return (
            <div className={cn("radial-menu", classNames)} style={style}>
                {children}
            </div>
        );
    }
}

export { RadialMenuProps };

export default RadialMenu;
