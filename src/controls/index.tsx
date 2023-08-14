import React from "react";
import ResolveComponent from "../utility/componentResolver";

interface ControlsProps {
  onGoRight: () => void;
  onGoLeft: () => void;
  leftArrow: React.ComponentType<any> | string | undefined;
  rightArrow: React.ComponentType<any> | string | undefined;
}
const Controls = ({
  onGoRight,
  onGoLeft,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
}: ControlsProps) => {
  let leftComponent: JSX.Element | null = null;
  let rightComponent: JSX.Element | null = null;

  if (typeof LeftArrow === "string") {
    leftComponent = ResolveComponent(LeftArrow);
  } else if (typeof LeftArrow === "function") {
    leftComponent = <LeftArrow />;
  }

  if (typeof RightArrow === "string") {
    rightComponent = ResolveComponent(RightArrow);
  } else if (typeof RightArrow === "function") {
    rightComponent = <RightArrow />;
  }
  return (
    <>
      {leftComponent ? (
        <div className="slider-control__left" onClick={onGoLeft}>
          {leftComponent}
        </div>
      ) : (
        <div className="slider-control-left__default" onClick={onGoLeft}></div>
      )}

      {rightComponent ? (
        <div className="slider-control__right" onClick={onGoRight}>
          {rightComponent}
        </div>
      ) : (
        <div
          className="slider-control-right__default"
          onClick={onGoRight}
        ></div>
      )}
    </>
  );
};

export default Controls;
