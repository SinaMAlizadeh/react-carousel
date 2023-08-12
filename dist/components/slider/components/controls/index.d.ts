import React from "react";
import "./controls.style.scss";
interface ControlsProps {
    onGoRight: () => void;
    onGoLeft: () => void;
    leftArrow: React.ComponentType<any> | string | undefined;
    rightArrow: React.ComponentType<any> | string | undefined;
}
declare const Controls: ({ onGoRight, onGoLeft, leftArrow: LeftArrow, rightArrow: RightArrow, }: ControlsProps) => JSX.Element;
export default Controls;
