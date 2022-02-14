import { computePosition } from "rc-radial-menu/lib/utils";
import React from "react";

let angleExtent = 210;
let radius = 50;
let offset = 40;

function getRadial(num) {
    let array = [];
    for (let index = 0; index < num; index++) {
        array.push(computePosition(radius, angleExtent, offset, num, index));
    }
    return array;
}

export default function () {
    const [result] = React.useState(getRadial(4));

    return (
        <div>
            {result.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{index + 1}</div>
                        <div>
                            <span>x:</span>
                            <span>{item.x}</span>
                        </div>
                        <div>
                            <span>y:</span>
                            <span>{item.y}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
