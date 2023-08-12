import React from "react";
interface ISliderDotsProps {
  images: Array<string>;
  selectIndex: (e: number) => void;
  currentIndex: number;
}

const SliderDots = ({
  images,
  selectIndex,
  currentIndex,
}: ISliderDotsProps) => {
  return (
    <>
      <div className={"slider__dots"}>
        {images.map((_, index) => (
          <div
            key={index}
            className={
              "slider__dots__item " +
              (index === currentIndex && "slider__dots__item--active")
            }
            onClick={() => selectIndex(index)}
          ></div>
        ))}
      </div>
    </>
  );
};
export default SliderDots;
