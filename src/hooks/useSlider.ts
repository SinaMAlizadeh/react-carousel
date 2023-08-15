import { TouchEvent, useEffect, useState } from "react";

const UseSlider = (slideCount: number, intervalDuration: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>();
  const [touchEnd, setTouchEnd] = useState<number>();

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const minSwipeDistance = 50;

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  useEffect(() => {
    const interval = setInterval(() => {
      onGoLeft();
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [intervalDuration]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe
        ? setCurrentIndex((prev) => (prev === slideCount ? 0 : prev + 1))
        : setCurrentIndex((prev) => (prev === 0 ? slideCount : prev - 1));

    console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

  const onGoRight = () => {
    setCurrentIndex((prev) => (prev === slideCount ? 0 : prev + 1));
  };

  const onGoLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideCount : prev - 1));
  };

  const selectIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return {
    currentIndex,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    selectIndex,
    onGoRight,
    onGoLeft,
  };
};

export default UseSlider;
