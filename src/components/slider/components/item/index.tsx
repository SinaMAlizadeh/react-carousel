import React from "react";
import { objectFit } from "../../../../type";
import "./item.style.scss";
interface ISliderItemProps {
  image: string;
  currentIndex: number;
  objectFit: objectFit;
}
const SliderItem = ({ image, currentIndex, objectFit }: ISliderItemProps) => {
  return (
    <div
      className={"slide-item"}
      style={{ transform: `translate(-${currentIndex * 100}%)` }}
    >
      <img src={`${image}`} style={{ objectFit: objectFit }} />
    </div>
  );
};

export default SliderItem;
