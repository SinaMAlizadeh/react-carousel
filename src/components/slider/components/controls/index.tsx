import "./controls.style.scss";

interface ControlsProps {
  onGoRight: () => void;
  onGoLetf: () => void;
}
const Controls = ({ onGoRight, onGoLetf }: ControlsProps) => {
  return (
    <>
      <div className="slider-control">
        <span onClick={onGoLetf}>left</span>
        <span onClick={onGoRight}>right</span>
      </div>
    </>
  );
};

export default Controls;
