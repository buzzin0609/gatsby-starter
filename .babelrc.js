module.exports = {
  "presets": ["babel-preset-gatsby"],
  "plugins": ["babel-plugin-styled-components", ["babel-plugin-replace-imports", {
    "test": /rebass/,
    "replacer": "rebass/styled-components"
  }]]
};
