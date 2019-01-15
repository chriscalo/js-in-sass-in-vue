// Details on how to pass JS functions to sass-loader:
// https://stackoverflow.com/questions/54155294/use-chromatic-sass-in-a-vue-project

const chromatic = require("chromatic-sass");
const sassFunctions = require("./src/sass-functions.js");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        functions: {
          // use a third-party lib
          ...chromatic,
          // or write your own functions
          ...sassFunctions,
        },
      },
    },
  },
};
