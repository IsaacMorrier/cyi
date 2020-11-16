"use strict";

var _svelteSequentialPreprocessor = _interopRequireDefault(
  require("svelte-sequential-preprocessor")
);

var _sveltePreprocess = _interopRequireDefault(require("svelte-preprocess"));

var _mdsvex = require("mdsvex");

var _svelteImage = _interopRequireDefault(require("svelte-image"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const preprocess = (0, _svelteSequentialPreprocessor.default)([
  (0, _sveltePreprocess.default)({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: {
      plugins: [require("autoprefixer")()]
    }
  }),
  (0, _mdsvex.mdsvex)(),
  (0, _svelteImage.default)({
    sizes: [400, 800, 1200],
    breakpoints: [375, 768, 1024],
    trace: {
      background: "#f3ecdb",
      color: "#414535",
      threshold: 120
    }
  })
]);
module.exports = {
  preprocess
};