import React from "react";
import "./assets/slider.style.scss";
import SliderItem from "./item/index";
import SliderDots from "./dots/index";
import UseSlider from "./hooks/useSlider";
import Controls from "./controls/index";
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

const Slider = ({
  images,
  leftArrow,
  rightArrow,
  height,
  width,
  infiniteLoop,
  objectFit,
  interval,
}: ISliderProps) => {
  const {
    currentIndex,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    selectIndex,
    onGoRight,
    onGoLeft,
  } = UseSlider(images?.length - 1, interval, infiniteLoop);
  return (
    <div>
      <div
        className={"slider"}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: height, width: width }}
      >
        <Controls
          leftArrow={leftArrow}
          rightArrow={rightArrow}
          onGoRight={onGoRight}
          onGoLeft={onGoLeft}
        />
        {images?.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <SliderItem
                currentIndex={currentIndex}
                image={image}
                objectFit={objectFit}
              />
            </React.Fragment>
          );
        })}
        <SliderDots
          currentIndex={currentIndex}
          images={images}
          selectIndex={selectIndex}
        />
      </div>
    </div>
  );
};

export default Slider;
