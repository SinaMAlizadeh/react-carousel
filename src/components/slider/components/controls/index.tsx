import "./controls.style.scss";

interface ControlsProps {
  onGoRight: () => void;
  onGoLetf: () => void;
  leftArrow: string;
  rightArrow: string;
}
const Controls = ({
  onGoRight,
  onGoLetf,
  leftArrow,
  rightArrow,
}: ControlsProps) => {
  return (
    <>
      <div className="slider-control">
        <span onClick={onGoLetf}>{leftArrow}</span>
        <span onClick={onGoRight}>{rightArrow}</span>
      </div>
    </>
  );
};

export default Controls;
