const chroma = require("chroma-js");
const sass = require("node-sass");

const { createChromaScale } = require("./colors");


const toSassColor = (color) => {
  const [r, g, b, a] = chroma(color).rgba();
  return new sass.types.Color(r, g, b, a);
}

module.exports = {
  "chroma-scale($max-chroma, $value)": (maxChroma, value) => {
    const scale = createChromaScale(maxChroma.getValue());
    const chromaValue = scale(value.getValue());
    return new sass.types.Number(chromaValue);
  },
};
