# pd-Animate.js

A JavaScript library for web effects , components and 3D features.

## Introduction

pd-aniamte.js is designed to make it easy for developers to incorporate cool visual effects into their web applications without the need for complex and time-consuming coding. The library leverages the power of Three.js to create stunning 3D effects and animations, and also provides simpler 2D effects for added versatility.

## Examples

Check out the examples in the `examples/` directory.


## Table of Contents

- [pd-Animate.js](#pd-animatejs)
  - [Introduction](#introduction)
  - [Examples](#examples)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
    - [Required Libraries](#required-libraries)
  - [Cool Effects](#cool-effects)
    - [Mouse Follower](#mouse-follower)
    - [Mask Zoomer](#mask-zoomer)
    - [Make Magnet](#make-magnet)
    - [Text Animate](#text-animate)
    - [Hover With Media Circle](#hover-with-media-circle)
  - [3D Image Effects](#3d-image-effects)
    - [Simple Liquid Distortion Effect](#simple-liquid-distortion-effect)
    - [Dynamic Distortion Effect](#dynamic-distortion-effect)
    - [Dynamic 3D Wave/Wobble Effect](#dynamic-3d-wavewobble-effect)
    - [Dynamic 3D Wind Effect](#dynamic-3d-wind-effect)
    - [Dynamic Perlin Noise Effect](#dynamic-perlin-noise-effect)
    - [Dynamic Cyber Squares Effect](#dynamic-cyber-squares-effect)
  - [Multiple Image Scroll Effect](#multiple-image-scroll-effect)
    - [Custom Scroll Trigger Callback](#custom-scroll-trigger-callback)
  - [Dynamic Gooey Effect](#dynamic-gooey-effect)
  - [Dynamic Zoom Effect](#dynamic-zoom-effect)
  - [Shape Controls](#shape-controls)
  - [Debug Usage](#debug-usage)
    - [Preset Usage](#preset-usage)
    - [Callback Usage](#callback-usage)
  - [Examples](#examples-1)
  - [License](#license)



## Installation

To use pd-aniamte.js in your project, you can include it in your HTML file via a CDN or import it in js by using node.

`Currently facing issue in import Module and node, use CDN for batter results`

` working on resolving npm version module import bug `

When using node or browserify install

```bash
npm install pd-animate
```

and require

```javascript
import Pd from "pd-animate";
```

To understand clearly see this [Example](/examples/nodeExample/).

Alternatively use the standalone version found in ./dist locally

```html
<link rel="stylesheet" href="pd-animate.min.css" />
```

```html
<script type="text/javascript" src="pd-animate.min.css"></script>
```

`just add two script and enjoy.`

 or use CDN version  `CSS`.

```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pd-animate/dist/pd-animate.min.css" /><!-- Recommended -->
```

and

---

Use **only** one `JAVASCRIP CDN`

```html
<script src="https://cdn.jsdelivr.net/npm/pd-animate/dist/pd-animate.min.js"></script><!-- Recommended -->
```

OR

```html
<script  type="text/javascript" src="https://cdn.jsdelivr.net/npm/pd-animate/dist/pd-animate.min.js"></script>
```

## Getting Started

Once you have included pd-aniamte.js in your project, you can start using its effects and Three.js functionalities. The library provides a straightforward API to make implementation easier.

```javascript
// Example code to initialize  and use a cool effect.

import PD from "pd-animate"; /*Don't use if using CDN*/

Pd.mouseFollower();
```

### Required Libraries 

`If CDN not work properly then`
To successfully run with CDN, you'll need some libraries. 
```html
<!--  Gsap is needed for Basic Effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<!-- Scroll Trigger is needed for Scroll Effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Three.js is needed for 3d Effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></script>

<!-- ControlKit is needed for Debug Panel -->
<script src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></script>
```

## Cool Effects

These are effects are implemented with the help of Gsap and Css to offer a unique experience with single function.

### Mouse Follower

The feature creates smooth mouse follower, creating an engaging user experience.

```javascript
Pd.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
```

### Mask Zoomer

The mask zoomer effect enables zooming into an image on mouse hover with a smooth mask transition, directing the user's focus to the targeted content.

```javascript
Pd.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Pd",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
```

### Make Magnet

The magnet mouse attractor effect draws elements towards the cursor, as if they are magnetically attracted, offering a unique and interactive experience.

```javascript
Pd.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
```

### Text Animate

The text animate effect animates text with cool animation , with many preset animation, offering a unique experience.

```javascript
Pd.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
```

### Hover With Media Circle

The hover with media circle effect creates a circular media element (image or video) which follows the cursor's movement when hovering over specified elements with blending effect. This effect provides an engaging way to showcase media content associated with the hovered elements.

```javascript
Pd.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
  images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
```

## 3D Image Effects

These are effects are implemented with the help of Three.js to offer a unique experience with single function.

```html
<img class="img" src="example.img" />//Must provide a class to image.
```

```javascript
Pd.imageEffect(".img", {
  style: 2, //Select Style
  debug: true, // Debug Panel
  config: {
    /* Config made from debug panel */
  },
  preset: "./presets/wigglewobble.json",
});
```

### Simple Liquid Distortion Effect

<!-- ![Simple Liquid Distortion Effect]() -->

The simple liquid distortion effect applies a mesmerizing distortion effect to image, giving the illusion of a liquid-like behavior.

```javascript
Pd.imageEffect(".img", {
  style: 1 /*OR 5 for different variant */,
  debug: true,
});
```

### Dynamic Distortion Effect

<!-- ![Dynamic Distortion Effect]() -->

The dynamic distortion effect creates a more advanced and reactive distortion animation, providing an engaging visual experience with a debug panel.

```javascript
Pd.imageEffect(".img", {
  style: 2,
  debug: true,
});
```

### Dynamic 3D Wave/Wobble Effect

<!-- ![Dynamic 3D Wave/Wobble Effect]() -->

Bring your web application to life with the dynamic 3D wave/wobble effect, making elements appear to ripple like waves or wobble like gelatin.

```javascript
Pd.imageEffect(".img", {
  style: 3,
  debug: true,
});
```

### Dynamic 3D Wind Effect

<!-- ![Dynamic 3D Wind Effect]() -->

The dynamic 3D wind effect adds a subtle and natural swaying motion to elements, simulating the movement caused by wind.

```javascript
Pd.imageEffect(".img", {
  style: 4,
  debug: true,
});
```

### Dynamic Perlin Noise Effect

<!-- ![Dynamic Perlin Noise Effect]() -->

The dynamic perlin noise effect adds a perlin noise to your image, can be used to create many type of noise related effects.

```javascript
Pd.imageEffect(".img", {
  style: 6,
  debug: true,
});
```

### Dynamic Cyber Squares Effect

<!-- ![Dynamic Cyber Squares Effect]() -->

The dynamic cyber square effect adds a Cyber retro square patterns to your image, can be used to create many type of different square partern effects.

```javascript
Pd.imageEffect(".img", {
  style: 6,
  debug: true,
});
```

## Multiple Image Scroll Effect

All 3D effects in this library supports multi image with wave scroll effect which increases the productivity and usability of effect, offering a unique and interactive experience.

To use this you just need to give a div with images you want.

```html
<div class="images">
  <img src="image1" />
  <img src="image2" />
  <img src="image3" />
</div>
```

```javascript
Pd.imageEffect(".images", {
  style: 3,
  /*optional parameters
  these parameter dose not applies to custom scroll trigger callback */
  scrollSnapping: true,
  scrollSpeed: 6,
  touchSpeed: 6,
  damping: 7,
});
```

### Custom Scroll Trigger Callback

To implement the GSAP ScrollTrigger or any other scroll library, as well as vanilla JavaScript and to achieve them full potential of Multiple Image Scroll Effect, you can define your custom scroll behavior using the callback parameter `slideStyle` within the **Multiple Image Scroll Effect**.

To define your specific scroll behavior, utilize the `slideStyle` callback in the following manner: `slideStyle: (setScroll) => {}`. This empowers you to establish your own scrolling conditions using the `setScroll()` function within the callback. To successfully implement this approach, adhere to the following steps:

1. Enable the `slideStyle` option for your chosen visual style effect.
2. Invoke the callback, passing in the `setScroll` parameter.
3. Within the callback function, you can dynamically update the scroll position, ranging from 0 to the position of the last image.
4. Employ a scroll event listener within this context to keep track of changes in the scrolling behavior. You can select any suitable method, such as GSAP or other libraries.
5. Inside the event listener, utilize the `setScroll` function and provide the parameter `window.scrollY / innerHeight` to obtain the current scroll position relative to the window height. You can customize this calculation as needed, possibly integrating the progress from GSAP or similar methods.
6. By following these steps, you will successfully implement your own personalized scroll-triggering mechanism.

```html
<!-- Here is the code snippet demonstrating this process: -->

<div class="images">
  <img src="image1" />
  <img src="image2" />
  <img src="image3" />
</div>
```

```javascript
Pd.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY / innerHeight); //Updating the scroll
    });
  },
});
```

By adhering to these instructions, you can create and control your unique scroll-triggered effects in the **Multiple Image Scroll Effect** using the specified callback mechanism.

## Dynamic Gooey Effect


This is very dynamic gooey effect can be applied to any of the above effect with a single param `gooey:true` and can be tweaked in debug mode.

```html
<div class="images">
  <img src="front_image" />
  <img src="gooey_image" />
</div>
```

```javascript
Pd.imageEffect(".images", {
  style: 6,
  debug: true,
  gooey: true,
});
```

## Dynamic Zoom Effect

This is very dynamic zoom effect can be applied to any of the above effect with a single tick in debug panel `image zoomer` and can be tweaked in debug mode.

```javascript
Pd.imageEffect(".image", {
  style: 6,
  debug: true,
});
```

## Shape Controls

This feature empowers users with precise control over the shape of the desired effect, allowing for the seamless customization of elements such as round corners and smooth corners. Additionally, users can employ basic clipping functionalities to finely define the shape, ensuring a tailored and polished appearance. These versatile controls provide a nuanced and intuitive means of shaping the visual impact, offering a range of options for users to craft designs with precision and finesse.

To use this feature just enable debug panel and you can find `Shape Control`.

```javascript
Pd.imageEffect(".image", {
  style: 6,
  debug: true,
});
```

## Debug Usage

To customize any of the 3d effects provided by pd-aniamte.js, simply enable debug mode with parameter `{debug:true}` for effects which supports it.

To save/use the tweak from your debug you need to click on `SAVE TO CLIPBOARD` and the paste that config in config parameter.

```html
<img class="img" src="example.img" />
```

```javascript
Pd.imageEffect(".img", {
  style: 3,
  debug: true,
  config: {
    uFrequencyX: { value: 100, range: [0, 100] },
    uFrequencyY: { value: 44.86, range: [0, 100] },
    uFrequencyZ: { value: 100, range: [0, 100] },
    uTime: { value: 37.14299999999965 },
  },
});
```

### Preset Usage

Create your own preset or use someone elses with the help of preset option `{preset:'./presets/wigglewobble.json'}` you can create your own preset with the help of debug panel like :-

1. Enable [debug panel](#debug-usage) for your chosen style effect.
2. Do your customization's in debug panel.
3. Now click on **SAVE TO CLIPBOARD** button in debug panel.
4. Now create an new **_.json_** file.
5. Paste the copied config there.
6. And you created a new preset you can use it later or share it and help community.

```javascript
Pd.imageEffect("img", {
  style: 2,
  preset: "./presets/wigglewobble.json",
});
```

### Callback Usage

Create your own animation or condition for change values of `uniforms`, `meshes`, `camera`, `etc` where uniform are variable which you change from debug panel you can use this by option `setUniforms: (uniforms) => {}` you can console log the uniforms to get list of uniforms and for other attributes you can use option `setAttribute: (attributes) => {}` the variable attributes is an object which  contains :-

```json
 {
   // Geometry of effect
    geometry,

    // 3js Scene
    scene, 

    // 3js Camera
    camera, 

    // WebGL Renderer
    renderer, 

    // Array of uniforms of all elements of given class
    uniforms: [],
     
    // Array of meshes of all elements of given class
    meshes: []  
  }
```

```javascript
Pd.imageEffect('img', {
    style: 2,
    setUniforms: (uniforms) => {
       uniforms.maskVal.value = 3 // Syntax -> uniforms.uniform_name.value = your
    }
})
```

```javascript
Pd.imageEffect('img', {
    style: 2,
    setAttribute: (attributes) => {
       uniforms[0].maskVal.value = 3 
    }
})
```

## Examples

For detailed usage examples and demos of each effect, check out the [examples](/examples/) directory in the pd-aniamte.js repository.


## License
[MIT License](license.md), free to use it in both personal and commercial projects.
MIT