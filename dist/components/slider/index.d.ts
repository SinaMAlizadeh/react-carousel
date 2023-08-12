import React from "react";
import "./slider.style.scss";
import { objectFit } from "../../type";
interface ISliderProps {
    images: Array<string>;
    leftArrow?: React.ComponentType<any> | string;
    rightArrow?: React.ComponentType<any> | string;
    height?: string;
    weight?: string;
    objectFit?: objectFit;
}
declare const Slider: ({ images, leftArrow, rightArrow, height, weight, objectFit, }: ISliderProps) => JSX.Element;
export default Slider;
