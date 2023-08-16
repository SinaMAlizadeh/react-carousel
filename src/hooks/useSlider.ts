import { TouchEvent, useEffect, useState } from "react";

const UseSlider = (
  slideCount: number,
  intervalDuration: number = 5000,
  infiniteLoop: boolean
) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>();
  const [touchEnd, setTouchEnd] = useState<number>();
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const minSwipeDistance = 50;

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  useEffect(() => {
    if (timer === null && infiniteLoop) {
      const timerId = setInterval(changeIndex, intervalDuration);
      setTimer(timerId);
    }

    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
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

  const changeIndex = () => {
    debugger;
    setCurrentIndex((prev) => (prev === 0 ? slideCount : prev - 1));
  };

  const onGoRight = () => {
    if (infiniteLoop) {
      clearInterval(timer);
      const timerId = setInterval(changeIndex, intervalDuration);
      setTimer(timerId);
    }
    setCurrentIndex((prev) => (prev === slideCount ? 0 : prev + 1));
  };

  const onGoLeft = () => {
    if (infiniteLoop) {
      clearInterval(timer);
      const timerId = setInterval(changeIndex, intervalDuration);
      setTimer(timerId);
    }
    setCurrentIndex((prev) => (prev === 0 ? slideCount : prev - 1));
  };

  const selectIndex = (index: number) => {
    if (infiniteLoop) {
      clearInterval(timer);
      const timerId = setInterval(changeIndex, intervalDuration);
      setTimer(timerId);
    }
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
