import React, { useState } from 'react';
import 'reactjs-simple-slider/dist/assets/slider.style.css';

var SliderItem = function (_a) {
    var image = _a.image, currentIndex = _a.currentIndex, objectFit = _a.objectFit;
    return (React.createElement("div", { className: "slide-item", style: { transform: "translate(-".concat(currentIndex * 100, "%)") } },
        React.createElement("img", { src: "".concat(image), style: { objectFit: objectFit } })));
};

var SliderDots = function (_a) {
    var images = _a.images, selectIndex = _a.selectIndex, currentIndex = _a.currentIndex;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "slider__dots" }, images.map(function (_, index) { return (React.createElement("div", { key: index, className: "slider__dots__item " +
                (index === currentIndex && "slider__dots__item--active"), onClick: function () { return selectIndex(index); } })); }))));
};

var UseSlider = function (slideCount) {
    var _a = useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = useState(), touchStart = _b[0], setTouchStart = _b[1];
    var _c = useState(), touchEnd = _c[0], setTouchEnd = _c[1];
    var onTouchStart = function (e) {
        setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };
    var minSwipeDistance = 50;
    var onTouchMove = function (e) {
        return setTouchEnd(e.targetTouches[0].clientX);
    };
    var onTouchEnd = function () {
        if (!touchStart || !touchEnd)
            return;
        var distance = touchStart - touchEnd;
        var isLeftSwipe = distance > minSwipeDistance;
        var isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe)
            isLeftSwipe
                ? setCurrentIndex(function (prev) { return (prev === slideCount ? 0 : prev + 1); })
                : setCurrentIndex(function (prev) { return (prev === 0 ? slideCount : prev - 1); });
        console.log("swipe", isLeftSwipe ? "left" : "right");
        // add your conditional logic here
    };
    var onGoRight = function () {
        setCurrentIndex(function (prev) { return (prev === slideCount ? 0 : prev + 1); });
    };
    var onGoLeft = function () {
        setCurrentIndex(function (prev) { return (prev === 0 ? slideCount : prev - 1); });
    };
    var selectIndex = function (index) {
        setCurrentIndex(index);
    };
    return {
        currentIndex: currentIndex,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        selectIndex: selectIndex,
        onGoRight: onGoRight,
        onGoLeft: onGoLeft,
    };
};

var ResolveComponent = function (title) {
    return React.createElement("span", null, title);
};

var Controls = function (_a) {
    var onGoRight = _a.onGoRight, onGoLeft = _a.onGoLeft, LeftArrow = _a.leftArrow, RightArrow = _a.rightArrow;
    var leftComponent = null;
    var rightComponent = null;
    if (typeof LeftArrow === "string") {
        leftComponent = ResolveComponent(LeftArrow);
    }
    else if (typeof LeftArrow === "function") {
        leftComponent = React.createElement(LeftArrow, null);
    }
    if (typeof RightArrow === "string") {
        rightComponent = ResolveComponent(RightArrow);
    }
    else if (typeof RightArrow === "function") {
        rightComponent = React.createElement(RightArrow, null);
    }
    return (React.createElement(React.Fragment, null,
        leftComponent ? (React.createElement("div", { className: "slider-control__left", onClick: onGoLeft }, leftComponent)) : (React.createElement("div", { className: "slider-control-left__default", onClick: onGoLeft })),
        rightComponent ? (React.createElement("div", { className: "slider-control__right", onClick: onGoRight }, rightComponent)) : (React.createElement("div", { className: "slider-control-right__default", onClick: onGoRight }))));
};

var Slider = function (_a) {
    var images = _a.images, leftArrow = _a.leftArrow, rightArrow = _a.rightArrow, height = _a.height, width = _a.width, objectFit = _a.objectFit;
    var _b = UseSlider((images === null || images === void 0 ? void 0 : images.length) - 1), currentIndex = _b.currentIndex, onTouchEnd = _b.onTouchEnd, onTouchMove = _b.onTouchMove, onTouchStart = _b.onTouchStart, selectIndex = _b.selectIndex, onGoRight = _b.onGoRight, onGoLeft = _b.onGoLeft;
    return (React.createElement("div", null,
        React.createElement("div", { className: "slider", onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, style: { height: height, width: width } },
            React.createElement(Controls, { leftArrow: leftArrow, rightArrow: rightArrow, onGoRight: onGoRight, onGoLeft: onGoLeft }), images === null || images === void 0 ? void 0 :
            images.map(function (image, index) {
                return (React.createElement(React.Fragment, { key: index },
                    React.createElement(SliderItem, { currentIndex: currentIndex, image: image, objectFit: objectFit })));
            }),
            React.createElement(SliderDots, { currentIndex: currentIndex, images: images, selectIndex: selectIndex }))));
};

export { Slider };
