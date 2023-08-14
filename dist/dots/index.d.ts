/// <reference types="react" />
interface ISliderDotsProps {
    images: Array<string>;
    selectIndex: (e: number) => void;
    currentIndex: number;
}
declare const SliderDots: ({ images, selectIndex, currentIndex, }: ISliderDotsProps) => JSX.Element;
export default SliderDots;
