import "./slider.style.scss";
import SliderItem from "./components/item";
import SliderDots from "./components/dots";
import UseSlider from "./components/hooks/useSlider";
import React from "react";

interface TSliderProps {
  images: Array<string>;
}

const Slider = ({ images }: TSliderProps) => {
  const {
    currentIndex,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    setCurrentIndex,
  } = UseSlider(images?.length - 1);
  return (
    <div
      className={"slider"}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
