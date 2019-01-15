const chroma = require("chroma-js");
const Bezier = require("bezier-js");

// used to retain saturation as colors get closer to white or black
const createChromaScale = maxChroma => {
  const minChroma = 0.25 * maxChroma;
  // Creates a function kinda like this:
  //     |
  // max |           o
  //     |     x           x
  //     |  x                 x
  // min | o                   o
  //     |_______________________
  //       0        50        100
  const curve = Bezier.cubicFromPoints(
    { x: 0, y: minChroma },
    { x: 50, y: maxChroma },
    { x: 100, y: minChroma }
  );
  // convert from [0, 100] domain to Bezier domain of [0, 1]
  return value => curve.get(value / 100).y;
};

const coolGreyHue = chroma.temperature(10000).get("hcl.h");
const warmGreyHue = chroma.temperature(5000).get("hcl.h");

const createColorScale = (hue, chr, name) => {
  const baseColor = chroma.hcl(hue, chr, 50);
  const h = baseColor.get("hcl.h");
  const c = baseColor.get("hcl.c");
  const chromaScale = createChromaScale(c);
  
  const scale = chroma
    .scale([
      chroma.hcl(h, chromaScale(0), 100),
      chroma.hcl(h, chromaScale(10), 90),
      chroma.hcl(h, chromaScale(20), 80),
      chroma.hcl(h, chromaScale(30), 70),
      chroma.hcl(h, chromaScale(40), 60),
      chroma.hcl(h, chromaScale(50), 50),
      chroma.hcl(h, chromaScale(60), 40),
      chroma.hcl(h, chromaScale(70), 30),
      chroma.hcl(h, chromaScale(80), 20),
      chroma.hcl(h, chromaScale(90), 10),
      chroma.hcl(h, chromaScale(100), 0)
    ])
    .mode("hcl")
    .correctLightness()
    .domain([0, 100]);
  
  const fn = (value = 50) => {
    return scale(value).css();
  };
  
  fn.colorName = name;
  
  return fn;
};

// greys
const neutralGrey = createColorScale(0, 0, "Neutral Grey");
const coolGrey = createColorScale(coolGreyHue, 3, "Cool Grey");
const warmGrey = createColorScale(warmGreyHue, 6, "Warm Grey");

// colors
const hue15 = createColorScale(15, 80, "Hue 15");
const red = createColorScale(30, 80, "Red");
const burntOrange = createColorScale(45, 80, "Burnt Orange");
const orange = createColorScale(60, 80, "Orange");
const brown = createColorScale(75, 80, "Brown");
const tan = createColorScale(90, 80, "Tan");
const olive = createColorScale(105, 80, "Olive");
const hue120 = createColorScale(120, 80, "Hue 120");
const hue135 = createColorScale(135, 80, "Hue 135");
const green = createColorScale(150, 80, "Green");
const hue165 = createColorScale(165, 80, "Hue 165");
const seaGreen = createColorScale(180, 80, "Sea Green");
const teal = createColorScale(195, 80, "Teal");
const aqua = createColorScale(210, 80, "Aqua");
// const hue225 = createColorScale(225, 80, "Hue 225");
// const skyBlue = createColorScale(240, 80, "Sky Blue"); // cerulean? azure?
// const hue255 = createColorScale(255, 80, "Hue 255");
// const hue270 = createColorScale(270, 80, "Hue 270");
const navy = createColorScale(260, 50, "Navy"); // muted blue?
const blue = createColorScale(285, 80, "Blue");
const indigo = createColorScale(300, 80, "Indigo");
const purple = createColorScale(315, 80, "Purple");
const magenta = createColorScale(330, 80, "Magenta");
const pink = createColorScale(345, 80, "Pink");
const rose = createColorScale(360, 80, "Rose"); // fuscia?

const none = "transparent";
const transparent = "transparent";
const black = "black";
const white = "white";

// given a background color, returns a text color, either white or black
const textForBg = bgColor => {
  const LUMINANCE_THRESHOLD = 0.35;
  return chroma(bgColor).luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
};

module.exports = {
  createChromaScale,
  textForBg,
};
