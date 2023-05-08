interface ISliderDotsProps {
  images: Array<string>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}

const SliderDots = ({
  images,
  setCurrentIndex,
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
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </>
  );
};
export default SliderDots;
