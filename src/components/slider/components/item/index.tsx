import "./item.style.scss";
interface ISliderItemProps {
  image: string;
  currentIndex: number;
}
const SliderItem = ({ image, currentIndex }: ISliderItemProps) => {
  return (
    <>
      <div
        className={"slide-item"}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        <img src={`${image}`} />
      </div>
    </>
  );
};

export default SliderItem;
