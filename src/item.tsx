import React from "react";
import cn from "classnames";
import { onClickFn } from "./index";
import { computePosition } from "./utils";

export interface RadialMenuItemProps {
    defaultOpen?: boolean;
    status?: "open" | "close";
    // 是否为root节点
    isRoot?: boolean;
    classNames?: string;
    content?: React.ReactNode;
    onClick?: onClickFn;
    id?: any;
    /** 计算后的坐标位置 */
    x?: number;
    y?: number;
    /** 计算前所需要的属性 */
    /** 角度范围 angleExtent < 360 || angleExtent > -360  */
    angleExtent?: number;
    /** 半径 */
    radius?: number;
    /** 起始偏移量 */
    offset?: number;
    children?: React.ReactNode;
}

// 关闭时的style
let closeStyle: React.CSSProperties = {
    position: "absolute",
    // 隐藏元素
    visibility: "hidden",
    left: "0",
    top: "0",
};

type Status = "open" | "close";

// 只接收计算后的数据、做UI渲染
// 可以变化为 root 节点
export const RadialMenuItem: React.FC<RadialMenuItemProps> = (props) => {
    const {
        isRoot,
        classNames,
        content,
        children,
        onClick: onClickProps,
        id,
        x,
        y,
        angleExtent,
        radius,
        offset,
        defaultOpen,
        status: statusProps,
    } = props;

    const domRef = React.useRef<HTMLDivElement>(null);

    const [status, setStatus] = React.useState<Status>(defaultOpen ? "open" : "close");

    // 展开时的style
    const [openStyle, setOpenStyle] = React.useState<React.CSSProperties>({});

    const open = () => {
        setStatus("open");
    };

    const close = () => {
        setStatus("close");
    };

    const onClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClickProps) {
            onClickProps(
                {
                    id,
                    isRoot: !!isRoot,
                    type:
                        children && Array.isArray(children) && children.length ? "parent" : "child",
                },
                e
            );
        }

        if (status === "close") {
            open();
        }

        if (status === "open") {
            close();
        }
    };

    const genStyle = (): React.CSSProperties => {
        if (!isRoot) {
            if (statusProps === "open") {
                return openStyle;
            }

            if (statusProps === "close") {
                return closeStyle;
            }
        }

        return {};
    };

    const radialMenuItemClasses = cn(classNames, {
        ["radial-menu-item"]: !isRoot,
        ["radial-menu-root"]: isRoot,
    });

    // 判断是否存在子元素
    const rerenderChildren = (): React.ReactNode => {
        if (children && Array.isArray(children)) {
            let len = children.length;
            return React.Children.map(children, (child, index) => {
                if (child) {
                    // 将根组件的onClick传递到每个子组件上
                    let props = {};
                    if (isRoot) {
                        props["onClick"] = onClickProps;
                    }
                    return React.cloneElement(child, {
                        ...computePosition(radius, angleExtent, offset, len, index),
                        status: status,
                        ...child.props,
                        ...props,
                    });
                }
            });
        } else {
            return children;
        }
    };

    React.useEffect(() => {
        if (typeof x !== "number" || typeof y !== "number") return;
        if (domRef.current) {
            let { height } = domRef.current.getBoundingClientRect();
            setOpenStyle({
                left: -x,
                top: -y - height,
                position: "absolute",
            });
        }
    }, [x, y]);

    return (
        <div className={radialMenuItemClasses} ref={domRef} style={genStyle()} onClick={onClick}>
            <div>{content}</div>
            <div>{rerenderChildren()}</div>
        </div>
    );
};

RadialMenuItem.defaultProps = {
    offset: 0,
    radius: 50,
};
