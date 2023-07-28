import "./slider.style.scss";
import SliderItem from "./components/item";
import SliderDots from "./components/dots";
import UseSlider from "./components/hooks/useSlider";
import React from "react";
import Controls from "./components/controls";
import { objectFit } from "../../type";

interface ISliderProps {
  images: Array<string>;
  leftArrow?: React.ComponentType<any> | string;
  rightArrow?: React.ComponentType<any> | string;
  height?: string;
  weight?: string;
  objectFit?: objectFit;
}

export const TestLeft = () => {
  return <div>left</div>;
};

const Slider = ({
  images,
  leftArrow,
  rightArrow,
  height,
  weight,
  objectFit,
}: ISliderProps) => {
  const {
    currentIndex,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    selectIndex,
    onGoRight,
    onGoLeft,
  } = UseSlider(images?.length - 1);

  return (
    <div dir="rtl">
      <div
        className={"slider"}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: height, width: weight }}
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
