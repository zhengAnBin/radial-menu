// 一圈最大的度数
const CIRCLE_ANGLE = 360;

type Postions = {
    x: number;
    y: number;
};

// 规范化角度范围
const formatAngle = (angleExtent) => {
    if (angleExtent) {
        return angleExtent > CIRCLE_ANGLE || angleExtent < -CIRCLE_ANGLE
            ? CIRCLE_ANGLE
            : angleExtent;
    }
    return CIRCLE_ANGLE;
};

// 计算子元素的位置
export const computePosition = (
    radius: number,
    angleExtent: number,
    offset: number,
    total: number,
    index: number
): Postions => {
    const maxAngle = formatAngle(angleExtent);
    // 处理子元素只有一个的情况
    const numSubMenu = total - 1 || 1;
    const frags = maxAngle / numSubMenu;
    let angles = (Math.PI * (frags * index + offset)) / 180;
    return {
        x: Math.cos(angles) * radius,
        y: Math.sin(angles) * radius,
    };
};
