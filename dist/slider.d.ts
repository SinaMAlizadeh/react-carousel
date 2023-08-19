import React from "react";
import "./assets/slider.style.scss";
import { objectFit } from "./type";
import "reactjs-simple-slider/dist/assets/slider.style.css";
interface ISliderProps {
    images: Array<string>;
    leftArrow?: React.ComponentType<any> | string;
    rightArrow?: React.ComponentType<any> | string;
    height?: string;
    width?: string;
    objectFit?: objectFit;
    interval?: number;
    infiniteLoop?: boolean;
}
declare const Slider: ({ images, leftArrow, rightArrow, height, width, infiniteLoop, objectFit, interval, }: ISliderProps) => JSX.Element;
export default Slider;
