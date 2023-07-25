import "./slider.style.scss";
import SliderItem from "./components/item";
import SliderDots from "./components/dots";
import UseSlider from "./components/hooks/useSlider";
import React from "react";
import Controls from "./components/controls";

interface TSliderProps {
  images: Array<string>;
  leftArrow: string;
  rightArrow: string;
}

const Slider = ({
  images,
  leftArrow = "‹",
  rightArrow = "›",
}: TSliderProps) => {
  const {
    currentIndex,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    setCurrentIndex,
    onGoRight,
    onGoLetf,
  } = UseSlider(images?.length - 1);
  return (
    <div
      className={"slider"}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Controls leftArrow={leftArrow} rightArrow={rightArrow} onGoRight={onGoRight} onGoLetf={onGoLetf} />
      {images?.map((image, index) => {
        return (
          <React.Fragment key={index}>
            <SliderItem currentIndex={currentIndex} image={image} />
          </React.Fragment>
        );
      })}
      <SliderDots
        currentIndex={currentIndex}
        images={images}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Slider;
