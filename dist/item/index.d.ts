/// <reference types="react" />
import { objectFit } from "../type";
interface ISliderItemProps {
    image: string;
    currentIndex: number;
    objectFit: objectFit;
}
declare const SliderItem: ({ image, currentIndex, objectFit }: ISliderItemProps) => JSX.Element;
export default SliderItem;
