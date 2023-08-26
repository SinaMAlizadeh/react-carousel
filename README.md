# React Simple Image Slider

A simple and reusable image slider for React ([Demo](https://codesandbox.io/s/react-js-images-simple-slider-qlyfsy "Demo"))

## Installation

The package can be installed via NPM:

```
npm i reactjs-simple-slider
```

## Usage

Import Slider for usage :

```js
import { Slider } from "reactjs-simple-slider";
```

Define your slider and config :

```js
<Slider
  objectFit="contain"
  images={[
    "https://fakeimg.pl/200x50/",
    "https://fakeimg.pl/200x50/ff0000/",
    "https://fakeimg.pl/200x50/0000ff/",
  ]}
/>
```

## User guide

| Prop name    | Description                                                                                    | Default value | Example values                                         |
| ------------ | ---------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------ |
| width        | Width of slider                                                                                |               | 200px                                                  |
| height       | Height of slider                                                                               |               | 500px                                                  |
| objectFit    | The objectFit property is used to specify how an images should be resized to fit its container | undefined     | fill , contain , cover , none , scale-down , undefined |
| images       | List of images to show                                                                         | string[]      | {["image1", "image2", "image3"]}                       |
| leftArrow    | You can customize arrow left by pass string or a react component or function                   |               | React Component or string                              |
| rightArrow   | You can customize arrow right by pass string or a react component or function                  |               | React Component or string                              |
| infiniteLoop | Set auto change slide                                                                          | false         | true , false                                           |
| interval     | Duration of change images slider time                                                          | 5000          | Millisecond                                            |
