import { TouchEvent } from "react";
declare const UseSlider: (slideCount: number, intervalDuration: number, infiniteLoop: boolean) => {
    currentIndex: number;
    onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
    onTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
    onTouchEnd: () => void;
    selectIndex: (index: number) => void;
    onGoRight: () => void;
    onGoLeft: () => void;
};
export default UseSlider;
